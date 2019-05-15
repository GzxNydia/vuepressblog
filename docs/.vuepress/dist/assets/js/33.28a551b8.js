(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{199:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/12/165c960c72a38dae?w=1240&h=739&f=png&s=555321",alt:""}}),t._v("\n前几天遇到了获取图片主题色的需求，于是去找了一些相关的博客，发现实现起来相当简单，于是自己开发了一个获取图片主题色的网站---"),s("a",{attrs:{href:"https://hubingliang.github.io/colorfulImg/dist/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ColorfulImg"),s("OutboundLink")],1),t._v("\n大家可以通过上传/拖拽图片的方式获取图片主题色。")]),t._v(" "),s("p",[t._v("欢迎Star~")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Colorfulimg是一个能够通过canvas获取图片主题色的js工具库。")]),t._v(" "),s("p",[t._v("安装：")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("使用方法：")]),t._v(" "),t._m(4),s("p",[t._v("欢迎star~")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("下面说一下实现思路，主要是通过"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("canvas"),s("OutboundLink")],1),t._v("的"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData",target:"_blank",rel:"noopener noreferrer"}},[t._v("getImageData()"),s("OutboundLink")],1),t._v("方法获取图片每个像素点的rgba数据。通过取得平均值的方法来算出图片主题色。\n所以要想实现此效果有两个限制：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ImageData",target:"_blank",rel:"noopener noreferrer"}},[t._v("getImageData()"),s("OutboundLink")],1),t._v("这个API需要四个参数，前两个是获取图片数据的起点，后两个是提取的图像数据矩形区域的宽度和高度，我们要得到图片全部的数据所以后两个参数就是图片的宽高，于此同时我们也要把canvas的宽高设置为图片的宽高能完全装下图片。")]),t._v(" "),t._m(13),s("p",[t._v("在我第一次测试的时候遇到了跨域的问题：")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("我们先log一下拿到的数据是什么吧：")]),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("是一个有着一堆数据的数组，这些数据是什么呢？我们先看一下MDN：")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("对于获取的图片数据透明度（alpha）都是255也就是不透明的所以我们不对透明度做处理，之后我们只需要把rgb的其他三个值分别求和再取均值就可以得到图片的主题色了！")]),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"使用colorfulimg获取图片主题色！"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用colorfulimg获取图片主题色！","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用ColorfulImg获取图片主题色！")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"取色网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取色网站","aria-hidden":"true"}},[this._v("#")]),this._v(" 取色网站")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"colorfulimg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#colorfulimg","aria-hidden":"true"}},[this._v("#")]),this._v(" ColorfulImg")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("npm i colorfulimg")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" colorfulimg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'colorfulimg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myImg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myImg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rgb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("colorfulImg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myImg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"colorfulimg实现思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#colorfulimg实现思路","aria-hidden":"true"}},[this._v("#")]),this._v(" ColorfulImg实现思路")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("网站和图片必须是相同的域名（getImageData()限制图片必须同源）")]),this._v(" "),a("li",[this._v("浏览器必须支持canvas")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"在canvas中绘制img图像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在canvas中绘制img图像","aria-hidden":"true"}},[this._v("#")]),this._v(" 在canvas中绘制img图像")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("首先我们要新建一个canvas标签并且访问它的绘画上下文：")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" canvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'canvas'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{attrs:{start:"2"}},[a("li",[this._v("绘制img图像，X轴与Y轴的起始点都设置为0：")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myImg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myImg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncontext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myImg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"获取图片颜色数据getimagedata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取图片颜色数据getimagedata","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取图片颜色数据getImageData()")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imgEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imgEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getImageData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/12/165c960c72b06536?w=631&h=171&f=png&s=9973",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("图片如果不同源的话必须要加"),a("code",[this._v('crossorigin="anonymous"')]),this._v("的属性，并且服务器存储那边也要开放相应的权限才行。\n"),a("code",[this._v('<img id="img" crossorigin="anonymous">')])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"处理获取的颜色数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理获取的颜色数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 处理获取的颜色数据")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/12/165c960c72cc7c75?w=631&h=295&f=png&s=9846",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/12/165c960c72e4542f?w=773&h=120&f=png&s=15815",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("也就是说按顺序来看前四位组成一个以RGBA顺序的数据：\n"),a("strong",[this._v("rgba(red, green, blue, alpha)")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" blockSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" blockSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" length "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("count\n  rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r \n  rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g\n  rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nrgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"最终代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最终代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 最终代码")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("colorfulImg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("img")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" canvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'canvas'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getContext "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        blockSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        rgb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("g"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            \n    height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imgEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n    width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imgEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width\n    context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imgEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getImageData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n    length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" blockSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" length "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" rgb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.default=r.exports}}]);