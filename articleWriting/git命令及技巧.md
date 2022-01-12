# git 命令及技巧

Git 密码更新  
git config --global credential.helper osxkeychain  
再次拉取代码会提示输入账号密码。

git 设置和取消代理

## 设置 ss

git config --global http.proxy 'socks5://127.0.0.1:1080'  
git config --global https.proxy 'socks5://127.0.0.1:1080'

## 设置代理

git config --global https.proxy http://127.0.0.1:1080  
git config --global https.proxy https://127.0.0.1:1080

## 取消代理

git config --global --unset http.proxy  
git config --global --unset https.proxy
