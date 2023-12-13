document.addEventListener('DOMContentLoaded', function () {
    // 定义获取数据的 API URL
    var apiUrl = "http://localhost:5000/api/usage?start_timestamp=2023-12-12%2023:34:53&end_timestamp=2023-12-12%2023:49:53";

    // 使用 fetch API 获取数据
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

        // 设置 SVG 尺寸和边距
        var margin = { top: 20, right: 30, bottom: 30, left: 50 },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        // 创建 SVG 容器
        var svg = d3.select("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // 设置 X 和 Y 比例尺
        var x = d3.scaleTime()
            .domain(d3.extent(parsedData, d => d.date))
            .range([0, width]);

        var y = d3.scaleLinear()
            .domain([0, d3.max(parsedData, d => d.cpuUsage)])
            .range([height, 0]);

        // 添加 X 轴
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // 添加 Y 轴
        svg.append("g")
            .call(d3.axisLeft(y));

        // 绘制线条
        svg.append("path")
            .datum(parsedData)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(d => x(d.date))
                .y(d => y(d.cpuUsage))
            );

        // 添加 Y 轴标签
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("CPU 使用率 (%)");

        // 创建一个提示框
        var tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        // 添加一个圆点作为交互元素
        svg.selectAll("dot")
        .data(parsedData)
        .enter().append("circle")
        .attr("r", 4)
        .attr("cx", function (d) { return x(d.date); })
        .attr("cy", function (d) { return y(d.cpuUsage); })
        .on("mouseover", function (event, d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html("时间: " + d.date + "<br/>" + "CPU 使用率: " + d.cpuUsage + "%")
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
});
