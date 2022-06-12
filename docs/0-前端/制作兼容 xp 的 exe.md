---
title: 制作兼容 xp 的 exe
date: 2021-03-02
tags:
  - PC客户端
categories:
  - 前端
---

# 制作兼容 xp 的 exe

由于医院部分设备限制，我们需要兼容 xp 系统。

那么我们有两个方案：

## 方案一：使用 chrome 浏览器

chrome 能兼容 xp 的版本在 50 以下，但是经过我虚拟机安装测试发现 46 能正常运行。

然后在属性中设置--kiosk 就能全屏显示

如果是 https 的网址，由于 xp 没有最新的证书，所以会提示不安全，可以加上

--ignore-certificate-errors

![](https://tcs.teambition.net/storage/3123f0e7cda17dfcab4c3c9efae2bc956590?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjNmMGU3Y2RhMTdkZmNhYjRjM2M5ZWZhZTJiYzk1NjU5MCJ9.2nQYgVCAIxBB0nTADbIeNRsxgRtRt4nAPL_YUFlel2Q)

"C:\\Documents and Settings\\cf\\Local Settings\\Application Data\\Chromium\\Application\\chrome.exe" --ignore-certificate-errors --kiosk https://my-network.com

## 方案二：使用 nwjs 打包

如果需要兼容到 xp，则只能使用 0.14.7 版本,官方下载地址在这里，不过淘宝镜像下载更快些。

> 注：nwjs-sdk-v0.14.7-win-ia32.zip 才能打开控制台调试

所以打包使用`nwjs-v0.14.7-win-ia32` ，开发使用`nwjs-sdk-v0.14.7-win-ia32.zip`

如果只是配置网址，那么只需要解压后 package.json，修改 main 为网址，然后打包即可。

打包软件有用`Enigma Virtual Box` 和 `FilePacker` 的，FilePacker 我试了下不是很好用。我推荐 Inno setup, xp 兼容的最高版本为 5.5.9, 下载地址在这里。

然后在 xp 内打包即可，详细教程见 这里

这个打包有一个问题，就是如果打包目录里有文件夹，则需要修改打包配置文件，如下

![](https://tcs.teambition.net/storage/312380a11da7f923353a41bcc6c595a879de?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjM4MGExMWRhN2Y5MjMzNTNhNDFiY2M2YzU5NWE4NzlkZSJ9.8jgoebQPYdWF0X4YQ0wi6Rbp3jFgCy8uZilvvJVazR0)

否则会这个错误

![](https://tcs.teambition.net/storage/312300f69a57625f8d7da0a3ec30a4b9fb43?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjMwMGY2OWE1NzYyNWY4ZDdkYTBhM2VjMzBhNGI5ZmI0MyJ9.-bW1Avlu9n-VG1Z9ypANv3OusIRAYhbIK4AST2u_A5c)

### 1\. Inno setup 配置中文

Inno setup 默认是使用的英文，官网上也有非正式的中文文件下载，地址在这里

把它复制到 txt 中，然后修改文件名为`ChineseSimplified.isl`

存到 Inno setup 目录的`languages` 中

然后完成设置脚本引导 👇 疯狂下一步就行

![](https://tcs.teambition.net/storage/3124c7759d0ab86b8625b2654a9c6245f156?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjRjNzc1OWQwYWI4NmI4NjI1YjI2NTRhOWM2MjQ1ZjE1NiJ9._edW9CNnsk6WAlieNtwvSIVidCD8F0iWihRpWvtAD3g)

完成后就出现了 👇

![](https://tcs.teambition.net/storage/31246a532e0b0b5ba672300febece208dd8a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjQ2YTUzMmUwYjBiNWJhNjcyMzAwZmViZWNlMjA4ZGQ4YSJ9.LQGCv22mAqeX5dQZZbEoFGjTw76oYxSXk-tvK-GMuHo)

在安装配置文件 iss 修改 languages ，就可以了

![](https://tcs.teambition.net/storage/312385899938e149fea34f8bb717b62c01fe?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjM4NTg5OTkzOGUxNDlmZWEzNGY4YmI3MTdiNjJjMDFmZSJ9.6N5pZtu7Zuyjwaa3RvDXTJ-rYtUcTx56shaKWb0kBrI)

好了之后保存-->随便取个名字

![](https://tcs.teambition.net/storage/3124ec04e15061fa6014703dbd4f02b2e530?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjRlYzA0ZTE1MDYxZmE2MDE0NzAzZGJkNGYwMmIyZTUzMCJ9.aq-L4vF9vjt-uiPeZ9uckdl5ftbgJk4oB8Xt99-9h7A)

**注：这样配置后，在选择语言那一块还是会乱码，修改前面下载的中文文件**`ChineseSimplified.isl`**就好了**

![](https://tcs.teambition.net/storage/31232931ec0753e7078f9c7f765cbac632a3?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjMyOTMxZWMwNzUzZTcwNzhmOWM3Zjc2NWNiYWM2MzJhMyJ9.Y9uAQ6-QU_fsqgOlmJsFr_5QmRIkK6aCGJ3HkmuE7sQ)

### 2\. 配置开机自启

有两种方式，一种是不修改注册表，避免了杀毒软件提示，其实就是将快捷方式添加到“启动”文件夹。

```
\[Tasks\]Name: "startupicon"; Description: "开机启动"; GroupDescription: "{cm:AdditionalIcons}"; OnlyBelowVersion: 0,6.1\[Icons\]Name: "{commonstartup}\\{#MyAppName}"; Filename: "{app}\\{#MyAppExeName}"; Tasks: startupicon
```

另一种是修改注册表

```
\[Registry\] Root: HKLM; Subkey: "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run"; ValueType: string; ValueName: "testrun"; ValueData: "{app}\\{#MyAppExeName}"
```

### 3.修改图标

修改安装文件的图标，只需要在 Inno setup 向导里导入就可以了

修改底部任务栏显示的图标，在`package.json` 中修改即可

![](https://tcs.teambition.net/storage/3123325425c34755dcf47ca0c18cb964f707?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjMzMjU0MjVjMzQ3NTVkY2Y0N2NhMGMxOGNiOTY0ZjcwNyJ9.sryigFGEOTi9HOCr8yS_1fr-FxY5wGFDnvzK97YrDL4)

但是这个不能修改到桌面图标，这个时候我们需要使用`Resource Hacker` 来修改，下载地址在这里

我们需要先将图片转为 ico 文件，这个可以使用在线制作 favicon 工具

然后使用`Resource Hacker`打开 nw.exe,

![](https://tcs.teambition.net/storage/31237b6ea08002d41a52ff2c42e0ac6de867?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjM3YjZlYTA4MDAyZDQxYTUyZmYyYzQyZTBhYzZkZTg2NyJ9.k6LgWJt7-BArfiNtS96Wm98SFqpjjByWGr04WqFNGDc)

![](https://tcs.teambition.net/storage/312334961f1a2e5eafd90db1572e132c9972?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjMzNDk2MWYxYTJlNWVhZmQ5MGRiMTU3MmUxMzJjOTk3MiJ9.bYZI-f8ewtQlz652NTQKfeUoPII8vCJ0kkxLIW4ytXI)

![](https://tcs.teambition.net/storage/312348f9e214cf4f0a30e3eca65da026d233?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9hcHBJZCI6IjU5Mzc3MGZmODM5NjMyMDAyZTAzNThmMSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTYxOTk2NTgxNCwiaWF0IjoxNjE5MzYxMDE0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzMxMjM0OGY5ZTIxNGNmNGYwYTMwZTNlY2E2NWRhMDI2ZDIzMyJ9.tK0PqRTrQ_mB5CC-Yw3zZQVNBkgoAIM_pxW-I12mpTg)

替换后保存即可

## xp 内的局限性

1.  xp 内语音播报只有英文，无法进行中文的播报

2.  es6 语法支持比较差，需要使用 webpack 打包后使用

\*\* 另外需要在 xp 环境测试需要虚拟机,我后面会再出一个虚拟机相关的文章
