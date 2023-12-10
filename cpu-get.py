from flask import Flask, jsonify, request
from flask_cors import CORS  # Importing CORS
import psutil
import time
import json
import threading

app = Flask(__name__)
CORS(app)

# 定义一个函数，每秒将 CPU 使用率和当前时间追加到文件中
def write_cpu_usage_to_file():
    while True:
        usage = psutil.cpu_percent()
        current_time = time.strftime("%H:%M:%S", time.localtime())
        data = {'cpu_usage': usage, 'time': current_time}
        with open('cpu_usage.json', 'a') as f:  # 使用 'a' 模式打开文件以追加数据
            f.write(json.dumps(data) + '\n')  # 将数据转换为 JSON 格式并追加到文件中
        time.sleep(1)

# 在一个新的线程中运行上面的函数
threading.Thread(target=write_cpu_usage_to_file).start()

@app.route('/api/cpu_usage')
def cpu_usage():
    # 获取查询参数中的时间范围
    minutes = request.args.get('minutes', default=15, type=int)
    seconds = minutes * 60

    # 从文件中读取最后一行（即最新的 CPU 使用率和当前时间）
    with open('cpu_usage.json', 'r') as f:
        lines = f.readlines()
        last_lines = lines[-seconds:]  # 获取最后几行的数据
        data = [json.loads(line) for line in last_lines]
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=5000)
