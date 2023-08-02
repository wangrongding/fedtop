---
title: js变量提升以及var对变量提升的影响
date: 2019-02-04
tags:
  - JavaScript
categories:
  - 前端
---

> JavaScript 声明过的变量提升往往会影响到我们对变量的正常获取，所以特写此文，以便以后翻阅。

<!-- more -->

## 什么是变量提升

```javascript
//变量声明提升
function test() {
  var a = '1'
  var f = function () {}
  var b = '2'
  var c = '3'
}

//上述代码等价于
function test() {
  var a, f, b, c
  a = '1'
  f = function () {}
  b = '2'
  c = '3'
}
```

> js 中定义变量有两种情况：（注意在方法外不加 var 是不能定义变量的，出现 xx is not defined）
>
> 1. 都加 var，在方法内则是局部变量，在方法外则是全局变量。
> 2. 在方法内,加 var 为局部变量，不加 var 则是全局变量（在执行当前方法之后）

## 变量提升案例

### 案例 1

由于 test1 函数里面定义了变量 a，由于

```javascript
var a = "I'm a in all"

function test1() {
  console.log(a)
  console.log(window.a)

  var a = "I'm a in test1"
  console.log(a)
}

test1()
```

上述代码相当于

```javascript
var a = "I'm a in all"

function test1() {
  var a
  console.log(a) // undefined
  console.log(window.a) // I'm a in all（因为window指的是全局环境）

  a = "I'm a in test1"
  console.log(a) // I'm a in test1
}

test1()
```

### 案例 2

```javascript
var a = "I'm a in all"

function test2() {
  console.log(a) // I'm a in all

  a = "I'm a in test2" // 这里本来就是赋值，所以上边的a会输出全局变量
  console.log(a) // I'm a in test2
}

test2()
```

### 案例 3

```javascript
function test3_1() {
  console.log(a) // 报错（Uncaught ReferenceError: a is not defined），阻断以下代码的运行

  a = "I'm a in test3"
  console.log(a) // 不输出
}
console.log(a)
test3_1()

console.log(a) // 不输出
```

```javascript
function test3_2() {
  a = "I'm a in test3" // 全局变量（但是在方法执行后生效）
  console.log(a) // I'm a in test3
}

// console.log(a) // 如果在方法执行前打印，还是会报错（Uncaught ReferenceError: a is not defined），阻断以下代码的运行

test3_2()

console.log(a) // I'm a in test3（本来没有全局变量a，当test3运行时，定义了一个全局变量a，所以这里会输出）
```
