(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{441:function(t,s,a){"use strict";a.r(s);var n={data:function(){return{}},methods:{click1:function(){this.$Toast("我是一条提示消息")},click2:function(){this.$Toast.error("用户名或者密码不正确")},click3:function(){this.$Toast.success("创建订单成功")},click4:function(){this.$Toast.warn("请输入正确的用户名")},click5:function(){this.$Toast("10s后才关闭",{duration:1e4})},click6:function(){this.$Toast("提示在头部",{align:"top"})},click7:function(){var t=this;this.$Toast("正在加载中",{onClose:function(){t.$Toast("我关闭了！")}})}}},e=a(43),o=Object(e.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"toast-全局提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toast-全局提示"}},[t._v("#")]),t._v(" Toast 全局提示")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("轻量级的信息反馈组件，在屏幕中间显示，并自动消失。")]),t._v(" "),a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("ClientOnly",[a("row",[a("cell",{staticClass:"pr-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"基础用法",template:"ui/templates/toast/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-button",{on:{click:t.click1}},[t._v("显示普通的提示")])]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("最基本的提示，默认在3秒后消失。")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"提示类型",template:"ui/templates/toast/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-button",{attrs:{type:"error"},on:{click:t.click2}},[t._v("显示错误的提示")]),t._v(" "),a("Wb-button",{attrs:{type:"warn"},on:{click:t.click4}},[t._v("显示警告的提示")]),t._v(" "),a("Wb-button",{attrs:{type:"success"},on:{click:t.click3}},[t._v("显示成功的提示")])]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("不同的提示状态：成功、警告、错误。")])]},proxy:!0}])})],1),t._v(" "),a("cell",{staticClass:"pl-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"显示时间",template:"ui/templates/toast/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-button",{on:{click:t.click5}},[t._v("10s显示")])]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置配置对象中的duration，可以修改显示时间")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"在头部提示",template:"ui/templates/toast/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-button",{on:{click:t.click6}},[t._v("在头部提示")])]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置配置对象中的align为top，默认是center")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"提示关闭回调",template:"ui/templates/toast/5.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-button",{on:{click:t.click7}},[t._v("提示关闭回调")])]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置配置对象中的onClose，当toast关闭时执行onClose")])]},proxy:!0}])})],1)],1)],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("提供了静态方法，在Vue实例里面调用以下方法来使用组件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$Toast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$Toast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$Toast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$Toast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("立即销毁提示：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" destroy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$Toast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("message")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("提示内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("option.duration")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("提示显示时间")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3000")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("option.align")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("提示的区域，可选值有"),a("code",[t._v("top")]),t._v(","),a("code",[t._v("center")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("center")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("option.onClose")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当提示消失时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])])])])],1)}),[],!1,null,null,null);s.default=o.exports}}]);