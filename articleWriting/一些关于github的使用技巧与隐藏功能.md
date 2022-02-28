# 一些关于 github 的使用技巧与隐藏功能

github 作为一个基本每天都会浏览的站点，充分了解它可以为我们大幅提升日常的浏览效率。

## 命令面板

> 在 github 任何页面想要实现`快速跳转`，`快速设置`可以使用快捷键`ctrl+k` 的组合，来通过打开命令面板实现快捷操作

使用 `ctrl+k` 的组合,打开命令面板后，在主页通过输入`/`+`你的项目名称`,快速定位到指定的项目,回车并进行跳转~

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110312342808.gif)

使用 `ctrl+k` 的组合,打开命令面板后，使用`#`开头,即可浏览你所有提过的 issue,以及 PR,通过列表,你可以快速跳转到指定 issue 页面

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311647643.gif)

控制面板能完成非常多的操作，例如切换主题等等...大家可以自行发现~

## stars 列表

良心啊，终于有分组了，以前 star 的项目太多了，非常的难找；有了这个，我们可以对自己 star 的仓库进行分类，想要找的时候就非常的方便。

![](https://gitee.com/wangrongding/image-house/raw/master/images/202202282332831.png)

## 分享代码时，高亮指定区域的代码

我们只需要在文件链接的后面接上：#L 数字+L 数字（如： #L36-L46）

[👉 点这个链接看效果](https://github.com/vuejs/vue-next/blob/4f17be7b1ce4872ded085a36b95c1897d8c1f299/packages/compiler-sfc/src/templateTransformAssetUrl.ts#L36-L46)

效果就是这样，非常清晰 👇
![](https://gitee.com/wangrongding/image-house/raw/master/images/202202282348623.png)

## 快捷键

在仓库中任何页面可以通过摁键`T`来激活文件查找器，实现快速文件检索功能

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311719537.gif)

通过摁键`B`来打开追溯视图，快速跟踪文件中的更改。

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311751346.gif)

在任何项目中的任何位置通过摁键`W`来快速切换分支或 tag。

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311755165.gif)

在代码页面通过摁键`L`来快速跳转至代码中的某一行

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311758330.gif)

在仓库中任何页面可以通过摁键`。`（大于号键）来快速打开线上编辑器，实现线上编译（这个很多人应该都知道，就不演示了）
但是，github 通过`。`打开的线上编辑器，我感觉每次都非常的慢，我个人还是更偏向使用`github1s`（即在当前项目中的地址中，给 github 加上'1s'的尾缀，例如 我们要打开这个仓库：https://github.com/wangrongding/fanyi ， 那加完的地址就是：https://github1s.com/wangrongding/fanyi）

用`github1s`，直接手动添加未免也太 low 了，所以我写了一个很方便的油猴脚本，你需要安装即可，[👉 链接戳这里](https://greasyfork.org/zh-CN/scripts/429698)

装完后打开任何项目右下角都会有一个`在线编辑`的按钮，如图所示 👇

![](https://gitee.com/wangrongding/image-house/raw/master/images/202202282345361.png)

## 装饰我们的 github

利用 gist 配合 wakatime

![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311639260.png)
![](https://gitee.com/wangrongding/image-house/raw/master/images/202110311636425.png)

通过 fork [这个仓库](https://github.com/wangrongding/waka-box)可以自己实现下面的效果 👇

![](https://gitee.com/wangrongding/image-house/raw/master/images/202202282352152.png)

通过创建一个与自己用户名一样的仓库，即可在 github 首页配置好看的简介

大家可以根据我的文件进行更改，代码地址在[这里](https://github.com/wangrongding/wangrongding)

![](https://gitee.com/wangrongding/image-house/raw/master/images/202202282356017.png)

可以看到最后的效果也还行

## 最后

> 我是荣顶，一个面向快乐编程的前端开发 🥰
>
> 如果你也非常热爱前端相关技术！点击 → [前端超人 技术交流群](https://juejin.cn/pin/7004843607072964621)
