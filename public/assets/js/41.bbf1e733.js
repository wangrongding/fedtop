(window.webpackJsonp = window.webpackJsonp || []).push([
    [41],
    {
        484: function(t, s, a) {
            "use strict";
            a.r(s);
            var n = a(18),
                e = Object(n.a)(
                    {},
                    function() {
                        var t = this,
                            s = t.$createElement,
                            a = t._self._c || s;
                        return a(
                            "ContentSlotsDistributor",
                            { attrs: { "slot-key": t.$parent.slotKey } },
                            [
                                a("h2", { attrs: { id: "问题" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#问题" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" 问题"),
                                ]),
                                t._v(" "),
                                a("p", [
                                    t._v(
                                        "mongoDB的默认登陆时无密码登陆的，为了安全起见，需要给mongoDB设置权限登录，但是keystoneJS默认是无密码登陆的，这是需要修改配置来解决问题"
                                    ),
                                ]),
                                t._v(" "),
                                a("h2", { attrs: { id: "解决" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#解决" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" 解决"),
                                ]),
                                t._v(" "),
                                a("p", [
                                    t._v(
                                        "在keystone.js中找到配置初始化方法，添加一个"
                                    ),
                                    a(
                                        "a",
                                        {
                                            attrs: {
                                                href:
                                                    "http://keystonejs.com/zh/docs/configuration/#options-database",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            },
                                        },
                                        [t._v("mongo"), a("OutboundLink")],
                                        1
                                    ),
                                    t._v("对象来设置mongoDB连接实例，"),
                                ]),
                                t._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    t._v("keystone"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [t._v("init")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("{")]
                                                    ),
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [t._v("'name'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [t._v("'recoluan'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v(",")]
                                                    ),
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [t._v("'brand'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [t._v("'recoluan'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v(",")]
                                                    ),
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [t._v("'mongo'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [
                                                            t._v(
                                                                "'mongodb://user:password@host:port/dbName'"
                                                            ),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v(",")]
                                                    ),
                                                    t._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v(")")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v(";")]
                                                    ),
                                                    t._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        t._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("5")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("p", [
                                    t._v(
                                        "这里需要注意的是，mongoDB在设置权限登录的时候，首先必须设置一个权限最大的主账户，它用来增删其他普通账户，记住，这个主账户时 "
                                    ),
                                    a("strong", [a("em", [t._v("无法")])]),
                                    t._v(
                                        " 用来设置mongo对象的，\n你需要用这个主账户创建一个数据库（下面称“dbName”），然后在这个dbName上再创建一个可读写dbName的普通账户，这个普通账户的user和password和dbName用来配置mongo对象"
                                    ),
                                ]),
                                t._v(" "),
                                a("p", [
                                    t._v("个人博客："),
                                    a(
                                        "a",
                                        {
                                            attrs: {
                                                href: "www.fedtop.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            },
                                        },
                                        [
                                            a("strong", [t._v("汪荣顶")]),
                                            a("OutboundLink"),
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
            s.default = e.exports;
        },
    },
]);
