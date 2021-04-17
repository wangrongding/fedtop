(window.webpackJsonp = window.webpackJsonp || []).push([
    [54],
    {
        507: function(e, a, t) {
            "use strict";
            t.r(a);
            var s = t(18),
                n = Object(s.a)(
                    {},
                    function() {
                        var e = this,
                            a = e.$createElement,
                            t = e._self._c || a;
                        return t(
                            "ContentSlotsDistributor",
                            { attrs: { "slot-key": e.$parent.slotKey } },
                            [
                                t("blockquote", [
                                    t("p", [
                                        e._v(
                                            "在开发阶段，前端调用后端接口可能会出现跨域问题，在vue-cli中已经为我们集成了"
                                        ),
                                        t(
                                            "a",
                                            {
                                                attrs: {
                                                    href:
                                                        "https://github.com/chimurai/http-proxy-middleware",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                },
                                            },
                                            [
                                                t("strong", [
                                                    e._v(
                                                        "http-proxy-middleware"
                                                    ),
                                                ]),
                                                t("OutboundLink"),
                                            ],
                                            1
                                        ),
                                        e._v("，我们只需要在"),
                                        t("code", [e._v("config/index.js")]),
                                        e._v("中的proxyTable 配置即可。"),
                                    ]),
                                ]),
                                e._v(" "),
                                t("p", [
                                    e._v("如果接口是"),
                                    t("code", [
                                        e._v("www.aaa.com/get/getList"),
                                    ]),
                                    e._v("，那么有两种配置方案："),
                                ]),
                                e._v(" "),
                                t("ul", [t("li", [e._v("方法一")])]),
                                e._v(" "),
                                t(
                                    "div",
                                    {
                                        staticClass:
                                            "language-ecmascript 6 line-numbers-mode",
                                    },
                                    [
                                        t(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class: "language-text",
                                                },
                                            },
                                            [
                                                t("code", [
                                                    e._v(
                                                        "proxyTable: {\n  '/api': {\n    target: 'www.aaa.com',\n    pathRewrite: {\n      '^/api': '/get'\n    }\n  }\n}\n"
                                                    ),
                                                ]),
                                            ]
                                        ),
                                        e._v(" "),
                                        t(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("1")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("2")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("3")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("4")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("5")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("6")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("7")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("8")]
                                                ),
                                                t("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                t("p", [
                                    e._v("这个时候我们请求"),
                                    t("code", [e._v("/api/getList")]),
                                    e._v("就是请求"),
                                    t("code", [
                                        e._v("www.aaa.com/get/getList"),
                                    ]),
                                ]),
                                e._v(" "),
                                t("ul", [t("li", [e._v("方法二")])]),
                                e._v(" "),
                                t(
                                    "div",
                                    {
                                        staticClass:
                                            "language-ecmascript 6 line-numbers-mode",
                                    },
                                    [
                                        t(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class: "language-text",
                                                },
                                            },
                                            [
                                                t("code", [
                                                    e._v(
                                                        "proxyTable: {\n  '/api': {\n    target: 'www.aaa.com',\n    pathRewrite: {\n      '^/api': ''\n    }\n  }\n}\n"
                                                    ),
                                                ]),
                                            ]
                                        ),
                                        e._v(" "),
                                        t(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("1")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("2")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("3")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("4")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("5")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("6")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("7")]
                                                ),
                                                t("br"),
                                                t(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [e._v("8")]
                                                ),
                                                t("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                t("p", [
                                    e._v("这个时候我们请求"),
                                    t("code", [e._v("/api/get/getList")]),
                                    e._v("就是请求"),
                                    t("code", [
                                        e._v("www.aaa.com/get/getList"),
                                    ]),
                                ]),
                                e._v(" "),
                                t("p", [
                                    e._v("个人博客："),
                                    t(
                                        "a",
                                        {
                                            attrs: {
                                                href: "www.fedtop.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            },
                                        },
                                        [
                                            t("strong", [e._v("汪荣顶")]),
                                            t("OutboundLink"),
                                        ],
                                        1
                                    ),
                                ]),
                            ]
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            a.default = n.exports;
        },
    },
]);
