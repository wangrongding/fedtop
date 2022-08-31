# 前端开发者-使用 Windows 转 MacOs 快速上手&避坑指南

## 第一件大事

先去 https://www.ipaddress.com/ 这里找到 raw.github.com 对应的 ip 地址。  
这里是 199.232.96.133  
终端中 sudo vim /etc/hosts  
添加 199.232.96.133 raw.github.com 199.232.96.133 raw.githubusercontent.com

https://blog.vini123.com/553

这里我使用 SwitchHosts 来修改 hosts 文件 https://github.com/oldj/SwitchHosts/releases

![](https://assets.fedtop.com/picbed/202207251346380.png)  
![](https://assets.fedtop.com/picbed/202207251348447.png)  
![](https://assets.fedtop.com/picbed/202207251349400.png)

```sh
〉sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
curl: (7) Failed to connect to raw.githubusercontent.com port 443 after 14 ms: Connection refused
```

```sh
wangrongding@bogon ~ % sh -c /Users/wangrongding/Downloads/install-ohmyzsh.sh
sh: /Users/wangrongding/Downloads/install-ohmyzsh.sh: Permission denied
```

![](https://assets.fedtop.com/picbed/202207251414458.png)  
![](https://assets.fedtop.com/picbed/202207251414913.png)

https://www.runoob.com/linux/linux-comm-chmod.html  
![](https://assets.fedtop.com/picbed/202207251414081.png)

```sh
wangrongding@bogon ~ % chmod +x /Users/wangrongding/Downloads/install-ohmyzsh.sh
```

![](https://assets.fedtop.com/picbed/202207251353937.png)

## 安装软件

### 安装 brew

国内安装 brew 会 404

![](https://assets.fedtop.com/picbed/202207241803299.png)

### 安装 ohmyzsh

```sh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

命令自动补全插件，它会自动根据历史输入进行提示，然后按 → （方向右键）自动补全

```shell
# 安装 zsh-autosuggestions到指定位置
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
# 加入插件列表
vim ~/.zshrc
# ====================
plugins=(
  git
  zsh-autosuggestions
)
# ====================
# 刷新配置
source ~/.zshrc
```

这个插件的主要作用就是在提高颜值（高亮你的 zsh 可用命令），安装如下：

```shell
# 安装 zsh-syntax-highlighting到指定位置
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
vim ~/.zshrc
# 加入插件列表
plugins=(
git
zsh-autosuggestions
zsh-syntax-highlighting
)
source ~/.zshrc
```

### 安装 vscode

VsCode: https://code.visualstudio.com/download 将 VsCode 添加到环境变量中设置环境变量

![](https://assets.fedtop.com/picbed/202208051003960.png)

### 安装 pnpm

保存当添加完当前的 alias 命令之后，保存文件：输入模式下，按 ESC 按键后，输入 :wq 保存退出。然后如果每次修改过 alias 以后，运行如下命令即可：

source ~/.zshrc

如果没有起作用，重启命令行之后生效。

### n （切换 node 版本）

全局安装 n

```sh
npm install -g n
```

升级 node.js 到长期稳定版

```sh
sudo n lts
```

3.升级到最新版

```sh
sudo n latest
```

4.n 后面也可以跟随版本号,升级到任意版本

```sh
sudo n v0.10.26或sudo n 0.10.26
```

5.切换使用版本

```sh
sudo n 7.10.0
```

6.删除制定版本

```sh
sudo n rm 7.10.0
```

7.用制定的版本执行脚本

```sh
n use 7.10.0 some.js
```

可以查看所有已安装的 node 版本，可以根据上下和回车选择要使用的版本

```sh
sudo n
```

## husky 钩子的问题

macos 系统中，可能会出现 “因为没有将钩子 '.husky/pre-commit' 设置为可执行 钩子被忽略。“ 的错误。  
这是因为当前的文件没有执行权限，只需要更改文件为可执行即可。

```sh
chmod +x .husky/*
```

![](https://assets.fedtop.com/picbed/202207251146057.png)

## 终端

### 命令

```shell
# 创建目录
mkdir
# 创建文件
touch
# 拷贝
cp
# 移动/重命名
mv
# 查找
find
# 打开文件夹
open
# 显示文件类型
file <filename>
# 比较文件差异
diff
# 修改文件权限
chmod
# 查看命令行历史
history
# 给某个命令定义别名
alias del= rm -i
# 取消别名
unalias del
# 给文件加上行号
nl file1 > file2
```

### 快捷键

- control + A：移动光标至行首
- control + E：移动光标至行尾
- control + X：按住 control ， 双击 X 可以进行当前位置与行首位置，进行切换
- option+B：光标向左移动一个单词
- option+F：光标向右移动一个单词
- control + U：删除光标前所有字符
- control + K：删除光标后所有字符
- control + W：删除光标前一个单词（根据空格识别单词分隔）
