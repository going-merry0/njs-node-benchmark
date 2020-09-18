## 测试文件

```
src
├── http.js                 njs hello world
├── index.jsx               ssr sample source
├── nginx.hello.conf        njs hello config
├── render.js               ssr sample of njs version
├── render.node.js          ssr sample of node version
├── server.hello.js         node-koa hello-world server
└── server.js               node-koa ssr server
```

## 测试指令

```bash
# nginx 启动、重启
nginx
nginx -s reload

# node without JIT
node --jitless ./src/server.js

wrk -t6 -c400 -d30s http://localhost:8000/
```

## hello world

nginx

```
➜  servers wrk -t6 -c400 -d30s http://localhost:8000/
Running 30s test @ http://localhost:8000/
  6 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.53ms    3.56ms 117.21ms   98.19%
    Req/Sec     9.24k     1.58k   18.07k    76.48%
  1650400 requests in 30.01s, 250.18MB read
  Socket errors: connect 150, read 100, write 0, timeout 0
Requests/sec:  54990.91
Transfer/sec:      8.34MB
```

node

```
➜  servers wrk -t6 -c400 -d30s http://localhost:3000/
Running 30s test @ http://localhost:3000/
  6 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    35.83ms   13.13ms 253.90ms   97.46%
    Req/Sec     1.17k   187.59     1.72k    75.98%
  207994 requests in 30.04s, 30.15MB read
  Socket errors: connect 150, read 157, write 0, timeout 0
Requests/sec:   6922.87
Transfer/sec:      1.00MB
```

## ssr

nginx-worker-1

```
➜  servers wrk -t6 -c400 -d30s http://localhost:8000/
Running 30s test @ http://localhost:8000/
  6 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.04s   160.74ms   2.00s    87.60%
    Req/Sec    37.84     13.64   101.00     79.66%
  6765 requests in 30.09s, 24.29MB read
  Socket errors: connect 150, read 195, write 0, timeout 89
Requests/sec:    224.84
Transfer/sec:    826.67KB
```

nginx-worker-8

```
➜  servers wrk -t6 -c400 -d30s http://localhost:8000/
Running 30s test @ http://localhost:8000/
  6 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   215.14ms  250.04ms   1.73s    81.58%
    Req/Sec   221.34    118.22   630.00     64.55%
  39729 requests in 30.09s, 142.65MB read
  Socket errors: connect 150, read 179, write 0, timeout 0
Requests/sec:   1320.39
Transfer/sec:      4.74MB
```

node

```
➜  servers wrk -t6 -c400 -d30s http://localhost:3000/
Running 30s test @ http://localhost:3000/
  6 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   282.96ms   40.25ms 687.98ms   88.07%
    Req/Sec   139.83     34.10   222.00     64.66%
  25100 requests in 30.07s, 89.60MB read
  Socket errors: connect 150, read 208, write 0, timeout 0
Requests/sec:    834.82
Transfer/sec:      2.98MB
```
