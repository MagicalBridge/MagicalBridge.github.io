(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{646:function(a,t,s){"use strict";s.r(t);var _=s(14),r=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"消息队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息队列"}},[a._v("#")]),a._v(" 消息队列")]),a._v(" "),t("h2",{attrs:{id:"_1-1-mq-的相关概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-mq-的相关概念"}},[a._v("#")]),a._v(" 1.1. MQ 的相关概念")]),a._v(" "),t("h3",{attrs:{id:"_1-1-1-什么是-mq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-什么是-mq"}},[a._v("#")]),a._v(" 1.1.1. 什么是 MQ")]),a._v(" "),t("p",[a._v("MQ(message queue)，从字面意思上看，本质是个队列，FIFO 先入先出，只不过队列中存放的内容是message 而已，还是一种跨进程的通信机制，用于上下游传递消息。在互联网架构中，MQ 是一种非常常见的上下游“逻辑解耦+物理解耦”的消息通信服务。使用了 MQ 之后，消息发送上游只需要依赖 MQ，不用依赖其他服务.")]),a._v(" "),t("h3",{attrs:{id:"_1-1-2-为什么要用-mq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-为什么要用-mq"}},[a._v("#")]),a._v(" 1.1.2. 为什么要用 MQ")]),a._v(" "),t("ul",[t("li",[a._v("1.流量消峰")])]),a._v(" "),t("p",[a._v("举个例子，如果订单系统最多能处理一万次订单，这个处理能力应付正常时段的下单时绰绰有余，正常时段我们下单一秒后就能返回结果。但是在高峰期，如果有两万次下单操作系统是处理不了的，只能限制订单超过一万后不允许用户下单。使用消息队列做缓冲，我们可以取消这个限制，把一秒内下的订单分散成一段时间来处理，这时有些用户可能在下单十几秒后才能收到下单成功的操作，但是比不能下单的体\n验要好。")]),a._v(" "),t("ul",[t("li",[a._v("2.应用解耦")])]),a._v(" "),t("p",[a._v("以电商应用为例，应用中有订单系统、库存系统、物流系统、支付系统。用户创建订单后，如果耦合调用库存系统、物流系统、支付系统，任何一个子系统出了故障，都会造成下单操作异常。当转变成基于消息队列的方式后，系统间调用的问题会减少很多，比如物流系统因为发生故障，需要几分钟来修复。在这几分钟的时间里，物流系统要处理的内存被缓存在消息队列中，用户的下单操作可以正常完成。当物流系统恢复后，继续处理订单信息即可，中单用户感受不到物流系统的故障，提升系统的可用性。")]),a._v(" "),t("ul",[t("li",[a._v("3.异步处理")])]),a._v(" "),t("p",[a._v("有些服务间调用是异步的，例如 A 调用 B，B 需要花费很长时间执行，但是 A 需要知道 B 什么时候可以执行完，以前一般有两种方式，A 过一段时间去调用 B 的查询 api 查询。或者 A 提供一个 callback api， B 执行完之后调用 api 通知 A 服务。这两种方式都不是很优雅，使用消息总线，可以很方便解决这个问题，A 调用 B 服务后，只需要监听 B 处理完成的消息，当 B 处理完成后，会发送一条消息给 MQ，MQ 会将此消息转发给 A 服务。这样 A 服务既不用循环调用 B 的查询 api，也不用提供 callback api。同样 B 服务也不用做这些操作。A 服务还能及时的得到异步处理成功的消息。")])])}),[],!1,null,null,null);t.default=r.exports}}]);