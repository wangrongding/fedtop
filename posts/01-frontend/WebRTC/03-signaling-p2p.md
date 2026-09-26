---
title: 疫情当下，远程兴起，前端音视频通话？学！🔥
date: 2022-12-20
tags:
  - WebRTC
categories:
  - 前端
---

# 疫情当下，远程兴起，前端音视频通话？学！🔥

## 前言

- [WebRTC 从实战到未来！迎接风口，前端必学的技术 🔥](https://juejin.cn/post/7151932832041058340)
- [WebRTC 从实战到未来！前端如何实现一个最简单的音视频通话？🔥](https://juejin.cn/post/7165539003465531399)

看到前两篇文章都非常受欢迎，非常的开心！🤖 继续加油！冲！  
我们也在前两篇文章中大概讲解了 音视频媒体流的获取，处理，以及在上一篇文章中为了更直观的演示 WebRTC 建立点对点通信的过程，通过手动交换 sdp 来建 p2p 连接，实现了一个最简单的音视频通话，但在实际的应用场景中，我们几乎不可能会通过手动来交换 sdp ，因为这样会增加很多的工作量，也不方便，所以我们借助一个信令服务器来帮助我们实现自动建立连接的这个过程。

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211132222279.png)

## 从这篇文章中你将学到

- 学会如何制作 https 的自签名证书
- 学会如何使用 nginx 反向代理 https
- 学会使用 socket.io 来实现客户端与信令服务器的通信
- 了解并实现一个 WebRTC + 信令服务器自动建立连接的音视频实时通话

## 体验地址

[👉🏻 1.本文示例在线体验地址](https://frontend-park.vercel.app/audio-and-video/webRTC/signaling-p2p)  
[👉🏻 2.本文客户端源代码地址](https://github.com/wangrongding/frontend-park)  
[👉🏻 3.本文服务端源代码地址](https://github.com/wangrongding/node-park/blob/main/src/signaling/signaling-http-server.js)

你可以开两个浏览器 tab 或者用不同的设备，根据说明即可体验。

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211132359202.png)

## 了解信令前，需要了解的几个概念

结合上一篇讲到的 `SDP` , `NAT` , `ICE`，我们还需要了解：`STUN`，`TURN`服务，以及`ICE候选者的种类`。

### 候选者的种类

WebRTC 众多的链接候选者中，可以分为三类：

- `host`：本机候选者（设备的 ipv4 或 ipv6 地址，即内网地址，一般会有两个，分别对应 udp 和 tcp，ip 相同，端口不同），ICE 尝试与对方建立 P2P 连接时的首选，一般这个地址为内网地址，如果双方位于同一个内网，那么直接建立成功。
- `srflx`：P2P 链接候选者（STUN 服务返回的你这个主机的外网地址），在第一次尝试连接失败时，说明双方不在同一个内网，ICE 将使用 STUN 服务获取主机的公网地址以及映射端口，然后开始尝试通过用这个公网 IP 和对方建立连接。
- `relay`：中继服务器候选者，如果第二次仍然失败了（当 `STUN` 不适用时(某些 NAT 会为每个连接分配不同的端口，导致获取的端口和视频连接端口并不一致），那么意味着双方无法直接建立 P2P 连接，这时候就只能通过一个中继服务器，即 `TURN` 服务器来和双方建立连接，然后中转他们之间传输的内容，这种对服务器开销最大，而且也会增加时延，所以只有在没得选择的情况下采用。

所以可以总结为三类候选者中，`host` 候选者的优先级是最高的，当 `host` 类型的候选者无法建立链接的时候，WebRTC 会从 `srflx` 候选者中进行连通性测试，也就是尝试通过 `P2P` 的方式连接双方，如果失败才会尝试使用 `relay` 的方式进行链接。

### STUN (Session Traversal Utilities for NAT)

我们需要知道的是：主机要想访问公网资源，必须有自己的公网地址，只有这样，我们才能在访问资源主机的时候，让它通过我们主机的公网地址找到我们的主机，并把你想要访问的资源发送给你。

> 一般情况下，在一个网段内的主机只有内网 IP 和端口号，那内网的主机是如何访问公网资源的呢？实际上，内网的网关都有 NAT 的功能，NAT 的功能是将内网 IP 映射转换成公网地址。当我们的内网主机想要访问公网资源的时候，内网网关会将请求的内网地址映射成公网地址，然后将请求发送到要访问的公网服务器上，服务器处理好请求之后，将响应数据传递给请求中携带的公网地址上，该公网接收到响应数据之后，它的网关就会通过之前的地址映射最终中转给内网的主机。通过这种方式实现内网主机访问公网资源的需求。  
> 基于以上的这种方式，我们可以知道内网主机虽然不知道自己在公网的地址，但是内网主机访问的服务器是知道内网主机对应的公网 IP 的，于是我们在公网中架设一台服务器，通过这台服务器可以询问到自己的公网地址。实际上这一询问流程已经被定义成了一套规范，就是 STUN 协议。  
> NAT 遍历操作由 Session Traversal Utilities for NAT (STUN) 服务器执行。 STUN 方法是一种用于终端检查其“公共 IP 地址和端口”的过程的协议。当客户端向 STUN 服务器发送请求时，它会发送通信所需的信息以及客户端用来与其他设备通信的公共 IP 地址。但是，即使在这种情况下，如果无法进行通信，也会将其传输到 TURN 服务器。

简单概括就是，我们要知道自己的`外网 IP 地址`，依靠的就是 `STUN` 服务。客户端通过给公网的 STUN 服务器发送请求获得自己的公网地址信息，以及是否能够被（穿过路由器）访问。

[协议地址](https://www.rfc-editor.org/rfc/rfc5389)

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211141044113.png)

### TURN (Session Traversal Utilities for NAT)

WebRTC 通信双方通过 P2P 的方式无法建立链接的情况下，会使用 relay 服务进行中转服务。 relay 是所有候选者中优先级最低的链接方式，但是 relay 也是连通率最高的方式。WebRTC 通信双方通过向 TURN 服务器发送 Allocation 指令获得在 relay 服务器上的端口，用于中转 UDP 数据。

> 总结上面的内容，WebRTC 的通信双方在进行链接之前会按照优先级收集链接的候选者，按照优先级的高低，分别是：在本级收集所有的 host 类型的候选者进行内网链接，通过 STUN 协议收集 srflx 候选者进行 P2P 链接，通过 TURN 协议收集 relay 候选者通过中转服务器链接并传输 UDP 数据。

很显然这种方式是开销很大的，所以只有在没得选择的情况下采用。

[协议地址](https://www.rfc-editor.org/rfc/rfc7065)

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211272053218.png)

一般我们都会通过 [coturn](https://github.com/coturn/coturn)会[restund](https://creytiv.com/restund.html)来搭建 `STUN` 和 `TURN` 服务。非常的方便，我使用的是开源社区提供的 `coturn`，它是一个比较成熟的项目。我会在第 4,5 篇文章讲到如何搭建它，这篇我们直接用现成的 `STUN` 服务就行。至于 `TURN`服务...🥲 目前我还没有一个比较好的服务器，能顶得住这种，我后面看看搞一台合适的过来搭建一个，供大家在线体验一下。

所以这篇文章我们做的 demo 可以在内网，以及网络环境不是特别复杂的外网下进行音视频通话。（一方位于 NAT 网络内部，或者双方都在 `非对称NAT`网络内的情况）

## 什么叫信令？

我们知道 `WebRTC` 想要直接通过 `P2P` 连接进行通信，需要一个中继的过程(在两个终端之间传递控制信息的过程)，这个中继的过程就称之为`信令`。  
所以简单来说，信令就是在两个设备之间发送控制信息以确定通信协议、信道、媒体编解码器和格式以及数据传输方法以及任何所需的路由信息的过程，而执行此操作的服务器称为`信令服务器`。

信令服务器按照与聊天室相同的方式对连接的节点进行逻辑分组，并帮助各端相互交换 `SDP` 等信息。

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211271715310.png)

> 关于 WebRTC 的信令流程最重要的一点是： **「信令在规范中并没有定义」** 所以开发者需要自己决定如何实现这个过程。开发者可以为应用程序引擎选择任意的信息协议（如 SIP 或 XMPP），任意双向通信信道（如 WebSocket 或 XMLHttpRequest) 与持久连接服务器的 API（如 Google Channel API）一起工作。

根据上面的说明我们就可以知道信令服务器的实现方式有很多种，可以根据要开发的服务的性质使用现有的信令协议，也可以通过轮询/长轮询或 websocket 等适当的双向通信通道来实现。

由于信令的核心是交换异步发送的对等信息（SDP，Candidate）。因此，将其实现为支持全双工通信的 websocket 最为合适。下面我面会通过 socket.io 来实现一个简单的信令服务器。

有点像村里相亲的，一开始不认识对方，没法直接联系，需要通过媒介，中间人来传递消息后，你们可能知道对方的位置啊，联系方式啊等等才能很好的直接建立联系。

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211220923424.png)

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211132222279.png)

这张图很清楚的描述了这个过程。

各端通过信令服务器交换 `SDP` 信息，然后各端通过 `P2P` 连接进行通信。

关于信令更多的详细内容可以参考：[MDN 信令的介绍](https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime#%E4%BF%A1%E4%BB%A4)，[MDN 信令与视频通话](https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling)

## 信令服务器的具体实现

下面我们主要使用 `socket.io` 来实现一个简单的信令服务器。

为什么使用它呢？

就像 Axios 是对 XMLHttpRequest 的封装， 而 Socket.io 就是对 WebSocket 的封装，并且实现了 WebSocket 的服务端代码。Socket.IO 将 WebSocket 和轮询（Polling）机制以及其它的实时通信方式封装成了通用的接口，并且在服务端实现了这些实时机制的相应代码。也就是说，WebSocket 仅仅是 Socket.IO 实现实时通信的一个子集。Socket.IO 简化了 WebSocket API，统一了返回传输的 API。

总结一下就是：

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211272137175.png)

用它来写非常的简单方便，下面我们就用 express 配合 socket.io 来实现一个简单的信令服务器。

### 信令服务的搭建

我们用 nodejs 来写服务端，首先我们要安装一下 `socket.io`

```bash
# 服务端
npm i express socket.io
```

然后我们创建一个 `server.js` 文件，用来启动一个没有业务逻辑的信令服务。

```js
import http from 'http'
import { Server } from 'socket.io'
import express from 'express'

const port = 3000
const app = express()
const httpServer = http.createServer(app)
// 创建信令服务器
const io = new Server(httpServer, {
  cors: {
    origin: '*', // 允许跨域
    methods: ['GET', 'POST'], // 允许的请求方式
    allowedHeaders: '*', // 允许的请求头
    credentials: true, // 允许携带cookie
  },
  allowEIO3: true, // 是否启用与Socket.IO v2客户端的兼容性
  transport: ['websocket'], // 仅允许websocket,["polling", "websocket"]
})

// 在指定端口启动服务器
httpServer.listen(port, () => {
  console.log('\n Http server up and running at => http://%s:%s', httpServer.address().address, httpServer.address().port)
})

// 监听用户连接
io.on('connection', (socket) => {
  console.log('connection~')

  // 监听连接断开
  socket.on('disconnect', () => {
    console.log('disconnect~')
  })
})
```

这里我们使用了 `express` 来创建一个简单的服务，然后使用 `socket.io` 来创建一个 websocket 服务。

这样一个 简单 websocket 服务架子就搭好了。我们先启动这个服务.

```bash
node server.js
```

是不是很简单~~

### 客户端需要做的事情

然后我们在客户端也要安装配套的 `socket.io-client`

```bash
# 客户端
npm i socket.io-client
```

然后我们在客户端代码中引入 `socket.io-client`，并且连接到我们刚启动的信令服务。

```js
import io from 'socket.io-client'

// 连接到信令服务
const socket = io('http://localhost:3000')
```

由于 WebRTC 是需要在 `https` 协议下才能使用的，所以我们需要在本地生成一个 自签名的`https` 证书。（当然，你客户端直接在 localhost 下测试就不需要通过 https 了）。

要不然，你在 https 协议的页面，请求 http 资源时，浏览器会报错，因为 https 页面中的资源必须是 https 的，否则浏览器会阻止加载。

https，对应的我们信令服务的地址也需要是 https，不然就会报错

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202209152158537.png)

所以下面我们需要自签一张证书。

## 自签证书

我们可以通过 openssl 生成自签证书，并将其保存在本地。我一直觉得用 OpenSSL 弄好麻烦，这里我使用 mkcert，它作为本地 https 的快速解决方案，用起来非常方便。

> [mkcert](https://github.com/FiloSottile/mkcert) 是一个用 Go 语言编写的工具，它可以轻松地为本地开发生成有效的 TLS 证书。它使用了一个名为 local CA 的根证书，这个根证书是由 mkcert 生成的，它会被安装到系统的受信任的根证书列表中。

下面一起来通过 mkcert 生成自签证书，并将其保存在本地。

### 安装 mkcert 并生成证书

我这边使用的是 macos ，安装起来很方便，其他系统的安装方式可以参考 [mkcert 文档](https://github.com/FiloSottile/mkcert),[本地 https 快速解决方案——mkcert](https://blog.dteam.top/posts/2019-04/%E6%9C%AC%E5%9C%B0https%E5%BF%AB%E9%80%9F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88mkcert.html)，基本都差不多

```sh
# 安装 mkcert
brew install mkcert
# 安装完成后，执行↓
mkcert -install
```

安装完成后，我们就可以使用 mkcert 生成自签证书了，这里我生成了一个名为 localhost 的证书，证书保存在当前目录下。

生成证书也很简单，就一行命令

```sh
# mkcert domain1 [domain2 [...]]

# 本地的直接这样就ok
mkcert localhost 127.0.0.1 ::1
```

生成的证书包含两个文件，一个是证书文件，一个是私钥文件，这两个文件都是必须的，因为证书文件是公开的，而私钥文件是私有的，它们是一对。

```sh
localhost.pem
localhost-key.pem
```

生成完毕后，不管你是在 nginx 中使用还是在 node 中使用，只需要将在 nginx 或者 node 中指定证书文件和私钥文件的路径即可。

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211231156906.png)

### node 中使用

```js
import { Server } from 'socket.io'
import express from 'express'
import https from 'https'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//https证书
const options = {
  cert: fs.readFileSync(path.join(__dirname, '../assets/localhost.pem')),
  key: fs.readFileSync(path.join(__dirname, '../assets/localhost-key.pem')),
}
const app = express()
const httpsServer = https.createServer(options, app)

httpsServer.listen(3333, '0.0.0.0', () => {
  console.log('Https server up and running...')
})
```

### nginx 中使用

在本地测试的话怎么样都行，到线上环境的时候，可以去各大云服务商申请证书，上传到服务器和自签的证书一样使用就行了，这块就不多说了。

(需要注意的是，ip 证书非常的贵，一般都是直接用一个域名证书，然后通过 nginx 做转发)

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211230136032.png)  
或者你只是想在线上测试的话，也一样通过 mkcert 工具来生成本地的自签 HTTPS 证书就行了，只不过这个证书浏览器会提示不安全，但是用来测试还是可以的。

```sh
server {
    #SSL 默认访问端口号为 443
    listen 12345 ssl;
    #请填写证书文件的相对路径或绝对路径
    ssl_certificate /path/to/localhost.pem;
    #请填写私钥文件的相对路径或绝对路径
    ssl_certificate_key /path/to/localhost-key.pem;
    #请填写绑定证书的域名
    server_name localhost;

    location / {
      proxy_pass http://localhost:3000;

      # 为了让代理服务器了解客户端将协议切换到 WebSocket 的意图，下面三个标头必须加上
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';

      # http://nginx.org/en/docs/http/websocket.html
      # https://echizen.github.io/tech/2018/10-21-nginx-websocket
    }
}
```

### 客户端使用

比如我这边用 vite 创建的项目，我在 vite.config.ts 中要配置 https，直接按照下面的代码配置就行了。其他脚手架生成的项目也是类似的。

```typescript
// https://vitejs.dev/config/
import * as fs from 'fs'

export default defineConfig((config) => ({
  // 配置主机、端口、https…
  server: {
    https: {
      key: fs.readFileSync(`${__dirname}/localhost-key.pem`),
      cert: fs.readFileSync(`${__dirname}/localhost.pem`),
    },
  },
}))
```

ok, 到这里，铺垫工作就完成了，下面我们就可以正式开始写前后端的相关逻辑了。

## 信令服务的逻辑实现

还记的我们上一篇文章中是如何实现 p2p 通信的吗？

我们通过手动传输本地和远程的 `SDP`等信息来实现 P2P 通信，所以这次我们只需要把这个过程交给 socket 服务来处理就行了。

首先我们需要安装并引入 `socket.io-client`，然后连接到我们上一小节启动的信令服务。

```typescript
import io from 'socket.io-client'
const socket = io('https://localhost:3000')
```

然后我们需要监听一些服务端的事件，这个我们根据具体需求来定义。

socket.io 最主要的就是 `on` 和 `emit` 两个方法，在客户端 `on` 用来监听服务端的事件，`emit` 用来触发服务端的事件。在服务端 `on` 用来监听客户端的事件，`emit` 用来触发客户端的事件。还有一些其他的 api 我们直接对着文档来就行，所以说它使用起来非常的简单。

### 定义客户端需要监听的事件

ok，我们先来看一下我们需要监听的事件。

```typescript
// 连接成功时触发
socket.on('connect', () => {
  handleConnect()
})

// 断开连接时触发
socket.on('disconnect', (reason) => {
  if (reason === 'io server disconnect') {
    // 断线是由服务器发起的，重新连接。
    socket.connect()
  }
  ElMessage.warning('您已断开连接')
})
// 服务端发送报错信息
socket.on('error', (data) => {
  ElMessage.error(data)
})
// 当有用户加入房间时触发
socket.on('welcome', (data) => {
  ElMessage.success(data.userId === userId ? '🦄成功加入房间' : `🦄${data.userId}加入房间`)
})
// 当有用户离开房间时触发
socket.on('leave', (data) => {
  ElMessage.warning(data.userId === userId ? '🦄成功离开房间' : `🦄${data.userId}离开房间`)
})
// 当有用户发送消息时触发
socket.on('message', (data) => {})
// 创建offer,发送给远端
socket.on('createOffer', (data) => {
  // 如果已经创建过，直接发送
  if (offerSdp) {
    socket.emit('offer', {
      userId,
      roomId: roomId.value,
      sdp: offerSdp,
    })
    return
  }
  createOffer() // 创建 offer
})
// 收到offer,创建answer
socket.on('offer', (data) => {
  createAnswer(data.sdp)
})
// 收到answer,设置远端sdp
socket.on('answer', (data) => {
  addAnswer(data.sdp)
})
```

当然你也可以根据自己的习惯直接把所有事件都包在 `socket.on('message',(data)=>{})` 里，data 里加好 type 就行，这样只需要保留几个关键事件，其余的都走 message 事件的逻辑。

### 定义信令服务端需要监听的事件

```javascript
// 用户连接
io.on('connection', (socket) => {
  console.log('connection~')
  // 用户加入房间
  socket.on('join', (data) => {
    console.log('join~', data)
    handleUserJoin(socket, data)
  })
  // 用户离开房间
  socket.on('leave', (data) => {
    console.log('leave', data)
    handleUserDisconnect(socket)
  })
  // 监听连接断开
  socket.on('disconnect', () => {
    console.log('disconnect~')
    handleUserDisconnect(socket)
  })
  //=============================
  // 用户发送 offer
  socket.on('offer', (data) => {
    socket.to(data.roomId).emit('offer', data)
  })
  // 用户发送 answer
  socket.on('answer', (data) => {
    socket.to(data.roomId).emit('answer', data)
  })
  // 用户发送消息
  socket.on('message', (data) => {
    console.log('message', data)
  })
})
```

### 客户端加入房间

接下来我们需要实现客户端加入房间的逻辑，这个逻辑其实就是告诉服务端，我要加入某个房间，然后服务端会把我这个房间的其他客户端的信息告诉我。

```typescript
// 随机一个用户名，后面你可以自己改成输入框让用户输入
const userId = Math.random().toString(36).substring(2)
// 房间号，这里随便写一个，后面你可以自己改成输入框让用户输入
const roomId = 123

// 加入房间
function joinRoom() {
  socket.emit('join', { userId, roomId })
}
```

### 服务端接手客户端加入房间的逻辑

服务端接手客户端加入房间的逻辑，其实就是把客户端的信息保存到服务端的内存中，然后把这个房间的其他客户端的信息告诉客户端。

```js
// 服务端，当用户加入房间
socket.on('join', (data) => {
  handleUserJoin(socket, data)
})

// 房间信息
const ROOM_LIST = []
// 每个房间最多容纳的人数
const MAX_USER_COUNT = 2
// 用户加入房间
function handleUserJoin(socket, data) {
  const filterRoom = ROOM_LIST.filter((item) => item.roomId === data.roomId)[0]
  let room = { roomId: data.roomId, userList: [] }

  // 判断房间是否存在
  if (filterRoom) {
    room = filterRoom
  } else {
    ROOM_LIST.push(room)
  }

  // 每个房间人数不超过预设的人数
  if (room.userList.length >= MAX_USER_COUNT) {
    socket.emit('error', '房间人数已满，请稍后再试')
    return
  }

  // 当房间里的人数为0且管理员还没有设置，设置管理员
  if (room.userList.length === 0) {
    room.admin = data.userId
  }

  // 判断用户是否已经在房间里
  if (room.userList.some((item) => item.userId === data.userId)) {
    socket.emit('error', '用户已在房间里')
    return
  }
  // 把用户信息保存到房间里
  room.userList.push(data)
  console.log(data.userId, '加入房间')

  socket.userId = data.userId
  socket.roomId = data.roomId

  // 将用户加入房间
  socket.join(data.roomId)
  // 通知房间内的其他用户
  socket.to(data.roomId).emit('welcome', data)
  // 通知自己加入房间成功，
  socket.emit('joined', data)
}
```

### 客户端创建提案

这里，我们主要对上一篇创建提案的代码中添加 socket 发送的逻辑，我们需要在当有 ICE 候选改变时，将这些 本地的 SDP 描述发送到服务端，服务端再将这些信息转发给远程的客户端。这里我们先写发送逻辑，后面再去服务端写好接收逻辑就行。

```typescript
// 成功加入房间
socket.on('joined', (room, id) => {
  ElMessage.success('🦄🦄🦄成功加入房间')
  createOffer()
})

// 创建 offer
async function createOffer() {
  // 当一个新的offer ICE候选人被创建时触发事件
  peerConnection.onicecandidate = async (event) => {
    if (event.candidate) {
      offerSdp = JSON.stringify(peerConnection.localDescription)
      // 发送 offer
      if (offerSdp) {
        socket.emit('offer', {
          userId,
          roomId: roomId.value,
          sdp: offerSdp,
        })
      }
    }
  }
  const offer = await peerConnection.createOffer()
  await peerConnection.setLocalDescription(offer)
}
```

其中的 `onicecandidate` 事件，是用来监听 ICE 服务器返回的候选地址，当 ICE 服务器返回一个新的候选地址时，就会触发该事件，这里我们通过 `socket.emit` 将这个候选地址发送给信令服务。

当你在后期连接成功的时候，其实可以把 候选人信息(candidate) 打印出来可以看看，当两个设备在同一个内网中连接的时候， candidate 的地址为一个 ipv6 长格式的内网地址和一个 ipv4 的内网地址。

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211272320557.png)

当两个设备不在同一个内网中连接的时候，可以看到 candidate 的地址最后为一个 ipv4 的外网地址,说明它尝试了两次连接，第一次是内网连接，第二次是外网连接。证明了前面说的三种类型的先后连接方式。

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211272328473.png)

### 信令服务端接收提案

接下来我们需要在服务端接收到客户端发送的提案后，将这个提案转发给远端的客户端。

```typescript
// 接收 offer
socket.on('offer', (data) => {
  // console.log('offer', data)
  socket.to(data.roomId).emit('offer', data)
})
```

### 客户端接收远程的提案

接下来我们需要在客户端接收到远程的提案后，将这个提案设置成 RemoteDescription。然后创建应答，将应答设置成本地描述，在候选人信息改变时，将应答发送给服务端。

```typescript
// 创建 answer
async function createAnswer(val: string) {
  const offer = JSON.parse(val)
  peerConnection.onicecandidate = async (event) => {
    // 当一个新的 answer ICE candidate 被创建时
    if (event.candidate) {
      socket.emit('answer', {
        userId,
        roomId: roomId.value,
        sdp: JSON.stringify(peerConnection.localDescription),
      })
    }
  }
  await peerConnection.setRemoteDescription(offer)
  const answer = await peerConnection.createAnswer()
  await peerConnection.setLocalDescription(answer)
}
```

### 客户端创建 answer 的逻辑

作为接收方，在拿到 offer 后，我们就可以创建 answer 并设置到本地描述中，然后通过信令服务器发送 answer 给对端。

```typescript
const createAnswer = async () => {
  // 解析字符串
  const offer = JSON.parse(offerSdp)
  pc.onicecandidate = async (event) => {
    // Event that fires off when a new answer ICE candidate is created
    if (event.candidate) {
      answerSdp = JSON.stringify(pc.localDescription)
    }
  }
  await pc.setRemoteDescription(offer)
  const answer = await pc.createAnswer()
  await pc.setLocalDescription(answer)
}
```

### 客户端最后再添加 answer 的逻辑

作为发起方，接下来我们需要在客户端接收到 接收方的应答后，将这个应答设置成 RemoteDescription。这样，一个最简单的 WebRTC 通信流程就完成了。

```typescript
// 添加 answer(应答)
const addAnswer = async () => {
  const answer = JSON.parse(answerSdp)
  if (!pc.currentRemoteDescription) {
    pc.setRemoteDescription(answer)
  }
}
```

### 离开房间

```typescript
// 离开房间
function handleLeave() {
  // 关闭对等连接
  peerConnection.close()
  // 发送离开的消息
  socket.emit('leave', { userId, roomId: roomId.value })
  // 关闭socket连接
  socket.disconnect()
}
```

这样我们大体的 WebRTC 通信流程就完成了，下面我们就把它部署到服务器上。

## 部署信令服务

我们可以用 `Docker` 配合 `Nginx` 来部署你的服务，这里不做重点讲，我们主要通过 `pm2` 来帮忙部署这个服务，让我们可以快捷的测试看看， `pm2` 是一个带有负载均衡功能的 Node 应用的进程管理器，可以让你的 `Node` 应用始终保持在线，同时提供了一些其他的功能，比如日志记录、进程监控、进程守护等。

### 安装 pm2

```sh
# 安装 pm2
npm install pm2 -g
```

### 启动服务

```bash
# 启动
pm2 start index.js
# 查看
pm2 list
# 停止
pm2 stop index.js
# 重启
pm2 restart index.js
# 删除
pm2 delete index.js
```

### 开机自启动

```bash
# 生成开机启动脚本
pm2 startup
# 保存当前进程列表
pm2 save
```

## 最后

[👉🏻 1.本文示例在线体验地址](https://frontend-park.vercel.app/audio-and-video/webRTC/signaling-p2p)  
[👉🏻 2.本文客户端源代码地址](https://github.com/wangrongding/frontend-park)  
[👉🏻 3.本文服务端源代码地址](https://github.com/wangrongding/node-park/blob/main/src/signaling/signaling-http-server.js)

你可以开两个浏览器 tab 或者用不同的设备，输入房间号进去体验下。

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202211132359202.png)

本篇文章主要是通过信令服务队上一篇文章的进阶处理，实现了自动连接的音视频通话。大家如果有什么问题，可以在评论区留言，我会及时回复。

所有的文章都在 [👉🏻 这个专栏中](https://juejin.cn/column/7139951010042085407) ，如果您喜欢这个专栏的文章，或者对您有一些帮助，可以点赞鼓励，我会继续产出更好的文章给大家 ~ 谢谢 🥰
