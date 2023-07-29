---
title: 'Dynamic Routing and Static Generation'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: JJ Kasper
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---

# WebRTC 从实战到未来

![](https://assets.fedtop.com/picbed/202210071605656.png)

```typescript
// 获取本地音视频流
async function getLocalStream(constraints: MediaStreamConstraints) {
  // 获取媒体流
  const stream = await navigator.mediaDevices.getUserMedia(constraints)
  // 将媒体流设置到 video 标签上播放
  playLocalStream(stream)
}

// 播放本地视频流
function playLocalStream(stream: MediaStream) {
  const videoEl = document.getElementById('localVideo') as HTMLVideoElement
  videoEl.srcObject = stream
}

getLocalStream({
  audio: false,
  video: true,
})
```

## 这篇文章可以学到什么

- 学会如何使用 WebRTC 的一些 API
- 学会如何`分享屏幕`，`录制屏幕`
- 学会如何通过 WebRTC 实现`拍照`
- 学会如何`实现视频虚拟背景`
- 搭建一个 `1v1` 的 WebRTC `实时音视频通话`

所有示例在线体验地址：[frontend-park](https://fedtop.com/webrtc) 源码地址：[frontend-park](https://github.com/wangrongding/frontend-park)

## 前言

很开心在九月签约了掘金，首先感谢平台的肯定，后面几个月我会认真的给大家带来一些有价值的文章。 所以我开了一个专栏 《WebRTC 从实战到未来》，我将通过这个专栏，分享一下自己在 WebRTC 相关技术栈上的一些经验和思考，希望能够帮助到大家。🌸

虽然这篇文章作为专栏的第一篇，但我也不会从 WebRTC 的基础知识和相关概念开始讲起，因为那样会非常的枯燥乏味，我会从实际项目中的一些能快速上手的应用出发，讲一下我在实际项目中遇到的一些问题，以及我是如何解决和实现的。这样的好处是，你可以快速的上手，更加专注于实际项目中的应用，而不是上来就是大量的概念和协议相关知识直接给整劝退了。🥲🥲🥲

## 什么是 WebRTC

`WebRTC` (Web Real-Time Communications) 是一项`实时通讯技术`，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间`点对点（Peer-to-Peer）的连接`，实现视频流和（或）音频流或者其他`任意数据`的传输。WebRTC 包含的这些标准使用户在无需安装任何插件或者第三方的软件的情况下，创建点对点（Peer-to-Peer）的数据分享和电话会议成为可能。
