import os
import time
import psutil
import logging
import threading
from flask import Flask, jsonify, request
from flask_cors import CORS
from influxdb import InfluxDBClient
from datetime import datetime

# 设置日志级别为INFO
logging.basicConfig(level=logging.INFO)

# 创建一个Flask应用
app = Flask(__name__)
CORS(app)


# 连接到 InfluxDB
client = InfluxDBClient(host='192.168.100.131', port=8086, username='root', password='root@admin123')
client.switch_database('usage_database')

# 获取环境变量中的站点代码，如果没有设置，则默认为'101'
SITE_CODE = os.getenv('site_code', '101')

# 定义一个函数来获取CPU使用率和内存使用率
def get_usage():
    return {
        'site_code': SITE_CODE,
        'time': time.strftime("%Y-%m-%d %H:%M:%S"),  # 使用UTC时间，并按照InfluxDB格式
        'cpu_usage': psutil.cpu_percent(interval=1),
        'memory_usage': psutil.virtual_memory().percent
    }

# 定义一个函数来将CPU使用率和内存使用率写入到 InfluxDB
def append_usage_to_influxdb():
    while True:
        usage = get_usage()
        json_body = [{
            "measurement": "system_usage",
            "tags": {
                "site_code": usage['site_code']
            },
            "time": usage['time'],
            "fields": {
                "cpu_usage": usage['cpu_usage'],
                "memory_usage": usage['memory_usage']
            }
        }]
        client.write_points(json_body)
        time.sleep(1)

# 定义一个API接口来返回CPU使用率和内存使用率
@app.route('/api/usage', methods=['GET'])
def usage():
    start_timestamp = request.args.get('start_timestamp')
    end_timestamp = request.args.get('end_timestamp')
    query = f"SELECT * FROM system_usage WHERE time >= '{start_timestamp}' AND time <= '{end_timestamp}'"
    result = client.query(query)
    points = list(result.get_points())

    formatted_data = []
    for point in points:
        # 解析 ISO 8601 格式的时间
        time_obj = datetime.strptime(point['time'], '%Y-%m-%dT%H:%M:%SZ')
        # 将时间格式化为所需格式
        formatted_time = time_obj.strftime('%Y-%m-%d %H:%M:%S')

        formatted_point = {
            "site_code": point.get('site_code', SITE_CODE),
            "data": {
                "time": formatted_time,
                "cpu_usage": point['cpu_usage'],
                "memory_usage": point['memory_usage']
            }
        }
        formatted_data.append(formatted_point)

    return jsonify(formatted_data)


if __name__ == '__main__':
    # 创建一个新的线程来追加写入CPU使用率和内存使用率到 InfluxDB
    thread = threading.Thread(target=append_usage_to_influxdb)
    thread.start()

    # 运行Flask应用
    app.run(port=5001)



