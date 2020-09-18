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

## 环境

```
OS: Mac OS X 10.15.6
CPU: Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz
Memory: 16 GB

# install nginx-with-njs via https://github.com/denji/homebrew-nginx
brew tap denji/nginx
brew install nginx-full --with-njs-module
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

因为 [njs](https://github.com/nginx/njs) 没有 JIT，所以 node 也关闭 JIT 来测试

## hello world

**nginx-worker-1**

```
➜  wrk -t6 -c400 -d30s http://localhost:8000/
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

**nginx-worker-8**

```
➜  nginx wrk -t6 -c400 -d30s http://localhost:8000/
Running 30s test @ http://localhost:8000/
  6 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    13.34ms   70.96ms 889.68ms   96.88%
    Req/Sec    12.50k     3.70k   24.25k    79.13%
  1655900 requests in 30.10s, 251.01MB read
  Socket errors: connect 150, read 0, write 0, timeout 0
Requests/sec:  55007.44
Transfer/sec:      8.34MB
```

**node-without-jit**

```
➜  wrk -t6 -c400 -d30s http://localhost:3000/
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

**node-jit**

```
➜  wrk -t6 -c400 -d30s http://localhost:3000/
Running 30s test @ http://localhost:3000/
  6 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     6.01ms    0.86ms  39.24ms   87.93%
    Req/Sec     6.68k     0.98k    8.65k    71.71%
  1201025 requests in 30.10s, 174.10MB read
  Socket errors: connect 150, read 202, write 0, timeout 0
Requests/sec:  39896.92
Transfer/sec:      5.78MB
```

- hello-world 例子因为完全没有业务逻辑，可以看出 nginx 在请求处理上的性能是优于 node 
- node 中把很多在 `nginx + njs` 组合中由 nginx 实现的部分移到了 js 中，比如路由处理，因此开启 JIT 后两者的差距缩小很多，但是依然落后于 nginx

## ssr

**nginx-worker-1**

```
➜  wrk -t6 -c400 -d30s http://localhost:8000/
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

**nginx-worker-8**

```
➜  wrk -t6 -c400 -d30s http://localhost:8000/
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

**node-without-jit**

```
➜  wrk -t6 -c400 -d30s http://localhost:3000/
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

**node-jit**

```
➜  wrk -t6 -c400 -d30s http://localhost:3000/
Running 30s test @ http://localhost:3000/
  6 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    76.47ms    6.04ms 201.04ms   80.41%
    Req/Sec   533.04     85.73   750.00     62.39%
  95622 requests in 30.05s, 341.33MB read
  Socket errors: connect 150, read 148, write 0, timeout 0
Requests/sec:   3182.21
Transfer/sec:     11.36MB
```

- 对比 `nginx-worker-1` 和 `nginx-worker-8` 当计算能力成为瓶颈的时候，多进程的优势体现出来
- nginx 基建 + js-with-jit 可以做到和 openresty 一样的性能，按 [这里](https://medium.com/swlh/a-real-world-comparison-of-web-frameworks-with-a-focus-on-nodejs-c00efe1df7ca) 的测试 2倍 于 node
- 上述的组合于 openresty 重合的工作很多，但是实质的差别仅仅是使用一个带 jit 的 js vm 替换 openresty 架构中的 lua vm，从结果来看和直接做一个 js -> lua 的编译器取得的效果差不多

## 未来深入源码对比

目前了解的 nginx 知识来看，nginx 的高性能得益于它的进程模型，以及对内存的节约使用。而它基于事件的进程模型实际上和 node 很相似，而且 node 中的 [http-parser](https://github.com/nodejs/http-parser) 的实现几乎和 nginx 中的一致，这就说明在 node 中也是有意识的在底层（c++）控制内存的使用

所以需要继续从实现上研究为什么 `hello world#nginx-worker-1` 和 `hello world#node-jit` 之间有相当大的差距，既然目前确定 nginx + js 的方案因为和 openresty 无二所以没有轮子的必要，那么从目前 node 的层面，能不能、怎样才能至少在 hello-world 层面缩短其与 nginx 之前的差距
