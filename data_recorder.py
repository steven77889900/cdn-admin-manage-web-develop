import psutil
import json
import datetime
import time

while True:
    cpu_usage = psutil.cpu_percent()
    memory_usage = psutil.virtual_memory().percent
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    data = {
        timestamp: {
            'cpu_usage': cpu_usage,
            'memory_usage': memory_usage
        }
    }

    with open('system_usage.json', 'a') as file:
        json.dump(data, file)
        file.write('\n')

    time.sleep(1)
