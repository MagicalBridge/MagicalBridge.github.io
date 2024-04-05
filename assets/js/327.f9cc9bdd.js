(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{731:function(t,v,_){"use strict";_.r(v);var a=_(14),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"webpack懒加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webpack懒加载"}},[t._v("#")]),t._v(" webpack懒加载")]),t._v(" "),v("h2",{attrs:{id:"我们为什么需要懒加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#我们为什么需要懒加载"}},[t._v("#")]),t._v(" 我们为什么需要懒加载")]),t._v(" "),v("p",[t._v("当页面中一个文件过大并且还不一定用的到的时候，我们希望在使用的时候才加载，这就是按需加载，也就是懒加载。")]),t._v(" "),v("p",[t._v("要实现按需加载，我们一般的想到的方法：动创建 script 标签，并将src属性指向对应的文件路径。但是实现过程中会存在一些问题：")]),t._v(" "),v("ul",[v("li",[t._v("怎么保证相同的文件只加载了一次")]),t._v(" "),v("li",[t._v("怎么判断文件的加载完成")]),t._v(" "),v("li",[t._v("文件加载完成之后，怎么通知所有引入文件的地方?")])]),t._v(" "),v("p",[t._v("当涉及到动态代码拆分时，webpack 提供了两个类似的技术。对于动态导入:")]),t._v(" "),v("ul",[v("li",[t._v("第一种，也是优先选择的方式是，使用符合 ECMAScript 提案 的 import() 语法。")]),t._v(" "),v("li",[t._v("第二种，则是使用 webpack 特定的 require.ensure。")])]),t._v(" "),v("h2",{attrs:{id:"懒加载的基本流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#懒加载的基本流程"}},[t._v("#")]),t._v(" 懒加载的基本流程：")]),t._v(" "),v("ul",[v("li",[t._v("触发异步加载逻辑")]),t._v(" "),v("li",[t._v("加载包含额外代码块的模块定义的js文件")]),t._v(" "),v("li",[t._v("js文件加载回来之后js脚本会执行")]),t._v(" "),v("li",[t._v("把新的模块定义合并到老的模块定义上")]),t._v(" "),v("li",[t._v("走正常的加载逻辑。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);