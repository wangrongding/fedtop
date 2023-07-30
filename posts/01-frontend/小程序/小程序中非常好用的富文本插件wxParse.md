---
title: 小程序非常好用的富文本插件wxParse
date: 2020-08-15
tags:
  - 小程序
categories:
  - 前端
---

> 最近在小程序的开发过程中遇到这样的需求，一个搜索联想关键词高亮，另一个是将后台传过来的富文本解析成 html 展示在页面中，这里我们引入非常牛 X 的 `wxParse` ，之所以牛，是因为可以解决很多种问题，正因为如此所以它对于小程序来说也非常大，虽然只有 100 多 kb。

<!-- more -->

## 地址

[https://github.com/icindy/wxParse](https://github.com/icindy/wxParse)

##  使用

### 单行文本解析

#### wxml

```html
<import src="../../../utils/wxParse/wxParse.wxml" />

<template is="wxParse" data="{{wxParseData:article.nodes}}" />
```

#### wxss

```css
@import '../../../utils/wxParse/wxParse.wxss';
```

#### javascript

```javascript
let WxParse = require('../../../utils/wxParse/wxParse.js')

Page({
  data: {
    wxParseData: '',
  },
  toHtml() {
    let article = '<div>123 <span>456</span></div>'
    WxParse.wxParse('article', 'html', article, this, 5)
  },
})
```

### 数组文本解析

#### wxml

```html
<import src="../../../utils/wxParse/wxParse.wxml" />

<view class="list_for list_item" wx:key="{{index}}" wx:for="{{replyTemArray}}">
  <view class="list-item" data-index="{{index}}" bindtap="clickListItem">
    <template class="list_item" is="wxParse" data="{{wxParseData:item}}" />
  </view>
</view>
```

```css
@import '../../../utils/wxParse/wxParse.wxss';
```

#### javascript

```javascript
let WxParse = require('../../../utils/wxParse/wxParse.js')

Page({
  data: {
    replyTemArray: [],
  },
  // 搜索联想，关键词高亮
  keywordAssociation(keyword) {
    let _this = this

    getSearchList(keyword).then((res) => {
      _this.setData({
        searchList: res,
      })
      let dataArr = res
      for (let i = 0; i < dataArr.length; i++) {
        WxParse.wxParse('reply' + i, 'html', _this.highLight(dataArr[i].name, keyword), _this)
        if (i === dataArr.length - 1) {
          WxParse.wxParseTemArray('replyTemArray', 'reply', dataArr.length, _this)
        }
      }
    })
  },
})
```


