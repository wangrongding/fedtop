# 即将推出的 chrome 95 新特性

## 新增特性

-   对属性值的便捷修改

    DevTools 添加了一种更简单而灵活的方式来更新 CSS 中的长度！
    在“样式”窗格中，查找任何具有长度的 CSS 属性（例如 height, padding）。
    将鼠标悬停在单位类型上，注意单位类型带有下划线。单击它以从下拉列表中选择一个单位类型。

    ![](https://gitee.com/wangrongding/image-house/raw/master/images/202110091521893.gif)

    **配合 chrome 94 支持中文的特性,控制台变的越来越方便**

-   在 Console、Sources 面板和 Properties 窗格中对自己的属性进行加粗和排序。

    ![](https://gitee.com/wangrongding/image-house/raw/master/images/202110091527521.png)

    <!-- ![](https://gitee.com/wangrongding/image-house/raw/master/images/202110091528609.png) -->

    除了这些更改之外，“属性”窗格中的属性现在也被扁平化，以获得更好的 DOM 属性调试体验，尤其是对于`Web components.`

    <!-- ![](https://gitee.com/wangrongding/image-house/raw/master/images/202110091540607.png) -->

    https://www.webcomponents.org/introduction

    ![](https://gitee.com/wangrongding/image-house/raw/master/images/202110091549466.png)

-   1
    https://developer.chrome.com/blog/lighthouse-8-4/
    最新的 lighthouse 支持通过 npm 下载
    ![](https://gitee.com/wangrongding/image-house/raw/master/images/202110091601326.png)
    通过命令`lighthouse https://www.example.com --view`
    ![](https://gitee.com/wangrongding/image-house/raw/master/images/202110091604251.png)

    这里我通过百度为例子,大家替换为自己想测试的站点即可

    ![](https://gitee.com/wangrongding/image-house/raw/master/images/202110091628536.gif)

    First Input Delay 首次输入延迟 (FID)
    https://web.dev/fid/


    ● 作为初次尝试，Google 试图减少暴露的 HTTP 用户代理字符串信息，以减少网站可能的浏览器指纹识别。

    ● 现在还在原点试用的是文件系统访问 API 的访问手柄。这可以提供更好的性能，以及新的使用情况。

    ● 安全支付确认和 WebAssembly 异常处理已经从之前的原点试验中被提升出来。

    ● 新增 EyeDropper API，用于构建自定义的颜色选择器。

    ● URLPattern 作为一个新的 API，提供操作系统支持，用于将 URL 与提供的模式相匹配。

    ● FTP 支持现在被完全删除。自 Chrome 88 以来，它只通过废弃试验提供，但现在已经完全取消了。

-   1
-   1
-   1
-   1
-   1
-   1
-   1
-   1

Chrome 95 测试版于 2021 年 9 月 23 日发布，预计将于 2021 年 10 月下旬成为稳定版本。

## 删除与弃用

#### 删除了 FTP 支持

Chrome 正在[取消对 FTP URL 的支持](https://www.chromestatus.com/feature/6246151319715840)。浏览器中 FTP 的使用率足够低，投资改进现有 FTP 客户端已不再可行。此外，所有受影响的平台上都提供了功能更强大的 FTP 客户端。

Google Chrome 72 及更高版本取消了对通过 FTP 获取文档子资源和呈现顶级 FTP 资源的支持。当前导航到 FTP URL 会根据资源类型显示目录列表或下载。Google Chrome 74 及更高版本中的一个错误导致不再支持通过 HTTP 代理访问 FTP URL。在 Google Chrome 76 中完全删除了对 FTP 的代理支持。在 Chrome 86 中，预发布渠道（Canary 和 Beta）的 FTP 支持被关闭，并且实验性地关闭了百分之一的稳定用户，尽管它可以通过命令行重新启用.  在 Chrome 87 中，它对 50% 的用户关闭，但也可以通过命令行启用。从 Chrome 88 开始，它只能通过弃用试用版获得，现在已被禁用。

### 支持以数字结尾的非 IPv4 主机名的 URL

大多数不是有效 IPv4 地址但以数字结尾的主机名都被视为有效，并通过 DNS 查找（例如，`http://foo.127.1/`）。根据公共后缀列表规范，该 URL 中主机名的 eTLD+1 应为`127.1`.  如果将其反馈到 URL 中，则由 URL 规范`http://127.1/`映射到`http://127.0.0.1/`，这似乎具有潜在危险。`127.0.0.0.1`也可能被用来迷惑用户。[现在拒绝带有这些主机名的 URL](https://www.chromestatus.com/feature/5679790780579840)。

### WebAssembly 跨源模块共享

[Chrome 现在不赞成](https://www.chromestatus.com/feature/5650158039597056)在跨域但同站点的环境之间[共享 WebAssembly 模块](https://www.chromestatus.com/feature/5650158039597056)，以[允许代理集群长期作用于源](https://developer.chrome.com/blog/wasm-module-sharing-restricted-to-same-origin/)。

### 弃用 U2F API（加密令牌）

Chrome 用于与安全密钥交互的旧版 U2F API 已弃用，并在 Chrome 95 中开始弃用试用，其中该 API 默认保持启用状态，但试用令牌将禁用参与站点的密钥。U2F 安全密钥本身并未被弃用，并将继续有效。

受影响的站点应迁移到[Web 身份验证 API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API)。最初通过 U2F API 注册的凭据可以通过 Web 身份验证进行质询。Web Authentication API 也支持 U2F API 支持的 USB 安全密钥。

U2F 是 Chrome 的原始安全密钥 API。它允许站点在 USB 安全密钥上注册公钥凭据，并挑战它们以构建防网络钓鱼的两因素身份验证系统。U2F 从未成为开放的 Web 标准，而是被 Web 身份验证 API（在 Chrome 67 中启动）所包含。Chrome 从未直接支持 FIDO U2F JavaScript API，而是提供了一个名为 cryptotoken 的组件扩展，它公开了一个等效的`chrome.runtime.sendMessage()`方法。U2F 和 Cryptotoken 一直处于维护模式，并在过去两年鼓励站点迁移到 Web 身份验证 API。

### 历史删除列表

> 访问 ChromeStatus.com 以获取[当前弃用](https://www.chromestatus.com/features#browsers.chrome.status%3A%22Deprecated%22)和[以前删除的](https://www.chromestatus.com/features#browsers.chrome.status:%22Removed%22)列表。

> https://blog.chromium.org/
