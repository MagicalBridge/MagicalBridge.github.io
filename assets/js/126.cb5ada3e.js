(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{501:function(v,_,n){"use strict";n.r(_);var t=n(14),l=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。")]),v._v(" "),_("p",[v._v("题解：\n前序遍历和中序遍历，就是对二叉树做一次深度优先搜索，只是在不同的位置打印输出而已。")]),v._v(" "),_("p",[v._v("这道题目应该紧紧抓住前序遍历序列和中序遍历序列的定义:")]),v._v(" "),_("p",[v._v("前序遍历序列:  3  9  20  15  7\n中序遍历序列:  9  3  15  20  7")]),v._v(" "),_("p",[v._v("其中的规律是：")]),v._v(" "),_("ul",[_("li",[v._v("1 前序遍历的第一个元素3，一定是二叉树的根节点")]),v._v(" "),_("li",[v._v("2 在中序遍历中，根节会把中序遍历序列分为两个部分，左边部分构成了二叉树的根节点的左子树，右边部分构成了二叉树的根节点的右子树。")]),v._v(" "),_("li",[v._v("3 在中序遍历遍历序列中 9 位于 3 的左边，就是左子树的根节点。")]),v._v(" "),_("li",[v._v("4 20  15  7 和 15  20  7 这三个数 只是排列不不同 都是 二叉树的右子树的节点。")]),v._v(" "),_("li",[v._v("5 20  15  7 右子树的前序遍历，20 就是右子树的根节点  然后从中序遍历中找到 20 的左子树和右子树。")])]),v._v(" "),_("p",[v._v("根据上述的思路：我们可以知道对于任意一颗树而言，前序遍历的形式总是\n[ 根节点, [左子树的前序遍历结果], [右子树的前序遍历结果] ]")]),v._v(" "),_("p",[v._v("即根节点总是前序遍历中的第一个节点，而中序遍历的形式总是:\n[ [左子树的中序遍历结果], 根节点, [右子树的中序遍历结果] ]")])])}),[],!1,null,null,null);_.default=l.exports}}]);