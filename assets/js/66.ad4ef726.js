(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{402:function(a,s,t){a.exports=t.p+"assets/img/04.807cdbdf.png"},730:function(a,s,t){"use strict";t.r(s);var n=t(14),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_1-webpack进阶"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-webpack进阶"}},[a._v("#")]),a._v(" 1.webpack进阶")]),a._v(" "),s("h2",{attrs:{id:"tapable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tapable"}},[a._v("#")]),a._v(" Tapable")]),a._v(" "),s("p",[a._v("webpack本质上是一种事件流的机制，它的工作流程就是将各种插件串联起来，而实现这一切的核心就是Tapable，Tapable有点类似于 nodejs 中的events库。核心原理也是依赖于发布订阅模式。\n"),s("img",{attrs:{src:t(402),alt:"tapable"}})]),a._v(" "),s("p",[a._v("我们在webpack插件中可能会写这样的代码:")]),a._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RunPlugin")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("compiler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//在此插件里可以监听run这个钩子")]),a._v("\n    compiler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hooks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RunPlugin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"run1:开始编译"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" RunPlugin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("apply方法传递进来的是一个实例，在这个类初始化时候，会在实例上挂载一个"),s("code",[a._v("hooks")]),a._v("对象，对象的key是对应的方法，value其实是使用Tapable实例化得到的，实例化之后，在插件中可以使用 "),s("code",[a._v("run.tap")]),a._v(" 这种形式注册事件。在合适的时机webpack会执行call方法执行这些钩子。")]),a._v(" "),s("h2",{attrs:{id:"webpack中的懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack中的懒加载"}},[a._v("#")]),a._v(" webpack中的懒加载")]),a._v(" "),s("p",[a._v("在webpack中，使用懒加载或者按需加载，是一种很好的优化网页或者应用的打开方式，这种方式实际上是先把你的代码在一些逻辑断点处离开, 然后在一些代码块中完成某些操作后，立即引用或者即将引用另外的一些代码块。这样就加快了应用的初始化的加载速度。减轻了它的总体体积，因为某些代码块可能永远也不可能会被加载。")]),a._v(" "),s("h3",{attrs:{id:"懒加载的场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#懒加载的场景"}},[a._v("#")]),a._v(" 懒加载的场景")]),a._v(" "),s("p",[a._v("我们在真实的项目中可能会涉及文件的上传和下载操作，这个场景非常普遍，一般来说，下载场景就是从服务端请求一个下载链接，使用浏览器打开就好，但是上传场景就稍微有些复杂，可能会用到一些公共组件或者第三方的sdk。而这些sdk的体积可能非常大，并且，我们实际上在没有进行上传操作之前是不需要进行加载这部分代码的。所以这里我们使用懒加载是比较合理的。")])])}),[],!1,null,null,null);s.default=e.exports}}]);