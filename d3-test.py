import os
import time
import json
import psutil
import logging
import threading
from flask import Flask, jsonify, request
from flask_cors import CORS

# 设置日志级别为INFO
logging.basicConfig(level=logging.INFO)

# 创建一个Flask应用
app = Flask(__name__)
CORS(app)

# 获取环境变量中的站点代码，如果没有设置，则默认为'101'
SITE_CODE = os.getenv('site_code', '101')

# 定义一个函数来获取CPU使用率和内存使用率
def get_usage():
    return {
        'site_code': SITE_CODE,
        'data': {
            'time': time.strftime("%Y-%m-%d %H:%M:%S"),
            'cpu_usage': psutil.cpu_percent(interval=1),
            'memory_usage': psutil.virtual_memory().percent
        }
    }

# 定义一个函数来将CPU使用率和内存使用率追加写入到磁盘文件中
def append_usage_to_file():
    while True:
        usage = get_usage()
        with open('usage.json', 'a') as f:
            json.dump(usage, f)
            f.write('\n')  # 添加换行符
            logging.info(f'Usage: {usage}')  # 添加日志
        time.sleep(1)

# 定义一个API接口来返回CPU使用率和内存使用率
@app.route('/api/usage', methods=['GET'])
def usage():
    start_timestamp = request.args.get('start_timestamp')
    end_timestamp = request.args.get('end_timestamp')
    dataset = []
    try:
        with open('usage.json', 'r') as f:
            for line in f:
                data = json.loads(line)
                current_timestamp = data['data']['time']
                if start_timestamp and end_timestamp and start_timestamp <= current_timestamp <= end_timestamp:
                    dataset.append(data)
        if dataset:
            return jsonify(dataset)
        else:
            return jsonify({'site_code': SITE_CODE, 'data': {'cpu_usage': 0, 'memory_usage': 0}})
    except json.JSONDecodeError as e:
        return jsonify({'error': str(e)})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    # 创建一个新的线程来追加写入CPU使用率和内存使用率到磁盘文件中
    thread = threading.Thread(target=append_usage_to_file)
    thread.start()

    # 运行Flask应用
    app.run(port=5000)
