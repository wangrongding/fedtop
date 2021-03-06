---
title: 小程序中如何用canvas画出圆角的矩形
date: 2020-05-11
tags:
  - canvas
  - 小程序
categories:
  - 前端
---

\> \*\*\*`"曲线救国"`

\> 画出一个封闭的图形后调用 stroke 或 fill 方法，默认 stroke 或 fill 的颜色是 black

\> 如果这个矩形选区只是 canvas 画布的一部分，为了避免对后续的影响，最好在 beginPath 之前，将之前的动作 save ，然后画完后再 restore

```javascript

   /**

     \* 绘制圆角矩形

     \* @param {*} x 起始点x坐标

     \* @param {*} y 起始点y坐标

     \* @param {*} w 矩形宽

     \* @param {*} h 矩形高

     \* @param {*} r 圆角半径

     \* @param {*} ctx 画板上下文

     */

    darwRoundRect(x, y, w, h, r, ctx) {

        ctx.save();

        ctx.beginPath();



        // 左上弧线

        ctx.arc(x + r, y + r, r, 1 * Math.PI, 1.5 * Math.PI);

        // 左直线

        ctx.moveTo(x, y + r);

        ctx.lineTo(x, y + h - r);

        // 左下弧线

        ctx.arc(x + r, y + h - r, r, 0.5 * Math.PI, 1 * Math.PI);

        // 下直线

        ctx.lineTo(x + r, y + h);

        ctx.lineTo(x + w - r, y + h);

        // 右下弧线

        ctx.arc(x + w - r, y + h - r, r, 0 * Math.PI, 0.5 * Math.PI);

        // 右直线

        ctx.lineTo(x + w, y + h - r);

        ctx.lineTo(x + w, y + r);

        // 右上弧线

        ctx.arc(x + w - r, y + r, r, 1.5 * Math.PI, 2 * Math.PI);

        // 上直线

        ctx.lineTo(x + w - r, y);

        ctx.lineTo(x + r, y);



        ctx.setShadow(0, 0, 10, '#c1c1c1', '#c3c3c3');

        ctx.setFillStyle('white');

        ctx.fill();

        ctx.restore();

    }

```

**最后:希望大家补充其它相关方法,分享是每一位程序员都要有的美德~**

转载请注明出处!谢谢~ by:汪荣顶
