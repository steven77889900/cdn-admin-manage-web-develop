import time
import json
import psutil
import logging
import threading
from flask import Flask, jsonify, request
from flask_cors import CORS  # 导入CORS

# 设置日志级别为INFO
logging.basicConfig(level=logging.INFO)

# 创建一个Flask应用
app = Flask(__name__)
CORS(app)

# 定义一个函数来获取CPU使用率和内存使用率
def get_usage():
    return {
        'cpu_usage': psutil.cpu_percent(interval=1),
        'memory_usage': psutil.virtual_memory().percent
    }

# 定义一个函数来将CPU使用率和内存使用率追加写入到磁盘文件中
def append_usage_to_file():
    while True:
        usage = get_usage()
        data = {
            time.strftime("%Y-%m-%d %H:%M:%S"): usage
        }
        with open('usage.json', 'a') as f:
            json.dump(data, f)
            f.write('\n')  # 添加换行符
            logging.info(f'Usage: {usage}')  # 添加日志
        time.sleep(1)

# 定义一个API接口来返回CPU使用率和内存使用率
@app.route('/api/usage', methods=['GET'])
def usage():
    timestamp = request.args.get('timestamp')
    start_timestamp = request.args.get('start_timestamp')
    end_timestamp = request.args.get('end_timestamp')
    dataset = []
    try:
        with open('usage.json', 'r') as f:
            for line in f:
                data = json.loads(line)
                current_timestamp = list(data.keys())[0]
                if timestamp and timestamp == current_timestamp:
                    return jsonify(data[timestamp])
                elif start_timestamp and end_timestamp and start_timestamp <= current_timestamp <= end_timestamp:
                    dataset.append(data)
        if dataset:
            return jsonify(dataset)
        else:
            return jsonify({'cpu_usage': 0, 'memory_usage': 0})  # 如果没有找到对应的数据，返回0
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
