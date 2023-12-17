import os
import time
import psutil
import logging
import threading
from flask import Flask, jsonify, request
from flask_cors import CORS
from influxdb import InfluxDBClient
from datetime import datetime
from collections import defaultdict

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

def get_usage():
    return {
        'site_code': SITE_CODE,
        'time': time.strftime("%Y-%m-%d %H:%M:%S"),
        'cpu_usage': psutil.cpu_percent(interval=1),
        'memory_usage': psutil.virtual_memory().percent
    }

def get_tcp_stats():
    tcp_connections = psutil.net_connections(kind='tcp')
    status_counts = defaultdict(int)
    for conn in tcp_connections:
        status_counts[conn.status] += 1

    return {
        'site_code': SITE_CODE,
        'time': time.strftime("%Y-%m-%d %H:%M:%S"),
        'total_connections': len(tcp_connections),
        'status_counts': dict(status_counts)
    }

def get_network_stats():
    net_io = psutil.net_io_counters()
    return {
        'bytes_sent': net_io.bytes_sent,
        'bytes_recv': net_io.bytes_recv,
        'packets_sent': net_io.packets_sent,
        'packets_recv': net_io.packets_recv
    }

def append_usage_to_influxdb():
    while True:
        usage = get_usage()
        tcp_stats = get_tcp_stats()
        network_stats = get_network_stats()

        cpu_json_body = [{
            "measurement": "cpu_usage",
            "tags": {"site_code": usage['site_code']},
            "time": usage['time'],
            "fields": {"cpu_usage": usage['cpu_usage']}
        }]

        memory_json_body = [{
            "measurement": "memory_usage",
            "tags": {"site_code": usage['site_code']},
            "time": usage['time'],
            "fields": {"memory_usage": usage['memory_usage']}
        }]

        tcp_json_body = [{
            "measurement": "tcp_stats",
            "tags": {"site_code": tcp_stats['site_code']},
            "time": tcp_stats['time'],
            "fields": tcp_stats['status_counts']
        }]

        network_json_body = [{
            "measurement": "network_stats",
            "tags": {"site_code": SITE_CODE},
            "time": time.strftime("%Y-%m-%d %H:%M:%S"),
            "fields": network_stats
        }]

        client.write_points(cpu_json_body)
        client.write_points(memory_json_body)
        client.write_points(tcp_json_body)
        client.write_points(network_json_body)

        time.sleep(1)

@app.route('/api/usage', methods=['GET'])
def usage():
    start_timestamp = request.args.get('start_timestamp')
    end_timestamp = request.args.get('end_timestamp')
    metrics = request.args.get('metrics', '')

    # 将metrics参数分解为列表
    metrics_list = metrics.split(',') if metrics else []

    # 初始化返回数据字典
    formatted_data = {}

    # 只在metrics_list中包含相应的指标时执行查询
    if 'cpu_usage' in metrics_list:
        cpu_query = f"SELECT * FROM cpu_usage WHERE time >= '{start_timestamp}' AND time <= '{end_timestamp}'"
        cpu_result = client.query(cpu_query)
        formatted_data['cpu_usage'] = format_query_results(cpu_result)

    if 'memory_usage' in metrics_list:
        memory_query = f"SELECT * FROM memory_usage WHERE time >= '{start_timestamp}' AND time <= '{end_timestamp}'"
        memory_result = client.query(memory_query)
        formatted_data['memory_usage'] = format_query_results(memory_result)

    if 'network_stats' in metrics_list:
        network_query = f"SELECT * FROM network_stats WHERE time >= '{start_timestamp}' AND time <= '{end_timestamp}'"
        network_result = client.query(network_query)
        formatted_data['network_stats'] = format_query_results(network_result)

    if 'tcp_stats' in metrics_list:
        tcp_query = f"SELECT * FROM tcp_stats WHERE time >= '{start_timestamp}' AND time <= '{end_timestamp}'"
        tcp_result = client.query(tcp_query)
        formatted_data['tcp_stats'] = format_query_results(tcp_result)


    formatted_data = {
        'cpu_usage': format_query_results(cpu_result),
        'memory_usage': format_query_results(memory_result),
        'tcp_stats': format_query_results(tcp_result),
        'network_stats': format_query_results(network_result)
    }

    return jsonify(formatted_data)

def format_query_results(result):
    formatted_points = []
    for point in result.get_points():
        time_obj = datetime.strptime(point['time'], '%Y-%m-%dT%H:%M:%SZ')
        formatted_time = time_obj.strftime('%Y-%m-%d %H:%M:%S')
        point['time'] = formatted_time
        formatted_points.append(point)
    return formatted_points

if __name__ == '__main__':
    thread = threading.Thread(target=append_usage_to_influxdb)
    thread.start()
    app.run(port=5001)
