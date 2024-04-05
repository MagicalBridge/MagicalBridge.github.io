(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{696:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript深入之原型和原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript深入之原型和原型链"}},[t._v("#")]),t._v(" JavaScript深入之原型和原型链")]),t._v(" "),s("h2",{attrs:{id:"开篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开篇"}},[t._v("#")]),t._v(" 开篇：")]),t._v(" "),s("p",[t._v("在Brendan Eich大神为"),s("code",[t._v("JavaScript")]),t._v("设计面向对象系统的时候，借鉴了"),s("code",[t._v("Self")]),t._v(" 和"),s("code",[t._v("Smalltalk")]),t._v("这两门\n基于原型的语言，之所以选择基于原型的面向对象系统，并不是因为时间匆忙，它设计起来相对简单，而是因为从一开始Brendan Eich就没打算在"),s("code",[t._v("Javascipt")]),t._v("中加入类的概念。")]),t._v(" "),s("p",[t._v("以类为中心的面向对象的编程语言中，类和对象的关系可以想象成铸模和铸件的关系，对象总是从类中创建而来，\n而在原型编程的思想中，类并不是必须的，对象未必需要从一个类中创建而来。")]),t._v(" "),s("p",[t._v("JavaScript是一门完全面向对象的语言，如果想要更好地使用JavaScript的面向对象系统，原型和原型链就是个绕不开的话题，")]),t._v(" "),s("p",[t._v("今天我们就一起来学习一下这方面的知识。")]),t._v(" "),s("h2",{attrs:{id:"理解三个重要的属性-prototype、-proto-、constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解三个重要的属性-prototype、-proto-、constructor"}},[t._v("#")]),t._v(" 理解三个重要的属性："),s("code",[t._v("prototype")]),t._v("、"),s("code",[t._v("__proto__")]),t._v("、"),s("code",[t._v("constructor")])]),t._v(" "),s("p",[t._v('见名知意，所谓的"'),s("strong",[t._v("链")]),t._v('"描述的其实是一种关系，加上'),s("strong",[t._v("原型")]),t._v("两个字，可以理解为原型之间的关系，既然是一种关系，就需要维系，就好比我们走亲访友，亲情就是一种纽带，类比在JavaScript当中——"),s("strong",[t._v("函数、对象实例、实例原型")]),t._v("\n也有自身的联系，而他们之间的纽带就是下面这三个重要的属性：")]),t._v(" "),s("p",[s("strong",[t._v("三个重要的属性："),s("code",[t._v("prototype")]),t._v("、"),s("code",[t._v("__proto__")]),t._v("、"),s("code",[t._v("constructor")])])]),t._v(" "),s("h3",{attrs:{id:"prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" prototype")]),t._v(" "),s("p",[t._v("我们先来看看第一个属性："),s("code",[t._v("prototype")])]),t._v(" "),s("p",[t._v('所谓属性，指的是一个事物的特征，就比如美女的一大特征是“大长腿”，那“大长腿"就是美女的属性，类比到JavaScript中函数，每一个函数都有一个'),s("code",[t._v("prototype")]),t._v("属性，这属性就是与生俱来的特质。这里需要特别强调一下，是"),s("strong",[t._v("函数")]),t._v("，普通的对象是没有这个属性的，（这里为什么说普通对象呢，因为在JavaScript里面，"),s("strong",[t._v("一切皆为对象")]),t._v("，所以这里的普通对象不包括函数对象）")]),t._v(" "),s("p",[t._v("我们来看一个例子：")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 虽然写在注释里面，但是需要注意的是")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prototype 是函数才会有的属性 （哈哈哈，看来在JavaScript中函数果然是有特权的……）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kevin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Kevin")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Kevin")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("上面的代码中我们创建了一个"),s("strong",[t._v("构造函数")]),s("code",[t._v("Person")]),t._v("，并且在实例原型上面添加了一个"),s("code",[t._v("name")]),t._v("属性赋值为"),s("code",[t._v('"Kevin"')]),t._v(";")]),t._v(" "),s("p",[t._v("然后分别创建了两个"),s("strong",[t._v("实例对象")]),t._v(":"),s("code",[t._v("person1、person2")]),t._v(";")]),t._v(" "),s("p",[t._v("当我们打印两个"),s("strong",[t._v("实例对象")]),t._v("上name属性时均输出了"),s("code",[t._v("Kevin")]),t._v("(可以亲自试一下)。")]),t._v(" "),s("p",[t._v("我们不禁疑惑，这个"),s("code",[t._v("Person.prototype")]),t._v("到底是什么，为什么在上面添加属性，在\n构造函数的实例化对象上都能访问到呢？")]),t._v(" "),s("p",[t._v("其实 Person这个函数的"),s("code",[t._v("prototype")]),t._v("属性指向了一个对象，即:"),s("code",[t._v("Person.prototype")]),t._v("也是一个对象。（真是好多对象）"),s("strong",[t._v("这个对象正是调用该构造函数而创建的实例的原型")]),t._v("。也就是这个例子中的"),s("code",[t._v("person1")]),t._v("和"),s("code",[t._v("person2")]),t._v("的原型。")]),t._v(" "),s("p",[t._v("为了便于理解，我们将上面的这段话拆解一下：")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("1.调用的构造函数：  Person")]),t._v(" "),s("li",[t._v("2.使用什么调用：    new关键字")]),t._v(" "),s("li",[t._v("3.得到了什么：     两个实例化对象person1、person2")]),t._v(" "),s("li",[t._v("4.实例化对象和原型是什么关系: person1和person2的原型就是 Person.prototype")])])]),t._v(" "),s("p",[t._v("那什么是原型呢？可以这样理解：")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v('每一个JavaScript对象（null除外）在创建的时候就会与之关联另外一个对象，这个对象就是我们所说的原型，而每一个对象都会从原型"继承"属性。')])]),t._v(" "),s("p",[t._v("上面的代码中我们并没有直接在"),s("code",[t._v("person1")]),t._v("和"),s("code",[t._v("person2")]),t._v("中添加name属性 但是这两个对象却能够访问name属性,就是这个道理。")]),t._v(" "),s("p",[t._v("我们用一张图表示构造函数和实例原型之间的关系:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/29/16898b91e713ac0c~tplv-t2oaga2asx-image.image",alt:""}})]),t._v(" "),s("p",[t._v("好了 构造函数和实例原型之间的关系我们已经梳理清楚了，那我们怎么表示实例与实例原型，也就是"),s("code",[t._v("person1")]),t._v("或者"),s("code",[t._v("person2")]),t._v("和"),s("code",[t._v("Person.prototype")]),t._v(" 之间的关系呢。这时候需要请出我们理解原型链的第二个重要属性"),s("code",[t._v("__proto__")])]),t._v(" "),s("h3",{attrs:{id:"proto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proto"}},[t._v("#")]),t._v(" "),s("code",[t._v("__proto__")])]),t._v(" "),s("p",[t._v("这个属性有什么特征呢？")]),t._v(" "),s("p",[t._v("其实这是每一个JavaScript对象（除了null）都具有的一个属性，叫__proto__,这个属性会指向该对象的原型，即作为实例对象和实例原型的之间的链接桥梁,"),s("strong",[t._v("这里强调，是对象，同样，因为函数也是对象，所以函数也有这个属性。")])]),t._v(" "),s("p",[t._v("我们看一个代码示例：")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true;")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("有了第二个属性的帮助，我们就能更加全面的理解这张关系图了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/29/16898bcf2bd5b9e0~tplv-t2oaga2asx-image.image",alt:""}})]),t._v(" "),s("p",[t._v("通过上面的关系图我们可以看到,"),s("code",[t._v("构造函数Person")]),t._v(" 和"),s("code",[t._v("实例对象person")]),t._v(" 分别通过"),s("code",[t._v("prototype")]),t._v("和"),s("code",[t._v("__proto__")]),t._v(" 和实例原型"),s("code",[t._v("Person.prototype")]),t._v("进行关联，根据箭头指向我们不禁要有疑问："),s("strong",[t._v("实例原型是否有属性指向构造函数或者实例呢？")])]),t._v(" "),s("p",[t._v("这时候该请出我们的第三个属性了："),s("code",[t._v("constructor")])]),t._v(" "),s("h3",{attrs:{id:"constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),s("p",[t._v("实例原型指向实例的属性倒是没有,因为一个构造函数可能会生成很多个实例，但是原型指向构造函数的属性倒是有的，这就是我们的"),s("code",[t._v("constructor")]),t._v("——每一个原型都有一个"),s("code",[t._v("constructor")]),t._v("属性指向关联的构造函数。")]),t._v(" "),s("p",[t._v("我们再来看一个示例：")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("好了到这里我们再完善下关系图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/29/16898bfa7d21ac26~tplv-t2oaga2asx-image.image",alt:""}})]),t._v(" "),s("p",[t._v("通过对三个属性的介绍，我们总结一下：")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顺便学习一个ES5的方法,可以获得对象的原型")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrototypeOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("上述代码中我们我们执行了以下操作：")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("1.声明了构造函数 Person;")]),t._v(" "),s("li",[t._v("2.使用new操作符调用 Person 实例化了一个person 对象;")]),t._v(" "),s("li",[t._v("3.判断实例化对象通过__proto__是否指向实例原型;")]),t._v(" "),s("li",[t._v("4.判断实例原型通过constructor是否能找到对应的构造函数;")]),t._v(" "),s("li",[t._v("5.使用Object.getPrototypeOf方法传入一个对象 找到对应的原型对象;")])])]),t._v(" "),s("p",[t._v("了解了构造函数。实例原型、和实例对象之间的关系，接下来我们讲讲实例和原型的关系：")]),t._v(" "),s("h2",{attrs:{id:"实例与原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例与原型"}},[t._v("#")]),t._v(" 实例与原型")]),t._v(" "),s("p",[s("strong",[t._v("当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。")])]),t._v(" "),s("p",[t._v("我们再举一个例子：")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Kevin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Daisy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Daisy")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Kevin")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("在上面这个例子中，我们给实例person添加了name属性，当我们打印person.name的时候，结果自然为Daisy")]),t._v(" "),s("p",[t._v("但是当我们删除了"),s("code",[t._v("person")]),t._v("下面的name属性后，读取"),s("code",[t._v("person.name")]),t._v("，依然能够成功输出Kevin，实际情况是从 person 对象中找不到 name 属性就会从 person 的原型也就是 "),s("code",[t._v("person.__proto__")]),t._v(" ，也就是 "),s("code",[t._v("Person.prototype")]),t._v("中查找，幸运的是我们找到了 name 属性，结果为 Kevin。")]),t._v(" "),s("p",[t._v("但是我们不禁有疑问，如果万一没有找到该怎么办？")]),t._v(" "),s("p",[t._v("我们来看下一层的关系 "),s("strong",[t._v("原型的原型")])]),t._v(" "),s("h2",{attrs:{id:"原型的原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型的原型"}},[t._v("#")]),t._v(" 原型的原型")]),t._v(" "),s("p",[t._v("我们前面提到过，原型也是一个对象，那么既然是对象，那肯定就有创建它的构造函数，\n这个构造函数就是Object();")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Kevin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Kevin;")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("其实原型对象就是通过Object构造函数生成的，结合之前我们所说的，实例__proto__指向构造函数的\nprototype 所以我们再丰富一下我们的关系图；")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/29/16898c4978539394~tplv-t2oaga2asx-image.image",alt:""}})]),t._v(" "),s("p",[t._v("到了这里我们对于 构造函数、实例对象、实例原型之间的关系又有了进一步的认识。\n说了这么多，终于可以介绍原型链了。")]),t._v(" "),s("h2",{attrs:{id:"原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),s("p",[t._v("那Object.prototype 的原型呢？Object是根节点的对象，再往上查找就是null，我们可以打印：")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("然而 null 究竟代表了什么呢？")]),t._v(" "),s("p",[t._v("引用阮一峰老师的 《undefined与null的区别》 就是：")]),t._v(" "),s("p",[t._v("null 表示“没有对象”，即该处不应该有值。")]),t._v(" "),s("p",[t._v("所以 Object.prototype."),s("strong",[t._v("proto")]),t._v(" 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。")]),t._v(" "),s("p",[t._v("所以查找属性的时候查到 Object.prototype 就可以停止查找了。")]),t._v(" "),s("p",[t._v("我们可以将null 也加入最后的关系图中，这样就比较完整了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/29/16898c65dc0834c2~tplv-t2oaga2asx-image.image",alt:""}})]),t._v(" "),s("p",[t._v("上图中相互关联的原型组成的链状结构就是原型链，也就是红色的这条线")]),t._v(" "),s("h2",{attrs:{id:"补充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[t._v("#")]),t._v(" 补充")]),t._v(" "),s("p",[t._v("最后，补充三点大家可能不会注意到的地方：")]),t._v(" "),s("h3",{attrs:{id:"constructor-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor-2"}},[t._v("#")]),t._v(" constructor")]),t._v(" "),s("p",[t._v("首先是constructor，我们看一个例子：")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("当获取"),s("code",[t._v("person.constructor")]),t._v("时，其实 person 中并没有"),s("code",[t._v("constructor")]),t._v(" 属性,当不能读取到"),s("code",[t._v("constructor")]),t._v("属性时，会从 person 的原型也就是 "),s("code",[t._v("Person.prototype")]),t._v("中读取，正好原型中有该属性，所以：")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"proto-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proto-2"}},[t._v("#")]),t._v(" "),s("code",[t._v("__proto__")])]),t._v(" "),s("p",[t._v("其次是 "),s("strong",[t._v("proto")]),t._v(" ，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj."),s("strong",[t._v("proto")]),t._v(" 时，可以理解成返回了 Object.getPrototypeOf(obj)。")]),t._v(" "),s("h3",{attrs:{id:"真的是继承吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#真的是继承吗"}},[t._v("#")]),t._v(" 真的是继承吗？")]),t._v(" "),s("p",[t._v("最后是关于继承，前面我们讲到“每一个对象都会从原型‘继承’属性”，实际上，继承是一个十分具有迷惑性的说法，引用《你不知道的JavaScript》中的话，就是：")]),t._v(" "),s("p",[t._v("继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。")])])}),[],!1,null,null,null);s.default=e.exports}}]);