---
title: 解决 webpack 打包慢
date: 2020-07-26
tags:
  - webpack
categories:
  - 前端
---

# 解决 webpack 打包慢

pacs 系统原先打包速度在 20s 左右，但是加上影像之后，打包速度就到了 8min 以上。

## 一、查找问题

开始的时候，认为是 vue-cli 配置问题导致的，使用`speed-measure-webpack-plugin` 插件，发现并没有哪个 plugin 和 loader 耗时太长，但是总耗时就是很长。

使用控制变量法，每次删除部分影像文件的引入，最终发现是 npm 引入的`cornerstoneWADOImageLoader` 为打包后的 min.js 文件，体积超过 2M，造成的打包速度太慢。

## 二、解决方案

### 1.使用 cdn 引入

尝试使用华为云 obs 当 cdn，但是不能在请求返回头中带上 gzip 标记。所以放弃了。

### 2\. 放在 pubilc 里，不走 webpack 编译

文件放在 public 中，然后在 index.html 中引入

![](https://tcs.teambition.net/storage/31233595674ae016c618e0c40a5d9ca4d4ae?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk3ODE3NiwiaWF0IjoxNjE5MzczMzc2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjMzNTk1Njc0YWUwMTZjNjE4ZTBjNDBhNWQ5Y2E0ZDRhZSJ9.gj6FCt_Vgu4_p6g4C82emlN8cTbIAPqz8QPy6zPcJow)

修改 eslint,设置为全局变量

![](https://tcs.teambition.net/storage/31236e3638b01b19eca900447201f88c5c60?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk3ODE3NiwiaWF0IjoxNjE5MzczMzc2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjM2ZTM2MzhiMDFiMTllY2E5MDA0NDcyMDFmODhjNWM2MCJ9.UuEYOCWmAbx26k1CZeeJ0C3HJCUhvdc3Xf8ZuGLe5gY)

## 三、进一步加快速度

由于影像还有一些数百 k 的大文件，所以打包速度还是有些慢，所以我们使用了`HardSourceWebpackPlugin` 插件增加缓存，大幅增加了二次打包速度。
