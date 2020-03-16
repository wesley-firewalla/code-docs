(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{108:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"api-restful"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-restful"}},[t._v("#")]),t._v(" API RESTful")]),t._v(" "),a("p",[t._v("此篇列出常用的API设计。")]),t._v(" "),a("p",[t._v("API URL中间加个 "),a("code",[t._v("api")]),t._v(" 以免将来此域名要划分出其他子目录。通常API功能是不停迭代上去的，涉及到数据库结构的考虑维护成本的情况下极少同时存在两个版本的api，所以并不建议在URL上加类似 "),a("code",[t._v("v1")]),t._v(" 的版本号。")]),t._v(" "),a("h2",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" GET")]),t._v(" "),a("p",[a("code",[t._v("GET")]),t._v(" 用于获取数据。")]),t._v(" "),a("p",[a("strong",[t._v("Request")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建数据示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request GET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://api.adoc.ink/api/items?q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(":q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("page_index")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("page_size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization: Bearer <token>'")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Response")])]),t._v(" "),a("blockquote",[a("p",[t._v("Response status 200 OK")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"count"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"items"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sample 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"category"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Foo"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Request")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建数据示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request GET "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://api.adoc.ink/api/items/:id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization: Bearer <token>'")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Response")])]),t._v(" "),a("blockquote",[a("p",[t._v("Response status 200 OK")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sample 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"category"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Foo"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("找不到资源约定返回400错误")])]),t._v(" "),a("h2",{attrs:{id:"post"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[t._v("#")]),t._v(" POST")]),t._v(" "),a("p",[a("code",[t._v("POST")]),t._v(" 用于创建数据或者执行某个动作。")]),t._v(" "),a("p",[a("strong",[t._v("Request")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建数据示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request POST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://api.adoc.ink/api/items "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization: Bearer <token>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n\t"name": "Sample 1",\n\t"category": "Foo"\n}\'')]),t._v("\n")])])]),a("p",[a("strong",[t._v("Response")])]),t._v(" "),a("blockquote",[a("p",[t._v("Response status 201 Created")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"patch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patch"}},[t._v("#")]),t._v(" PATCH")]),t._v(" "),a("p",[a("code",[t._v("PATCH")]),t._v(" 可更新数据部分字段。")]),t._v(" "),a("p",[a("strong",[t._v("Request")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新数据示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request PATCH "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://api.adoc.ink/api/items/:id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization: Bearer <token>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n\t"name": "Sample 2",\n}\'')]),t._v("\n")])])]),a("p",[a("strong",[t._v("Response")])]),t._v(" "),a("blockquote",[a("p",[t._v("Response status 204 No Content")])]),t._v(" "),a("h2",{attrs:{id:"put"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[t._v("#")]),t._v(" PUT")]),t._v(" "),a("p",[a("code",[t._v("PUT")]),t._v(" 用于更新单个数据的所有字段数据。")]),t._v(" "),a("p",[a("strong",[t._v("Request")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新数据示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request PUT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://api.adoc.ink/api/items/:id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization: Bearer <token>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n\t"name": "Sample 2",\n\t"category": "Bar",\n}\'')]),t._v("\n")])])]),a("p",[a("strong",[t._v("Response")])]),t._v(" "),a("blockquote",[a("p",[t._v("Response status 204 No Content")])]),t._v(" "),a("h2",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" DELETE")]),t._v(" "),a("p",[a("code",[t._v("DELETE")]),t._v(" 用于删除数据。")]),t._v(" "),a("p",[a("strong",[t._v("Request")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新数据示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request DELETE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --url http://api.adoc.ink/api/items/:id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authorization: Bearer <token>'")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Response")])]),t._v(" "),a("blockquote",[a("p",[t._v("Response status 204 No Content")])]),t._v(" "),a("h2",{attrs:{id:"error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[t._v("#")]),t._v(" Error")]),t._v(" "),a("p",[a("strong",[t._v("出错Response格式")])]),t._v(" "),a("p",[t._v("一般来说简单的api有 "),a("code",[t._v("code")]),t._v(" 和 "),a("code",[t._v("message")]),t._v(" 就可以了。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BadArgument"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Multiple errors in ContactInfo data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"details"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NullValue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PhoneNumber"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Phone number must not be null"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NullValue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LastName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Last name must not be null"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("未登录")])]),t._v(" "),a("blockquote",[a("p",[t._v("Response status 401 Unauthorized")])]),t._v(" "),a("p",[a("strong",[t._v("禁止访问")])]),t._v(" "),a("blockquote",[a("p",[t._v("Response status 403 Forbidden")])]),t._v(" "),a("p",[a("strong",[t._v("其他")])]),t._v(" "),a("blockquote",[a("p",[t._v("Response status 400")])])])}),[],!1,null,null,null);s.default=e.exports}}]);