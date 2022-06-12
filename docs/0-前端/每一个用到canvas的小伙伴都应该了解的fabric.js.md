---
title: 每一个用到canvas的小伙伴都应该了解的fabric.js
date: 2021-08-07
tags:
  - canvas
categories:
  - 前端
---

## 导语

我们想在画布上画个条基本的简单形状的时候，使用 Canvas 不会觉得有什么繁琐。但当画布上需要任何形式的互动，绘制复杂的图形和在特定情况需要改变图片的时候,使用原生 canvas API 将会变得很困难。  
而 Fabric 旨在解决这个问题。

> Fabric.js 是一个强大而简单的 Javascript HTML5 画布库 Fabric 在画布元素之上提供交互式对象模型 Fabric 还具有 SVG-to-canvas（和 canvas-to-SVG）解析器

<!-- more -->

![](https://assets.fedtop.com/picbed/202206122055401.png)

    为了方便,下面我将通过 vue项目 为大家讲解如何使用 Fabric

## 一、 安装

```sh
yarn add fabric -S
#or
npm i fabric -S
```

也可以在 [官网](https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js) 下载最新 js 文件,通过 script 标签引入

## 二、 使用

```html
<!-- html -->
<canvas id="canvas" width="500" height="500"></canvas>
```

### 2.1 绘制一个简单的图形

> Fabric 提供了 7 种基础形状：
>
> - fabric.Circle (圆)
> - fabric.Ellipse (椭圆)
> - fabric.Line (线)
> - fabric.Polyline (多条线绘制成图形)
> - fabric.triangle (三角形)
> - fabric.Rect (矩形)
> - fabric.Polygon (多边形)

- 矩形

```javascript
// js

//引入fabric
import { fabric } from 'fabric'

// 创建一个fabric实例
let canvas = new fabric.Canvas('canvas') //可以通过鼠标方法缩小,旋转
// or
// let canvas = new fabric.StaticCanvas("canvas");//没有鼠标交互的fabric对象

// 创建一个矩形对象
let rect = new fabric.Rect({
  left: 200, //距离左边的距离
  top: 200, //距离上边的距离
  fill: 'green', //填充的颜色
  width: 200, //矩形宽度
  height: 200, //矩形高度
})

// 将矩形添加到canvas画布上
canvas.add(rect)
```

可以看到界面中填充了一个可以通过鼠标放大缩小且可以旋转的绿色矩形  
通过对象的形式配置元素样式,非常的方便!

![](https://assets.fedtop.com/picbed/202206122055563.png)

- 圆形和三角形

```javascript
// 创建一个圆形对象
let circle = new fabric.Circle({
  left: 0, //距离左边的距离
  top: 0, //距离上边的距离
  fill: 'red', //填充的颜色
  radius: 50, //圆的半径
})
// 创建一个三角形对象
let triangle = new fabric.Triangle({
  left: 200, //距离左边的距离
  top: 0, //距离上边的距离
  fill: 'blue', //填充的颜色
  width: 100, //宽度
  height: 100, //高度
})
// 将图形形添加到canvas画布上
canvas.add(circle, triangle)
```

![](https://assets.fedtop.com/picbed/202206122056400.gif)

我们可以通过以下属性设置,决定是否可以对相关元素进行交互

```javascript
canvas.selection = false // 禁止所有选中
rect.set('selectable', false) // 只是禁止这个矩形选中
```

### 2.2 绘制图片

主要有通过 url 和 img 标签绘制两种方式

```javascript
//通过url绘制图片
fabric.Image.fromURL(
  //本地图片需要通过require来引入,require("./xxx.jpeg")
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.thaihot.com.cn%2Fuploadimg%2Fico%2F2021%2F0711%2F1625982535739193.jpg&refer=http%3A%2F%2Fimg.thaihot.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630940858&t=e1d24ff0a7eaeea2ff89cedf656a9374',
  (img) => {
    img.scale(0.5)
    canvas.add(img)
  },
)
//也可以通过标签绘制
let img = document.getElementById('img')
let image = new fabric.Image(img, {
  left: 100,
  top: 100,
  opacity: 0.8,
})
canvas.add(image)
```

![](https://assets.fedtop.com/picbed/202206122056179.png)

### 2.3 通过自定义的路径绘制

在此之前我们需要了解几个参数的含义

- M : “move”移动到某点
- L : “line”画线 x,y
- C : “curve”曲线
- A : “arc”弧
- z : 闭合路径(类似 PS 中的创建选区)

```javascript
let customPath = new fabric.Path('M 0 0 L 300 100 L 170 100  z')
customPath.set({
  left: 100,
  top: 100,
  fill: 'green',
})
canvas.add(customPath)
```

![](https://assets.fedtop.com/picbed/202206122056642.png)

```javascript
let customPath = new fabric.Path(
  'M 0 0 L 300 100 L 170 100 L 70 300 L 20 200 C136.19,2.98,128.98,0,121.32,0 z',
)
```

![](https://assets.fedtop.com/picbed/202206122056016.png)

可以看到通过路径绘制,我们可以制作非常复杂的图形(但是一般用不到,我们一般用它来解析 SVG 后拿到 path 复原图形)

### 2.4 动画

第一个参数是动画的属性，第二个参数是动画的最终位置，第三个参数是一个可选的对象，指定动画的细节：持续时间，回调，动效等。

> 第三个参数主要有
>
> - duration 默认为 500ms。可以用来改变动画的持续时间。
> - from 允许指定动画属性的起始值（如果我们不希望使用当前值）。
> - onComplete 动画结束之后的回调。
> - easing 动效函数。

#### 2.41 绝对动画

```javascript
let canvas = new fabric.Canvas('canvas')
let rect = new fabric.Rect({
  left: 400, //距离左边的距离
  top: 200, //距离上边的距离
  fill: 'green', //填充的颜色
  width: 200, //宽度
  height: 200, //高度
})
rect.animate('left', 100, {
  onChange: canvas.renderAll.bind(canvas),
  duration: 1000,
})
canvas.add(rect)
```

![](https://assets.fedtop.com/picbed/202206122056366.gif)

#### 2.42 相对动画(第二个参数通过+=,-=等来决定动画的最终效果)

```javascript
rect.animate('left', '+=100', {
  onChange: canvas.renderAll.bind(canvas),
  duration: 1000,
})
```

![](https://assets.fedtop.com/picbed/202206122057830.gif)

```javaScript
rect.set({ angle: 45 });
rect.animate("angle", "-=90", {
onChange: canvas.renderAll.bind(canvas),
duration: 2000,
});
```

![](https://assets.fedtop.com/picbed/202206122057619.gif)

#### 2.43 定义动画的动效函数

默认情况下，动画使用“easeInSine”动效执行。如果这不是你需要的，fabric 为我们提供了很多内置动画效果, fabric.util.ease 下有一大堆动效的选项。  
常用的有`easeOutBounce`,`easeInCubic`，`easeOutCubic`，`easeInElastic`，`easeOutElastic`，`easeInBounce` 和 `easeOutExpo`等

```javascript
rect.animate('left', 100, {
  onChange: canvas.renderAll.bind(canvas),
  duration: 1000,
  easing: fabric.util.ease.easeOutBounce,
})
```

![](https://assets.fedtop.com/picbed/202206122057157.gif)

### 2.5 图像滤镜

目前 Fabric 为我们提供了以下内置滤镜

- BaseFilter 基本过滤器
- Blur 模糊
- Brightness 亮度
- ColorMatrix 颜色矩阵
- Contrast 对比
- Convolute 卷积
- Gamma 伽玛
- Grayscale 灰度
- HueRotation 色调旋转
- Invert 倒置
- Noise 噪音
- Pixelate 像素化
- RemoveColor 移除颜色
- Resize 调整大小
- Saturation 饱和

#### 2.51 单个滤镜

```javascript
fabric.Image.fromURL(require('./aaa.jpeg'), (img) => {
  img.scale(0.5)
  canvas.add(img)
})
fabric.Image.fromURL(require('./aaa.jpeg'), (img) => {
  img.scale(0.5)
  // 添加滤镜
  img.filters.push(new fabric.Image.filters.Grayscale())
  // 图片加载完成之后，应用滤镜效果
  img.applyFilters()
  img.set({
    left: 300,
    top: 250,
  })
  canvas.add(img)
})
```

![](https://assets.fedtop.com/picbed/202206122057263.png)

#### 2.52 叠加滤镜

> “filters”属性是一个数组，我们可以用数组方法执行任何所需的操作：移除滤镜（pop，splice，shift），添加滤镜（push，unshift，splice），甚至可以组合多个滤镜。当我们调用 applyFilters 时，“filters”数组中存在的任何滤镜将逐个应用，所以让我们尝试创建一个既色偏又明亮（Brightness）的图像。

```javascript
fabric.Image.fromURL(require('./aaa.jpeg'), (img) => {
  img.scale(0.5)
  // 添加滤镜
  img.filters.push(
    new fabric.Image.filters.Grayscale(),
    new fabric.Image.filters.Sepia(), //色偏
    new fabric.Image.filters.Brightness({ brightness: 0.2 }), //亮度
  )
  // 图片加载完成之后，应用滤镜效果
  img.applyFilters()
  img.set({
    left: 300,
    top: 250,
  })
  canvas.add(img)
})
```

![](https://assets.fedtop.com/picbed/202206122058939.png)

可以看到多个滤镜的效果叠加显示了,当然 Fabric 还支持自定义滤镜,在本篇文章点赞过 500 后我将更新 fabric 高级篇,感谢大家的支持~

### 2.6 颜色

> 无论你是使用十六进制，RGB 或 RGBA 颜色，Fabric 都能处理的很好

#### 2.61 定义颜色

```javascript
new fabric.Color('#f55')
new fabric.Color('#aa3123')
new fabric.Color('356333')
new fabric.Color('rgb(100,50,100)')
new fabric.Color('rgba(100, 200, 30, 0.5)')
```

#### 2.62 颜色转换

```javaScript
new fabric.Color('#f55').toRgb(); // "rgb(255,85,85)"
new fabric.Color('rgb(100,100,100)').toHex(); // "646464"
new fabric.Color('fff').toHex(); // "FFFFFF"
```

我们还可以用另一种颜色叠加，或将其转换为灰度版本。

```javascript
let redish = new fabric.Color('#f55')
let greenish = new fabric.Color('#5f5')
redish.overlayWith(greenish).toHex() // "AAAA55"
redish.toGrayscale().toHex() // "A1A1A1"
```

### 2.7 渐变

Fabric 通过 setGradient 方法支持渐变，在所有对象上定义。调用 setGradient('fill', { ... })就像设置一个对象的“fill”值一样。

```javaScript
let circle = new fabric.Circle({
  left: 100,
  top: 100,
  radius: 50
});

circle.setGradient("fill", {
    // 渐变开始的位置
    x1: 0,
    y1: 0,
    // 渐变结束的位置
    x2: circle.width,
    y2: 0,
    //渐变的颜色
    colorStops: {
        // 渐变的范围(0,0.1,0.3,0.5,0.75,1)0-1之间都可以
        0: "red",
        0.2: "orange",
        0.4: "yellow",
        0.6: "green",
        0.8: "blue",
        1: "purple"
    },
});
```

![](https://assets.fedtop.com/picbed/202206122058399.png)

### 2.8 文本

fabric.Text 对象对于文本,提供了比 canvas 更丰富的功能，包括：

> - 支持多行 Multiline support 不幸的是，原生文本方法忽略了新建一行。
> - 文本对齐 Text alignment 左，中，右。使用多行文本时很有用。
> - 文本背景 Text background 背景也支持文本对齐。
> - 文字装饰 Text decoration 下划线，上划线，贯穿线。
> - 行高 Line Height 在使用多行文本时有用。
> - 字符间距 Char spacing 使文本更紧凑或更间隔。
> - 子范围 Subranges 将颜色和属性应用到文本对象的子对象中。
> - 多字节 Multibyte 支持表情符号。
> - 交互式画布编辑 On canvas editing 可以直接在画布上键入文本。

```javascript
let text = new fabric.Text(
  '大家好~这里是前埔寨\n我是荣顶~\n一个要成为开发王的男人!',
  {
    left: 0,
    top: 200,
    fontFamily: 'Comic Sans', //字体
    fontSize: 50, //字号
    fontWeight: 800, //字体粗细,可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）
    shadow: 'green 3px 3px 2px', //文字阴影,颜色，水平偏移，垂直偏移和模糊大小。
    underline: true, //下划线
    linethrough: true, //删除线
    overline: true, //上划线
    fontStyle: 'italic', //字体风格,normal（正常）或italic（斜体）
    stroke: '#c3bfbf', //描边的颜色
    strokeWidth: 1, //描边的宽度
    textAlign: 'center', //文本对齐方式
    lineHeight: 1.5, //行高
    textBackgroundColor: '#91A8D0', //文本背景颜色
  },
)
canvas.add(text)
```

![](https://assets.fedtop.com/picbed/202206122058729.png)

### 2.9 事件

fabric 中通过 on 方法来初始化事件，off 方法用来删除事件。

常用的事件有以下

- “mouse:down” 鼠标被按下
- “object:add” 对象被添加
- “after:render” 渲染完成

> 还有一大堆:  
> 鼠标事件:“mouse:down” ,“mouse:move”和“mouse:up...” 选择相关的事件：“before:selection:cleared”, “selection:created”, 详细的可以查看 [官方文档](http://fabricjs.com/events)

```javascript
canvas.on('mouse:down', function (options) {
  canvas.clear()
  let text = new fabric.Text('你点我啦~', {
    left: 200,
    top: 200,
  })
  canvas.add(text)
  console.log(options.e.clientX, options.e.clientY)
})
canvas.on('mouse:up', function (options) {
  this.text = '你没点我0.0'
  canvas.clear()
  let text = new fabric.Text('你没点我0.0', {
    left: 200,
    top: 200,
  })
  canvas.add(text)
  console.log(options.e.clientX, options.e.clientY)
})
```

![](https://assets.fedtop.com/picbed/202206122058651.gif)

Fabric 允许将侦听器直接附加到 canvas 画布中的对象上。

```javascript
let rect = new fabric.Rect({ width: 100, height: 50, fill: 'green' })
rect.on('selected', function () {
  console.log('哦吼~你选择了我')
})

let circle = new fabric.Circle({ radius: 75, fill: 'blue' })
circle.on('selected', function () {
  console.log('哈哈哈~你选择了我')
})
```

### 3.0 自由绘画

Fabric canvas 的 isDrawingMode 属性设置为 true 即可实现自由绘制模式.  
这样画布上的点击和移动就会被立刻解释为铅笔或刷子。

```javascript
let canvas = new fabric.Canvas('canvas')
canvas.isDrawingMode = true
canvas.freeDrawingBrush.color = 'blue'
canvas.freeDrawingBrush.width = 5
```

![](https://assets.fedtop.com/picbed/202206122058604.gif)

### 三、最后

很开心写下这篇文章,它是我用来总结归纳 fabric 的知识点并且非常用心的一篇文章,希望这篇文章对你有所帮助,目前 fabric 在国内还不是很火,但是 github 上已经有 19.2k 的 star 了,也算是一个明星项目.我们日常开发经常会用到 canvas,但是它的 api 对于处理复杂的业务逻辑会令人感到非常的劳累,所以我分享这篇文章,希望对大家有所帮助,点赞超过 500 我会更新 fabric.js 高级篇,感谢你的支持!

> 很高兴可以和大家一起变强！可以关注我的公众号，前埔寨。我是荣顶，和我一起在键帽和字符上横跳，在代码与程序中穿梭。
