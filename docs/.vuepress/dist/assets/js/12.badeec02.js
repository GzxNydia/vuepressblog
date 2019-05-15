(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{203:function(t,e,r){"use strict";r.r(e);var i=r(0),a=Object(i.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("好久想写一篇关于浏览器内核的博客了，一直没抽出时间，幸好白夜追凶完结了，赶紧写出来。")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("说浏览器内核之前先聊聊几个浏览器大佬，目前有可观市场份额的浏览器有5个，分别是Internet Explorer、Firefox、Safari、Chrome和 Opera浏览器。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("数据来自"),r("a",{attrs:{href:"http://gs.statcounter.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("StatCounter"),r("OutboundLink")],1),t._v("2017年九月的数据统计。\n其中Firefox、Safari和Chrome是部分开源的，他们三个的份额占到了将近80%，看来开源才是互联网发展趋势。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("本文只就浏览器渲染引擎部分进行讨论。")]),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("渲染引擎的职责就是渲染，即在浏览器窗口中显示所请求的内容。这是每一个浏览器的核心部分，所以渲染引擎也称为浏览器内核。\n　　默认情况下，渲染引擎可显示 HTML 和 XML 文档及图片。通过插件（或浏览器扩展程序），还浏览器渲染引擎也可以显示其它类型的内容。例如，使用 PDF 查看器插件就能显示 PDF 文档。\n在本章中，我们将集中介绍其主要用途：显示应用了CSS的 HTML 内容和图片。")]),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("Firefox 使用的是 Gecko，这是 Mozilla 公司“自制”的渲染引擎。而 Safari 和 Chrome(28版本以前)浏览器使用的都是 Webkit。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("渲染引擎一开始会从网络层获取请求文档的内容，通常以8K分块的方式完成。\n获取了文档内容之后，渲染引擎开始正式工作，其基本流程：")]),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("渲染引擎解析HTML文档，并将文档中的标签转化为dom节点树，即”内容树”。同时，它也会解析外部CSS文件以及style标签中的样式数据。这些样式信息连同HTML中的”可见内容”一道，被用于构建另一棵树——”渲染树(Render树)”。\n　　渲染树由一些带有视觉属性(如颜色、大小等)的矩形组成，这些矩形将按照正确的顺序显示在频幕上。\n　　渲染树构建完毕之后，将会进入”布局”处理阶段，即为每一个节点分配一个屏幕坐标。再下一步就是绘制(painting)，即遍历render树，并使用UI后端层绘制每个节点。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://blog.csdn.net/u010794365/article/details/77982768",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器工作原理详解"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"浏览器渲染引擎到底做了什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染引擎到底做了什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器渲染引擎到底做了什么")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"浏览器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("来看看市场份额占有率：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-87beea8fe8662b1e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"2017 9"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"浏览器的主要组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的主要组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器的主要组件")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("用户界面 - 包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的你请求的页面外，其他显示的各个部分都属于用户界面。")]),t._v(" "),r("li",[t._v("浏览器引擎 - 在用户界面和渲染引擎之间传送指令。")]),t._v(" "),r("li",[t._v("渲染引擎 - 负责显示请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上。")]),t._v(" "),r("li",[t._v("网络 - 用于网络调用，比如 HTTP 请求。其接口与平台无关，并为所有平台提供底层实现。")]),t._v(" "),r("li",[t._v("用户界面后端 - 用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法。")]),t._v(" "),r("li",[t._v("JavaScript 解释器。用于解析和执行 JavaScript 代码，比如chrome的javascript解释器是V8。")]),t._v(" "),r("li",[t._v("数据存储。这是持久层。浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5)定义了“网络数据库”，这是一个完整（但是轻便）的浏览器内数据库。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-99ede67c3fd05b73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"主要组件"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"渲染引擎-the-rendering-engine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎-the-rendering-engine","aria-hidden":"true"}},[this._v("#")]),this._v(" 渲染引擎(The rendering engine)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"渲染引擎介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 渲染引擎介绍")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("2013年7月10日发布的Chrome 28 版本中，Chrome浏览器开始正式使用Blink内核。所以，Webkit已经成为了Chrome浏览器的前内核。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"渲染流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 渲染流程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-0460d9f8011b1ed8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("值得注意的是，这个过程是逐步完成的，为了更好的用户体验，渲染引擎将会尽可能早的将内容呈现到屏幕上，并不会等到所有的html都解析完成之后再去构建和布局render树。它是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。\n主流程示例：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-337ce481d84a70a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"Webkit 主流程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-d8ac3418dce95e3f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"Mozilla 的 Gecko 渲染引擎主流程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Gecko将视觉格式化元素组成的树称为”框架树”(frame)。每个元素都是一个框架。Webkit使用的术语是”渲染树”(render)，它由”渲染对象”组成。")]),this._v(" "),e("li",[this._v("对于元素的放置，Webkit 使用的术语是”布局”(layout)，而 Gecko 称之为”重排”(reflow)。")]),this._v(" "),e("li",[this._v("Webkit称利用dom节点及样式信息去构建render树的过程为attachment，Gecko在html和dom树之间附加了一层，这层称为内容接收器，相当制造dom元素的工厂。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考博客","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考博客")])}],!1,null,null,null);e.default=a.exports}}]);