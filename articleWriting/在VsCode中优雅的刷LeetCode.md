# 在 VsCode 中优雅的刷 LeetCode

由于 leetcode 网站中的在线编程环境代码提示，快捷键并不友好，以及不支持代码管理等功能，我们在刷题的时候往往不高效，且过后也不能快速，随时随地的进行方便的复盘。所以在这篇文章中我将介绍如何在 VsCode 中通过插件来高效的刷题。

## 前置条件

- 请确保你的电脑已经安装 node.js
- 你已经注册过 LeetCode

## 安装插件

首先通过在 VsCode 的插件页面搜索 LeetCode 插件

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112181843165.png)

记得要认准是官方的，目前是下载量最高的那个。

安装完你可以在 VsCode 侧边栏看到这个插件的图标

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112181837551.png)

## 选择需要登录的节点

**首先确保你已经在 leetCode 中注册过自己的账号**
还没有注册过的同学可以通过 [LeetCode 官方网站](https://leetcode-cn.com/)（https://leetcode-cn.com/） 自行注册一个先。
两种版本的 LeetCode 账户并不通用，请确保当前激活的版本是正确的。插件默认激活的是英文版。
首先我们需要选择登录的节点，一般我们都是用中国版的

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112181845645.png)

## 选择登录方式

选择一个你比较喜欢的登录方式，一般就通过选择第一个，填写用自己在 leetCode 中通过邮箱注册的账号和密码就可以了，cookie 什么的都不方便。

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112181851198.png)

登录成功后右下角会有一个提示

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112181858980.png)

## 答题

在左侧选择对应的题目后通过右下角的`Code now`开始做题，第一次的时候会弹出一个提示框，需要你设置所有的答题文件文件夹，设置好后进入答题页面。
在这个文件夹中会存储你所有提交过的代码，所以你可以把它通过 github 托管到 github 或者是其他什么平台，方便自己无论在何时何地通过该仓库就能访问自己的代码。（这一步其实也并不关键，提交的代码在 leetcode 官网中都可以通过提交记录查找到，就是需要跳转进进出出，比较麻烦。）

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112181856179.png)

编写好程序后，可以通过 test 测试

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112181921716.png)

结果无误后可以点击 submit 提交答案

这里也能看到我们的程序在运行时间和内存占用上击败了多少人。
通过这个我们可以根据自己的目标的大小决定对自己的答案是否满意。（你对该题的要求是解出即可还是需要超越多少人才算合格？）
![](https://gitee.com/wangrongding/image-house/raw/master/images/202112181935848.png)

## 做不来？？

通过右击题目，选择`show top woted solution`即可查看目前相对较好的答案

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112182022931.png)

当然你也可以通过题目中的`solution`跳转到官网查看大家提交的题解

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112182023772.png)

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112182024634.png)

## 收藏

通过题目右侧的爱心，你可以对有意义的题目进行收藏

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112181941493.png)

然后在 Favorite 中可查看

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112181941129.png)

## 我们的算法打卡计划仓库

从最基础简单的算法开始，每日更新一道算法题。  
仓库戳这里 👉[leetcut](https://github.com/wangrongding/leetcut.git)（https://github.com/wangrongding/leetcut.git）

## 最后

我最近组建了一个 leetCode 打卡群，每天打卡一道算法题。如果你对算法感兴趣或正准备开始学习算法相关的知识，欢迎加入我们，一起学习。

![](https://gitee.com/wangrongding/image-house/raw/master/images/202112190132476.jpg)

二维码过期后，也可通过添加我微信进入（ChicSparrow）
