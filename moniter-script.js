document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('cpuUsageChartCanvas');
    const ctx = canvas.getContext('2d');

    // 将画布的高度设置为视口高度的十二分之一
    canvas.height = window.innerHeight / 15;
    canvas.width = 200;  // 例如，200像素宽

    let cpuUsageData = [];
    let timeLabels = [];

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: timeLabels,
            datasets: [{
                label: 'CPU Usage',
                data: cpuUsageData,
                backgroundColor: cpuUsageData.map(usage => {
                    if (usage <= 20) return 'green';
                    if (usage <= 60) return 'blue';
                    if (usage <= 70) return 'yellow';
                    return 'red';
                }),
                barPercentage: 1,  // 增大柱状图的宽度
                categoryPercentage: 1  // 增大柱状图的宽度
            }]
        },
        options: {
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time'
                    },
                    ticks: {
                        autoSkip: true,
                        maxRotation: 90
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'CPU Usage (%)'
                    },
                    grid: {
                        drawBorder: true, 
                        borderColor: 'green',  // 设置边框线颜色为绿色
                        lineWidth: 1 // 调整轴线宽度
                    },
                    ticks: {
                        beginAtZero: true // y轴从0开始
                    }
                }
            }
        }
    });

    // Update the chart data every second
    setInterval(() => {
        fetch('http://127.0.0.1:5000/api/cpu_usage?minutes=15')  // 在查询参数中指定时间范围
            .then(response => response.json())
            .then(data => {
                console.log("Received data: ", data); // 调试输出接收到的数据

                // 从数据数组中获取时间和 CPU 使用率
                timeLabels = data.map(item => item.time);
                cpuUsageData = data.map(item => item.cpu_usage);

                // Update the chart
                chart.data.labels = timeLabels; // Update the x-axis labels
                chart.data.datasets[0].data = cpuUsageData; // Update the cpu usage data
                chart.data.datasets[0].backgroundColor = cpuUsageData.map(usage => {
                    if (usage <= 20) return 'green';
                    if (usage <= 60) return 'blue';
                    if (usage <= 70) return 'yellow';
                    return 'red';
                }); // Update the background colors
                chart.update();
            });
    }, 5000); // Update the chart data every three seconds
});
