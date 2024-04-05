(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{454:function(e,t,s){"use strict";s.r(t);var a=s(14),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"kubernetes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[e._v("#")]),e._v(" Kubernetes")]),e._v(" "),t("h2",{attrs:{id:"什么是-kubernetes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-kubernetes"}},[e._v("#")]),e._v(" 什么是 Kubernetes")]),e._v(" "),t("p",[e._v("Kubernetes 是 Google 开源的一个容器编排引擎，它支持自动化部署、大规模可伸缩、 应用容器化管理。在生产环境中部署一个应用程序时，通常要部署该应用的多个实例以便 对应用请求进行负载均衡。")]),e._v(" "),t("p",[e._v("在 Kubernetes 中，我们可以创建多个容器，每个容器里面运行一个应用实例，然后通 过内置的负载均衡策略，实现对这一组应用实例的管理、发现、访问，而这些细节都不需 要运维人员去进行复杂的手工配置和处理。")]),e._v(" "),t("p",[e._v("传统的应用部署方式是通过插件或脚本来安装应用。这样做的缺点是应用的运行、配置、管理、所有生存周期将与当前操作系统绑定，这样做并不利于应用的升级更新/回滚等 操作，当然也可以通过创建虚拟机的方式来实现某些功能，但是虚拟机非常重，并不利于可移植性。")]),e._v(" "),t("p",[e._v("新的方式是通过部署容器方式实现，每个容器之间互相隔离，每个容器有自己的文件系统 ，容器之间进程不会相互影响，能区分计算资源。相对于虚拟机，容器能快速部署，由于容器与底层设施、机器文件系统解耦的，所以它能在不同云、不同版本操作系统间进行迁移。")]),e._v(" "),t("p",[e._v("容器占用资源少、部署快，每个应用可以被打包成一个容器镜像，每个应用与容器间 成一对一关系也使容器有更大优势，使用容器可以在 build 或 release 的阶段，为应用创 建容器镜像，因为每个应用不需要与其余的应用堆栈组合，也不依赖于生产环境基础结构， 这使得从研发到测试、生产能提供一致环境。类似地，容器比虚拟机轻量、更“透明”， 这更便于监控和管理。")]),e._v(" "),t("h2",{attrs:{id:"kubernetes的优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes的优势"}},[e._v("#")]),e._v(" Kubernetes的优势")]),e._v(" "),t("h2",{attrs:{id:"基础安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础安装"}},[e._v("#")]),e._v(" 基础安装")]),e._v(" "),t("ul",[t("li",[e._v("master & node节点都需要安装")])]),e._v(" "),t("h3",{attrs:{id:"安装必备组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装必备组件"}},[e._v("#")]),e._v(" 安装必备组件")]),e._v(" "),t("ul",[t("li",[e._v("vim 是 Linux 下的一个文件编辑器")]),e._v(" "),t("li",[e._v("wget 可以用作文件下载使用")]),e._v(" "),t("li",[e._v("ntpdate 则是可以用来同步时区")])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" ntpdate "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-y")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);