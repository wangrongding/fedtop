# CenterOs

https://www.jianshu.com/p/4ce7d511bc13

## centos7 安装 zsh 配置 oh-my-zsh

```sh
yum install -y zsh
```

设置默认 shell

```sh
chsh -s /bin/zsh
```



确保你有 git

```sh
yum install -y git
```

安装 oh-my-zsh

```sh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
