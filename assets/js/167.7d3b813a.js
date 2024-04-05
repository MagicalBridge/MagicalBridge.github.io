(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{551:function(s,t,n){"use strict";n.r(t);var a=n(14),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("描述\n将一个节点数为 size 链表 m 位置到 n 位置之间的区间反转，要求时间复杂度 O(n)，空间复杂度 O(1)。")]),s._v(" "),t("p",[s._v("例如：\n给出的链表为 1 -> 2 -> 3 -> 4 -> 5 -> NULL m=2,n=4。")]),s._v(" "),t("p",[s._v("返回 1 → 4 → 3 → 2 → 5 → NULL。")]),s._v(" "),t("p",[s._v("示例1")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：{1,2,3,4,5},2,4\n\n返回值：{1, 4, 3, 2, 5}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"解法一-双指针-两次遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法一-双指针-两次遍历"}},[s._v("#")]),s._v(" 解法一：双指针（两次遍历）")]),s._v(" "),t("p",[s._v("思路步骤：")]),s._v(" "),t("ul",[t("li",[s._v("要翻转链表，可已将该局部部分当做完整的链表进行翻转")]),s._v(" "),t("li",[s._v("再将已经翻转好的局部链表与其他节点建立链接，重构链表")]),s._v(" "),t("li",[s._v("建议使用虚拟头结点的技巧，可以避免对头结点复杂的分类考虑，简化操作。")])]),s._v(" "),t("p",[s._v("这种解法方便理解：比较直观")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * function ListNode(x){\n *   this.val = x;\n *   this.next = null;\n * }\n */")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n  * \n  * @param head ListNode类 \n  * @param m int整型 \n  * @param n int整型 \n  * @return ListNode类\n  */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverseBetween")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("head "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  m "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  n")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置虚拟头节点 之所以设置虚拟头结点就是为了不对 head节点的翻转做单独处理")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" dummyNode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将虚拟头节点和链表相连")]),s._v("\n  dummyNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置前面一个指针")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" pre "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dummyNode\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1、走left-1步，走到left前一个节点")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    pre "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pre"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2、走 right-left+1 步走到 right 节点")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" rightNode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pre\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" m "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rightNode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rightNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 保存位置，翻转之后就找不到了")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" leftNode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pre"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" cur "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rightNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 切断连接")]),s._v("\n  pre"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n  rightNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 翻转局部链表")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverseLinkList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("leftNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接回原来的链表")]),s._v("\n  pre"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rightNode\n  leftNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" dummyNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 翻转链表辅助函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverseLinkList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("head")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" pre "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" cur "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cur"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    cur_next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next\n    cur"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pre\n    pre "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur\n    cur "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur_next\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("reverseBetween")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" reverseBetween\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br")])]),t("p",[s._v("这道题目关键的点在于构造指针，通过指针，保存变量的引用，然后反转区间内部的链表，最后再把链表接起来。这种解题方法比较好理解。\n出现的变量：")]),s._v(" "),t("ul",[t("li",[s._v("dummy")]),s._v(" "),t("li",[s._v("pre")]),s._v(" "),t("li",[s._v("leftNode")]),s._v(" "),t("li",[s._v("rightNode")]),s._v(" "),t("li",[s._v("cur\n然后就是和链表之间的相互链接。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);