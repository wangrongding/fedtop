---
title: github pages/hexo搭建精致博客
date: 2018-12-20
tags:
  - 其他
categories:
  - 其他
---

> 由于 hexo 是基于 node 的框架，所以关于 web 前端的知识我不会讲太细，如果你是 python 工程师、ruby 工程师，都有其对应的框架，简化搭建博客的难度，不用在 hexo 上过分用心. 因为直到现在我才明白，我花费了很多心思搞服务器、弄域名、学后台语言，为的是自己搞一个网站，然而却忽略了最为重要的是**内容**。

<!-- more -->

## 安装 node 环境

请移步 [nodeJS 中文网](http://nodejs.cn/)

## 安装 git

请移步 [起步 - 安装 Git](https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)

## 全局安装 hexo 并初始化一个工程

过程与安装大部分脚手架工具一样类似，工具可以使用命令行工具或 git bash

1. 全局安装 hexo
   ```
   $ npm install hexo-cli -g
   ```
2. 进入一个文件夹（你想把工程放到哪个文件夹就进入哪个文件夹，我的是 `D:/files/hexo` ），初始化一个工程
   ```
   $ hexo init yourProjectName
   ```
3. 进入你的工程，安装需要的资源
   ```
   $ cd blog
   $ npm install
   ```
4. 启动你的工程，默认监听 4000 端口，打开 `localhost:4000` 便可以访问到
   ```
   $ hexo server
   ```
5. 常用的命令就四个
   - hexo clean 清空缓存
   - hexo generate 简写 hexo g，生成静态文件
   - hexo serve 简写 hexo s，启动一个服务，将本地静态文件可视化
   - hexo deploy 简写 hexo d，发布

这时候一个最原始的 hexo 博客就搭建好了。

## 安装主题

可以去官方主题库区找，也可以去百度一下信誉比较好的主题，这个根据自己的喜好选择就行。

1. 安装。主题一般都是托管在 GitHub，可以直接将主题直接 clone 到你的工程下的 themes 文件夹下，也可以下载压缩包解压到 themes 文件夹下。
2. 配置。打开\_config.yml（主题文件夹内还有一个\_config.yml，不要弄混）文件进行设置，比如你安装好的主题的文件夹叫 themeABC，那就将 theme 设置为 themeABC

## 发布到自己的 GitHub pages

pages 分两种，一种是对应自己的 GitHub 账号，一种对应 GitHub 上的一个工程，现在我们讲的是对应自己 GitHub 账号的那种。

1. 创建。创建一个工程，格式为 `nickname.github.io` ，我的 GitHub 昵称叫做 wangrongding，所以我的 pages 名字叫做 `wangrongding.github.io`
2. 配置。打开\_config.yml，配置自己的工程。
   ```
   deploy:
     type: git
     repo: git@github.com:wangrongding/wangrongding.github.io.git
     branch: master
   ```
3. 在你的本体工程下使用命令行工具发布到 GitHub 工程，并使用 nickname.github.io 访问。
   ```
   $ hexo g
   $ hexo d
   ```

## 绑定域名

1. 解析域名。在你的域名服务平台的控制台进行解析，设置两条记录，记录的类型都选择 CNAME，记录值都选择 nickname.github.io ，主机记录一条为空，另一条填写 www。
2. 设置 pages。在 github 上打开你的工程，点击 Settings ，然后找到 GitHub Pages 下的 Custom domain ，填写你的 www 域名，点击 save 保存，这时域名就可以访问到你的网站了。
3. 修复本地工程。GitHub 工程里会出现一个 CNAME 文件里面写着你域名，见这个文件放到你的本地工程的所用主题下的 source 文件夹下，不然下次发布时会清空这个文件。

## 使用 gitment 添加评论功能

1. 注册 OAuth Apps。代开你的 GitHub 的设置，然后在左边菜单栏最下方找到 Developer settings 选项，点击进去找到 OAuth Apps，添加新的账号，其中“Application name”对应的你的 Pages 地址，我的是 `wangrongding.github.io` ,“Homepage URL”和“Authorization callback URL”对应的是域名，我的是 `https://www.fedtop.com` ,这样会生成 client_id 和 client_secret。
2. 配置\_config.yml。
   ```
   gitment:
     enable: true
     owner: wangrongding
     repo: wangrongding.github.io
     client_id: your client_id
     client_secret: your client_secret
     perPage: 10
   ```
3. 将前端代码放到文章页或者专门的评论页
   ```
   <% if(theme.gitment.enable && is_post()) { %>
       <script type="text/javascript" src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
       <script>
       var gitment = new Gitment({
           id: window.location.pathname,
           owner:"<%= theme.gitment.owner%>",
           repo:"<%= theme.gitment.repo%>",
           oauth: {
             client_id:"<%= theme.gitment.client_id%>",
             client_secret:"<%= theme.gitment.client_secret%>"
           },
           perPage:"<%= theme.gitment.perPage%>",
       });
       gitment.render('comments');
       </script>
   <% } else { %>
      <p>评论系统未开启，无法评论！</p>
   <%}%>
   ```

## jsonContent 配置

1. 首先安装 hexo-generator-json-content
   ```
   hexo-generator-json-content
   ```
2. 然后在当前主题中的 `_config.yml` 中配置

   ```
   ## 搜索
   jsonContent:
     searchLocal: true
     searchGoogle: false
     meta: false
     pages: false
     posts:
       title: true
       date: true
       path: true
       text: true
       raw: false
       content: false
       slug: false
       updated: false
       comments: false
       link: false
       permalink: false
       excerpt: false
       categories: false
       tags: true
   ```

## 设置 banner 图

```
banner:
    img: /img/banner.jpg
```

这里注意，`/`代表的是根目录，项目会去根目录去寻找，否则会自动在当前目录为基础寻找。

### 持续更新中。。。
