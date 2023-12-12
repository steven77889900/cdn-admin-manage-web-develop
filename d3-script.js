document.addEventListener('DOMContentLoaded', function () {
    // 假定您的数据存储在名为 data 的变量中
    var data =
        // ... 您提供的数据 ...
        [
            {
                "2023-12-12 23:34:53": {
                    "cpu_usage": 1.4,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:34:55": {
                    "cpu_usage": 4.5,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:34:57": {
                    "cpu_usage": 1.2,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:34:59": {
                    "cpu_usage": 11.1,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:35:01": {
                    "cpu_usage": 0.4,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:35:03": {
                    "cpu_usage": 1.8,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:35:05": {
                    "cpu_usage": 1.2,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:35:07": {
                    "cpu_usage": 5.5,
                    "memory_usage": 26.3
                }
            },
            {
                "2023-12-12 23:35:09": {
                    "cpu_usage": 2.7,
                    "memory_usage": 26.3
                }
            },
            {
                "2023-12-12 23:35:11": {
                    "cpu_usage": 3.3,
                    "memory_usage": 26.7
                }
            },
            {
                "2023-12-12 23:35:13": {
                    "cpu_usage": 3.3,
                    "memory_usage": 26.7
                }
            },
            {
                "2023-12-12 23:35:15": {
                    "cpu_usage": 1.9,
                    "memory_usage": 26.8
                }
            },
            {
                "2023-12-12 23:35:17": {
                    "cpu_usage": 2.6,
                    "memory_usage": 26.7
                }
            },
            {
                "2023-12-12 23:35:19": {
                    "cpu_usage": 2.6,
                    "memory_usage": 26.7
                }
            },
            {
                "2023-12-12 23:35:21": {
                    "cpu_usage": 1.4,
                    "memory_usage": 26.7
                }
            },
            {
                "2023-12-12 23:35:23": {
                    "cpu_usage": 0.4,
                    "memory_usage": 26.6
                }
            },
            {
                "2023-12-12 23:35:25": {
                    "cpu_usage": 2.3,
                    "memory_usage": 26.5
                }
            },
            {
                "2023-12-12 23:35:27": {
                    "cpu_usage": 16.5,
                    "memory_usage": 26.7
                }
            },
            {
                "2023-12-12 23:35:29": {
                    "cpu_usage": 1.9,
                    "memory_usage": 26.7
                }
            },
            {
                "2023-12-12 23:35:31": {
                    "cpu_usage": 2.7,
                    "memory_usage": 26.7
                }
            },
            {
                "2023-12-12 23:35:33": {
                    "cpu_usage": 1.8,
                    "memory_usage": 26.7
                }
            },
            {
                "2023-12-12 23:35:35": {
                    "cpu_usage": 3.3,
                    "memory_usage": 26.7
                }
            },
            {
                "2023-12-12 23:35:37": {
                    "cpu_usage": 3.5,
                    "memory_usage": 26.7
                }
            },
            {
                "2023-12-12 23:35:39": {
                    "cpu_usage": 2.7,
                    "memory_usage": 26.6
                }
            },
            {
                "2023-12-12 23:35:41": {
                    "cpu_usage": 5.3,
                    "memory_usage": 27
                }
            },
            {
                "2023-12-12 23:35:43": {
                    "cpu_usage": 1,
                    "memory_usage": 27
                }
            },
            {
                "2023-12-12 23:35:45": {
                    "cpu_usage": 1.4,
                    "memory_usage": 27
                }
            },
            {
                "2023-12-12 23:35:47": {
                    "cpu_usage": 0.6,
                    "memory_usage": 26.1
                }
            },
            {
                "2023-12-12 23:35:49": {
                    "cpu_usage": 0.4,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:35:51": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:35:53": {
                    "cpu_usage": 5.1,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:35:55": {
                    "cpu_usage": 0.8,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:35:57": {
                    "cpu_usage": 12.1,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:35:59": {
                    "cpu_usage": 1,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:36:01": {
                    "cpu_usage": 1.2,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:36:03": {
                    "cpu_usage": 0.8,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:36:05": {
                    "cpu_usage": 0,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:36:07": {
                    "cpu_usage": 0.2,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:36:09": {
                    "cpu_usage": 1.2,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:36:11": {
                    "cpu_usage": 0,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:36:13": {
                    "cpu_usage": 0.4,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:36:15": {
                    "cpu_usage": 1.4,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:36:17": {
                    "cpu_usage": 0.2,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:36:19": {
                    "cpu_usage": 13.1,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:36:21": {
                    "cpu_usage": 3.9,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:36:23": {
                    "cpu_usage": 2.9,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:36:25": {
                    "cpu_usage": 0,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:36:27": {
                    "cpu_usage": 6.4,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:36:29": {
                    "cpu_usage": 6.8,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:36:31": {
                    "cpu_usage": 48.1,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:36:33": {
                    "cpu_usage": 1.6,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:36:35": {
                    "cpu_usage": 10.8,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:36:37": {
                    "cpu_usage": 31.3,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:36:39": {
                    "cpu_usage": 1,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:36:41": {
                    "cpu_usage": 11.5,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:36:43": {
                    "cpu_usage": 35.1,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:36:45": {
                    "cpu_usage": 9.8,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:36:47": {
                    "cpu_usage": 7.4,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:36:49": {
                    "cpu_usage": 27.3,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:36:51": {
                    "cpu_usage": 0.2,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:36:53": {
                    "cpu_usage": 9.9,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:36:55": {
                    "cpu_usage": 30.7,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:36:57": {
                    "cpu_usage": 2.3,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:36:59": {
                    "cpu_usage": 10.4,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:37:01": {
                    "cpu_usage": 29.6,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:37:03": {
                    "cpu_usage": 1.6,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:37:05": {
                    "cpu_usage": 5.7,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:37:07": {
                    "cpu_usage": 30.9,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:37:09": {
                    "cpu_usage": 3.7,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:37:11": {
                    "cpu_usage": 9,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:37:13": {
                    "cpu_usage": 35.8,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:37:15": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:37:17": {
                    "cpu_usage": 9.6,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:37:19": {
                    "cpu_usage": 32.8,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:37:21": {
                    "cpu_usage": 9.5,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:37:23": {
                    "cpu_usage": 13.9,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:37:25": {
                    "cpu_usage": 36.9,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:37:27": {
                    "cpu_usage": 37.4,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:37:29": {
                    "cpu_usage": 37.4,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:37:31": {
                    "cpu_usage": 6,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:37:33": {
                    "cpu_usage": 24,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:37:35": {
                    "cpu_usage": 38.6,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:37:37": {
                    "cpu_usage": 9.9,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:37:39": {
                    "cpu_usage": 57.8,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:37:41": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:37:43": {
                    "cpu_usage": 16,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:37:45": {
                    "cpu_usage": 41.3,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:37:47": {
                    "cpu_usage": 3.1,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:37:49": {
                    "cpu_usage": 24.4,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:37:51": {
                    "cpu_usage": 30.6,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:37:53": {
                    "cpu_usage": 1.8,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:37:55": {
                    "cpu_usage": 11.6,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:37:57": {
                    "cpu_usage": 27.8,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:37:59": {
                    "cpu_usage": 0.2,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:38:01": {
                    "cpu_usage": 16.8,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:38:03": {
                    "cpu_usage": 35.2,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:38:05": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:38:07": {
                    "cpu_usage": 19.1,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:38:09": {
                    "cpu_usage": 28.3,
                    "memory_usage": 26.1
                }
            },
            {
                "2023-12-12 23:38:11": {
                    "cpu_usage": 0.8,
                    "memory_usage": 26.1
                }
            },
            {
                "2023-12-12 23:38:13": {
                    "cpu_usage": 14.9,
                    "memory_usage": 26.2
                }
            },
            {
                "2023-12-12 23:38:15": {
                    "cpu_usage": 33.3,
                    "memory_usage": 26.2
                }
            },
            {
                "2023-12-12 23:38:17": {
                    "cpu_usage": 3.9,
                    "memory_usage": 26.3
                }
            },
            {
                "2023-12-12 23:38:19": {
                    "cpu_usage": 13.2,
                    "memory_usage": 26.1
                }
            },
            {
                "2023-12-12 23:38:21": {
                    "cpu_usage": 28.2,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:38:23": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:38:25": {
                    "cpu_usage": 8.4,
                    "memory_usage": 26
                }
            },
            {
                "2023-12-12 23:38:27": {
                    "cpu_usage": 29.5,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:38:29": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:38:31": {
                    "cpu_usage": 9.7,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:38:33": {
                    "cpu_usage": 26.8,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:38:35": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:38:37": {
                    "cpu_usage": 7.7,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:38:39": {
                    "cpu_usage": 26.6,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:38:41": {
                    "cpu_usage": 1.2,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:38:43": {
                    "cpu_usage": 8,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:38:45": {
                    "cpu_usage": 27.3,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:38:47": {
                    "cpu_usage": 1.4,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:38:49": {
                    "cpu_usage": 8.3,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:38:51": {
                    "cpu_usage": 26.3,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:38:53": {
                    "cpu_usage": 2.3,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:38:55": {
                    "cpu_usage": 7.3,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:38:57": {
                    "cpu_usage": 30.1,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:38:59": {
                    "cpu_usage": 4.9,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:39:01": {
                    "cpu_usage": 7.1,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:39:03": {
                    "cpu_usage": 25,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:39:05": {
                    "cpu_usage": 3.5,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:39:07": {
                    "cpu_usage": 1.8,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:39:09": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:39:11": {
                    "cpu_usage": 1.4,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:13": {
                    "cpu_usage": 0,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:15": {
                    "cpu_usage": 0,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:17": {
                    "cpu_usage": 1.6,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:19": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:21": {
                    "cpu_usage": 1.2,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:23": {
                    "cpu_usage": 1.4,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:25": {
                    "cpu_usage": 0.2,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:27": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:29": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:31": {
                    "cpu_usage": 0,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:33": {
                    "cpu_usage": 0.2,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:35": {
                    "cpu_usage": 0.8,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:39:37": {
                    "cpu_usage": 0.6,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:39:39": {
                    "cpu_usage": 0,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:41": {
                    "cpu_usage": 2.1,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:39:43": {
                    "cpu_usage": 0,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:39:45": {
                    "cpu_usage": 0.2,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:39:47": {
                    "cpu_usage": 1.2,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:39:49": {
                    "cpu_usage": 0.2,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:39:51": {
                    "cpu_usage": 21.7,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:39:53": {
                    "cpu_usage": 0.8,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:39:55": {
                    "cpu_usage": 0,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:39:58": {
                    "cpu_usage": 18.5,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:40:00": {
                    "cpu_usage": 0.8,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:40:02": {
                    "cpu_usage": 0,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:40:04": {
                    "cpu_usage": 19.7,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:40:06": {
                    "cpu_usage": 1.8,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:40:08": {
                    "cpu_usage": 0.2,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:40:10": {
                    "cpu_usage": 22.2,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:40:12": {
                    "cpu_usage": 2.9,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:40:14": {
                    "cpu_usage": 0.6,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:40:16": {
                    "cpu_usage": 16.6,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:40:18": {
                    "cpu_usage": 1,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:40:20": {
                    "cpu_usage": 0.2,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:40:22": {
                    "cpu_usage": 18.6,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:40:24": {
                    "cpu_usage": 1.6,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:40:26": {
                    "cpu_usage": 1.4,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:40:28": {
                    "cpu_usage": 18,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:40:30": {
                    "cpu_usage": 2,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:40:32": {
                    "cpu_usage": 0.2,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:40:34": {
                    "cpu_usage": 19.1,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:40:36": {
                    "cpu_usage": 0.4,
                    "memory_usage": 24.6
                }
            },
            {
                "2023-12-12 23:40:38": {
                    "cpu_usage": 0.2,
                    "memory_usage": 24.7
                }
            },
            {
                "2023-12-12 23:40:40": {
                    "cpu_usage": 25,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:40:42": {
                    "cpu_usage": 6.4,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:40:44": {
                    "cpu_usage": 3.3,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:40:46": {
                    "cpu_usage": 0.4,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:40:48": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:40:50": {
                    "cpu_usage": 5.6,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:40:52": {
                    "cpu_usage": 1.8,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:40:54": {
                    "cpu_usage": 1,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:40:56": {
                    "cpu_usage": 0.6,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:40:58": {
                    "cpu_usage": 16.6,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:41:00": {
                    "cpu_usage": 8.4,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:41:02": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:41:04": {
                    "cpu_usage": 6.6,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:41:06": {
                    "cpu_usage": 11.2,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:41:08": {
                    "cpu_usage": 8.4,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:41:10": {
                    "cpu_usage": 3.3,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:41:12": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:41:14": {
                    "cpu_usage": 4.1,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:41:16": {
                    "cpu_usage": 1.2,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:41:18": {
                    "cpu_usage": 8.1,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:41:20": {
                    "cpu_usage": 9.1,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:41:22": {
                    "cpu_usage": 3.7,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:41:24": {
                    "cpu_usage": 3.9,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:41:26": {
                    "cpu_usage": 5.5,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:41:28": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:41:30": {
                    "cpu_usage": 0.4,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:41:32": {
                    "cpu_usage": 0.6,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:41:34": {
                    "cpu_usage": 1.2,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:41:36": {
                    "cpu_usage": 0,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:41:38": {
                    "cpu_usage": 5.8,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:41:40": {
                    "cpu_usage": 11.9,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:41:42": {
                    "cpu_usage": 2.1,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:41:44": {
                    "cpu_usage": 10.6,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:41:46": {
                    "cpu_usage": 29.8,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:41:48": {
                    "cpu_usage": 25.3,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:41:50": {
                    "cpu_usage": 47.4,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:41:52": {
                    "cpu_usage": 2.1,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:41:54": {
                    "cpu_usage": 2.2,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:41:56": {
                    "cpu_usage": 28.7,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:41:58": {
                    "cpu_usage": 1,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:42:00": {
                    "cpu_usage": 1.6,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:42:02": {
                    "cpu_usage": 37,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:42:04": {
                    "cpu_usage": 2.9,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:42:06": {
                    "cpu_usage": 0.4,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:42:08": {
                    "cpu_usage": 26.7,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:42:10": {
                    "cpu_usage": 2.1,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:42:12": {
                    "cpu_usage": 1.6,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:42:14": {
                    "cpu_usage": 27.1,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:42:16": {
                    "cpu_usage": 3.1,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:42:18": {
                    "cpu_usage": 1,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:42:20": {
                    "cpu_usage": 23.8,
                    "memory_usage": 24.8
                }
            },
            {
                "2023-12-12 23:42:22": {
                    "cpu_usage": 0.4,
                    "memory_usage": 24.9
                }
            },
            {
                "2023-12-12 23:42:24": {
                    "cpu_usage": 6.4,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:42:26": {
                    "cpu_usage": 35.5,
                    "memory_usage": 25
                }
            },
            {
                "2023-12-12 23:42:28": {
                    "cpu_usage": 38.5,
                    "memory_usage": 25.1
                }
            },
            {
                "2023-12-12 23:42:30": {
                    "cpu_usage": 43.1,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:42:32": {
                    "cpu_usage": 3.7,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:42:34": {
                    "cpu_usage": 27.4,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:42:36": {
                    "cpu_usage": 72.4,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:42:38": {
                    "cpu_usage": 14.6,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:42:40": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:42:42": {
                    "cpu_usage": 19.7,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:42:44": {
                    "cpu_usage": 5.1,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:42:46": {
                    "cpu_usage": 1.2,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:42:48": {
                    "cpu_usage": 24.2,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:42:50": {
                    "cpu_usage": 1.6,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:42:52": {
                    "cpu_usage": 1.6,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:42:54": {
                    "cpu_usage": 21.6,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:42:56": {
                    "cpu_usage": 1,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:42:58": {
                    "cpu_usage": 0.2,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:00": {
                    "cpu_usage": 23.8,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:02": {
                    "cpu_usage": 6.4,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:43:04": {
                    "cpu_usage": 11.9,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:43:06": {
                    "cpu_usage": 17.4,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:43:08": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:10": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:12": {
                    "cpu_usage": 16.9,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:14": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:16": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:18": {
                    "cpu_usage": 19.1,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:20": {
                    "cpu_usage": 2.9,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:22": {
                    "cpu_usage": 13.5,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:24": {
                    "cpu_usage": 22.2,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:26": {
                    "cpu_usage": 1.9,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:28": {
                    "cpu_usage": 2.4,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:30": {
                    "cpu_usage": 16,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:43:32": {
                    "cpu_usage": 6.4,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:34": {
                    "cpu_usage": 3.7,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:36": {
                    "cpu_usage": 20.6,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:38": {
                    "cpu_usage": 2,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:40": {
                    "cpu_usage": 2.9,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:43:42": {
                    "cpu_usage": 12.4,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:43:44": {
                    "cpu_usage": 2.2,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:43:46": {
                    "cpu_usage": 6.1,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:48": {
                    "cpu_usage": 19.4,
                    "memory_usage": 25.2
                }
            },
            {
                "2023-12-12 23:43:50": {
                    "cpu_usage": 3.9,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:52": {
                    "cpu_usage": 12.5,
                    "memory_usage": 25.3
                }
            },
            {
                "2023-12-12 23:43:54": {
                    "cpu_usage": 20,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:43:56": {
                    "cpu_usage": 19.4,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:43:58": {
                    "cpu_usage": 21.2,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:00": {
                    "cpu_usage": 17.7,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:02": {
                    "cpu_usage": 1.6,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:04": {
                    "cpu_usage": 1.4,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:06": {
                    "cpu_usage": 20,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:08": {
                    "cpu_usage": 12.6,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:44:10": {
                    "cpu_usage": 21.9,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:12": {
                    "cpu_usage": 16.7,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:44:14": {
                    "cpu_usage": 23.1,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:44:16": {
                    "cpu_usage": 7.8,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:44:18": {
                    "cpu_usage": 19.1,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:20": {
                    "cpu_usage": 6.8,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:22": {
                    "cpu_usage": 5.7,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:24": {
                    "cpu_usage": 14.6,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:44:26": {
                    "cpu_usage": 7.2,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:44:28": {
                    "cpu_usage": 1.4,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:30": {
                    "cpu_usage": 15.6,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:32": {
                    "cpu_usage": 2.1,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:34": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:36": {
                    "cpu_usage": 23,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:44:38": {
                    "cpu_usage": 3.1,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:44:40": {
                    "cpu_usage": 3.3,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:44:42": {
                    "cpu_usage": 18,
                    "memory_usage": 25.4
                }
            },
            {
                "2023-12-12 23:44:44": {
                    "cpu_usage": 18.1,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:46": {
                    "cpu_usage": 27.4,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:48": {
                    "cpu_usage": 31.2,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:44:50": {
                    "cpu_usage": 13,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:44:52": {
                    "cpu_usage": 6.6,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:44:54": {
                    "cpu_usage": 37.2,
                    "memory_usage": 26.1
                }
            },
            {
                "2023-12-12 23:44:56": {
                    "cpu_usage": 14.3,
                    "memory_usage": 26.1
                }
            },
            {
                "2023-12-12 23:44:58": {
                    "cpu_usage": 8.2,
                    "memory_usage": 26.1
                }
            },
            {
                "2023-12-12 23:45:00": {
                    "cpu_usage": 18.4,
                    "memory_usage": 26.2
                }
            },
            {
                "2023-12-12 23:45:02": {
                    "cpu_usage": 3.4,
                    "memory_usage": 26.2
                }
            },
            {
                "2023-12-12 23:45:04": {
                    "cpu_usage": 6.6,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:45:06": {
                    "cpu_usage": 18.1,
                    "memory_usage": 26
                }
            },
            {
                "2023-12-12 23:45:08": {
                    "cpu_usage": 10.1,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:45:10": {
                    "cpu_usage": 3.5,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:12": {
                    "cpu_usage": 39.2,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:14": {
                    "cpu_usage": 1.4,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:45:16": {
                    "cpu_usage": 32.1,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:45:18": {
                    "cpu_usage": 4.8,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:45:20": {
                    "cpu_usage": 2.5,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:45:22": {
                    "cpu_usage": 13.9,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:45:24": {
                    "cpu_usage": 6,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:45:26": {
                    "cpu_usage": 18,
                    "memory_usage": 26.5
                }
            },
            {
                "2023-12-12 23:45:28": {
                    "cpu_usage": 12.3,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:30": {
                    "cpu_usage": 1.4,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:32": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:34": {
                    "cpu_usage": 21.4,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:36": {
                    "cpu_usage": 2.9,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:38": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:40": {
                    "cpu_usage": 13,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:42": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:44": {
                    "cpu_usage": 1.4,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:46": {
                    "cpu_usage": 12.6,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:48": {
                    "cpu_usage": 3.1,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:45:50": {
                    "cpu_usage": 0,
                    "memory_usage": 25.5
                }
            },
            {
                "2023-12-12 23:45:52": {
                    "cpu_usage": 7.8,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:45:54": {
                    "cpu_usage": 1,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:45:56": {
                    "cpu_usage": 0.4,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:45:58": {
                    "cpu_usage": 18.9,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:00": {
                    "cpu_usage": 4.1,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:46:02": {
                    "cpu_usage": 0.4,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:46:04": {
                    "cpu_usage": 16,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:46:06": {
                    "cpu_usage": 5.9,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:46:08": {
                    "cpu_usage": 5.8,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:46:10": {
                    "cpu_usage": 8.6,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:46:12": {
                    "cpu_usage": 5.7,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:46:14": {
                    "cpu_usage": 1.4,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:46:16": {
                    "cpu_usage": 14,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:18": {
                    "cpu_usage": 3.9,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:46:20": {
                    "cpu_usage": 4.7,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:22": {
                    "cpu_usage": 11.5,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:24": {
                    "cpu_usage": 5.6,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:26": {
                    "cpu_usage": 4.8,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:28": {
                    "cpu_usage": 11.4,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:30": {
                    "cpu_usage": 3.5,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:32": {
                    "cpu_usage": 5.2,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:34": {
                    "cpu_usage": 13.4,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:36": {
                    "cpu_usage": 4.1,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:38": {
                    "cpu_usage": 4.9,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:40": {
                    "cpu_usage": 14.1,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:42": {
                    "cpu_usage": 1.6,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:44": {
                    "cpu_usage": 1.2,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:46:46": {
                    "cpu_usage": 9.8,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:48": {
                    "cpu_usage": 3.5,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:46:50": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:52": {
                    "cpu_usage": 8.9,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:46:54": {
                    "cpu_usage": 5.1,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:56": {
                    "cpu_usage": 5.6,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:46:58": {
                    "cpu_usage": 11.9,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:47:00": {
                    "cpu_usage": 2.9,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:47:02": {
                    "cpu_usage": 0.2,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:47:04": {
                    "cpu_usage": 0.4,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:06": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:08": {
                    "cpu_usage": 0.4,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:10": {
                    "cpu_usage": 0.2,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:12": {
                    "cpu_usage": 1.7,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:14": {
                    "cpu_usage": 1.9,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:16": {
                    "cpu_usage": 1.2,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:18": {
                    "cpu_usage": 4.5,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:20": {
                    "cpu_usage": 1.2,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:22": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:24": {
                    "cpu_usage": 21.1,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:26": {
                    "cpu_usage": 1.8,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:28": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:30": {
                    "cpu_usage": 20.2,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:47:32": {
                    "cpu_usage": 1.2,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:47:34": {
                    "cpu_usage": 2.9,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:47:36": {
                    "cpu_usage": 31.7,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:47:38": {
                    "cpu_usage": 3.8,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:47:41": {
                    "cpu_usage": 1.9,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:47:43": {
                    "cpu_usage": 23.2,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:47:45": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:47:47": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:47:49": {
                    "cpu_usage": 25.2,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:47:51": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:47:53": {
                    "cpu_usage": 0.2,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:47:55": {
                    "cpu_usage": 23,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:47:57": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:47:59": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:01": {
                    "cpu_usage": 26.1,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:03": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:05": {
                    "cpu_usage": 1,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:07": {
                    "cpu_usage": 21.6,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:48:09": {
                    "cpu_usage": 5.5,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:11": {
                    "cpu_usage": 1.6,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:13": {
                    "cpu_usage": 21.5,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:15": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:17": {
                    "cpu_usage": 1.8,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:48:19": {
                    "cpu_usage": 23.4,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:48:21": {
                    "cpu_usage": 6.2,
                    "memory_usage": 25.6
                }
            },
            {
                "2023-12-12 23:48:23": {
                    "cpu_usage": 0.4,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:25": {
                    "cpu_usage": 20.7,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:48:27": {
                    "cpu_usage": 12.9,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:29": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:31": {
                    "cpu_usage": 26.3,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:33": {
                    "cpu_usage": 1.8,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:35": {
                    "cpu_usage": 1.2,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:48:37": {
                    "cpu_usage": 32.1,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:39": {
                    "cpu_usage": 1.8,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:41": {
                    "cpu_usage": 1.2,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:43": {
                    "cpu_usage": 26.9,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:48:45": {
                    "cpu_usage": 2.5,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:48:47": {
                    "cpu_usage": 0.6,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:48:49": {
                    "cpu_usage": 37.5,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:51": {
                    "cpu_usage": 2.5,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:53": {
                    "cpu_usage": 0.2,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:48:55": {
                    "cpu_usage": 23.6,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:48:57": {
                    "cpu_usage": 3.3,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:48:59": {
                    "cpu_usage": 0.2,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:49:01": {
                    "cpu_usage": 32.9,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:49:03": {
                    "cpu_usage": 2.7,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:49:05": {
                    "cpu_usage": 1.6,
                    "memory_usage": 25.7
                }
            },
            {
                "2023-12-12 23:49:07": {
                    "cpu_usage": 26.7,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:49:09": {
                    "cpu_usage": 2.5,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:49:11": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:49:13": {
                    "cpu_usage": 31.8,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:49:15": {
                    "cpu_usage": 3.3,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:49:17": {
                    "cpu_usage": 1,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:49:19": {
                    "cpu_usage": 28.1,
                    "memory_usage": 26
                }
            },
            {
                "2023-12-12 23:49:21": {
                    "cpu_usage": 1.8,
                    "memory_usage": 26
                }
            },
            {
                "2023-12-12 23:49:23": {
                    "cpu_usage": 0.4,
                    "memory_usage": 26.1
                }
            },
            {
                "2023-12-12 23:49:25": {
                    "cpu_usage": 30.7,
                    "memory_usage": 26
                }
            },
            {
                "2023-12-12 23:49:27": {
                    "cpu_usage": 3.3,
                    "memory_usage": 26
                }
            },
            {
                "2023-12-12 23:49:29": {
                    "cpu_usage": 0,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:49:31": {
                    "cpu_usage": 29.4,
                    "memory_usage": 26
                }
            },
            {
                "2023-12-12 23:49:33": {
                    "cpu_usage": 2.5,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:49:35": {
                    "cpu_usage": 0.8,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:49:37": {
                    "cpu_usage": 29.3,
                    "memory_usage": 26
                }
            },
            {
                "2023-12-12 23:49:39": {
                    "cpu_usage": 3.7,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:49:41": {
                    "cpu_usage": 0,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:49:43": {
                    "cpu_usage": 27.3,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:49:45": {
                    "cpu_usage": 2.5,
                    "memory_usage": 25.9
                }
            },
            {
                "2023-12-12 23:49:47": {
                    "cpu_usage": 0.6,
                    "memory_usage": 26
                }
            },
            {
                "2023-12-12 23:49:49": {
                    "cpu_usage": 38.3,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:49:51": {
                    "cpu_usage": 1.8,
                    "memory_usage": 25.8
                }
            },
            {
                "2023-12-12 23:49:53": {
                    "cpu_usage": 0.4,
                    "memory_usage": 25.8
                }
            }
        ];


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
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("cpu 使用率");
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
    .on("mouseover", function (event, d) { // 注意这里的变化，添加了 event 参数
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html("时间: " + d.date + "<br/>" + "CPU 使用率: " + d.cpuUsage)
            .style("left", (event.pageX + 10) + "px") // 使用 event 对象
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", function () {
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    });
});


