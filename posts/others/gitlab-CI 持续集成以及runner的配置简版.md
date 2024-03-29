---
title: gitlab-CI 持续集成以及runner的配置简版
tags:
  - 其他
categories:
  - 其他
date: 2018-12-12
---

:::tip 在我们完成项目开发后，提交到 git，当监听提交后，自动进行编译，并进行项目的部署，是不是一想就很爽，所以下面引入我们的主角 —— gitlab-CI，[中文文档](https://fennay.github.io/gitlab-ci-cn/)。 :::

<!-- more -->

## Gitlab CI

Gitlab-CI 是 GitLab Continuous Integration（Gitlab 持续集成）的简称。从 Gitlab 的 8.0 版本开始，gitlab 就全面集成了 Gitlab-CI,并且对所有项目默认开启。只要在项目仓库的根目录添加.gitlab-ci.yml 文件，并且配置了 Runner（运行器），那么每一次合并请求（MR）或者 push 都会触发 CI pipeline。

## Gitlab-Runner

#### 安装 gitlab-ci-multi-runner（linux）

```bash
# 添加yum源
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.rpm.sh | sudo bash

# 安装
yum install gitlab-ci-multi-runner
```

#### 使用 gitlab-ci-multi-runner 注册 Specific Runners

![runners.jpg](https://upload-images.jianshu.io/upload_images/4660406-23e31a052864a7a0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```bash
$ gitlab-ci-multi-runner register
Running in system-mode.

Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):
>>>>>> 你的URL

Please enter the gitlab-ci token for this runner:
>>>>>> 你的Token

Please enter the gitlab-ci description for this runner:
>>>>>> 你对该runner的描述

Please enter the gitlab-ci tags for this runner (comma separated):
>>>>>> 该runner的标签

Whether to run untagged builds [true/false]:
[false]: true

>>>>>> 是否运行没有标记的项目（后期可以改）

Whether to lock Runner to current project [true/false]:
[false]:

>>>>>> 是否锁定只运行当前项目（后期可以改）

Registering runner... succeeded                     runner=9e48baqx

Please enter the executor: parallels, docker+machine, ssh, virtualbox, docker-ssh+machine, kubernetes, docker, docker-ssh, shell:

>>>>>> 选择runner的类型（根据你的需求选择，我选择的shell，我的项目是node项目）

Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!
```

:::warning

1. 首先你的项目中的 `getlab-runner.yml` 文件中的命令需要的环境，你的 runner 所在的服务器是必须要搭好的，必须你需要执行 `npm install` 和 `npm run build` ，那你的服务器必须要有 node 环境；
2. runner 的类型比较重要，你必须要清楚你需要一个什么类型的 runner。比如，开始我是需要一个能够运行 node 项目的 runner，但是网上的很多教程统一都是都选择 docker，这个时候你电脑上必须要安装了 docker 才可以，因为这相当于在 docker 里面又安装了一个 docker（docker in docker），所以对于我的需求来说，我选择 shell 就可以了；
3. 通过 Gitlab 中某个项目的 `Settings` 下的 `CI/CD Pipelines` 按钮进入的页面中得到的 URL 和 Token 所注册的 runner 只服务于本项目，当你在其他项目的当前页面时，可以选择让这个 runner 为当前项目开启服务。 :::

## 配置 gitlab-runner.yml

```bash
mage: node:9.11.1

pages:
 cache:
   paths:
   - node_modules/

 script:
 - cnpm install
 - npm run build
 - sudo rm -rf /data/ftp/http/files/scfAdminDoc
 - sudo mv ./scfAdminDoc /data/ftp/http/files/
 artifacts:
   paths:
   - public
 only:
 - master
```

具体配置见[文档](https://fennay.github.io/gitlab-ci-cn/gitlab-ci-yaml.html)

## 其他

#### 代码推送到 gitlab 上之后，一直是 pending 状态，要等很久才 pick 到一个 runner 来执行

这个现象一般发生在本机注册了多个 runner，之前的都删除了，只留下一个，但是当我们在 gitlab 管理平台移除了某个 runner 的时候，并没有完全删除记录，当执行的 `gitlab-ci-multi-runner list` 的时候你会发现它仍然还在，如果需要彻底删除它，还应该这样做：

```bash
cd /etc/gitlab-runner
ls

# 你会看到config.toml文件，打开它并删除已有的那些runner记录
vim config.toml
```

#### 配置 node 环境

1. 下载 node-v9.11.1-linux-x64.tar.xz 文件
2. 例如放在 `/home` 文件夹

   ```bash
   # 进入所在目录，解压
   tar -xvf node-v9.11.1-linux-x64.tar.xz

   # 重命名文件夹
   mv node-v9.11.1-linux-x64 nodejs

   # 建立软链接，配置全局环境变量（源路径和目标路径为相对路径）
   ln -s /home/nodejs/bin/npm /usr/local/bin/
   ln -s /home/nodejs/bin/node /usr/local/bin/

   # 检查是否配置成功
   node -v
   npm -v
   ```

#### scp 上上传

```bash
# 普通
scp ./public/* root@192.168.0.226:/data/ftp/http/files/
scp 源路径/源文件 用户名(root)@服务器IP:目标路径


# 免密码
yum install sshpass
sshpass -p 111111 scp ./public/* root@192.168.0.226:/data/ftp/http/files/
sshpass -p 密码 scp 源路径/源文件 用户名(root)@服务器IP:目标路径
```

如果是下载，调换顺序

```bash
scp root@192.168.0.226:/data/ftp/http/files/ ./public/*
scp 用户名(root)@服务器IP:目标路径 源路径/源文件
```
