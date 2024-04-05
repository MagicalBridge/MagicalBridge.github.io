(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{620:function(t,a,s){"use strict";s.r(a);var n=s(14),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"剑指offer68-i-二叉搜索树的最近公共祖先"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#剑指offer68-i-二叉搜索树的最近公共祖先"}},[t._v("#")]),t._v(" 剑指Offer68-I.二叉搜索树的最近公共祖先")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode.cn/leetbook/read/illustrate-lcof/59am12/",target:"_blank",rel:"noopener noreferrer"}},[t._v("题目描述"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"解题方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题方案"}},[t._v("#")]),t._v(" 解题方案")]),t._v(" "),a("ul",[a("li",[t._v("标签：二叉搜索树")]),t._v(" "),a("li",[t._v("整体思路：\n"),a("ul",[a("li",[t._v("祖先节点定义：当前节点的父节点，其父节点的父节点，只要当前节点在某一个节点的子树下，则可以称其为当前节点的祖先节点")]),t._v(" "),a("li",[t._v("公共祖先定义：p、q节点都在某一个节点的子树下或者其自身，则可以称其为 p、q 节点的公共祖先节点")]),t._v(" "),a("li",[t._v("最近公共祖先定义：从祖先节点的定义可以知道，如果 x 节点是 p、q 节点的公共祖先，那么 x 节点的祖先节点也一定是 p、q 节点的公共祖先，则距离 p、q 个节点深度最小的为最近公共祖先，"),a("strong",[t._v("通常表现为 p、q 节点不在最近公共祖先的同一个子树上")]),t._v("。")]),t._v(" "),a("li",[t._v("根据题意可知，树是二叉搜索树，所有的节点值唯一，则可以根据 p、q 节点不在最近公共祖先的同一个子树上的特征，进行循环遍历，找到结果")])])])]),t._v(" "),a("h2",{attrs:{id:"算法流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法流程"}},[t._v("#")]),t._v(" 算法流程：")]),t._v(" "),a("ul",[a("li",[t._v("1、首先在同一个二叉树上的 p、q 节点一定存在最近公共祖先，所以定义一个循环直到找到该节点为止。")]),t._v(" "),a("li",[t._v("2、如果 "),a("code",[t._v("root.val > p.val && root.val > q.val")]),t._v("，说明 p、q 节点都在 root 节点的左子树上，令 "),a("code",[t._v("root = root.left")]),t._v("，继续查询")]),t._v(" "),a("li",[t._v("3、如果 "),a("code",[t._v("root.val < p.val && root.val < q.val")]),t._v("，说明 p、q 节点都在 root 节点的右子树上，令 "),a("code",[t._v("root = root.right")]),t._v("，继续查询")]),t._v(" "),a("li",[t._v("4、如果 root.val == p.val，说明 p 节点就是最近公共祖先")]),t._v(" "),a("li",[t._v("5、如果 root.val == q.val，说明 q 节点就是最近公共祖先")]),t._v(" "),a("li",[t._v("6、如果 root.val > p.val && root.val < q.val 或者 root.val < p.val && root.val > q.val，说明 root 节点就是最近公共祖先。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lowestCommonAncestor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);