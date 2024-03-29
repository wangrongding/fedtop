---
title: 跨域解决方案之proxyTable
date: 2018-12-28
tags:
  - vue
  - webpack
categories:
  - 前端
---

> 在开发阶段，前端调用后端接口可能会出现跨域问题，在 vue-cli 中已经为我们集成了[**http-proxy-middleware**](https://github.com/chimurai/http-proxy-middleware)，我们只需要在`config/index.js`中的 proxyTable 配置即可。

<!-- more -->

如果接口是`www.aaa.com/get/getList`，那么有两种配置方案：

- 方法一

```
proxyTable: {
  '/api': {
    target: 'www.aaa.com',
    pathRewrite: {
      '^/api': '/get'
    }
  }
}
```

这个时候我们请求`/api/getList`就是请求`www.aaa.com/get/getList`

- 方法二

```
proxyTable: {
  '/api': {
    target: 'www.aaa.com',
    pathRewrite: {
      '^/api': ''
    }
  }
}
```

这个时候我们请求`/api/get/getList`就是请求`www.aaa.com/get/getList`
