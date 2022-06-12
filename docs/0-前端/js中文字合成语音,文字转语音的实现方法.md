---
title: js中文字合成语音,文字转语音的实现方法
date: 2020-05-11
tags:
  - JavaScript
categories:
  - 前端
---

SpeechSynthesisUtterance 是 HTML5 中新增的 API,用于将指定文字合成为对应的语音.也包含一些配置项,指定如何去阅读(语言,音量,音调)等,该 api 对于盲人或弱视用户是非常有用的!

```javascript
var msg = new SpeechSynthesisUtterance('这里是转语音的测试文本,')

window.speechSynthesis.speak(msg)
```

\> \*\*SpeechSynthesisUtterance 基本属性\*\*

SpeechSynthesisUtterance.lang 获取并设置话语的语言

SpeechSynthesisUtterance.pitch 获取并设置话语的音调(值越大越尖锐,越低越低沉)

SpeechSynthesisUtterance.rate 获取并设置说话的速度(值越大语速越快,越小语速越慢)

SpeechSynthesisUtterance.text 获取并设置说话时的文本

SpeechSynthesisUtterance.voice 获取并设置说话的声音

SpeechSynthesisUtterance.volume 获取并设置说话的音量

>

> \*\*speechSynthesis 对象，主要作用是触发行为，例如读，停，还原等\*\*

> speak() – 只能接收 SpeechSynthesisUtterance 作为唯一的参数，作用是读合成的话语。

> stop() – 立即终止合成过程。

> pause() – 暂停合成过程。

> resume() – 重新开始合成过程。

> getVoices – 此方法不接受任何参数，用来返回浏览器支持的语音包列表，是个数组。

>

```javascript
//因此也可以这么写

var msg = new window.SpeechSynthesisUtterance()

msg.text = '你好，世界！'
```

> **该 Api 的一些回调方法**

> onstart – 语音合成开始时候的回调。

onpause – 语音合成暂停时候的回调。

onresume – 语音合成重新开始时候的回调。

onend – 语音合成结束时候的回调。

!\[在这里插入图片描述\](https://img-blog.csdnimg.cn/20201105175635861.png?x-oss-process=image/watermark,type\_ZmFuZ3poZW5naGVpdGk,shadow\_10,text\_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjAzODI0NQ==,size\_16,color\_FFFFFF,t\_70#pic_center)
