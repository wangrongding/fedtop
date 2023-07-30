---
title: 前端JS获取内网IP
date: 2019-01-21
tags:
  - WebRTC
categories:
  - 前端
---

```javascript
//方法一:
function getUserIP() {
  var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection
  if (RTCPeerConnection)
    (() => {
      var rtc = new RTCPeerConnection()
      rtc.createDataChannel('') //创建一个可以发送任意数据的数据通道
      rtc.createOffer(
        (offerDesc) => {
          //创建并存储一个sdp数据
          rtc.setLocalDescription(offerDesc)
        },
        (e) => {
          console.log(e)
        },
      )
      rtc.onicecandidate = (evt) => {
        //监听candidate事件
        if (evt.candidate) {
          var ip_addr = evt.candidate.address
          localStorage.setItem('ip_addr', ip_addr)
        }
      }
    })()
  else {
    console.log('目前仅测试了chrome浏览器OK')
  }
}

//方法二:

function getUserIP(onNewIP) {
  let MyPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection
  let pc = new MyPeerConnection({
    iceServers: [],
  })
  let noop = () => {}
  let localIPs = {}
  let ipRegex = /(\[0-9\]{1,3}(\\.\[0-9\]{1,3}){3}|\[a-f0-9\]{1,4}(:\[a-f0-9\]{1,4}){7})/g
  let iterateIP = (ip) => {
    if (!localIPs[ip]) onNewIP(ip)
    localIPs[ip] = true
  }
  pc.createDataChannel('')
  pc.createOffer()
    .then((sdp) => {
      sdp.sdp.split('\\n').forEach(function (line) {
        if (line.indexOf('candidate') < 0) return
        line.match(ipRegex).forEach(iterateIP)
      })
      pc.setLocalDescription(sdp, noop, noop)
    })
    .catch((reason) => {})
  pc.onicecandidate = (ice) => {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return ice.candidate.candidate.match(ipRegex).forEach(iterateIP)
  }
}

function getUserIP(onNewIP) {
  let MyPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection
  let pc = new MyPeerConnection({
    iceServers: [],
  })
  let noop = () => {}
  let localIPs = {}
  let ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g
  let iterateIP = (ip) => {
    if (!localIPs[ip]) onNewIP(ip)
    localIPs[ip] = true
  }
  pc.createDataChannel('')
  pc.createOffer()
    .then((sdp) => {
      sdp.sdp.split('\n').forEach(function (line) {
        if (line.indexOf('candidate') < 0) return
        line.match(ipRegex).forEach(iterateIP)
      })
      pc.setLocalDescription(sdp, noop, noop)
    })
    .catch((reason) => {})
  pc.onicecandidate = (ice) => {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return
    ice.candidate.candidate.match(ipRegex).forEach(iterateIP)
  }
}
```
