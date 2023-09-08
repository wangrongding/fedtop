---
title: 打造顶级的 Git 命令行操作体验（持续更新）
date: 2023-07-31
tags:
  - Git
categories:
  - 前端
---

对于 git 操作，用过很多工具，但最喜欢的还是命令行，因为命令行可以任何时候任何设备上进行灵活的 git 操作，下面是笔者在使用 git 过程中的一些心得。供自己备忘，也希望能帮助到大家。

## 自用的一些 git 自定义命令

使用默认浏览器打开当前仓库的 github remote url（一般是 github 链接）

```sh
git config --global alias.home '!sh -c '\''url=$(git remote get-url origin) && open "$url"'\'''
# 配置完后，使用以下命令即可打开当前仓库的 github remote url
git home
```

列出当前仓库所有 Contributor，以提交次数排名

```sh
git config --global alias.rank 'shortlog -s -n'
# 配置完后，使用以下命令即可
git rank
```

git log 美化 , 其中详细参数可见： https://git-scm.com/docs/pretty-formats

```sh
# 可以根据自己需要在其中添加其他选项 例如 --all 之类的，详细配置参数可见： https://git-scm.com/docs/pretty-formats
git config --global alias.logs "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %Cblue(%cd) %C(bold blue)<%an>%Creset' --abbrev-commit --date=format:'%Y-%m-%d %H:%M:%S'"
```

然后就可以在终端使用 `git logs` 查看 log 了。

效果如下，比默认的好看，且实用多了。

![](https://assets.fedtop.com/picbed/202307311028731.png)

当然用别名做自定义命令后的好处是，你仍然可以在后面接上其他参数

```sh
# 只查看某个人的提交
git logs --author="xxx"
# 查看每次 commit 修改了哪些文件（这样的话在终端里使用 cmd + 鼠标左键点击文件名可以直接打开文件）
git logs --name-only # 或 git logs --stat
# 查看每次 commit 修改了哪些文件，以及修改了哪些代码
git logs --patch
```

![](https://assets.fedtop.com/picbed/202309080234940.png)

git 命令行文件路径显示中文

```sh
# 全局
git config --global core.quotepath false
# 当前仓库
git config core.quotepath false

# or 试试git --no-pager log
# 如果可以显示的话，把pager设置为more
git config --global core.pager more
```

![](https://assets.fedtop.com/picbed/202211241024501.png)

这样设置后，如果你的终端是 utf-8 编码的那么就可以直接显示中文了。

![](https://assets.fedtop.com/picbed/202211241024385.png)

Git Status 美化

```sh
git config --global alias.view "status -sb"
# 设置完后，使用以下命令查看自定义的 git status
git view
```

### Git 命令输出里加上颜色

```sh
git config --global color.ui 1
```

## 命令补全

### Zsh 命令行自动补全

Zsh 为 Git 提供了一个 Tab 补全库。 想要使用它，只需在你的 .zshrc 中执行 autoload -Uz compinit && compinit 即可。 相对于 Bash，Zsh 的接口更加强大：

```sh
$ git che<Tab>
check-attr        -- 显示 gitattributes 信息
check-ref-format  -- 检查引用名称是否符合规范
checkout          -- 从工作区中检出分支或路径
checkout-index    -- 从暂存区拷贝文件至工作目录
cherry            -- 查找没有被合并至上游的提交
cherry-pick       -- 从一些已存在的提交中应用更改
```

- https://www.git-scm.com/book/zh/v2/%E9%99%84%E5%BD%95-A%3A-%E5%9C%A8%E5%85%B6%E5%AE%83%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8-Git-Zsh-%E4%B8%AD%E7%9A%84-Git

### bash-completion 命令行自动补全

```sh
# 安装 bash-completion
brew install bash-completion
```

```sh
# 在 ~/.bash_profile 中添加
if [ -f $(brew --prefix)/etc/bash_completion ]; then
  . $(brew --prefix)/etc/bash_completion
fi
```

### git 命令自动纠错

```sh
git config --global help.autocorrect 1
```

## git 忽略代码块

```sh
# 忽略行代码
git config --global filter.inlineIgnore.clean "sed '/\/\/ #inlineIgnore$/'d"
git config --global filter.inlineIgnore.smudge cat
# 忽略代码块
git config --global filter.blockIgnore.clean "sed '/\/\/ blockIgnore_begin/,/\/\/ blockIgnore_end$/d'"
git config --global filter.blockIgnore.smudge cat
```

在项目根目录的.gitattributes 文件中添加以下

```sh
# .gitattributes文件
*.ts filter=blockIgnore
# 或者
*.ts filter=inlineIgnore
```

## 修改 commit 相关信息

更改上一次 commit 的 message

```sh
git commit --amend -m "new commit message"
```

更改上一次 commit 的文件

```sh
git commit --amend
```

更改提交时间

```sh
# 修改为当前时间
git commit --amend --date="now" --no-edit
# 修改为指定时间
date -R # 获取当前时间 RFC 2822 格式 Sun, 26 Feb 2023 02:24:49 +0800
git commit --amend --date="Sun, 26 Feb 2023 02:24:49 +0800" --no-edit
git commit --amend --date="2021-07-06 18:00:00" --no-edit

```

提交的时候指定时间

```sh
git commit --date="2021-07-06 18:00:00" -m "test"
```

- https://cloud.tencent.com/developer/ask/sof/77373

## git 设置和取消代理

```sh
# 设置 ss
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
# 设置代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## git 子模块相关操作

```sh
# 删除子模块
git submodule deinit -f -- packages/xxx
rm -rf .git/modules/packages/xxx
git rm -f packages/xxx

# or
git rm --cached packages/xxx

# 添加子模块
git submodule add
```

## 配置 SSH 配置

配置单个 ssh

某些用户在通过 SSH 连接到 Git 时可能会遇到问题，因为防火墙会阻止与默认 SSH 端口的连接。在 SSH 设置中解决此问题，以强制连接通过端口 443（默认 HTTPS 端口，应打开）。为此，请编辑 ~/.ssh/config SSH 配置文件并添加以下行：

```sh
Host github.com
Hostname ssh.github.com
Port 443
User git
```

通过运行以下命令测试新配置：

```sh
ssh -T -p 443 git@ssh.github.com
```

配置多个 ssh 配置：

一般用于 Git 多个账户的时候，比如公司和个人账户。

- https://blog.csdn.net/wlk1229/article/details/105934900/
- https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=mac
- https://juejin.cn/post/7123222636812828708

## 解决 gitk 中文乱码

```sh
git config --global gui.encoding utf-8
```

![](https://assets.fedtop.com/picbed/20220706183831.png)

### git 设置别名

https://www.cnblogs.com/taylorblog/p/3934518.html

### git 允许空提交

```sh
$ git commit -m "Big-ass commit" --allow-empty
```

## 更改 git gui 的编码

```sh
git config --global gui.encoding utf-8

```

## Git 密码更新

```sh
# 再次拉取代码会提示输入账号密码。
git config --global credential.helper osxkeychain
```

## rebase 相关操作

当我们在一顿修改并 commit 后，向远端仓库进行 push 时

![](https://assets.fedtop.com/picbed/202308311509236.png)

这个时候 pull

![](https://assets.fedtop.com/picbed/202308311512874.png)

所以

![](https://assets.fedtop.com/picbed/202308311514187.png)

## 设置默认 push

git push --set-upstream origin master

## Git 常用命令

<details  style='user-select:none;'>
<summary>点我展开</summary>

## 仓库

```sh
# 在当前目录新建一个Git代码库
$ git init

# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
$ git clone [url]
```

## 配置

```sh
# 显示当前的Git配置
$ git config --list

# 编辑Git配置文件
$ git config -e [--global]

# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

## 增加/删除文件

```sh
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
$ git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

## 代码提交

```sh
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```

## 分支

```sh
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
$ git merge [branch]

# git 合并不同历史的仓库，并保留双方 commit logs
# https://blog.csdn.net/jiaming917/article/details/88914228

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]

```

## 标签

```sh
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]

```

## 查看信息

```sh
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog

# 查看某个人在某个时间段的提交
git logs --author="xxx" --since="2021-07-01" --until="2021-07-31"

```

## 远程同步

```sh
# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```

## 撤销

```sh

# 这样就能成功的撤回你刚刚的commit操作。
# HEAD^的意思是上一个版本，也可以写成HEAD~1
# 如果你进行了2次commit，想都撤回，可以使用HEAD~2
git reset --soft HEAD^

# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```

## 其他

```sh
# 生成一个可供发布的压缩包
$ git archive
```

</details>

## 相关学习资料

- https://backlog.com/git-tutorial/cn/intro/intro1_1.html
- https://github.com/justjavac/free-programming-books-zh_CN
