---
title: 微信小程序中当有异步操作或者耗时同步操作时，不能保证app.js中的onLaunch与page.js中onLoad先后执行顺序的解决方案
date: 2020-07-23
tags:
  - 小程序
categories:
  - 前端
---

# 微信小程序中当有异步操作或者耗时同步操作时，不能保证 app.js 中的 onLaunch 与 page.js 中 onLoad 先后执行顺序的解决方案

> 我在此为大家汇总了三种解决方案,大家普遍都会用这里的前两种方法,个人认为我的第三种方法更加巧妙且方便

## 方法一:

> **解决方法：定义回调函数** 小程序网络请求默认为异步请求，在 appjs 的 onLaunch 运行后进行异步请求时，程序不会停止，Page 页已执行 onload, 我们希望 onLaunch 执行完后再执行 onload。 目标: onLaunch 请求完 －> 再执行 Page 的 onLoad 方法缺点:每个有可能的页面都要添加相关回调逻辑

```javascript
//app.js

App({
  onLaunch: function () {
    wx.request({
      url: 'http://test.cn/login', //仅为示例，并非真实的接口地址
      data: {},
      success: function (res) {
        this.globalData.checkLogin = true
        //由于这里是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        if (this.checkLoginReadyCallback) {
          this.checkLoginReadyCallback(res)
        }
      },
    })
  },
  globalData: {
    checkLogin: false,
  },
})

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    test: false,
  },
  onLoad: function () {
    let that = this
    //判断onLaunch是否执行完毕
    if (app.globalData.checkLogin) {
      that.setData({
        test: true,
      })
    } else {
      app.checkLoginReadyCallback = (res) => {
        that.setData({
          test: true,
        })
      }
    }
  },
})
```

执行顺序：[App] onLaunch -> [Page] onLoad -> [App] onLaunch sucess callback-> [Page] onLoad

## 方法二:

> **解决方法：将 onLaunch 中的代码片段拿出来 用 promise 重构一下** > [promise 的 NPM 地址](https://www.npmjs.com/package/es6-promise) > [promiseCDN](https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.min.js) 将压缩版本的源码直接复制出来 在小程序中创建一个 promise.js 的文件 直接粘贴进去 然后在 app.js 中引用 `const Promise = require('utils/promise.js');` 缺点:每个有可能的页面都要添加相关逻辑

```javascript

//app.js:
//将你本来写在 onLaunch 中的代码片段拿出来 重新写一个方法*
onLaunch:function(){
	login:function(){
    let that = this;
    return new Promise(function (resolve, reject) {
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            // console.log('获取用户登录凭证：' + code);
            // ------ 发送凭证 ------
            /*
            * 通过code获取登录session
            */
            wx.request({
              url: 'xxx/login?code=' + res.code,
              method: 'GET',
              header: {
                'content-type': 'application/json'
              },
              success: function (res) {
                console.log(res)
                if (res.statusCode == 200) {
                  // 注意这里
                  resolve(res);
                } else {
                  console.log(res.errMsg)
                }
              },
            })
          } else {
            console.log('获取用户登录失败：' + res.errMsg);
          }
        }
      })
    })
  }
}


//page.js

onLoad: function (options) {
    let _this = this;
    app.login().then(function (res) {
      let newDate = new Date();
      // 修改到当前的时间
      _this.changeNowTime();
    })
},

```

## 方法三:

> **解决方法：通过 getCurrentPages()[0].onLoad()重新执行一次 page.js 中的 onLoad 方法** 不用每个页面都写相关逻辑,只需要在 app.js 中加入以下几行相关代码即可 **缺点:page.js 中的 onload 方法会执行两次!**

```javascript
//app.js
 onLaunch: function (info) {
        //当进入小程序的场景为通过分享进入时,预防onLoad钩子请求不到数据
        if (info.path !== 'xxxxx/xxx/xxx') {
            console.log('info', info);
            setTimeout(() => {
                console.log('getCurrentPages', getCurrentPages());
                getCurrentPages()[0].onLoad(info.query);
            }, 1000);
        }
        // 登录
        wx.login({
            success: (xxx) => {
               	//xxxxxx
            },
        });
    }
```

## 最后:希望大家补充其它相关方法,分享是每一位程序员都要有的美德~

转载请注明出处!谢谢~ by:汪荣顶
