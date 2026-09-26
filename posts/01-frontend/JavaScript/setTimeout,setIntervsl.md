---
title: 从 setTimeout、setInterval 中得到的一些思考 🤔
date: 2021-10-10
tags:
  - Javascript
categories:
  - 前端
---

## 关于第二个参数的一些思考

```javascript
setTimeout(fn,[delay, arg1, arg2, ...]);
setTimeout(code,[delay, arg1, arg2, ...]);
```

delay 取默认值 0

```typescript
function test() {
  let start = Date.now()
  let times = []
  setTimeout(function run() {
    times.push(Date.now() - start) // 保存前一个调用的延时

    if (start + 100 < Date.now()) {
      // 100 毫秒之后，显示延时信息
      console.log(times)
    } else {
      // 否则重新调度
      setTimeout(run)
    }
  })
}
test()

// Chrome 中的输出示例：
// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100

// Node 中的输出示例：
// 2,3,3,4,6,7,8,9,9,10,12,13,14,15,16,18,19,20,21,22,23,24,26,27,
```

![alt](https://raw.githubusercontent.com/wangrongding/image-house/master/202301222323794.png)

![alt](https://raw.githubusercontent.com/wangrongding/image-house/master/202301222325697.png)

## setTimeout

> setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。

第一个参数可以是函数，也可以是字符串，如果是字符串，会被当作函数来执行。 第二个参数是毫秒数，表示多少毫秒后执行第一个参数。 后续的参数是可选的，表示传递给第一个参数的参数。

## setInterval

> setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

第一个参数可以是函数，也可以是字符串，如果是字符串，会被当作函数来执行。

## 从 setTimeout、setInterval 上看 Event Loop

### 什么是 Event Loop

### 看一道经典题，输出顺序是什么？

```typescript
async function async1() {
  console.log('1')
  await async2()
  console.log('2')
  setTimeout(function () {
    console.log('3')
  }, 0)
}

async function async2() {
  console.log('4')
  setTimeout(function () {
    console.log('5')
  }, 0)
}

console.log('6')

setTimeout(function () {
  console.log('7')
}, 0)

async1()

new Promise(function (resolve) {
  console.log('8')
  resolve()
}).then(function () {
  console.log('9')
})

// 输出结果顺序
// 6 1 4 8 2 9 7 5 3
```

## 好文

- https://zh.javascript.info/settimeout-setinterval

- https://www.jeffjade.com/2016/01/10/2016-01-10-javacript-setTimeout/
- https://www.jeffjade.com/2016/01/10/2016-01-10-javaScript-setInterval/
