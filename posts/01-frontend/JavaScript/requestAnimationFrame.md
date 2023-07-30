---
title: 修改 requestAnimationFrame 的执行频率
date: 2019-10-10
tags:
  - Javascript
categories:
  - 前端
---

## 修改 requestAnimationFrame 的执行频率

```javascript
//当前执行时间
let nowTime = 0
//记录每次动画执行结束的时间
let lastTime = Date.now()
//我们自己定义的动画时间差值
let diffTime = 40

function animloop() {
  //记录当前时间
  nowTime = Date.now()
  // 当前时间-上次执行时间如果大于diffTime，那么执行动画，并更新上次执行时间
  if (nowTime - lastTime > diffTime) {
    lastTime = nowTime
    // doSomeThing()
  }
  requestAnimationFrame(animloop)
}
```

## 相关链接

- https://www.jianshu.com/p/1242d912bb27
