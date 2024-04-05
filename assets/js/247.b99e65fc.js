(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{640:function(s,t,e){"use strict";e.r(t);var a=e(14),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"微前端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微前端"}},[s._v("#")]),s._v(" 微前端")]),s._v(" "),t("h2",{attrs:{id:"为什么wpm要使用systemjs作为底层的加载模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么wpm要使用systemjs作为底层的加载模块"}},[s._v("#")]),s._v(" 为什么wpm要使用systemjs作为底层的加载模块")]),s._v(" "),t("p",[s._v("如果我们想要实现加载远程代码模块的能力，一个方案是使用amd的模块化规范，一种就是使用systemjs的规范，而systemjs显然更加具有优势。")]),s._v(" "),t("h2",{attrs:{id:"systemjs-实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#systemjs-实现原理"}},[s._v("#")]),s._v(" systemjs 实现原理")]),s._v(" "),t("p",[s._v("我们在使用webpack打包构建项目的时候，output输出选项中的"),t("code",[s._v("libraryTarget")]),s._v("字段设置为"),t("code",[s._v("system")]),s._v("格式，这样才能提供给别人使用。\nsystemjs本身就是具备加载远程链接的能力。")]),s._v(" "),t("p",[s._v("如果我们想要提取公共的模块，可以在external这个选项中配置 "),t("code",[s._v("react react-dom")]),s._v(", 这样，打包时候就不会将这两个库打包到dist中。")]),s._v(" "),t("p",[s._v("那react 和 react-dom 如何加载呢？我们可以基于systemjs的特性。可以配置一个import-maps, 将我们需要的react 和 react-dom 通过 cdn的形式引用进来。这样就能明显的减少体积。")]),s._v(" "),t("p",[s._v("对于systemjs来说，会首先注册两个模块，这两个模块加载完毕后，会调用回调函数返回对象中的setters，一一调用，加载完毕后会执行execute，此方法就是index.js")])])}),[],!1,null,null,null);t.default=r.exports}}]);