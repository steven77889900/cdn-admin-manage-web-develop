document.addEventListener('DOMContentLoaded', function () {
    // 初始化 SVG 尺寸和边距
    var margin = { top: 20, right: 30, bottom: 30, left: 50 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // 创建 SVG 容器
    var svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // 创建 X 和 Y 比例尺
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // 创建提示框
    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    window.updateChart = function () {
        var startTimeInput = document.getElementById('start-time').value;
        var endTimeInput = document.getElementById('end-time').value;

        var startTime = startTimeInput ? new Date(startTimeInput) : new Date(new Date().getTime() - 15 * 60000);
        var endTime = endTimeInput ? new Date(endTimeInput) : new Date();

        var apiUrl = `http://localhost:5000/api/usage?start_timestamp=${formatTimestamp(startTime)}&end_timestamp=${formatTimestamp(endTime)}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // 解析数据并提取所需字段
                var parsedData = data.map(d => {
                    var timestamp = Object.keys(d)[0];
                    return {
                        date: new Date(timestamp),
                        cpuUsage: d[timestamp].cpu_usage
                    };
                });

                // 更新比例尺的域
                x.domain(d3.extent(parsedData, d => d.date));
                y.domain([0, d3.max(parsedData, d => d.cpuUsage)]);

                // 更新 X 轴和 Y 轴
                svg.selectAll("g.axis").remove();
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
                    .y(d => y(d.cpuUsage));

                svg.selectAll(".line").remove();
                svg.append("path")
                    .datum(parsedData)
                    .attr("class", "line")
                    .attr("fill", "none")
                    .attr("stroke", "steelblue")
                    .attr("stroke-width", 1.5)
                    .attr("d", line);

                // 更新圆点和交互
                svg.selectAll("circle").remove();
                svg.selectAll("dot")
                    .data(parsedData)
                    .enter().append("circle")
                    .attr("r", 4)
                    .attr("cx", d => x(d.date))
                    .attr("cy", d => y(d.cpuUsage))
                    .on("mouseover", function (event, d) {
                        tooltip.transition()
                            .duration(200)
                            .style("opacity", .9);
                        tooltip.html("时间: " + d.date.toLocaleString() + "<br/>" + "CPU 使用率: " + d.cpuUsage + "%")
                            .style("left", (event.pageX + 10) + "px")
                            .style("top", (event.pageY - 28) + "px");
                    })
                    .on("mouseout", function () {
                        tooltip.transition()
                            .duration(500)
                            .style("opacity", 0);
                    });
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    };

    // 初始化时加载图表
    updateChart();
    // 每3秒更新图表
    setInterval(updateChart, 3000);
    // 格式化时间的函数
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
});
