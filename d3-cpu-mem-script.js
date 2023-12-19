// 全局变量定义
var cpuSvg, memorySvg, networkSvg, tcpSvg, x, y, tooltip, height, margin;
// 颜色映射
var siteColorMap = {
    "101": "red",
    "102": "blue"
    // 可以根据需要添加更多站点和颜色
};
document.addEventListener('DOMContentLoaded', function () {
    // 初始化 SVG 尺寸和边距
    margin = { top: 20, right: 30, bottom: 30, left: 50 };
    var width = 960 - margin.left - margin.right;
    height = 300 - margin.top - margin.bottom;

    // 创建 SVG 容器
    cpuSvg = createSvg("#cpu-chart", width, height);
    memorySvg = createSvg("#memory-chart", width, height);
    networkSvg = createSvg("#network-chart", width, height);
    tcpSvg = createSvg("#tcp-chart", width, height);

    // 创建 X 和 Y 比例尺
    x = d3.scaleTime().range([0, width]);
    y = d3.scaleLinear().range([height, 0]);

    // 创建提示框
    tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // 初始加载图表
    updateCharts();

    // 每3秒自动更新图表
    setInterval(updateCharts, 3000);
});

function createSvg(selector, width, height) {
    return d3.select(selector).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
}

function updateCharts() {
    var selectedSite = document.getElementById("site-select").value;
    var startTime = document.getElementById("start-time").value;
    var endTime = document.getElementById("end-time").value;
    var metrics = 'cpu_usage,memory_usage,network_stats,tcp_stats'; // 请求所有监控数据

    // 处理时间输入为空的情况
    if (!startTime || !endTime) {
        startTime = new Date(new Date().getTime() - 15 * 60000); // 15分钟前
        endTime = new Date(); // 当前时间
    } else {
        startTime = new Date(startTime);
        endTime = new Date(endTime);
    }

    var apiUrl = `http://localhost:5001/api/usage?start_timestamp=${formatTimestamp(startTime)}&end_timestamp=${formatTimestamp(endTime)}&metrics=${metrics}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // 使用 selectedSite 过滤数据
            var cpuData = filterDataBySite(data.cpu_usage, selectedSite);
            var memoryData = filterDataBySite(data.memory_usage, selectedSite);
            var networkData = filterDataBySite(data.network_stats, selectedSite);
            var tcpData = filterDataBySite(data.tcp_stats, selectedSite);
            processData(cpuSvg, cpuData, "CPU Usage (%)", d => d.cpu_usage);
            processData(memorySvg, memoryData, "Memory Usage (%)", d => d.memory_usage);
            processData(networkSvg, networkData, "Network Stats", d => d.bytes_sent); // 示例
            processData(tcpSvg, tcpData, "Total TCP Connections", null, true); // 示例
            updateTCPDataNames(tcpData); // 新增函数调用
            // 更新站点信息
            updateSiteInfo(selectedSite);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    // 新增函数，更新 TCP 数据名称列表
    function updateTCPDataNames(tcpData) {
        var tcpDataNamesDiv = document.getElementById("tcp-data-names");
        tcpDataNamesDiv.innerHTML = ""; // 清空现有内容

        // 假设 tcpData 是一个对象数组，每个对象表示一条 TCP 数据
        if (tcpData && tcpData.length > 0) {
            var dataKeys = Object.keys(tcpData[0]); // 获取键名
            dataKeys.forEach(key => {
                var p = document.createElement("p");
                p.textContent = key;
                tcpDataNamesDiv.appendChild(p);
            });
        }
    }
}
function filterDataBySite(data, selectedSite) {
    if (selectedSite) {
        return data.filter(d => d.site_code === selectedSite);
    }
    return data; // 如果没有选择站点，返回所有数据
}


function processData(svg, data, yAxisLabel, valueAccessor, isTcpData = false) {
    if (!data || data.length === 0) {
        drawChart(svg, [], yAxisLabel);
        return;
    }
    var nestedData = d3.group(data, d => d.site_code);
    var siteData = Array.from(nestedData).map(([siteCode, values]) => {
        if (isTcpData) {
            values = values.map(d => ({
                date: new Date(d.time),
                value: tcpTotalConnections(d)
            })).sort((a, b) => a.date - b.date);
        } else {
            values = values.map(d => ({
                date: new Date(d.time),
                value: valueAccessor(d)
            })).sort((a, b) => a.date - b.date);
        }
        return {
            siteCode: siteCode,
            values: values
        };
    });

    drawChart(svg, siteData, yAxisLabel);
}
function tcpTotalConnections(tcpData) {
    // 累加所有TCP连接状态的计数
    var totalConnections = 0;
    for (var key in tcpData) {
        if (tcpData.hasOwnProperty(key) && key !== "site_code" && key !== "time") {
            totalConnections += tcpData[key] || 0; // 使用`|| 0`确保空值被视为0
        }
    }
    return totalConnections;
}
function drawChart(svg, siteData, yAxisLabel) {
    // 更新比例尺的域
    x.domain(d3.extent(siteData.flatMap(d => d.values), d => d.date));
    y.domain([0, d3.max(siteData.flatMap(d => d.values), d => d.value)]);


    // 更新 X 轴和 Y 轴
    svg.selectAll(".axis").remove();
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    svg.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y));

    // 更新线条
    var line = d3.line()
        .x(d => x(d.date))
        .y(d => y(d.value));

    svg.selectAll(".line").remove();
    siteData.forEach(function (site) {
        var siteColor = siteColorMap[site.siteCode] || "steelblue"; // 使用映射的颜色或默认颜色

        var path = svg.append("path")
            .datum(site.values)
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", siteColor)
            .attr("stroke-width", 1.5)
            .attr("d", line);

        // 添加透明的触发区域用于提示框
        svg.append("path")
            .attr("class", "line-hover")
            .attr("fill", "none")
            .attr("stroke", "transparent") // 透明色
            .attr("stroke-width", 10) // 可调整触发区域的宽度
            .attr("d", line(site.values))
            .on("mouseover", function (event) {
                var point = d3.pointer(event, this);
                var d = site.values.find(p => Math.abs(x(p.date) - point[0]) < 10);
                if (d) {
                    showTooltip(event, d, yAxisLabel, site.siteCode); // 传递 site.siteCode
                }
            })
            .on("mouseout", hideTooltip);
    });

    // 更新圆点和交互
    // svg.selectAll(".dot").remove();
    // siteData.forEach(function (site) {
    //     svg.selectAll(".dot")
    //         .data(site.values)
    //         .enter().append("circle")
    //         .attr("class", "dot")
    //         .attr("r", 1.5)
    //         .attr("cx", d => x(d.date))
    //         .attr("cy", d => y(d.value))
    //         .attr("fill", "blue")
    //         .on("mouseover", (event, d) => showTooltip(event, d, yAxisLabel))
    //         .on("mouseout", hideTooltip);
    // });

    // 添加 Y 轴标签
    svg.selectAll(".y-axis-label").remove();
    svg.append("text")
        .attr("class", "y-axis-label")
        .attr("y", margin.left / 200) // 微调标签距离左边框的位置
        .attr("x", 0) // 设置 x 坐标在顶部
        .style("text-anchor", "start") // 文本开始于标签位置
        .text(yAxisLabel);
}

function showTooltip(event, d, yAxisLabel, siteCode) {
    tooltip.transition()
        .duration(200)
        .style("opacity", .9);
    tooltip.html("时间: " + d.date.toLocaleString() + "<br/>" + yAxisLabel + ": " + d.value + "%" + "<br/>站点代码: " + siteCode)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px");
}


function hideTooltip() {
    tooltip.transition()
        .duration(500)
        .style("opacity", 0);
}

function formatTimestamp(date) {
    function pad(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }
    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        ' ' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds());
}

function updateSiteInfo(selectedSite) {
    var siteInfoElement = document.getElementById('site-details');
    var displayText = selectedSite ? `选择的站点: 站点 ${selectedSite}` : "选择的站点: 所有站点";
    siteInfoElement.innerHTML = displayText;
}
