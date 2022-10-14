# WebRTC

## 学习 WebRTC 必须知道的五个协议

WebRTC API 就是建立于他们之上

### NAT（Network Address Translation）

NAT (网络地址翻译) 是一个能够让多台主机共享一个 IP 地址的技术。NAT 会给局域网内每台主机分配一个唯一的地址同时调整输入和输出的网络流量，使之能够发送到正确的位置。

网络地址转换协议 Network Address Translation (NAT) 用来给你的（私网）设备映射一个公网的 IP 地址的协议。一般情况下，路由器的 WAN 口有一个公网 IP，所有连接这个路由器 LAN 口的设备会分配一个私有网段的 IP 地址（例如 192.168.1.3）。私网设备的 IP 被映射成路由器的公网 IP 和唯一的端口，通过这种方式不需要为每一个私网设备分配不同的公网 IP，但是依然能被外网设备发现。

<!-- TODO 图 -->

### TURN（Traversal Using Relays around NAT）

一些路由器使用一种“对称型 NAT”的 NAT 模型。这意味着路由器只接受和对端先前建立的连接（就是下一次请求建立新的连接映射）。

NAT 的中继穿越方式 Traversal Using Relays around NAT (TURN) 通过 TURN 服务器中继所有数据的方式来绕过“对称型 NAT”。你需要在 TURN 服务器上创建一个连接，然后告诉所有对端设备发包到服务器上，TURN 服务器再把包转发给你。很显然这种方式是开销很大的，所以只有在没得选择的情况下采用。

[协议地址](https://www.rfc-editor.org/rfc/rfc7065)

<!-- TODO 图 -->

### TURN (Session Traversal Utilities for NAT)

NAT 的会话穿越功能 Session Traversal Utilities for NAT (STUN) (缩略语的最后一个字母是 NAT 的首字母) 是一个允许位于 NAT 后的客户端找出自己的公网地址，判断出路由器阻止直连的限制方法的协议。

客户端通过给公网的 STUN 服务器发送请求获得自己的公网地址信息，以及是否能够被（穿过路由器）访问。

[协议地址](https://www.rfc-editor.org/rfc/rfc5389)

### ICE (Interactive Connectivity Establishment)

https://developer.mozilla.org/zh-CN/docs/Glossary/ICE

交互式连接设施 Interactive Connectivity Establishment (ICE) 是一个允许你的浏览器和对端浏览器建立连接的协议框架。在实际的网络当中，有很多原因能导致简单的从 A 端到 B 端直连不能如愿完成。这需要绕过阻止建立连接的防火墙，给你的设备分配一个唯一可见的地址（通常情况下我们的大部分设备没有一个固定的公网地址），如果路由器不允许主机直连，还得通过一台服务器转发数据。ICE 通过使用以下几种技术完成上述工作。

[协议地址](https://www.rfc-editor.org/rfc/rfc5245)

### SDP (Session Description Protocol)

会话描述协议 Session Description Protocol (SDP) 是一个描述多媒体连接内容的协议，例如分辨率，格式，编码，加密算法等。所以在数据传输时两端都能够理解彼此的数据。本质上，这些描述内容的元数据并不是媒体流本身。

从技术上讲，SDP 并不是一个真正的协议，而是一种数据格式，用于描述在设备之间共享媒体的连接。

记录 SDP 远远超出了本文档的范围。但是，这里有几件事值得注意。

[协议地址](https://www.rfc-editor.org/rfc/rfc3264)

## WebRTC 各种协议是如何相互交互的？

https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Connectivity

## 信令服务器

https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Signaling_and_video_calling

https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime#%E4%BF%A1%E4%BB%A4

### 什么叫信令？

信令是在两个设备之间发送控制信息以确定通信协议、信道、媒体编解码器和格式以及数据传输方法以及任何所需的路由信息的过程。 关于 WebRTC 的信令流程最重要的一点是：**信令在规范中并没有定义。**所以开发者需要自己决定如何实现这个过程。开发者可以为应用程序引擎选择任意的信息协议（如 SIP 或 XMPP），任意双向通信信道（如 WebSocket 或 XMLHttpRequest) 与持久连接服务器的 API（如 Google Channel API）一起工作。

你可能会想，为什么这么一个对于建立 WebRTC 连接至关重要的基本过程居然没有定义在规范里？ 答案很简单：由于两个设备无法直接相互联系，规范无法预测 WebRTC 的所有可能用例，因此更明智的做法就是让开发人员们自己选择合适的网络技术和消息传递协议。

加微信？谈恋爱，没有微信，借助第三方闺蜜

## 拨打微信

微信接收，轮询 socket，第三方？p2p？

## IP 查询

- 如何获取内网 IP

- 如何获取外网 IP

https://www.ip138.com/

https://nordvpn.com/zh/ip-lookup/

获取 IP 地址 https://iq.opengenus.org/get-ip-addresses-using-javascript/

检测 ice 穿透的在线工具

https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/

## 自签证书

我们可以通过 openssl 生成自签证书，并将其保存在本地。但是好麻烦，这里我使用 mkcert 工具生成自签证书，并将其保存在本地。

```sh
brew install mkcert
mkcert -install
```

```sh
mkcert localhost 127.0.0.1 ::1
```

https://www.jianshu.com/p/7cb5c2cffaaa

## 兼容性等测试

- [关于 WebRTC 浏览器兼容性测试那些事](https://zhuanlan.zhihu.com/p/50866330)
- [Agora WebRTC 预呼测试](https://webdemo.agora.io/agora_webrtc_troubleshooting/)
- [WebRTC 库的现状](https://stackoverflow.com/questions/24857637/current-state-of-javascript-webrtc-libraries/24879451#24879451)

## 网络协议

https://zhuanlan.zhihu.com/p/73914640

https://juejin.cn/post/6844904125692379143#heading-6

## 引用

https://baijiahao.baidu.com/s?id=1714740880954778889&wfr=spider&for=pc

https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Protocols

https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Session_lifetime

## webRTC 的安全隐患

https://www.expressvpn.com/webrtc-leak-test

https://www.expressvpn.com/webrtc-leak-test#chrome

https://www.expressvpn.com/internet-privacy/webrtc-leaks/
