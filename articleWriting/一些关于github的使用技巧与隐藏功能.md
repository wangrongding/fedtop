# 一些关于 github 的使用技巧与隐藏功能

## 命令面板

> 在 github 任何页面想要实现`快速跳转`，`快速设置`可以使用 `ctrl+k` 的组合,通过打开命令面板来实现相应的操作

使用 `ctrl+k` 的组合,打开命令面板后，在主页通过输入`/`+`你的项目名称`,快速定位到指定的项目,并进行跳转~  
在项目中使用`命令面板`输入`/`可以快速查找你要找的文件。

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110312342808.gif)

使用 `ctrl+k` 的组合,打开命令面板后，使用`#`开头,即可浏览你所有提过的 issue,以及 PR,通过列表,你可以快速跳转到指定 issue 页面

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311647643.gif)

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110312349451.png)

通过

## 快捷键

在仓库中任何页面可以通过摁键`。`（大于号键）来快速打开线上编辑器，实现线上编译

在仓库中任何页面可以通过摁键`T`来激活文件查找器，实现快速文件检索功能

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311719537.gif)

通过摁键`B`来打开追溯视图，快速跟踪文件中的更改。

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311751346.gif)

在任何项目中的任何位置通过摁键`W`来快速切换分支或 tag。

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311755165.gif)

在代码页面通过摁键`L`来快速跳转至代码中的某一行

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311758330.gif)

stars 列表
![](https://gitee.com/wangrongding/image-house/raw/master/images/202112182042675.png)

## 装饰我们的 github

利用 gist 配合 wakatime

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311639260.png)
![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311636425.png)

## 使用 \<kbd> 标签进行包裹，会使文本看起来像按钮

**例子 1:**

```markdown
<kbd>[👉 荣顶的博客](https://www.fedtop.com)</kbd>
```

效果:
<kbd>[👉 荣顶的博客](https://www.fedtop.com)</kbd>

**例子 2:**

```markdown
<details open>
<summary><kbd>查看详情</kbd></summary>

[关于前端技术写作 📘，我想要说的 📖](https://juejin.cn/post/7023550419473268772)
[隐写术并不是黑客特工的专属 - 我用前端实现的隐写,非常有意思 ❗](https://juejin.cn/post/7007838325193048095)  
[《Chrome 腾飞之路》之 Chrome 95❗ 从中我们能学到什么 ❓](https://juejin.cn/post/7017428624072507406)

</details>
```

<details open>
<summary><kbd>查看详情</kbd></summary>

[关于前端技术写作 📘，我想要说的 📖](https://juejin.cn/post/7023550419473268772)  
[隐写术并不是黑客特工的专属 - 我用前端实现的隐写,非常有意思 ❗](https://juejin.cn/post/7007838325193048095)  
[《Chrome 腾飞之路》之 Chrome 95❗ 从中我们能学到什么 ❓](https://juejin.cn/post/7017428624072507406)

</details>
