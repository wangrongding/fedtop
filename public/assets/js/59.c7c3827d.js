(window.webpackJsonp = window.webpackJsonp || []).push([
    [59],
    {
        504: function(t, s, a) {
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
                                a("blockquote", [
                                    a("p", [
                                        t._v(
                                            "真正开发过小程序的开发者会发现，小程序里面的单选框和多选框封封装的实在不够友好，一般与UI都会有比较大的出入，所以下面来探讨一下单选框和多选框的封装。"
                                        ),
                                    ]),
                                ]),
                                t._v(" "),
                                a("h2", { attrs: { id: "效果" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#效果" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" 效果"),
                                ]),
                                t._v(" "),
                                a("p", [
                                    a("img", {
                                        attrs: {
                                            src:
                                                "https://upload-images.jianshu.io/upload_images/4660406-8105fc181c9d2180.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                                            alt: "radio.jpg",
                                        },
                                    }),
                                ]),
                                t._v(" "),
                                a("p", [
                                    t._v(
                                        "比如我们要做一个这种样式的单选框和多选框组件，我们改怎么去处理呢？"
                                    ),
                                ]),
                                t._v(" "),
                                a("h2", { attrs: { id: "代码" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#代码" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" 代码"),
                                ]),
                                t._v(" "),
                                a("h4", { attrs: { id: "wxml" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#wxml" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" \bwxml"),
                                ]),
                                t._v(" "),
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
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            t._v(
                                                                "\x3c!-- 判断某个元素是不是指定数组内 --\x3e"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n"),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v("wxs"),
                                                                ]
                                                            ),
                                                            t._v(" "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("module")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "checkbox"
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
                                                                            t._v(
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v(
                                                        "\n  var checkStatus = function (arr, item) {\n    return arr.indexOf(item) >= 0\n  };\n\n  module.exports.checkStatus = checkStatus;\n"
                                                    ),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v("wxs"),
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n\n"),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("hidden")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{isHidden}}"
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
                                                                            t._v(
                                                                                "'"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n  "),
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
                                                            t._v(
                                                                "\x3c!-- 单选组件 --\x3e"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n  "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "radio-group"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" \n    "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("class")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "radio-group"
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" \n    "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [
                                                                    t._v(
                                                                        "bindchange"
                                                                    ),
                                                                ]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "radioChange"
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" \n    "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [
                                                                    a(
                                                                        "span",
                                                                        {
                                                                            pre: !0,
                                                                            attrs: {
                                                                                class:
                                                                                    "token namespace",
                                                                            },
                                                                        },
                                                                        [
                                                                            t._v(
                                                                                "wx:"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v("if"),
                                                                ]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{selectType == "
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "radio"
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v("}}"),
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
                                                                            t._v(
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n    "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "label"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" \n      "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("class")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{radioIndex == item.index ? focusRadioClass : initRadioClass}}"
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" \n      "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [
                                                                    a(
                                                                        "span",
                                                                        {
                                                                            pre: !0,
                                                                            attrs: {
                                                                                class:
                                                                                    "token namespace",
                                                                            },
                                                                        },
                                                                        [
                                                                            t._v(
                                                                                "wx:"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v("for"),
                                                                ]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{radioData}}"
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" \n      "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [
                                                                    a(
                                                                        "span",
                                                                        {
                                                                            pre: !0,
                                                                            attrs: {
                                                                                class:
                                                                                    "token namespace",
                                                                            },
                                                                        },
                                                                        [
                                                                            t._v(
                                                                                "wx:"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v("key"),
                                                                ]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{index}}"
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v("\n      "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("id")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{item.index}}"
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
                                                                            t._v(
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n      "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("class")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "item-index"
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
                                                                            t._v(
                                                                                "'"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n        "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "radio"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(
                                                                " \n          "
                                                            ),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token style-attr",
                                                                    },
                                                                },
                                                                [
                                                                    a(
                                                                        "span",
                                                                        {
                                                                            pre: !0,
                                                                            attrs: {
                                                                                class:
                                                                                    "token attr-name",
                                                                            },
                                                                        },
                                                                        [
                                                                            t._v(
                                                                                "style"
                                                                            ),
                                                                        ]
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
                                                                                    t._v(
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
                                                                                    t._v(
                                                                                        "'"
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                            a(
                                                                                "span",
                                                                                {
                                                                                    pre: !0,
                                                                                    attrs: {
                                                                                        class:
                                                                                            "token style language-css",
                                                                                    },
                                                                                },
                                                                                [
                                                                                    a(
                                                                                        "span",
                                                                                        {
                                                                                            pre: !0,
                                                                                            attrs: {
                                                                                                class:
                                                                                                    "token property",
                                                                                            },
                                                                                        },
                                                                                        [
                                                                                            t._v(
                                                                                                "opacity"
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
                                                                                            t._v(
                                                                                                ":"
                                                                                            ),
                                                                                        ]
                                                                                    ),
                                                                                    t._v(
                                                                                        " 0"
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
                                                                                    t._v(
                                                                                        "'"
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(
                                                                " \n          "
                                                            ),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("value")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{item.index}}"
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(
                                                                " \n          "
                                                            ),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [
                                                                    t._v(
                                                                        "checked"
                                                                    ),
                                                                ]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{item.checked}}"
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
                                                                            t._v(
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
                                                                [t._v("/>")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n        "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("class")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "index"
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
                                                                            t._v(
                                                                                "'"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("{{item.index}}"),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n      "),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n      "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("class")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "flex-item text-center"
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
                                                                            t._v(
                                                                                "'"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("{{item.value}}"),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n    "),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "label"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n  "),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "radio-group"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n  "),
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
                                                            t._v(
                                                                "\x3c!-- 多选组件 --\x3e"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n  "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "checkbox-group"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" \n    "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("class")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "checkbox-group"
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" \n    "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [
                                                                    t._v(
                                                                        "bindchange"
                                                                    ),
                                                                ]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "checkboxChange"
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" \n    "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [
                                                                    a(
                                                                        "span",
                                                                        {
                                                                            pre: !0,
                                                                            attrs: {
                                                                                class:
                                                                                    "token namespace",
                                                                            },
                                                                        },
                                                                        [
                                                                            t._v(
                                                                                "wx:"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v("if"),
                                                                ]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{selectType == "
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "checkbox"
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v("}}"),
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
                                                                            t._v(
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n    "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "label"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" \n      "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("class")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{checkbox.checkStatus(checkboxIndexArr, item.index) ? focusCheckboxClass : initCheckboxClass}}"
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" \n      "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [
                                                                    a(
                                                                        "span",
                                                                        {
                                                                            pre: !0,
                                                                            attrs: {
                                                                                class:
                                                                                    "token namespace",
                                                                            },
                                                                        },
                                                                        [
                                                                            t._v(
                                                                                "wx:"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v("for"),
                                                                ]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{checkboxData}}"
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v("\n      "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [
                                                                    a(
                                                                        "span",
                                                                        {
                                                                            pre: !0,
                                                                            attrs: {
                                                                                class:
                                                                                    "token namespace",
                                                                            },
                                                                        },
                                                                        [
                                                                            t._v(
                                                                                "wx:"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v("key"),
                                                                ]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{index}}"
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v("\n      "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("id")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{item.index}}"
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
                                                                            t._v(
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n      "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("class")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "item-index"
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
                                                                            t._v(
                                                                                "'"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n        "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "checkbox"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(
                                                                " \n          "
                                                            ),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token style-attr",
                                                                    },
                                                                },
                                                                [
                                                                    a(
                                                                        "span",
                                                                        {
                                                                            pre: !0,
                                                                            attrs: {
                                                                                class:
                                                                                    "token attr-name",
                                                                            },
                                                                        },
                                                                        [
                                                                            t._v(
                                                                                "style"
                                                                            ),
                                                                        ]
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
                                                                                    t._v(
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
                                                                                    t._v(
                                                                                        "'"
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                            a(
                                                                                "span",
                                                                                {
                                                                                    pre: !0,
                                                                                    attrs: {
                                                                                        class:
                                                                                            "token style language-css",
                                                                                    },
                                                                                },
                                                                                [
                                                                                    a(
                                                                                        "span",
                                                                                        {
                                                                                            pre: !0,
                                                                                            attrs: {
                                                                                                class:
                                                                                                    "token property",
                                                                                            },
                                                                                        },
                                                                                        [
                                                                                            t._v(
                                                                                                "opacity"
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
                                                                                            t._v(
                                                                                                ":"
                                                                                            ),
                                                                                        ]
                                                                                    ),
                                                                                    t._v(
                                                                                        " 0"
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
                                                                                    t._v(
                                                                                        "'"
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(
                                                                " \n          "
                                                            ),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("value")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{item.index}}"
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(
                                                                " \n          "
                                                            ),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [
                                                                    t._v(
                                                                        "checked"
                                                                    ),
                                                                ]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{item.checked}}"
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(
                                                                "\n          "
                                                            ),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [
                                                                    t._v(
                                                                        "disabled"
                                                                    ),
                                                                ]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                '"'
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "{{checkboxIndexArr.length > maxLength - 1 && !checkbox.checkStatus(checkboxIndexArr, item.index)}}"
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
                                                                            t._v(
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
                                                                [t._v("/>")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n        "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("class")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "index"
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
                                                                            t._v(
                                                                                "'"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("{{item.index}}"),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n      "),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n      "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
                                                                    ),
                                                                ]
                                                            ),
                                                            t._v(" "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token attr-name",
                                                                    },
                                                                },
                                                                [t._v("class")]
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
                                                                            t._v(
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
                                                                            t._v(
                                                                                "'"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "flex-item text-center"
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
                                                                            t._v(
                                                                                "'"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v(
                                                        "\n        {{item.value}}\n      "
                                                    ),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n    "),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "label"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n    "),
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
                                                                            t._v(
                                                                                "<"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v(
                                                        "{{checkboxIndexArr.prototype}}"
                                                    ),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n  "),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "checkbox-group"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n"),
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
                                                                            t._v(
                                                                                "</"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    t._v(
                                                                        "view"
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
                                                                [t._v(">")]
                                                            ),
                                                        ]
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
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("16")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("17")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("18")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("19")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("20")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("21")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("22")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("23")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("24")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("25")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("26")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("27")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("28")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("29")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("30")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("31")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("32")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("33")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("34")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("35")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("36")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("37")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("38")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("39")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("40")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("41")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("42")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("43")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("44")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("45")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("46")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("47")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("48")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("49")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("50")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("51")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("52")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("53")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("54")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("55")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h4", { attrs: { id: "wxss" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#wxss" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" wxss"),
                                ]),
                                t._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-css line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class: "language-css",
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
                                                                    "token selector",
                                                            },
                                                        },
                                                        [t._v(".flex-wrapper")]
                                                    ),
                                                    t._v(" "),
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
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("display")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" flex"),
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
                                                    t._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token selector",
                                                            },
                                                        },
                                                        [t._v(".flex-item")]
                                                    ),
                                                    t._v(" "),
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
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("flex")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 1"),
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
                                                    t._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token selector",
                                                            },
                                                        },
                                                        [t._v(".text-center")]
                                                    ),
                                                    t._v(" "),
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
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("text-align")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" center"),
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
                                                    t._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token selector",
                                                            },
                                                        },
                                                        [
                                                            t._v(
                                                                ".radio-group, .checkbox-group"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v(" "),
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
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("margin")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 0 auto"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("width")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 490rpx"),
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
                                                    t._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token selector",
                                                            },
                                                        },
                                                        [
                                                            t._v(
                                                                ".radio-group label, .checkbox-group label"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v(" "),
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
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("margin-bottom")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 50rpx"),
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
                                                    t._v(" \n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("height")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 68rpx"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("line-height")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 68rpx"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("border")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 1rpx solid #000"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("border-radius")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 10rpx"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("font-size")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 30rpx"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("color")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" #000"),
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
                                                    t._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token selector",
                                                            },
                                                        },
                                                        [
                                                            t._v(
                                                                ".radio-group label.active, .checkbox-group label.active"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v(" "),
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
                                                                    "token property",
                                                            },
                                                        },
                                                        [
                                                            t._v(
                                                                "background-color"
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" #fcc919"),
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
                                                    t._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token selector",
                                                            },
                                                        },
                                                        [
                                                            t._v(
                                                                ".radio-group label .item-index, .checkbox-group label .item-index"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v(" "),
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
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("position")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" relative"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("flex")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 0 0 40rpx"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("margin")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 0 0 0 20rpx"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("width")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 40rpx"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("height")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 68rpx"),
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
                                                    t._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token selector",
                                                            },
                                                        },
                                                        [
                                                            t._v(
                                                                ".radio-group label .item-index .index, .checkbox-group label .item-index .index"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v(" "),
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
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("position")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" absolute"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("top")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 0"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("bottom")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 0"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("left")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 0"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("margin")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" auto"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("width")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 40rpx"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("height")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 40rpx"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("overflow")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" hidden"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("line-height")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 40rpx"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("text-align")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" center"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [t._v("border-radius")]
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" 50%"),
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
                                                    t._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token property",
                                                            },
                                                        },
                                                        [
                                                            t._v(
                                                                "background-color"
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
                                                        [t._v(":")]
                                                    ),
                                                    t._v(" #fff"),
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
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("16")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("17")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("18")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("19")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("20")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("21")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("22")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("23")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("24")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("25")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("26")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("27")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("28")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("29")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("30")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("31")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("32")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("33")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("34")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("35")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("36")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("37")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("38")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("39")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("40")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("41")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("42")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("43")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("44")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("45")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("46")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("47")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h4", { attrs: { id: "javascript" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#javascript" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" javascript"),
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
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [t._v("Component")]
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
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            t._v(
                                                                "// 组件的属性列表"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n  properties"),
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
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("{")]
                                                    ),
                                                    t._v("\n    selectType"),
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
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("{")]
                                                    ),
                                                    t._v("\n      type"),
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
                                                    t._v(" String"),
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
                                                    t._v("\n      value"),
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
                                                        [t._v("'checkbox'")]
                                                    ),
                                                    t._v("\n    "),
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
                                                        [t._v(",")]
                                                    ),
                                                    t._v("\n    radioData"),
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
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("{")]
                                                    ),
                                                    t._v("\n      type"),
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
                                                    t._v(" Array"),
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
                                                    t._v("\n      value"),
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
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("[")]
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
                                                        [t._v("]")]
                                                    ),
                                                    t._v("\n    "),
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
                                                        [t._v(",")]
                                                    ),
                                                    t._v("\n    checkboxData"),
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
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("{")]
                                                    ),
                                                    t._v("\n      type"),
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
                                                    t._v(" Array"),
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
                                                    t._v("\n      value"),
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
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("[")]
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
                                                        [t._v("]")]
                                                    ),
                                                    t._v("\n    "),
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
                                                        [t._v(",")]
                                                    ),
                                                    t._v("\n    isHidden"),
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
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("{")]
                                                    ),
                                                    t._v("\n      type"),
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
                                                    t._v(" Boolean"),
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
                                                    t._v("\n      value"),
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
                                                                    "token boolean",
                                                            },
                                                        },
                                                        [t._v("false")]
                                                    ),
                                                    t._v("\n    "),
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
                                                        [t._v(",")]
                                                    ),
                                                    t._v("\n    maxLength"),
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
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("{")]
                                                    ),
                                                    t._v("\n      type"),
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
                                                    t._v(" Number"),
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
                                                    t._v("\n      value"),
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
                                                                    "token number",
                                                            },
                                                        },
                                                        [t._v("2")]
                                                    ),
                                                    t._v("\n    "),
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
                                                    t._v("\n  "),
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
                                                        [t._v(",")]
                                                    ),
                                                    t._v("\n  "),
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
                                                            t._v(
                                                                "// 组件的初始数据"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n  data"),
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
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("{")]
                                                    ),
                                                    t._v(
                                                        "\n    initRadioClass"
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
                                                                "'radio flex-wrapper flex-direction-row'"
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
                                                    t._v(
                                                        "\n    focusRadioClass"
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
                                                                "'radio flex-wrapper flex-direction-row active'"
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
                                                    t._v(
                                                        "\n    initCheckboxClass"
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
                                                                "'checkbox flex-wrapper flex-direction-row'"
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
                                                    t._v(
                                                        "\n    focusCheckboxClass"
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
                                                                "'checkbox flex-wrapper flex-direction-row active'"
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
                                                    t._v("\n    radioIndex"),
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
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [t._v("null")]
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
                                                    t._v(
                                                        "\n    checkboxIndexArr"
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
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("[")]
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
                                                        [t._v("]")]
                                                    ),
                                                    t._v("\n  "),
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
                                                        [t._v(",")]
                                                    ),
                                                    t._v("\n  "),
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
                                                            t._v(
                                                                "// 组件的方法列表"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n  methods"),
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
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [t._v("{")]
                                                    ),
                                                    t._v("\n    "),
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
                                                            t._v(
                                                                "// radio选择改变触发的函数"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function-variable function",
                                                            },
                                                        },
                                                        [t._v("radioChange")]
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
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [t._v("function")]
                                                    ),
                                                    t._v(" "),
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
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [t._v("e")]
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
                                                    t._v(" "),
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
                                                    t._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [t._v("let")]
                                                    ),
                                                    t._v(" value "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [t._v("=")]
                                                    ),
                                                    t._v(" e"),
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
                                                    t._v("detail"),
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
                                                    t._v("value"),
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
                                                    t._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [t._v("this")]
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
                                                        [t._v("setData")]
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
                                                    t._v(
                                                        "\n        radioIndex"
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
                                                    t._v(" value\n      "),
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
                                                    t._v("\n\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [t._v("this")]
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
                                                        [t._v("triggerEvent")]
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
                                                                    "token string",
                                                            },
                                                        },
                                                        [t._v("'radioChange'")]
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
                                                    t._v(" value"),
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
                                                    t._v("\n    "),
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
                                                        [t._v(",")]
                                                    ),
                                                    t._v("\n    "),
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
                                                            t._v(
                                                                "// checkbox选择改变触发的函数"
                                                            ),
                                                        ]
                                                    ),
                                                    t._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function-variable function",
                                                            },
                                                        },
                                                        [t._v("checkboxChange")]
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
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [t._v("function")]
                                                    ),
                                                    t._v(" "),
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
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [t._v("e")]
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
                                                    t._v(" "),
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
                                                    t._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [t._v("let")]
                                                    ),
                                                    t._v(" value "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [t._v("=")]
                                                    ),
                                                    t._v(" e"),
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
                                                    t._v("detail"),
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
                                                    t._v("value"),
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
                                                    t._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [t._v("this")]
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
                                                        [t._v("setData")]
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
                                                    t._v(
                                                        "\n        checkboxIndexArr"
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
                                                    t._v(" value\n      "),
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
                                                    t._v("\n\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [t._v("this")]
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
                                                        [t._v("triggerEvent")]
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
                                                                    "token string",
                                                            },
                                                        },
                                                        [
                                                            t._v(
                                                                "'checkboxChange'"
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
                                                    t._v(" value"),
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
                                                    t._v("\n    "),
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
                                                    t._v("\n  "),
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
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("16")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("17")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("18")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("19")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("20")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("21")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("22")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("23")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("24")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("25")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("26")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("27")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("28")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("29")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("30")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("31")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("32")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("33")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("34")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("35")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("36")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("37")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("38")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("39")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("40")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("41")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("42")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("43")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("44")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("45")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("46")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("47")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("48")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("49")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("50")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("51")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("52")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("53")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("54")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [t._v("55")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h2", { attrs: { id: "分析" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#分析" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" 分析"),
                                ]),
                                t._v(" "),
                                a("p", [
                                    t._v(
                                        "\b其中，单选框比较简单，重点在于多选框。其中比较坑的地方就是需要手动来控制 "
                                    ),
                                    a("code", [t._v("checkboxIndexArr")]),
                                    t._v(" 的内容。"),
                                    a("br"),
                                ]),
                                t._v(" "),
                                a("ol", [
                                    a("li", [
                                        a("p", [
                                            t._v(
                                                "小程序多选框\b在选中后会返回一个所选中的value的数组 "
                                            ),
                                            a("code", [
                                                t._v("checkboxIndexArr"),
                                            ]),
                                            t._v(
                                                " ，所以我们自定义的样式需要通过判断当前框的 "
                                            ),
                                            a("code", [t._v("value")]),
                                            t._v(" 是不是在 "),
                                            a("code", [
                                                t._v("checkboxIndexArr"),
                                            ]),
                                            t._v(
                                                " 中（切记，checkboxIndexArr中的每个值的类型都是String），\b小程序在wxml中绑定方法时没办法携带参数的，所以需要需要将这个函数写在 "
                                            ),
                                            a("code", [t._v("wxs")]),
                                            t._v(" 中。"),
                                        ]),
                                    ]),
                                    t._v(" "),
                                    a("li", [
                                        a("p", [
                                            t._v(
                                                "如果需要有默认选中，需要单独把默认选中的框的样式激活，同时手动将默认选中的框的checked设置为 "
                                            ),
                                            a("code", [t._v("true")]),
                                            t._v(" ，并将其 "),
                                            a("code", [t._v("value")]),
                                            t._v(" 放入 "),
                                            a("code", [
                                                t._v("checkboxIndexArr"),
                                            ]),
                                            t._v(" 中。"),
                                        ]),
                                    ]),
                                    t._v(" "),
                                    a("li", [
                                        a("p", [
                                            t._v(
                                                "如果需要做全选和全不选，需要在放置一个变量 "
                                            ),
                                            a("code", [t._v("checked")]),
                                            t._v(
                                                " ，\b\bBoolean属性，通过控制 "
                                            ),
                                            a("code", [t._v("checked")]),
                                            t._v(
                                                " 开控制是否全选，但是，还是需要手动\b来添加和清空 "
                                            ),
                                            a("code", [
                                                t._v("checkboxIndexArr"),
                                            ]),
                                            t._v(" 的内容。"),
                                        ]),
                                    ]),
                                    t._v(" "),
                                    a("li", [
                                        a("p", [
                                            t._v(
                                                "如果需要做反选功能，需要在数据中单独设置一个控制\b是否选中的checked属性，通过改变数据\bchecked的值来改变多选框的选中效果，与上面一样，还是要手动\b来添加和清空 "
                                            ),
                                            a("code", [
                                                t._v("checkboxIndexArr"),
                                            ]),
                                            t._v(" 的内容。"),
                                        ]),
                                    ]),
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
