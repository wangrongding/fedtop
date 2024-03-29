---
title: 一款小巧的基于 Node 环境的终端翻译小工具
tags:
  - Node
categories:
  - 前端
date: 2021-08-05
---

## 导语

大家好,我是荣顶~  
不知道大家平时开发时,是否需要经常查单词,和一些报错长短句,由于我的英文水平不怎么高,所以日常使用有道等查词工具的频率是非常高的.但是经常在编辑器以及翻译软件或是其他中来回切换难免有些影响效率,所以我决定写一个能在终端轻松方便使用的翻译小工具. 下面就给小伙伴们分享一下我的 cli 工具制作历程~

<!-- more -->

## 项目需求

1. 首先明确我们这个工具是为了不在各个软件中来回切换(实现在终端中通过命令使用)
2. 可以中译英,英译中,不仅会翻译单词还要能翻译长短句(这里我们会用到有道的 api)
3. 可以对单词和长短句进行发音(遇到不会读的单词,肯定还是要学一下的~)
4. 而且它需要足够小(我的 Unpacked Size 只有 5.17kb)

## 前置条件

node 安装完毕

## 明确逻辑需求

1. 在 node.js 中使用有道翻译的 API 进行文字翻译。不管是中译英还是英译中

2. 然后将 api 的返回 Json 通过格式化后输出到终端即完成翻译

3. 通过添加参数可实现翻译,阅读,帮助等其他功能的自由选择

   ```sh
   命令 + 文本  #对文本进行翻译
   命令 + 文本 + -S/--say #会对文本进行阅读,不加参数则只翻译
   命令 + -H/--help #终端输出帮助文档

   #其他功能可以自己根据具体需求来完成
   ```

## 实现步骤

- 创建一个项目目录后,在当前目录打开终端

  ```sh
  #输入以下命令
  npm init -y
  ```

  ![](https://assets.fedtop.com/picbed/202206122119916.png)

- 我编辑器使用的是 vsCode ,在编辑器中打开项目目录

  ![](https://assets.fedtop.com/picbed/202206122119939.png)

- 新建一个 bin 文件夹，在 bin 文件夹内新建一个 js 文件用于命令行工具的测试；

  ![](https://assets.fedtop.com/picbed/202206122119725.png)

- 在 packjson.js 中配置如下信息：命令是可以自定义的(`ts`,也可以是`aaa`,`bbb`)

  ![](https://assets.fedtop.com/picbed/202206122120059.png)

- 然后使用：

  ```
  npm link
  ```

  link 完后,我们可以通过`npm ls -g`查看是否成功(有当前文件夹被映射到全局包中说明 link 成功)

  ![](https://assets.fedtop.com/picbed/202206122120269.png)

  我们在终端中使用`ts`命令,可以看到开始创建的 js 文件中的 console.log 执行了,至此,我们的工具基本完成就已经完成一半!接下来就是写逻辑的过程了

  ![](https://assets.fedtop.com/picbed/202206122120182.png)

- 项目中文字高亮,单词等阅读,命令行参数的获取主要依赖 colors,say 以及 yargs

  ```sh
  #所以我们先安装这三个依赖
  yarn add say colors yargs -S
  ```

- 安装完成后在 bin 文件夹下的 js 文件中引入

  ```javaScript
  const colors = require("colors");
  const say = require("say");
  const argv = require("yargs").argv,
  queryStr = encodeURI(argv.\_.join(" "));
  ```

- 首先对命令进行逻辑处理

  ```javaScript
  if (!queryStr) {
      //命令后没有参数
      console.log("这里是帮助文本");
      console.log("请输入单词或短句[-S,--say]");
  } else {
      //有参数--say或-S,播放
      if (argv.say == true || argv.S == true) {
          console.log("播放中...".rainbow);
          say.speak(queryStr);
          return;
      }
      //发送文本到有道api进行查词
      translate(queryStr);
  }
  ```

- 定义查词函数

  ```javascript
  function translate(query) {
    //发送翻译请求
    let http = require('http')
    // 1.用于请求的选项
    let options = {
      host: 'fanyi.youdao.com',
      port: '80',
      path: '/openapi.do?keyfrom=translation-tool&key=1730699468&type=data&doctype=json&version=1.1&q=' + query,
    }
    // let options = ` http://aidemo.youdao.com/trans?q=${query}&&from=Auto&&to=Auto`;
    // 处理响应的回调函数
    let callback = function (response) {
      // 不断更新数据
      response.on('data', function (data) {
        //对返回的数据进行格式化和高亮
        format(data)
      })
      response.on('end', function () {
        // 数据接收完成
        console.log('---------------')
      })
    }
    // 向服务端发送请求
    let req = http.request(options, callback)
    req.end()
  }
  ```

- 定义格式化函数
  ```javaScript
  function format(json) {
      let data = JSON.parse(json),
          pronTitle = "发音：",
          pron = data.basic ? data.basic.phonetic : "无",
          mainTitle = "翻译：",
          mainTrans = "",
          webTitle = "网络释义：",
          machineTrans = "",
          webTrans = "",
          template = "";
      let basic = data.basic,
          web = data.web,
          translation = data.translation;
      if (basic ? basic : "") {
          for (let i = 0; i < basic.explains.length; i++) {
              mainTrans += "\n" + basic.explains[i];
          }
      }
      if (web ? web : "") {
          for (let i = 0; i < web.length; i++) {
              webTrans +=
                  "\n" +
                  (i + 1) +
                  ": " +
                  web[i].key.red.bold +
                  "\n" +
                  web[i].value.join(",");
          }
      }
      translation ? (machineTrans = translation) : false;
      template =
          pronTitle.red.bold +
          pron +
          "\n" +
          mainTitle.green.bold +
          mainTrans +
          "\n" +
          webTitle.blue.bold +
          webTrans +
          "\n" +
          "机器翻译：".green.bold +
          machineTrans;
      console.log(template);
  }
  ```
- 完整的代码

  ```javascript
      #! /usr/bin/env node

      const colors = require("colors");
      const say = require("say");
      const argv = require("yargs").argv,
          queryStr = encodeURI(argv._.join(" "));
      //=======================================================
      if (!queryStr) {
          //命令后没有参数
          console.log("这里是帮助文本");
          console.log("请输入单词或短句[-S,--say]");
      } else {
          //有参数--say或-S,播放
          if (argv.say == true || argv.S == true) {
              console.log("播放中...".rainbow);
              say.speak(queryStr);
              return;
          }
          //发送文本到有道api进行查词
          translate(queryStr);
      }
      //格式化
      function format(json) {
          let data = JSON.parse(json),
              pronTitle = "发音：",
              pron = data.basic ? data.basic.phonetic : "无",
              mainTitle = "翻译：",
              mainTrans = "",
              webTitle = "网络释义：",
              machineTrans = "",
              webTrans = "",
              template = "";
          let basic = data.basic,
              web = data.web,
              translation = data.translation;
          if (basic ? basic : "") {
              for (let i = 0; i < basic.explains.length; i++) {
                  mainTrans += "\n" + basic.explains[i];
              }
          }
          if (web ? web : "") {
              for (let i = 0; i < web.length; i++) {
                  webTrans +=
                      "\n" +
                      (i + 1) +
                      ": " +
                      web[i].key.red.bold +
                      "\n" +
                      web[i].value.join(",");
              }
          }
          translation ? (machineTrans = translation) : false;
          template =
              pronTitle.red.bold +
              pron +
              "\n" +
              mainTitle.green.bold +
              mainTrans +
              "\n" +
              webTitle.blue.bold +
              webTrans +
              "\n" +
              "机器翻译：".green.bold +
              machineTrans;
          console.log(template);
      }
      //发送请求
      function translate(query) {
          //发送翻译请求
          let http = require("http");
          // 1.用于请求的选项
          let options = {
              host: "fanyi.youdao.com",
              port: "80",
              path:
                  "/openapi.do?keyfrom=translation-tool&key=1730699468&type=data&doctype=json&version=1.1&q=" +
                  query,
          };
          // let options = ` http://aidemo.youdao.com/trans?q=${query}&&from=Auto&&to=Auto`;
          // 处理响应的回调函数
          let callback = function(response) {
              // 不断更新数据
              response.on("data", function(data) {
                  //对返回的数据进行格式化和高亮
                  format(data);
              });
              response.on("end", function() {
                  // 数据接收完成
                  console.log("---------------");
              });
          };
          // 向服务端发送请求
          let req = http.request(options, callback);
          req.end();
      }
  ```

- 至此翻译工具的基本功能已经完成

## 发布 cli 工具至 npm

- 首先要在 npm.js 官网要有自己的账号。(还没有的小伙伴先自行注册一个~)
- 在当前目录下终端执行 `npm adduser` （注意:使用淘宝源会报错，要改回来），输入 npmjs 的账号密码邮箱。
- 最后执行 `npm publish` ，将代码发布在 npm 上，即发布成功~
- 在 npm 上查看自己刚发布的代码  
  ![](https://assets.fedtop.com/picbed/202206122121342.png)

- 到这里,工具已经发布成功,我们回到自己的项目目录,在终端进行`npm unlink ts`对前面的关联进行解绑,然后输入`ts`,这时我们发现命令已经报错了,说明解绑成功,我们执行 `npm i [你的包名] -g` 待安装完成后再次输入命令`ts` 我们发现已经可以翻译了和阅读了

  ![](https://assets.fedtop.com/picbed/202206122121024.png)

  ![](https://assets.fedtop.com/picbed/202206122121876.png)

- 同样的在 linux 或者 mac 中,只要装了 node 环境,即可通过 npm 全局安装自己的翻译小工具,不管是在 cmd 还是 powerShell 中都能很好的使用(下图为 linux 中的使用截图)

  ![](https://assets.fedtop.com/picbed/202206122121509.png)

- 我的项目代码已经上传至[github](https://github.com/wangrongding/ding-trans),喜欢的小伙伴可以点个 star,谢谢!(完结~撒花)

## 最后

    很高兴可以和大家一起变强
    大家可以关注我的公众号，前埔寨。和我一起在键帽与字符上横跳，在代码与程序中穿梭。
