---
title: webpack配置多页面应用的一次尝试
date: 2019-06-15
tags:
  - webpack
categories:
  - 前端
---

::: tip

1. 最近有一个项目，考虑到要进行 SEO，所以要做成多页面应用。为了保证开发速度和开发效率，所以决定使用 webpack 做一套模块化配置方案。

2. 下面主要针对一些重要的点提供思路，并不作详解。完整的代码，我会放在 github（[项目地址](https://github.com/recoluan/webpack-multipage-demo)）上供大家参考，如果有优化的地方，请在评论区指点出来。 :::

<!-- more -->

## 目录

```
|-- build                           webpack 配置
|   |-- utils.js                    处理 webpack 配置的公共方法
|   |-- webpack.base.conf.js        公共配置
|   |-- webpack.dev.conf.js         开发环境配置
|   |-- webapck.prod.conf.js        生产环境配置
|   |-- webpack.rules.conf.js       文件处理规则
|-- dist                            存放变异后文件
|-- |
|-- src                             源文件
|   |-- assets
|   |-- pages
|   |   |-- index                   首页
|   |   |   |-- index.html          首页模板
|   |   |   |-- index.js            首页入口文件
|   htmlarrary.js                   页面配置文件
```

## 多页面

多页面，首先最重要的就是处理多个 html 模板和对应的多个入口文件。

### html 模板

在项目根目录创建一个 `htmlarrary.js`，用来存储页面配置：

```js
// htmlarrary.js

module.exports = [
  {
    _html: 'index',
    title: '首页',
    chunks: ['index', 'manifest', 'vendors'], // 页面用到的vendor模块
  },
  {
    _html: 'login',
    title: '登录',
    chunks: ['login'],
  },
]
```

然后在 `/build/utils.js` 创建 `getHtmlArray` 方法，用来自动生成多个模板的配置：

```js
// /build/utils.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlArray = require('../htmlarray.js')

exports.getHtmlArray = function (moduleExportsPlugins) {
  // 根据模板配置生成 HtmlWebpackPlugin 需要的配置
  const getHtmlConfig = function (name, chunks, title) {
    return {
      template: `./src/pages/${name}/index.html`,
      filename: `./${name}.html`,
      favicon: './src/assets/images/public/favicon.ico',
      title,
      inject: true,
      hash: true, // 开启hash
      chunks, // 页面要引入的包
      minify:
        process.env.NODE_ENV === 'development'
          ? false
          : {
              removeComments: true, // 移除HTML中的注释
              collapseWhitespace: true, // 折叠空白区域 也就是压缩代码
              removeAttributeQuotes: true, // 去除属性引用
            },
    }
  }

  // 循环创建模板配置
  htmlArray.forEach((element) => {
    const { _html, chunks, title } = element
    moduleExportsPlugins.push(new HtmlWebpackPlugin(getHtmlConfig(_html, chunks, title)))
  })
}
```

在 `webpack.base.conf.js` 中通过 `getHtmlArray` 添加多页面引擎配置：

```js
const { getHtmlArray } = require('./utils.js')

module.exports = {
  // ... 相关配置
}

getHtmlArray(module.exports.plugins)
```

### 入口文件

在 `/build/utils.js` 创建 `getEntry` 方法，用来自动生成入口文件的配置：

```js
// /build/utils.js
const glob = require('glob')

exports.getEntry = function () {
  const entry = {}
  // 读取src目录所有page入口
  glob.sync('./src/pages/*/*.js').forEach((name) => {
    const start = name.indexOf('src/') + 4
    const end = name.length - 3
    const eArr = []
    const n = name.slice(start, end).split('/')[1]
    eArr.push(name)
    eArr.push('@babel/polyfill') // 引入这个，是为了用async await，一些IE不支持的属性能够受支持，兼容IE浏览器用的
    entry[n] = eArr
  })
  return entry
}
```

在 `webpack.base.conf.js` 中通过 `getEntry` 添加多入口配置：

```js
// webpack.base.conf.js

const { getEntry } = require('./utils.js')

module.exports = {
  entry: getEntry(),
}
```

## JS

JS 方面，我们一般有以下需求：

1. eslint 错误提醒；
2. ts-loader 解析 typescript 语法；
3. babel-loader 解析 ES6 语法。

针对以上需求，我们来配置一下子 rules，并且做一下延伸：

```js
// webpack.rules.conf.js

module.exports = [
  {
    test: /\.(js|ts)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                targets: {
                  chrome: '58',
                  ie: '8',
                },
                corejs: 2,
              },
            ],
          ],
        },
      },
      {
        loader: 'ts-loader',
      },
      {
        loader: 'eslint-loader',
        options: {
          cache: true, // 优化打包速度
        },
      },
    ],
  },
]
```

在生产环境，我们需要对 js 文件进行压缩，公共代码抽离，所以还需要在 `webpack.prod.conf.js` 中这样去优化一下：

```js
// webpack.prod.conf.js

cconst merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js')

const prodConfig = {
  optimization: {
    minimizer: [
      // 会导致 sourcemap 消失
      new UglifyJsPlugin({
        uglifyOptions: ({
          compress: false
        })
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: { // 抽离第三方插件
          test: /[\\/]node_modules[\\/]/, // 指定是node_modules下的第三方包
          name: 'vendors',
          priority: -10 // 抽取优先级
        },
        utilCommon: { // 抽离自定义
          name: 'common',
          minSize: 0, // 将引用模块分离成新代码文件的最小体积
          minChunks: 2, // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
          priority: -20
        }
      }
    },
    // optimization.runtimeChunk 就是告诉 webpack 是否要把这部分单独打包出来，来优化缓存问题
    runtimeChunk: {
      name: 'manifest'
    }
  }
}

module.exports = merge(baseConfig, prodConfig)
```

## CSS

CSS 方面，我们一般有以下需求：

1. postcss-loader 安装 autoprefixer 插件，自动进行兼容性处理；
2. sass-loader 解析 sass 语法；
3. MiniCssExtractPlugin 进行 css 压缩。

针对以上需求，我们来配置一下子 rules，并且做一下延伸：

```js
// webpack.rules.conf.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  {
    test: /\.scss$/i,
    use: [
      Object.assign(
        // 生产环境压缩 css 需要使用 MiniCssExtractPlugin.loader 代替 style-loader
        {
          loader: process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
        },
        // 解决编译后 css 图片不能正常显示的问题
        process.env.NODE_ENV === 'production' ? { options: { publicPath: '../' } } : {},
      ),
      'css-loader',
      'sass-loader',
      'postcss-loader',
    ],
  },
]
```

在生产环境，我们需要对 css 文件进行压缩，所以还需要在 `webpack.prod.conf.js` 中这样去优化一下：

```js
// webpack.prod.conf.js

cconst merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js')

const prodConfig = {
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFileName: '[id].[contenthash:8].css'
    }),
  ]
}

module.exports = merge(baseConfig, prodConfig)
```

## images

images 方面，我们一般有以下需求：

1. css 和 js 中的图片可以被解析；
2. html 中 img 标签的图片可以被解析。

针对以上需求，我们来配置一下子 rules，并且做一下延伸：

```js
// webpack.rules.conf.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  {
    test: /\.html$/,
    use: [
      // 如果 img 标签的 src 为空的话，就报错 xxxHTMLLINKxxx0.
      {
        loader: 'html-loader',
      },
    ],
  },
  {
    test: /\.(png|jpg|gif|ico)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          limit: 30000,
          outputPath: './images',
        },
      },
    ],
  },
]
```

## 其他

### devserver 和 热更新

```js
// webpack.dev.conf.js

const devConfig = {
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 2000,
    useLocalIp: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
```

> 这样智能启动 css 热更新，如果需要 js 热更新，需要添加一段代码，请自行查找 [官网文档](https://webpack.docschina.org/)。

### 报错

1. 如果 img 标签的 src 为空的话，就报错 xxxHTMLLINKxxx0.
2. 如果报错：`TS2688: Cannot find type definition file for 'unist'.` 说明需要安装依赖 `@types/unist`，其他类似报错一样，这是 `typescript@2.0` 更换 types 支持方式导致的报错。
3. 编译后 css 图片路径错误，根据是否是生产环境来动态添加 `publicPath`，[点击这里](#CSS)。
