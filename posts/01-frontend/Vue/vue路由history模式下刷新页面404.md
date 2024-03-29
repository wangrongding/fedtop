---
title: vue路由history模式下刷新页面404
date: 2018-08-15
tags:
  - vue
categories:
  - 前端
---

## 原因

vue 的路由是由 js 来控制的，但是，当你刷新浏览器的时候，是向服务器发送请求的一个过程，当访问不到的时候必然会返回 404。

<!-- more -->

## 解决办法

### 后台配合

将请求同意指向一个有效地址。

比如，你的首页请求地址为 `www.aaa.com/go.html` ，但是路由变为`www.aaa.com/main`，这时候你可以与后端人员商量，将 `www.aaa.com/...` 统统指向 `www.aaa.com/go.html` ，这样就解决了 404 问题。

### 仿真路由

路由后带.html 后缀。

我遇到一个问题，就是页面初次加载时是携带参数的， `www.aaa.com/go.html?p=123` ，根据参数 p 决定是跳转路由 A 还是路由 B，加入跳转到了路由 A，也就是 `www.aaa.com/routerA` ，这时候刷新，就会出现 404 问题，这时候后端人员帮忙解释解决不了的，因为还需要携带参数。我的解决办法是：

1. 先将路由仿真：也就是将 `/routerA` 变为 `/routerA.html` ，冰袋跳转时谢丹参数，`this.$router.push({path: /routerA.html${this.$router.query.p}})`，所以刷新时，会向服务端请求 `routerA.html` ，并且携带参数 p；
2. 这时在 `www.aaa.com` 下真的存放一个 `routerA.html` ，在文件里面获取参数 p，然后跳转 `window.location.href='www.aaa.com/go.html?p=123'`。
