# 前端必须知道的 npm 知识

## 查看某个包的文档

一行命令就能解决的事情,不要再去打开百度搜索啦~

```sh
npm home [包名]
# 例如👇
npm home lodash
...
```

## 查看某个包的代码仓库

想看某个包的源码?还要跑到 github 去搜索?nonono,也是一行代码。

```sh
npm repo [包名]
```

## npm 发布包

发布自己开发的工具包，只需简单的三步！  
**注意:使用淘宝源会报错，要改回默认源**

npm 切回默认源

```sh
npm config set registry https://registry.npmjs.org
```

在当前目录下终端执行 `npm adduser`后输入 你注册的 npmjs 的账号密码和邮箱

```sh
npm adduser
```

然后当前目录执行`npm publish`就好了，（记得每次发布的时候手动改下版本号！）

```sh
npm publish
```

## npmrc 文件

## 本地开发的 npm 包如何调试
