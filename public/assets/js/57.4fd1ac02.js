(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{500:function(t,e,o){"use strict";o.r(e);var n=o(18),l=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("blockquote",[o("p",[t._v("最近在做小程序方面的开发，遇到的坑总结如下，以便以后查阅。随着对小程序的进一步使用，文章会逐渐完善。")])]),t._v(" "),o("ol",[o("li",[t._v("分享成功或失败的回调在微信开发者工具上监测不到的，可以在手机上的 vcConsole 中看到。")]),t._v(" "),o("li",[t._v("保存图片到相册是在不支持网络地址的，需要先使用 getImageInfo 获取到图片 path，然用这个 path 来调用保存图片 API")]),t._v(" "),o("li",[t._v("app.wxss 中的公共样式在组件中不起作用，需要单独书写")]),t._v(" "),o("li",[t._v("数组没有 push，可以使用 concat 代替")]),t._v(" "),o("li",[t._v("使用 encodeURIComponent()转译对象时，先试用 JSON.stringfy()（其实这个不只是小程序的问题，是 js 的问题，encodeURIComponent 接收字符串参数）")]),t._v(" "),o("li",[t._v("分享支持四个自定义参数（官方文档没有找到）：path、imgUrl、desc、tittl")]),t._v(" "),o("li",[t._v("获取自定义 data（打印的时候看到）：e.currentTarget.dataset.name")]),t._v(" "),o("li",[t._v("微信小程序无法实现原生 js 的 innerHTML 功能，可以使用 wxParse 代替")]),t._v(" "),o("li",[t._v("checkbox 组件作为 key 值的 index 值必须是字符串")]),t._v(" "),o("li",[t._v("radio 和 checkbox 在实际应用的时候，特别是需求样式与官方组件差别比较大，就自己去封装吧，用官方组件实在太难用，如果你想在官方组件基础上二次封装，我个人突破了全不选功能，但是全选功能突破不了，过后我会在单独一篇文章中分享 radio 和 checkbox 的二次封装。")])]),t._v(" "),o("p",[t._v("个人博客："),o("a",{attrs:{href:"www.fedtop.com"}},[o("strong",[t._v("汪荣顶")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);