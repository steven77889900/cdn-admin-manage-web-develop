// 全局变量定义
var cpuSvg, memorySvg, x, y, tooltip, height, margin;

document.addEventListener('DOMContentLoaded', function () {
    // 初始化 SVG 尺寸和边距
    margin = { top: 20, right: 30, bottom: 30, left: 50 };
    var width = 960 - margin.left - margin.right;
    height = 500 - margin.top - margin.bottom;  // 将 height 定义为全局变量

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

    var apiUrl = `http://localhost:5000/api/usage?start_timestamp=${formatTimestamp(startTime)}&end_timestamp=${formatTimestamp(endTime)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // 解析数据并提取所需字段
            var cpuData = data.map(d => {
                var timestamp = Object.keys(d)[0];
                return {
                    date: new Date(timestamp),
                    value: d[timestamp].cpu_usage
                };
            });
            var memoryData = data.map(d => {
                var timestamp = Object.keys(d)[0];
                return {
                    date: new Date(timestamp),
                    value: d[timestamp].memory_usage
                };
            });

            // 绘制 CPU 和 Memory 图表
            drawChart(cpuSvg, cpuData, "CPU Usage (%)");
            drawChart(memorySvg, memoryData, "Memory Usage (%)");
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
}

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
        .on("mouseover", function (event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html("时间: " + d.date.toLocaleString() + "<br/>" + yAxisLabel + ": " + d.value + "%")
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
