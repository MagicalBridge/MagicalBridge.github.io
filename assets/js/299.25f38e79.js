(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{700:function(s,t,a){"use strict";a.r(t);var r=a(14),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"初识-typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初识-typescript"}},[s._v("#")]),s._v(" 初识 TypeScript")]),s._v(" "),t("p",[s._v("TypeScript 作为 JavaScript 语言的超集，它为 JavaScript 添加了可选择的类型标注，大大增强了代码的可读性和可维护性。同时，它提供最新和不断发展的 JavaScript 特性，能让我们建立更健壮的组件。")]),s._v(" "),t("h2",{attrs:{id:"typescript-的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript-的特点"}},[s._v("#")]),s._v(" TypeScript 的特点")]),s._v(" "),t("p",[s._v("TypeScript 主要有 3 大特点：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("始于JavaScript，归于JavaScript")])])]),s._v(" "),t("p",[s._v("TypeScript 可以编译出纯净、 简洁的 JavaScript 代码，并且可以运行在任何浏览器上、Node.js 环境中和任何支持 ECMAScript 3（或更高版本）的JavaScript 引擎中。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("强大的工具构建大型应用程序")])])]),s._v(" "),t("p",[s._v("类型允许 JavaScript 开发者在开发 JavaScript 应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构。")]),s._v(" "),t("p",[s._v("类型是可选的，类型推断让一些类型的注释使你的代码的静态验证有很大的不同。类型让你定义软件组件之间的接口和洞察现有 JavaScript 库的行为。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("先进的 JavaScript")])])]),s._v(" "),t("p",[s._v("TypeScript 提供最新的和不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件。")]),s._v(" "),t("p",[s._v("这些特性为高可信应用程序开发时是可用的，但是会被编译成简洁的 ECMAScript3（或更新版本）的JavaScript。")]),s._v(" "),t("h2",{attrs:{id:"如何安装-typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何安装-typescript"}},[s._v("#")]),s._v(" 如何安装 TypeScript")]),s._v(" "),t("p",[s._v("首先保证电脑上已经安装了node环境，需要使用 npm 来安装 TypeScript")]),s._v(" "),t("p",[s._v("打开终端，执行命令：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo npm install -g typescript\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("终端中显示安装成功")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("/Users/louis/.nvm/versions/node/v14.16.0/bin/tsserver -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /Users/louis/.nvm/versions/node/v14.16.0/lib/node_modules/typescript/bin/tsserver\n/Users/louis/.nvm/versions/node/v14.16.0/bin/tsc -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /Users/louis/.nvm/versions/node/v14.16.0/lib/node_modules/typescript/bin/tsc\n+ typescript@4.5.4\nadded "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" package from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" contributor "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".159s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"如何编译-ts文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何编译-ts文件"}},[s._v("#")]),s._v(" 如何编译.ts文件？")]),s._v(" "),t("p",[s._v("在我们本机安装 TypeScript 之后，会随之给我们的电脑安装一个ts编译器：tsc。")]),s._v(" "),t("p",[s._v("我们在终端输入命令：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("tsc "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出")]),s._v("\nVersion "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.5")]),s._v(".4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("TypeScript 在社区的流行度越来越高，它非常适用于一些大型项目，也非常适用于一些基础库，极大地帮助我们提升了开发效率和体验。都 2019 年了，如果你还没有开始学习 TypeScript，那么你可能要落后了哟，所以还等什么，快来和我一起学习并使用 TypeScript 吧，来感受一下它为我们带来的奇妙体验。")])])}),[],!1,null,null,null);t.default=e.exports}}]);