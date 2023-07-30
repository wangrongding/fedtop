---
title: 前端团队基于VUE开发的格式化统一方案
date: 2020-01-11
tags:
  - 前端工程化
categories:
  - 前端
---

### 1. 安装 Vetur 插件

![Vetur](https://img-blog.csdnimg.cn/20200922000706395.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjAzODI0NQ==,size_16,color_FFFFFF,t_70#pic_center)

### 2. 在 vscode 中摁住 ctrl+shift+p 搜索 settings.json 并打开

![settings.json](https://img-blog.csdnimg.cn/20200922000958870.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjAzODI0NQ==,size_16,color_FFFFFF,t_70#pic_center)

### 3.在 settings.json 文件中的最后面加上以下代码以完成格式化配置

```javascript
//==================vetur格式化配置=====================
    "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
    "vetur.format.defaultFormatter.css": "prettier",
    "vetur.format.defaultFormatter.scss": "prettier",
    "vetur.format.defaultFormatter.less": "prettier",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // "vetur.format.defaultFormatter.html": "prettyhtml",
    "vetur.format.defaultFormatter.js": "prettier",
    // "vetur.format.defaultFormatter.js": "vscode-typescript",//希望js不换行显示
    "vetur.format.defaultFormatterOptions": {
        "prettier": {
            "semi": true, // 句尾是否加;
            "singleQuote": true, // 使用单引号而不是双引号
        },
        "js-beautify-html": {
            "wrap_line_length": 300, //多少字符换行
            "singleQuote": true,
            "wrap_attributes": "force-expand-multiline",
            // "wrap_attributes": "force-aligned"// 属性强制折行对齐
        },
        "prettyhtml": {
            "printWidth": 100,
            "singleQuote": true,
            "wrapAttributes": false,
            "sortAttributes": false
        }
    },
    // "vetur.format.options.useTabs": true,
    "vetur.format.options.tabSize": 4, //缩进宽度
    "editor.formatOnSave": true, //保存时自动格式化
    "editor.formatOnPaste": true, // 在粘贴时自动格式化
    //==================vetur格式化配置End===================
```

### 4.在 vue 文件中右击选择文档格式设置方式

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200922001236330.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjAzODI0NQ==,size_16,color_FFFFFF,t_70#pic_center)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200922001253463.png#pic_center)
