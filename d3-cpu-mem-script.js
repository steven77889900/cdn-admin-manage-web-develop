// 全局变量定义
var cpuSvg, memorySvg, x, y, tooltip, height, margin;

document.addEventListener('DOMContentLoaded', function () {
    // 初始化 SVG 尺寸和边距
    margin = { top: 20, right: 30, bottom: 30, left: 50 };
    var width = 960 - margin.left - margin.right;
    height = 500 - margin.top - margin.bottom;

    // 创建 CPU SVG 容器
    cpuSvg = d3.select("#cpu-chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // 创建 Memory SVG 容器
    memorySvg = d3.select("#memory-chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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

function updateCharts() {
    var selectedSite = document.getElementById("site-select").value;
    var startTime = document.getElementById("start-time").value;
    var endTime = document.getElementById("end-time").value;

    // 处理时间输入为空的情况
    if (!startTime || !endTime) {
        startTime = new Date(new Date().getTime() - 15 * 60000); // 15分钟前
        endTime = new Date(); // 当前时间
    } else {
        startTime = new Date(startTime);
        endTime = new Date(endTime);
    }

    var apiUrl = `http://localhost:5001/api/usage?start_timestamp=${formatTimestamp(startTime)}&end_timestamp=${formatTimestamp(endTime)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var filteredData = selectedSite ? data.filter(d => d.site_code === selectedSite) : data;

            var cpuData = filteredData.map(d => {
                return {
                    date: new Date(d.data.time),
                    value: d.data.cpu_usage,
                    sitecode: d.site_code // 添加站点代码
                };
            });
            var memoryData = filteredData.map(d => {
                return {
                    date: new Date(d.data.time),
                    value: d.data.memory_usage,
                    sitecode: d.site_code // 添加站点代码
                };
            });

            drawChart(cpuSvg, cpuData, "CPU Usage (%)");
            drawChart(memorySvg, memoryData, "Memory Usage (%)");

            // 更新站点信息
            // updateSiteInfo(selectedSite, data.length > 0 ? data[0].site_code : '无法获取站点信息');
            updateSiteInfo(selectedSite, filteredData.length > 0 ? filteredData[0].site_code : '无法获取站点信息');

        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            drawChart(cpuSvg, [], "CPU Usage (%)");
            drawChart(memorySvg, [], "Memory Usage (%)");
            updateSiteInfo('无法获取站点信息');
        });
}

// 其他函数 (drawChart, updateSiteInfo, formatTimestamp) 保持不变


function drawChart(svg, data, yAxisLabel) {
    // 更新比例尺的域
    x.domain(d3.extent(data, d => d.date));
    y.domain([0, d3.max(data, d => d.value)]);

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
    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", line);

    // 更新圆点和交互
    svg.selectAll(".dot").remove();
    svg.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 4)
        .attr("cx", d => x(d.date))
        .attr("cy", d => y(d.value))
        .attr("fill", d => d.value > 50 ? "red" : "green")  // 根据值的大小设置圆点的颜色
        .on("mouseover", function (event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html("时间: " + d.date.toLocaleString() + "<br/>" + yAxisLabel + ": " + d.value + "%" + "<br/>站点代码: " + d.sitecode)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function () {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // 添加 Y 轴标签
    svg.selectAll(".y-axis-label").remove();
    svg.append("text")
        .attr("class", "y-axis-label")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(yAxisLabel);
}
function updateSiteInfo(selectedSite) {
    var siteInfoElement = document.getElementById('site-details');
    // 如果selectedSite为空或未定义，则显示“所有站点”，否则显示选择的站点
    var displayText = selectedSite ? `选择的站点: 站点 ${selectedSite}` : "选择的站点: 所有站点";
    siteInfoElement.innerHTML = displayText;
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
