(window.webpackJsonp = window.webpackJsonp || []).push([
    [62],
    {
        500: function(s, t, a) {
            "use strict";
            a.r(t);
            var n = a(18),
                e = Object(n.a)(
                    {},
                    function() {
                        var s = this,
                            t = s.$createElement,
                            a = s._self._c || t;
                        return a(
                            "ContentSlotsDistributor",
                            { attrs: { "slot-key": s.$parent.slotKey } },
                            [
                                a("div", { staticClass: "custom-block tip" }, [
                                    a("ul", [
                                        a("li", [
                                            a("code", [s._v("fetch")]),
                                            s._v(" 必然要替换 "),
                                            a("code", [s._v("XMLHttpRequest")]),
                                            s._v(" ，所以是时候尝试 "),
                                            a(
                                                "a",
                                                {
                                                    attrs: {
                                                        href:
                                                            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
                                                        target: "_blank",
                                                        rel:
                                                            "noopener noreferrer",
                                                    },
                                                },
                                                [
                                                    s._v("fetch"),
                                                    a("OutboundLink"),
                                                ],
                                                1
                                            ),
                                            s._v(" 了；"),
                                        ]),
                                        s._v(" "),
                                        a("li", [
                                            s._v("本封装仅针对npm引入；"),
                                        ]),
                                        s._v(" "),
                                        a("li", [
                                            s._v("本封装依赖 "),
                                            a(
                                                "a",
                                                {
                                                    attrs: {
                                                        href:
                                                            "https://github.com/github/fetch",
                                                        target: "_blank",
                                                        rel:
                                                            "noopener noreferrer",
                                                    },
                                                },
                                                [
                                                    s._v("es6-promise"),
                                                    a("OutboundLink"),
                                                ],
                                                1
                                            ),
                                            s._v(" 和 "),
                                            a(
                                                "a",
                                                {
                                                    attrs: {
                                                        href:
                                                            "https://github.com/stefanpenner/es6-promise",
                                                        target: "_blank",
                                                        rel:
                                                            "noopener noreferrer",
                                                    },
                                                },
                                                [
                                                    s._v("whatwg-fetch"),
                                                    a("OutboundLink"),
                                                ],
                                                1
                                            ),
                                            s._v("，分别对 "),
                                            a("code", [s._v("promise")]),
                                            s._v(" 和 "),
                                            a("code", [s._v("fetch")]),
                                            s._v(" 进行兼容性处理；"),
                                        ]),
                                        s._v(" "),
                                        a("li", [
                                            s._v("还有一种兼容性处理是依赖 "),
                                            a(
                                                "a",
                                                {
                                                    attrs: {
                                                        href:
                                                            "https://github.com/github/fetch",
                                                        target: "_blank",
                                                        rel:
                                                            "noopener noreferrer",
                                                    },
                                                },
                                                [
                                                    s._v("es6-promise"),
                                                    a("OutboundLink"),
                                                ],
                                                1
                                            ),
                                            s._v(" 和"),
                                            a(
                                                "a",
                                                {
                                                    attrs: {
                                                        href:
                                                            "https://github.com/matthew-andrews/isomorphic-fetch",
                                                        target: "_blank",
                                                        rel:
                                                            "noopener noreferrer",
                                                    },
                                                },
                                                [
                                                    s._v("isomorphic-fetch"),
                                                    a("OutboundLink"),
                                                ],
                                                1
                                            ),
                                            s._v(" ，但是看它的源码就会发现，"),
                                            a("code", [
                                                s._v("isomorphic-fetch"),
                                            ]),
                                            s._v(" 只不过是引用了 "),
                                            a("code", [s._v("whatwg-fetch")]),
                                            s._v(" ，并没有做二次开发，"),
                                            a("code", [
                                                s._v("isomorphic-fetch"),
                                            ]),
                                            s._v(
                                                " 只是将fetch添加为全局，以便其API在客户端和服务器之间保持一致，所以没必要。"
                                            ),
                                        ]),
                                    ]),
                                ]),
                                s._v(" "),
                                a("h2", { attrs: { id: "封装的主要内容" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#封装的主要内容" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" 封装的主要内容"),
                                ]),
                                s._v(" "),
                                a("ol", [
                                    a("li", [
                                        a("code", [s._v("fetch")]),
                                        s._v(" 的请求方式同 "),
                                        a("code", [s._v("$ajax")]),
                                        s._v(" 和 "),
                                        a("code", [s._v("axios")]),
                                        s._v(
                                            " 都不太一样，并且它本身的get请求同其他请求对数据的处理和herder也不太相同，所以为了统一请求行为，方便请求过程，将请求过程进行封装；"
                                        ),
                                    ]),
                                    s._v(" "),
                                    a("li", [
                                        a("code", [s._v("fetch")]),
                                        s._v(
                                            " 请求的结果均返回到.then()中，但是平时的习惯是是在 "
                                        ),
                                        a("code", [s._v(".then()")]),
                                        s._v(" 中处理正确结果，"),
                                        a("code", [s._v(".catch()")]),
                                        s._v(
                                            " 中处理错误，所以对请求结果进行统一处理；"
                                        ),
                                    ]),
                                    s._v(" "),
                                    a("li", [
                                        a("code", [s._v("fetch")]),
                                        s._v(" 本身没有 "),
                                        a("strong", [s._v("请求超时")]),
                                        s._v(" 这个概念，所以通过 "),
                                        a("code", [s._v("Promise.race")]),
                                        s._v(
                                            " 来处理，它的作用是多个promise同时运行，返回的结果以最快返回结果的那个promise的值为准。"
                                        ),
                                    ]),
                                ]),
                                s._v(" "),
                                a("p", [s._v("Fetch for browser.")]),
                                s._v(" "),
                                a("h2", { attrs: { id: "install" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#install" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" Install"),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-bash line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class: "language-bash",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v("$ "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("npm")]
                                                    ),
                                                    s._v(
                                                        " isntall reco-fetch\n"
                                                    ),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
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
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "h2",
                                    { attrs: { id: "including-reco-fetch" } },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href:
                                                        "#including-reco-fetch",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(" Including reco-fetch"),
                                    ]
                                ),
                                s._v(" "),
                                a("h3", { attrs: { id: "script-tag" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#script-tag" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" Script tag"),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-html line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class: "language-html",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token tag",
                                                            },
                                                        },
                                                        [
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token tag",
                                                                    },
                                                                },
                                                                [
                                                                    a(
                                                                        "span",
                                                                        {
                                                                            pre: !0,
                                                                            attrs: {
                                                                                class:
                                                                                    "token punctuation",
                                                                            },
                                                                        },
                                                                        [
                                                                            s._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    s._v(
                                                                        "script"
                                                                    ),
                                                                ]
                                                            ),
                                                            s._v(" "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [s._v("src")]
                                                            ),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-value",
                                                                    },
                                                                },
                                                                [
                                                                    a(
                                                                        "span",
                                                                        {
                                                                            pre: !0,
                                                                            attrs: {
                                                                                class:
                                                                                    "token punctuation attr-equals",
                                                                            },
                                                                        },
                                                                        [
                                                                            s._v(
                                                                                "="
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
                                                                        [
                                                                            s._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    s._v(
                                                                        "/node_modules/reco-fetch/dist/recoFetch.min.js"
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
                                                                        [
                                                                            s._v(
                                                                                '"'
                                                                            ),
                                                                        ]
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
                                                                [s._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    a("span", {
                                                        pre: !0,
                                                        attrs: {
                                                            class:
                                                                "token script",
                                                        },
                                                    }),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token tag",
                                                            },
                                                        },
                                                        [
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token tag",
                                                                    },
                                                                },
                                                                [
                                                                    a(
                                                                        "span",
                                                                        {
                                                                            pre: !0,
                                                                            attrs: {
                                                                                class:
                                                                                    "token punctuation",
                                                                            },
                                                                        },
                                                                        [
                                                                            s._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    s._v(
                                                                        "script"
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
                                                                [s._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
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
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h3", { attrs: { id: "import" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#import" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" Import"),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javscript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class: "language-text",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v(
                                                        "import recoFetch from 'reco-fetch'\n"
                                                    ),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
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
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h2", { attrs: { id: "config" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#config" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" Config"),
                                ]),
                                s._v(" "),
                                a("p", [
                                    s._v(
                                        "In addition to the parameters given below, please combine other parameters "
                                    ),
                                    a(
                                        "a",
                                        {
                                            attrs: {
                                                href:
                                                    "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            },
                                        },
                                        [s._v("MDN"), a("OutboundLink")],
                                        1
                                    ),
                                    s._v("."),
                                ]),
                                s._v(" "),
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
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "/**\n * @param {String, must} url    API URL\n * @param {String, must} options Parameter objects, including:\n *        method  {String, optional} Request method, default 'get'\n *        headers {Object, optional} Set request header\n *        params  {Object, optional} url parameters\n *        body    {Object, optional} request body\n *        timeout {Number, optional} Request timeout\n *        type    {String, optional} When 'post' requests, you can set: 'json', 'formData'\n */"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" options "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  method"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'post'")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  headers"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
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
                                                        [s._v("}")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  timeout"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1000")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  body"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    id"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n    value"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("2")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("recoFetch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("url"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" options"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
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
                                                        [s._v(".")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("then")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("res")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("res"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
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
                                                        [s._v(".")]
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
                                                        [s._v("catch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("err")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("err"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
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
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("16")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("17")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("18")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("19")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("20")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("21")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("22")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("23")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("24")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("25")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("26")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h2", { attrs: { id: "example" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#example" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" Example"),
                                ]),
                                s._v(" "),
                                a("h3", { attrs: { id: "get" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#get" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" GET"),
                                ]),
                                s._v(" "),
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
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" options "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  method"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'get'")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  params"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    key"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n    value"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("2")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("recoFetch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("url"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" options"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
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
                                                        [s._v(".")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("then")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("res")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("res"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
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
                                                        [s._v(".")]
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
                                                        [s._v("catch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("err")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("err"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
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
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h3", { attrs: { id: "post-json" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#post-json" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" POST JSON"),
                                ]),
                                s._v(" "),
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
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" options "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  method"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'post'")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  body"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    key"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n    value"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("2")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  type"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'json'")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("recoFetch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("url"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" options"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
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
                                                        [s._v(".")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("then")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("res")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("res"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
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
                                                        [s._v(".")]
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
                                                        [s._v("catch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("err")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("err"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
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
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("p", [a("strong", [s._v("POST formData")])]),
                                s._v(" "),
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
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" options "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  method"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'post'")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  body"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    key"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n    value"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("2")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  type"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'formData'")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// or")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" form "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" document"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("querySelector")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'form'")]
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" options "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  method"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'post'")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  body"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" form\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("recoFetch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("url"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" options"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
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
                                                        [s._v(".")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("then")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("res")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("res"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
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
                                                        [s._v(".")]
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
                                                        [s._v("catch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("err")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("err"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
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
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("16")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("17")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("18")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("19")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("20")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("21")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("22")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h3", { attrs: { id: "put" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#put" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" PUT"),
                                ]),
                                s._v(" "),
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
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" options "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  method"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'put'")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  body"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    key"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n    value"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("2")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  type"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'json'")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// or")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" options "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  method"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'put'")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  body"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token constant",
                                                            },
                                                        },
                                                        [s._v("JSON")]
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
                                                        [s._v(".")]
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
                                                        [s._v("stringify")]
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
                                                        [s._v("(")]
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
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    key"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n    value"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("2")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("recoFetch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("url"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" options"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
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
                                                        [s._v(".")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("then")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("res")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("res"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
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
                                                        [s._v(".")]
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
                                                        [s._v("catch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("err")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("err"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
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
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("16")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("17")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("18")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("19")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("20")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("21")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("22")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("23")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("24")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h3", { attrs: { id: "delete" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#delete" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" DELETE"),
                                ]),
                                s._v(" "),
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
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" options "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  method"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'delete'")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  params"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    key"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n    value"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("2")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("recoFetch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("url"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" options"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
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
                                                        [s._v(".")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("then")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("res")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("res"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
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
                                                        [s._v(".")]
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
                                                        [s._v("catch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("err")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("err"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
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
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h3", { attrs: { id: "uploadfile" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#uploadfile" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" uploadFile"),
                                ]),
                                s._v(" "),
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
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" fileField "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" document"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("querySelector")]
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
                                                        [s._v("(")]
                                                    ),
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
                                                            s._v(
                                                                "\"input[type='file']\""
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" options "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  method"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'post'")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  body"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    file"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" fileField"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("files"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("[")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("0")]
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
                                                        [s._v("]")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  type"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'formData'")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// or")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" formData "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("new")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token class-name",
                                                            },
                                                        },
                                                        [s._v("FormData")]
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
                                                        [s._v("(")]
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" fileField "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" document"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("querySelector")]
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
                                                        [s._v("(")]
                                                    ),
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
                                                            s._v(
                                                                "\"input[type='file']\""
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n\nformData"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("append")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'file'")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" fileField"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("files"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("[")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("0")]
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
                                                        [s._v("]")]
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" options "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  method"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'post'")]
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
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  body"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" formData\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("recoFetch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("url"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" options"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
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
                                                        [s._v(".")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("then")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("res")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("res"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
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
                                                        [s._v(".")]
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
                                                        [s._v("catch")]
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
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("err")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  console"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
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
                                                        [s._v("log")]
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
                                                        [s._v("(")]
                                                    ),
                                                    s._v("err"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
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
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
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
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("16")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("17")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("18")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("19")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("20")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("21")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("22")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("23")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("24")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("25")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("26")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("27")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h2", { attrs: { id: "license" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#license" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" License"),
                                ]),
                                s._v(" "),
                                a("p", [
                                    a(
                                        "a",
                                        {
                                            attrs: {
                                                href:
                                                    "https://github.com/recoluan/reco-fetch/blob/master/LICENSE",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            },
                                        },
                                        [s._v("MIT"), a("OutboundLink")],
                                        1
                                    ),
                                ]),
                                s._v(" "),
                                a("p", [
                                    a("strong", [
                                        s._v("如果觉得还可以，欢迎给个 "),
                                        a(
                                            "a",
                                            {
                                                attrs: {
                                                    href:
                                                        "https://github.com/recoluan/reco-fetch",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                },
                                            },
                                            [s._v("Star"), a("OutboundLink")],
                                            1
                                        ),
                                    ]),
                                ]),
                                s._v(" "),
                                a("p", [
                                    s._v("个人博客："),
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
                                            a("strong", [s._v("汪荣顶")]),
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
            t.default = e.exports;
        },
    },
]);
