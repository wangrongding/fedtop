# vue3 项目中配置各种代码校验

## Prettier

Prettier 是一个用于 JavaScript 代码的代码格式化工具，它可以帮助你格式化代码，并且可以提供一些错误提示。

## StyleLint

StyleLint 是一个强大的，用于 CSS 代码的代码校验工具，可以帮助您避免错误并在您的样式中强制执行约定。

### 安装 stylelint

```sh
yarn add stylelint -D
```

### 使用 stylelint

由于 Stylelint v14 及以上 做了 break change ，不再解析非 css 文件，所以很多原来老的配置方法已经不行了。
官方也给出了相关说明：

> Stylelint 不再包含以下语法：
>
> - 解析类 CSS 语言，如 SCSS、Sass、Less 和 SugarSS
> - 从 HTML、Markdown 和 CSS-in-JS 对象和模板文字中提取样式

所以当我们项目需要对 scss，vue，html 等文件进行校验时，则需要额外安装依赖来实现。

例如：

- `stylelint-config-html`支持解析 HTML、XML、Vue、Svelte 和 PHP，且提供它们的标准配置
- `stylelint-config-standard-scss`支持 lint SCSS 文件及提供 SCSS 的标准配置
- `stylelint-config-recommended-vue`支持 lint Vue 文件及提供 vue 的标准配置

这里我只选择`stylelint-config-standard-scss`和`stylelint-config-recommended-vue`，下面安装他们。

```sh
yarn add stylelint-config-recommended-vue stylelint-config-standard-scss -D
```

安装完成后我们在项目根目录中新建一个`stylelint.config.js`文件。

```javascript
module.exports = {
  defaultSeverity: "error",
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
  ],
  rules: {
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "max-empty-lines": 1,
  },
};
```

让 stylelint 集成`stylelint-config-standard-scss`和`stylelint-config-recommended-vue`的规则配置
我们也可以在 rules 里写一些自定义的规则覆盖继承的规则，自己写的 rules 的权值大于集成的规则。

如果你不想用`stylelint-config-recommended-vue`中的规则，只借助它的解析能力。
那么你只要把 extends 中改为`stylelint-config-html/vue`即可。

```diff
module.exports = {
  defaultSeverity: "error",
  extends: [
    "stylelint-config-standard-scss",
--    "stylelint-config-recommended-vue",
++    "stylelint-config-html/vue",
  ],
  rules: {
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "max-empty-lines": 1,
  },
};
```

然后自己写自己团队的规则或者使用`stylelint-config-standard`的共享规则配置。

### vscode 插件 stylelint

为了不让自己每次在 commit 才校验出代码有问题，我们最好装一个 stylelint 插件，这样一边写，可以看到有问题的代码底下出现红线，鼠标移上去可以看到具体的问题所在，和 eslint 一模一样的玩法。

只是需要注意的是：安装 stylelint 插件后，首先要根据自己的情况选择在全局设置或者工作区设置扩展需要验证的文件集合

可以通过`ctrl+,`打开设置面板，选择用户或者工作区，找到扩展->Stylelint->Validate,后点击添加项，依次添加即可

![](https://gitee.com/wangrongding/image-house/raw/master/images/202204080104909.png)

或者你直接在 settings.json 里添加如下内容

```json
{ "stylelint.validate": ["css", "less", "postcss", "scss", "vue", "sass"] }
```

如果只需要在工作区作用的话，在根目录建一个`.vscode`文件夹，然后在里面建一个`settings.json`文件，把上述内容写进去即可。

## Eslint

```sh
# 初始化eslint配置文件，并安装相关依赖
npx eslint --init
```

执行命令后选择对应的配置即可
![](https://raw.githubusercontent.com/wangrongding/image-house/master/images202205060013009.png)

我这里选择的是 Airbnb 的规范，Airbnb config 有一个规则 eslint(import/no-unresolved)，这很好，但是
Eslint 不知道如何解析别名路径。我这里直接在 rules 中设置`'import/no-unresolved': 0`，把它关了。

我们是 Vue3 的项目，所以我们需要把`plugin:vue/essential`改成`plugin:vue/vue3-recommended`，这样就可
以把 vue3 的规则都引入了。

或者你也可以在 https://eslint.vuejs.org/ 中找到其它更符合你的配置来继承。

```diff
extends: [
--'plugin:vue/essential',
++'plugin:vue/vue3-recommended',
  'airbnb-base',
]
```

vue3 中有诸如 defineProps 之类的全局的预编译宏，而 eslint 不知其定义在哪里，需要在 global 选项中将其
标注出来，由于 `eslint-plugin-vue` 为我们预设好了，我们只需要在 env 中添加如下代码即可。

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    // 开启setup语法糖环境 👇
    "vue/setup-compiler-macros": true
  }
}
```
