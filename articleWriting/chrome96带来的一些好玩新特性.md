# chrome96 带来的一些好玩新特性

## 新增了 `CSS Overview` 面板

使用新的 CSS 概览面板来确定页面上潜在的 CSS 改进。打开 CSS 概览面板，然后单击捕获概览以生成页面 CSS 的报告。

如果你没看到这个功能，你可以通过 more tools 找到它

![](https://gitee.com/wangrongding/image-house/raw/master/images/202111090010460.png)

最直接的办法就是直接通过 ctrl+p 打开命令行后输入`>css overview`的方式，打开它。

单击“捕获概览”按钮以生成页面的 CSS 概览报告。

![](https://gitee.com/wangrongding/image-house/raw/master/images/202111090002225.png)

报告主要由 5 个部分组成：
分别是

- 概述总结。页面 CSS 的高级摘要。
- 颜色。您页面中的所有颜色。颜色按用途分组，例如背景颜色、文本颜色等。它还向您显示具有低对比度问题的文本。

  每种颜色都是可点击的。例如，假设此边框颜色#DADCE0 与您网站的配色方案不匹配，请单击它以获取使用该颜色的元素列表。

- 字体信息。页面中的所有字体及其出现次数，按不同的字体大小、字体粗细和行高分组。与颜色部分类似，您可以单击事件以查看受影响元素的列表。
- 未使用的声明。所有没有效果的样式，按原因分组。
- 媒体查询。页面中定义的所有媒体查询，按出现次数最多的排序。单击事件以查看受影响元素的列表。

![](https://gitee.com/wangrongding/image-house/raw/master/images/202111090015129.png)
