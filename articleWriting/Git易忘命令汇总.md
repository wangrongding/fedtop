# git 易忘命令汇总

修改文件名  
git mv --force AppTest.java apptest.java

https://backlog.com/git-tutorial/cn/intro/intro1_1.html

https://github.com/justjavac/free-programming-books-zh_CN

# git 命令及技巧

## clone 仓库指定分支

git clone -b [branchName] remoteUrl

## clone 仓库到本地，并更改仓库文件夹名称

git clone remoteUrl [foldername]

## git 设置和取消代理

1. 设置 ss  
   git config --global http.proxy 'socks5://127.0.0.1:1080'  
   git config --global https.proxy 'socks5://127.0.0.1:1080'
1. 设置代理  
   git config --global http.proxy http://127.0.0.1:4781  
   git config --global https.proxy https://127.0.0.1:4781
1. 取消代理  
   git config --global --unset http.proxy  
   git config --global --unset https.proxy

## Git 密码更新

git config --global credential.helper osxkeychain  
再次拉取代码会提示输入账号密码。
