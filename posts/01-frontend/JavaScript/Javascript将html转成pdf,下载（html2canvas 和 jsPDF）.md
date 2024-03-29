---
title: Javascript将html转成pdf,下载（html2canvas 和 jsPDF）
date: 2019-02-01
categories:
  - 前端
author: 汪荣顶
---

# Javascript 将 html 转成 pdf,下载（html2canvas 和 jsPDF）

## html2canvas

简介

我们可以直接在浏览器端使用 html2canvas,对整个或局部页面进行‘截图’。但这并不是真的截图，而是通过遍历页面 DOM 结构，收集所有元素信息及相应样式，渲染出 canvas  
image。

由于 html2canvas 只能将它能处理的生成 canvas  
image，因此渲染出来的结果并不是 100%与原来一致。但它不需要服务器参与，整个图片都由客户端浏览器生成，使用很方便。

使用

使用的 API 也很简洁，下面代码可以将某个元素渲染成 canvas：

```
html2canvas(element, {
    onrendered: function(canvas) {
        // canvas is the final rendered <canvas> element
    }
});
```

通过 onrendered 方法，可以将生成的 canvas 进行回调，比如插入到页面中：

```
html2canvas(element, {
    onrendered: function(canvas) {
       document.body.appendChild(canvas);
    }
});
```

做个小例子代码如下，在线展示链接[demo1](https://linwalker.github.io/render-html-to-pdf/demo1.html)

```
<html>
  <head>
    <title>html2canvas example</title>
    <style type=&quot;text/css&quot;>...</style>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li>one</li>
          ...
        </ul>
      </nav>
    </header>
    <section>
      <aside>
        <h3>it is a title</h3>
        <a href=&quot;&quot;>Stone Giant</a>
        ...
     </aside>
      <article>
        !\[\](./Stone.png)
        <h2>Stone Giant</h2>
        <p>Coming ... </p>
        <p>以一团石头...</p>
      </article>
    </section>
    <footer>write by linwalker @2017</footer>
    <script type=&quot;text/javascript&quot; src=&quot;./html2canvas.js&quot;></script>
    <script type=&quot;text/javascript&quot;>
        html2canvas(document.body, {
          onrendered:function(canvas) {
            document.body.appendChild(canvas)
          }
        })
    </script>
  </body>
</html>
```

这个例子将页面 body 中的元素渲染成 canvas，并插入到 body 中

## jsPDF

jsPDF 库可以用于浏览器端生成 PDF。

文字生成 PDF

使用方法如下：

```
// 默认a4大小，竖直方向，mm单位的PDF
var doc = new jsPDF();

// 添加文本‘Download PDF’
doc.text('Download PDF!', 10, 10);
doc.save('a4.pdf');
```

在线演示[demo2](https://linwalker.github.io/render-html-to-pdf/demo2.html)

图片生成 PDF

使用方法如下：

```
// 三个参数，第一个方向，第二个单位，第三个尺寸格式
var doc = new jsPDF('landscape','pt',\[205, 115\])

// 将图片转化为dataUrl
var imageData = ‘data:image/png;base64,iVBORw0KGgo...’;

doc.addImage(imageData, 'PNG', 0, 0, 205, 115);
doc.save('a4.pdf');
```

在线演示[demo3](https://linwalker.github.io/render-html-to-pdf/demo3.html)

文字与图片生成 PDF

```
// 三个参数，第一个方向，第二个尺寸，第三个尺寸格式
var doc = new jsPDF('landscape','pt',\[205, 155\])

// 将图片转化为dataUrl
var imageData = ‘data:image/png;base64,iVBORw0KGgo...’;

//设置字体大小
doc.setFontSize(20);

//10,20这两参数控制文字距离左边，与上边的距离
doc.text('Stone', 10, 20);

// 0, 40, 控制文字距离左边，与上边的距离
doc.addImage(imageData, 'PNG', 0, 40, 205, 115);
doc.save('a4.pdf')
```

在线演示[demo4](https://linwalker.github.io/render-html-to-pdf/demo4.html)

生成 pdf 需要把转化的元素添加到 jsPDF 实例中，也有添加 html 的功能，但某些元素无法生成在 pdf 中，因此可以使用 html2canvas +  
jsPDF 的方式将页面转成 pdf。通过 html2canvas 将遍历页面元素，并渲染生成 canvas，然后将 canvas 图片格式添加到 jsPDF 实例，生成 pdf。

## html2canvas + jsPDF

单页

将 demo1 的例子修改下：

```
<script type=&quot;text/javascript&quot; src=&quot;./js/jsPdf.debug.js&quot;></script>
<script type=&quot;text/javascript&quot;>
      var downPdf = document.getElementById(&quot;renderPdf&quot;);
      downPdf.onclick = function() {
          html2canvas(document.body, {
              onrendered:function(canvas) {

                  //返回图片dataURL，参数：图片格式和清晰度(0-1)
                  var pageData = canvas.toDataURL('image/jpeg', 1.0);

                  //方向默认竖直，尺寸ponits，格式a4\[595.28,841.89\]
                  var pdf = new jsPDF('', 'pt', 'a4');

                  //addImage后两个参数控制添加图片的尺寸，此处将页面高度按照a4纸宽高比列进行压缩
                  pdf.addImage(pageData, 'JPEG', 0, 0, 595.28, 592.28/canvas.width * canvas.height );

                  pdf.save('stone.pdf');

              }
          })
      }
</script>
```

在线演示[demo5](https://linwalker.github.io/render-html-to-pdf/demo5.html)

如果页面内容根据 a4 比例转化后高度超过 a4 纸高度呢，生成的 pdf 会怎么样？会分页吗？

你可以试试，验证一下自己的想法:  
[demo6](https://linwalker.github.io/render-html-to-pdf/demo6.html)

jsPDF 提供了一个很有用的 API，`addPage()`，我们可以通过`pdf.addPage()`，来添加一页 pdf，然后通过`pdf.addImage(...)`，将图片赋予这页 pdf 来显示。

那么我们如何确定哪里分页？

这个问题好回答，我们可以设置一个`pageHeight`，超过这个高度的内容放入下一页 pdf。

来捋一下思路，将 html 页面内容生成 canvas 图片，通过`addImage`将第一页图片添加到 pdf 中，超过一页内容，通过`addPage()`添加 pdf 页数,然后再通过`addImage`将下一页图片添加到 pdf 中。

嗯～，很好！巴特，难道没有发现问题吗？

这个方法实现的前提是 — —  
我们能根据`pageHeight`先将整页内容生成的 canvas 图片分割成对应的小图片，然后一个萝卜一个坑，一页一页`addImage`进去。

What? 想一想我们的 canvas 是肿么来的，不用拉上去，直接看下面：

```
html2canvas(document.body, {
    onrendered:function(canvas) {
     //it is here we handle the canvas
    }
})
```

这里的`body`就是要生成 canvas 的元素对象，一个元素生成一个 canvas；那么我们需要一页一页的 canvas，也就是说。。。

你觉得可能吗？  
我觉得不太现实，按这思路要获取页面上不同位置的 DOM 元素，然后通过`htnl2canvas(element,option)`来处理，先不说能不能刚好在每个`pageHeight`的位置刚好找到一个 DOM 元素，就算找到了，这样做累不累。

累的话  
：）可以看看下面这种方法

多页

我提供的思路是我们只生成一个 canvas，对就一个，转化元素就是你要转成 pdf 内容的母元素，在这篇 demo 里就是`body`了；其他不变，也是超过一页内容就`addPage`，然后`addImage`,只不过这里添加的是同一个 canvas。

当然这样做只会出现多页重复的 pdf，那到底怎么实现正确分页显示。其实主要利用了 jsPDF 的两点：

```
- 超过jsPDF实例格式尺寸的内容不显示
（var pdf = new jsPDF('', 'pt', 'a4'); demo中就是a4纸的尺寸）
- addImage有两个参数可以控制图片在pdf中的位置
```

虽然每一页 pdf 上显示的图片是相同的，但我们通过调整图片的位置，产生了分页的错觉。以第二页为例，将竖直方向上的偏移设置为`-841.89`即一张 a4 纸的高度，又因为超过 a4 纸高度范围的图片不显示，所以第二页显示了图片竖直方向上\[841.89,1682.78\]范围内的内容，这就得到了分页的效果，以此类推。

还是看代码吧：

```
html2canvas(document.body, {
  onrendered:function(canvas) {

      var contentWidth = canvas.width;
      var contentHeight = canvas.height;

      //一页pdf显示html页面生成的canvas高度;
      var pageHeight = contentWidth / 592.28 * 841.89;
      //未生成pdf的html页面高度
      var leftHeight = contentHeight;
      //页面偏移
      var position = 0;
      //a4纸的尺寸\[595.28,841.89\]，html页面生成的canvas在pdf中图片的宽高
      var imgWidth = 595.28;
      var imgHeight = 592.28/contentWidth * contentHeight;

      var pageData = canvas.toDataURL('image/jpeg', 1.0);

      var pdf = new jsPDF('', 'pt', 'a4');

      //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      //当内容未超过pdf一页显示的范围，无需分页
      if (leftHeight < pageHeight) {
      pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
      } else {
          while(leftHeight > 0) {
              pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
              leftHeight -= pageHeight;
              position -= 841.89;
              //避免添加空白页
              if(leftHeight > 0) {
                pdf.addPage();
              }
          }
      }

      pdf.save('content.pdf');
  }
})
```

在线演示[demo7](https://linwalker.github.io/render-html-to-pdf/demo7.html)

两边留边距

修改 imgWidth，并且在 addImage 时 x 方向参数设置你要的边距，具体代码如下

```
var imgWidth = 555.28;
var imgHeight = 555.28/contentWidth * contentHeight;
...
pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight );
...
pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight);
```

在线演示[demo8](https://linwalker.github.io/render-html-to-pdf/demo8.html)
