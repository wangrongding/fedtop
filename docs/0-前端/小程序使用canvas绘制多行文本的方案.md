---
title: 微信小程序使用canvas绘制多行文本的方案
date: 2020-07-07
tags:
  - canvas
  - 小程序
categories:
  - 前端
---

\> 参数：1、canvas 对象，2、文本 3、距离左侧的距离 4、距离顶部的距离 5、6、文本的宽度

```javascript

 //多行文本支持换行 参数：1、canvas对象，2、文本 3、距离左侧的距离 4、距离顶部的距离 5、6、文本的宽度

    drawText(ctx, str, leftWidth, initHeight, titleHeight, canvasWidth) {

        var lineWidth = 0;

        var lastSubStrIndex = 0; //每次开始截取的字符串的索引

        if (str == '') {

            return;

        }

        for (let i = 0; i < str.length; i++) {

            lineWidth += ctx.measureText(str\[i\]).width;

            if (lineWidth > canvasWidth) {

                ctx.font = 'normal 100 6px sans-serif';

                ctx.fillText(

                    str.substring(lastSubStrIndex, i),

                    leftWidth,

                    initHeight

                ); //绘制截取部分

                initHeight += 8; //16为字体的高度

                lineWidth = 0;

                lastSubStrIndex = i;

                titleHeight += 30;

            }

            if (i == str.length - 1) {

                ctx.font = 'normal 100 6px sans-serif';

                //绘制剩余部分

                ctx.fillText(

                    str.substring(lastSubStrIndex, i + 1),

                    leftWidth,

                    initHeight

                );

            }

        }

        // 标题border-bottom 线距顶部距离

        titleHeight = titleHeight + 10;

        return titleHeight;

    },

```

```javascript
const ctx = wx.createCanvasContext('myCanvas')

//eg:

// 参数：1、canvas对象，2、文本 3、距离左侧的距离 4、距离顶部的距离 5、6、文本的宽度

this.drawText(ctx, 'xxxxx内容xxxxx', 20, 230, 148, 320)
```
