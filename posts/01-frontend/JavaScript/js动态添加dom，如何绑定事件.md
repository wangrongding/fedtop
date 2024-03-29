---
title: js动态添加dom，如何绑定事件
date: 2020-05-24
tags:
  - JavaScript
categories:
  - 前端
---

## 原理

首先要明白浏览器在加载页面的时候是按顺序来加载的，这样以来就很清楚了，js 动态添加 dom 以后，这些 dom 并没有绑定事件，这个时候最简单的一个办法就是：将绑定事件的方法封装到一个函数 A 中，在动态添加完 dom 以后立即执行一次函数 A 即可。

<!-- more -->

## 注意

其次需要注意的是，在你可能同时需要添加许多的 dom，不要添加一个就执行一次函数 A，这样会增加浏览器的负载，你需要在所有 dom 添加完以后在执行函数 A，例如你用一个 for 循环遍历 dom 组合并拼接成一个字符串，然后添加到某个父级 dom 里面，这个时候你需要在循环外添加一次就可以了。

## 代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>添加div并绑定点击事件</title>
    <style>
      div.btn {
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: solid 1px #000;
        cursor: pointer;
      }
      div.innerDiv {
        width: 50px;
        height: 50px;
        background-color: black;
        margin: 10px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="aa">
      <div class="btn">添加div并绑定点击事件</div>
      <div class="outerDiv"></div>
    </div>
    <script>
      function getClass(classname) {
        return document.getElementsByClassName(classname)
      }
      getClass('btn')[0].onclick = function () {
        addDom()
      }
      //    将点击事件封装为函数
      function funA() {
        for (var i = 0; i < getClass('innerDiv').length; i++) {
          getClass('innerDiv')[i].onclick = function () {
            alert(this.innerText)
          }
        }
      }
      //    将添加dom封装为函数
      function addDom() {
        var oldHtml = ''
        for (var j = 0; j < 6; j++) {
          oldHtml += '<div class="innerDiv">' + j + '</div>'
        }
        getClass('outerDiv')[0].innerHTML = oldHtml
        funA()
      }
      //    如果将函数A放在这里就不会起作用的
      //    funA();
    </script>
  </body>
</html>
```
