---
title: 《chrome腾飞之路》 之 chrome 95 新特性
date: 2021-10-10
tags:
  - Chrome
categories:
  - 前端
---

# 即将推出的 chrome 95 新特性

## 前言

### 为什么会想到开始写这类的文章呢?

我想先从大的方向来谈:

Google 坐拥了全球第一大操作系统 Android 以及全球第一大浏览器 Chrome，67.14%市场占有率的 Chrome 简直可以为所欲为．

人们总是对 Google 亦步亦趋，毕竟这十年里逐渐崛起的 Google Chrome 在众多的浏览器中已经无敌手了．

<!-- more -->

对于前端开发者而言，虽然是乐意看到 Chrome 一统天下的，毕竟谁也忘不了曾经被 IE 支配的恐惧。但垄断并不是一件好事！因为它大概率会带来技术的停滞，IE 就是一个鲜活的例子。IE 当初脱离标准，形成自己的 API 规范的初衷，就是为了垄断浏览器市场！（大家应该对垄断心怀警惕！）

> 微软 Edge 浏览器换用 Chromium 内核已经不是新闻了，Chromium 内核的 Edge 也已经正式发布，虽然没有通过 Windows Update 推送，但大家可以手动到 Edge 官网下载安装。

开源是一个非常有效的达到合谋的方式，可以迅速的成就一个「虚拟的寡头」乃至于造成事实上的垄断。高举规范、开源(chromium)旗帜的 Chrome，正在悄悄的成为巨龙．．．

### 为什么选择从这个时候开始写呢？

因为从 chrome95 开始，chrome 会每隔 4 周就会更新一个版本。  
版本更迭之快，从中我们能嗅探到很多前沿的技术趋势，以及未来哪些东西会面临淘汰！

我想在之后的每一个大版本更新后,我都会第一时间把其中的重要资讯总结出来给与大家一起分享学习!

> Chrome 95 测试版于 2021 年 9 月 23 日发布，预计将于 2021 年 10 月下旬成为稳定版本。

## 新版本特性分享

### 新增特性

- **EyeDropper API** EyeDropper API 提供浏览器提供的吸管，用于构建自定义颜色选择器。为 Web 构建的创意应用程序可以受益于从屏幕上的像素中采样颜色的能力。  
  **这个可以在屏幕的任何地方取颜色哦~ 包括浏览器外面的区域,它有什么好处呢?不知道大家用过 figma，或者蓝湖没有,诸如此类的 web 端 ui 设计应用,取色是一个很常用的功能项（包括我们平时开发页面时，不需要借用其他工具去别的窗口提取ＵＩ给出的设计图某块区域的颜色值，现在通过这个特性就能简单的实现！）** ![](https://assets.fedtop.com/picbed/20220612204542.png)

- **self.reportError API**  
  该全局方法可用于报告错误控制台或全球事件处理程序，模拟一个未捕获的 JavaScript 异常。 [详情](https://developer.mozilla.org/en-US/docs/Web/API/reportError)

  ```js
  var newError = new Error('Some error message', 'someFile.js', 11)
  self.reportError(newError)

  window.onerror = function (message, source, lineno, colno, error) {
    console.log('message:' + error.message + ', lineno: ' + lineno)
    return true
  }

  self.addEventListener('error', (error) => {
    console.log(error.filename)
  })

  // Output
  // > "message:Some error message, lineno: 11"
  // > "someFile.js"
  ```

  > 此功能主要用于自定义事件调度或回调操作库。库可以使用此功能来捕获回调代码中的错误并将它们重新抛出到顶级处理程序。这确保了一个回调中的异常不会阻止其他回调的处理，同时确保堆栈跟踪信息仍可用于顶层调试。

- **URLPattern** 作为一个新的 API，提供操作系统支持，用于将 URL 与提供的模式相匹配。 [详情](https://web.dev/urlpattern/)和[MDN](https://developer.mozilla.org/en-US/docs/Web/API/URLPattern)

- **调试面板中对属性值的便捷修改**

  DevTools 添加了一种更简单而灵活的方式来更新 CSS 中的长度！在“样式”窗格中，查找任何具有长度的 CSS 属性（例如 height, padding）。将鼠标悬停在单位类型上，注意单位类型带有下划线。单击它以从下拉列表中选择一个单位类型。

  ![](https://assets.fedtop.com/picbed/202110091521893.gif)

  _配合 chrome 94 支持中文的特性,控制台变的越来越方便_ 😀

- **改进了 DevTools 命令菜单的 UI**

  对于经常在 chrome 中查找页面资源的开发者还是挺有用(ctrl+P 调出) 改进前 ![](https://assets.fedtop.com/picbed/20220612204653.png)

  改进后 ![](https://assets.fedtop.com/picbed/20220612204704.png)

- **在 Console、Sources 面板和 Properties 窗格中对自定义的属性进行加粗和排序**

  ![](https://assets.fedtop.com/picbed/20220612204713.png)

  <!-- ![](https://gitee.com/wangrongding/image-house/raw/master/images/202110091528609.png) -->

  除了这些更改之外，“属性”窗格中的属性现在也被扁平化，以获得更好的 DOM 属性调试体验，尤其是对于[Web components]

  > 对于 `web component` 以后有机会我单独拎一篇文章来讲，大家可以查看[这里](https://www.webcomponents.org/introduction)

  ![](https://assets.fedtop.com/picbed/20220612204726.png)

- **Lighthouse 现在更新到了 8.4**

  我们都知道,网站使用体验的三大核心指标 - LCP, FID, CLS ![](https://assets.fedtop.com/picbed/20220612204736.png)

  Lighthouse 现在将检测 LCP 元素是否是惰性加载的图像，并建议删除它的 loading 属性。

  > 影响 LCP 的四个因素如下:
  >
  > - 较慢的服务器响应时间
  > - 渲染阻塞的 js 和 css
  > - 较慢的资源加载时间
  > - 客户端渲染

  因为最近一项 WordPress 中延迟加载的最新研究发现，对于某些站点来说，如果初始视图中的图像没有延迟加载，LCP 可以提高 15%。

  详情可以看[这里](https://web.dev/lcp-lazy-loading/)

  ![](https://assets.fedtop.com/picbed/20220612204754.png)

- **最新的 lighthouse 支持通过 npm 下载**

  ![](https://assets.fedtop.com/picbed/20220612204806.png) 通过命令`lighthouse https://www.example.com --view` ![](https://gitee.com/wangrongding/image-house/raw/master/images/202110091604251.png)

  这里我通过百度为例子,大家替换为自己想测试的站点即可

  ![](https://assets.fedtop.com/picbed/202110091628536.gif)

## 删除与弃用

- **删除了 FTP 支持**

  Chrome 正在[取消对 FTP URL 的支持](https://www.chromestatus.com/feature/6246151319715840)。浏览器中 FTP 的使用率足够低，投资改进现有 FTP 客户端已不再可行。此外，所有受影响的平台上都提供了功能更强大的 FTP 客户端。

  Google Chrome 72 及更高版本取消了对通过 FTP 获取文档子资源和呈现顶级 FTP 资源的支持。当前导航到 FTP URL 会根据资源类型显示目录列表或下载。Google Chrome 74 及更高版本中的一个错误导致不再支持通过 HTTP 代理访问 FTP URL。在 Google Chrome 76 中完全删除了对 FTP 的代理支持。在 Chrome 86 中，预发布渠道（Canary 和 Beta）的 FTP 支持被关闭，并且实验性地关闭了百分之一的稳定用户，尽管它可以通过命令行重新启用. 在 Chrome 87 中，它对 50% 的用户关闭，但也可以通过命令行启用。从 Chrome 88 开始，它只能通过弃用试用版获得，现在已被禁用。

- **FTP 支持现在被完全删除** 自 Chrome 88 以来，它只通过废弃试验提供，但现在已经完全取消了。

- **支持以数字结尾的非 IPv4 主机名的 URL**

  大多数不是有效 IPv4 地址但以数字结尾的主机名都被视为有效，并通过 DNS 查找（例如，`http://foo.127.1/`）。根据公共后缀列表规范，该 URL 中主机名的 eTLD+1 应为`127.1`.  如果将其反馈到 URL 中，则由 URL 规范`http://127.1/`映射到`http://127.0.0.1/`，这似乎具有潜在危险。`127.0.0.0.1`也可能被用来迷惑用户。[现在拒绝带有这些主机名的 URL](https://www.chromestatus.com/feature/5679790780579840)。

- **WebAssembly 跨源模块共享**

  [Chrome 现在不赞成](https://www.chromestatus.com/feature/5650158039597056)在跨域但同站点的环境之间[共享 WebAssembly 模块](https://www.chromestatus.com/feature/5650158039597056)，以[允许代理集群长期作用于源](https://developer.chrome.com/blog/wasm-module-sharing-restricted-to-same-origin/)。

- **弃用 U2F API（加密令牌）**

  Chrome 用于与安全密钥交互的旧版 U2F API 已弃用，并在 Chrome 95 中开始弃用试用，其中该 API 默认保持启用状态，但试用令牌将禁用参与站点的密钥。U2F 安全密钥本身并未被弃用，并将继续有效。

  受影响的站点应迁移到[Web 身份验证 API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API)。最初通过 U2F API 注册的凭据可以通过 Web 身份验证进行质询。Web Authentication API 也支持 U2F API 支持的 USB 安全密钥。

  U2F 是 Chrome 的原始安全密钥 API。它允许站点在 USB 安全密钥上注册公钥凭据，并挑战它们以构建防网络钓鱼的两因素身份验证系统。U2F 从未成为开放的 Web 标准，而是被 Web 身份验证 API（在 Chrome 67 中启动）所包含。Chrome 从未直接支持 FIDO U2F JavaScript API，而是提供了一个名为 cryptotoken 的组件扩展，它公开了一个等效的`chrome.runtime.sendMessage()`方法。U2F 和 Cryptotoken 一直处于维护模式，并在过去两年鼓励站点迁移到 Web 身份验证 API。

### chrome 删除与弃用特性的历史列表

> 访问 ChromeStatus.com 以获取[当前弃用](https://www.chromestatus.com/features#browsers.chrome.status%3A%22Deprecated%22)和[以前删除的](https://www.chromestatus.com/features#browsers.chrome.status:%22Removed%22)列表。

## 最后

chrome95 开始，chrome 会每隔 4 周就会更新一个版本，对于喜欢尝鲜的同学们，我推荐下载 chrome 测试版或者金丝雀版本来体验最新的特性．对于一些正在试验中的 API 我们也可以通过下面这个网站提交登记，或者体验资格 ![](https://gitee.com/wangrongding/image-house/raw/master/images/202110102110334.png)

通过填写一些信息后等待审核通过即可，非常的方便！

![](https://assets.fedtop.com/picbed/20220612204854.png) ![](https://assets.fedtop.com/picbed/20220612204904.png)

以上就是我对即将推出的 chrome95 的主要新增特性的分享~希望对你有所帮助 ~ 😉

> 我是荣顶，很高兴能在这里和你一起变强！一起**面向快乐编程！** 😉
>
> 如果你也非常热爱前端相关技术！欢迎进入我的小密圈 ~ 🦄 **扫描下方图片~**
>
> ![](https://assets.fedtop.com/picbed/1630989821971-rongding.gif)
