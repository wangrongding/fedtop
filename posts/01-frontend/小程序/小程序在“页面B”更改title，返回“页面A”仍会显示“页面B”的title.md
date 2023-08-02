---
title: 小程序在“页面B”更改title，返回“页面A”仍会显示“页面B”的title
date: 2020-08-11
tags:
  - 小程序
categories:
  - 前端
---

> 最近在做小程序的时候遇到这么一个有趣的问题，就是从 A 页面跳转到 B 页面，如果 B 页面需要在接口加载之后更改 title，并且如果接口请求过慢，还灭有请求完毕时就点击返回按钮回到 A 页面，这时 B 页面的请求会继续执行，并在执行完毕后修改了 A 页面的 title。

<!-- more -->

## 原因

个人猜想，小程序本身属于单页面应用，代码的运行权限没有处理好，就像上面这种情况，B 页面的代码穿越到了 A 页面的环境里面，并且执行。

## 解决

1. 既然 B 页面的请求方法可以在 A 页面执行，那么在 B 页面的方法中获取的当前的页面路由时就有可能可以获取到 A 页面的路由，经过测试果然不出所料。
2. 所以，可以这样来解决这个问题：在 B 页面的 onLoad 中获取当前页面路径，应该是`/b`，然后在方法中再次获取当前路径，可能是`/b`，也可能是`/a`，若是`/a`，则是上面提到问题情况，这个时候就不用取改变 title 了，若是`/b`，则可以更改。

## 代码

```javascript
// utils.js
const getCurrentRouter = function () {
  let arr = getCurrentPages(),
      len = arr.length;
  return arr[len - 1].route;
}

export {getCurrentRouter};


// b.js
import {getCurrentRouter};
import { getDataForB } from '../../../servies/services.js';

Page({
  onLoad (options) {
    this.currentRouter = getCurrentRouter();
  },
  // 获取数据
  getData () {
    getDataForB().then(() => {
      // 获取数据后判断router是否一致
      if (this.currentRouter == getCurrentRouter()) {
        wx.setNavigationBarTitle({
            title: '要修改的title'
        })
      }
    })
  }
})
```
