---
title: 2022 年了,你总不能还只会 npm i 吧?
date: 2022-11-11
tags:
  - 前端工程化
categories:
  - 前端
---

> 在键帽与字符上横跳，于代码和程序中穿梭。一起面向快乐编程！

大家好，我是荣顶，马上金三银四啦 ~ 这次给大家带来一篇 npm 命令相关的文章。目的在于查缺补漏，提升效率。

npm 作为 node 包管理器，内置了非常多的命令供我们日常开发使用，记住以下列出的命令将会给日常开发带来非常大的便利性。

好了，话不多说，看代码 👇

## 给喜欢的包加星(类似 github 的 star)

其实我把加星就当作是收藏的操作，其实在 npm 中它就是收藏的作用，因为在官网中，我们并不能像 github 一样清楚的看到这个仓库有多少颗 star。

```sh
npm star [package-name]
```

取消收藏

```sh
npm unstar [package-name]
```

![](https://assets.fedtop.com/picbed/202206122059778.png) 查看收藏列表

```sh
npm stars
```

![](https://assets.fedtop.com/picbed/202206122059681.png)

这些操作都会报错在你的账号下，所以很方便。不用担心本机操作后其他地方看不到。你只需要有一个 npm 账户就可以了，还没有的话，可以看本文第二节 👇 ，注册一个并登录吧。

## 登录 npm

首先你要有一个 npm 的账号，没有的在[👉npm 官网](https://www.npmjs.com/signup)注册一个就行了。

> **注意:在官网注册的账号，登陆时使用淘宝源会报错，要改回默认源**

推荐使用 nrm 或者 yrm 来快速切换镜像源,个人推荐使用 yrm,为什么呢?看下图

![](https://assets.fedtop.com/picbed/202206122059106.png)

yrm 会同时将你的 npm 和 yarn 一起切换,并且 ls 后会有\*号标注当前正在使用的源,记得 nrm 以前也有的,现在不知道怎么了...

![](https://assets.fedtop.com/picbed/202206122059858.png)

当然你可以手动 npm 切换为默认源

```sh
npm config set registry https://registry.npmjs.org
```

然后执行命令`npm login`,依次填写用户名、密码、邮箱即可。如果你在 npmjs 站点还设置了其他保护，就还需要输入一些验证码之类的等等...

![](https://assets.fedtop.com/picbed/202206122100146.png)

```sh
npm adduser
# or
npm login
# login是adduser的一个别名
```

![](https://assets.fedtop.com/picbed/202206122100429.png)

你可以通过以下命令查看当前 npm 的登陆人

```sh
npm whoami
```

## 查看某个包的文档

每次我们想在浏览器中打开某个包的文档，总习惯去搜索引擎搜索，其实一行命令就能解决的事情,不要再去百度搜索啦~

```sh
# 此命令会尝试猜测包文档 URL 的可能位置，一般没有自定义的话，就会打开包的github地址。
npm docs [package-name]
# or
npm home [package-name]
```

![](https://assets.fedtop.com/picbed/202206122100823.gif)

尝试以下命令，可以快速打开 lodash 的官方文档 👇

```sh
npm docs lodash
# or
npm home lodash
```

`npm docs`或者`npm home`命令在不接参数时，会在当前项目中，通过 `package.json` 文件中的`homepage`配置，来打开对应的地址。

![](https://assets.fedtop.com/picbed/202206122100364.png)

如上图所示，其原理就是：当你要查看的项目中的 `package.json` 文件中，设置了`homepage`属性，通过`npm docs/home`就能打开对应的主页，没有设置`homepage`属性时，npm 会继续寻找其中的`repository`属性，这时候打开的就是项目在 github 中的托管地址 url 拼接“#readme” (例如： https://github.com/用户名/仓库名#readme)，如果你`repository`属性也没设置，那么就会打开 npm 官网中包的所在地址，（例如：https://www.npmjs.com/package/npm-limit）

当然，你也可以在`npm docs/home`后不接参数，这样就会直接打开当前项目的主页。

## 查看某个包的代码仓库

想看某个包的源码?还要跑到 github 去搜索?nonono,也是一行代码。

```sh
# 此命令尝试猜测包的存储库 URL 的可能位置
npm repo [package-name]
```

👆 它是根据项目中的 `package.json` 文件中，设置的`repository`属性，来打开对应的 url。

## 快速给一个包提 issues

```sh
npm bugs [package-name]
```

👆 它是根据项目中的 `package.json` 文件中，设置的`bugs`属性，来打开对应的 url。

![](https://assets.fedtop.com/picbed/202206122100008.png)

## 查看某个包的详细信息

这个命令有什么用呢？可以很方便的看到指定包的详细信息，比如我们想找到包的作者以及 ta 的联系方式（交流学习）。

```sh
npm v [package-name]
# or
npm view [package-name]
npm info [package-name]
npm show [package-name]
```

![](https://assets.fedtop.com/picbed/202206122101929.png)

## 查看某个包的所有历史版本

```sh
npm v [package-name] versions
```

![](https://assets.fedtop.com/picbed/202206122101340.png)

## 本地开发的 npm 包如何调试

我们可以像往常一样将本地开发的 npm 包安装到全局或指定目录。

```sh
npm install . -g
```

```sh
# 在某个项目中安装本地包
npm install ../Path/xxPackageName
```

也可以做一个软链指向当前需要调试的项目(全局)

```sh
npm link
```

将调试包链接到当前项目中（先做一个软链指向当前需要调试的项目）

```sh
# 先在本地开发的 npm 包中执行👇
npm link
# 然后切换到你要安装本地调试包的项目中，执行👇，即可将本地包安装到项目依赖中
npm link <package-name>

# 项目中取消安装本地的调试包👇
npm unlink <package-name>
```

## npm 发布包

首先，你得在本地登录（不会的看文章最开头的登录方法 👆）

登录完成后，发布自己开发的工具包，只需简单的三步！

> **注意:使用淘宝源会报错，要改回默认源**

记得每次发布前，修改下版本号！

```sh
npm version [版本号]
```

然后当前目录执行`npm publish`就好了

```sh
npm publish
```

## 弃用包的相关操作

> 注意：强烈建议弃用包或包版本而不是取消发布它们，因为取消发布会从注册表中完全删除一个包，这意味着任何依赖它的人都将无法再使用它，而不会发出警告。

弃用整个包

```sh
npm deprecate package-name "弃用信息"
```

弃用包的单个版本

```sh
npm deprecate package-name@version "弃用信息"
```

取消弃用操作

```sh
# 将弃用消息改为空字符串即可
npm deprecate package-name ""

```

取消发布（危险操作）\*

取消发布整个包

```sh
npm unpublish [package-name] -f
```

取消发布包的指定版本

```sh
npm unpublish [package-name]@<version>
```

> 取消发布包后，以相同名称重新发布将被阻止 24 小时。如果您错误地取消发布了一个包，我们建议您以不同的名称再次发布，或者对于未发布的版本，增加版本号并再次发布。

## 一些好用的其他操作

包的重命名

```sh
# （重命名包的唯一方法是以新名称重新发布它）
```

查看当前项目中有哪些包过时了

```sh
npm outdated
```

查看本地全局环境的包有哪些过时了

```sh
npm outdated -g --depth=0
```

![](https://assets.fedtop.com/picbed/202206122101838.png)

列出 node_modules 中的所有包

```sh
ls node_modules
# or
dir node_modules
```

审计项目中所有包的安全漏洞

```sh
npm audit
# 这个命令依赖 package-lock.json 文件,所以如果你用的是yarn需要使用下面的命令
yarn audit
```

执行后会列出有问题的包

![](https://assets.fedtop.com/picbed/202206122101206.png)

| 风险等级 | 说明                    |
| -------- | ----------------------- |
| Critical | 需要立即解决的!         |
| High     | 需要尽快解决!           |
| Moderate | 在时间允许的情况下解决  |
| Low      | 随便你,不慌不燥不急不忙 |

报告中会给出它问题的严重性,你就可以根据具体情况来进行版本更新或是调整。

```sh
npm token list
```

![](https://assets.fedtop.com/picbed/202206122101253.png)

检测一下当前镜像源的延迟

```sh
npm ping
```

![](https://assets.fedtop.com/picbed/202206122101854.png)

检测当前 node 和 npm 存在的问题 👇

```sh
npm doctor
```

![](https://assets.fedtop.com/picbed/202206122101002.png)
