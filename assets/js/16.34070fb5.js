(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{332:function(t,e,a){},394:function(t,e,a){"use strict";var s=a(332);a.n(s).a},421:function(t,e,a){"use strict";a.r(e);a(331),a(10),a(26),a(33),a(390);var s={data:function(){return{text:"",select:"",radio:"",checkbox:[],textarea:"",list:[],ruleValidate:{text:[],select:[{required:!0,message:"不能为空"}],radio:[{required:!0,message:"不能为空"}],checkbox:[{required:!0,message:"不能为空",type:"array",min:1}],textarea:[{required:!0,message:"不能为空"}]},textList:[{text:"text0",value:""}],accpetType:["jpg","png"]}},methods:{add:function(){this.textList.push({text:"text"+this.textList.length,value:""})},remove:function(){this.textList.splice(this.textList.length-1,1)},click:function(){this.$refs.formValidate.validate((function(t,e){console.log(t,e)}))},reset:function(){this.$refs.formValidate.resetFields()},click1:function(){this.$refs.formValidate1.validate((function(t,e){console.log(t,e)}))},reset1:function(){this.$refs.formValidate1.resetFields()},action:function(t,e){this.list.push(e.get("upFiles"))},getUrl:function(t){return URL.createObjectURL(t)}}},l=(a(394),a(43)),r=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"form-表单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#form-表单"}},[t._v("#")]),t._v(" Form 表单")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。")]),t._v(" "),a("h2",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("ClientOnly",[a("row",[a("cell",{staticClass:"pr-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"表单控件",template:"ui/templates/form/1.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-form",[a("Form-item",{attrs:{label:"输入框"}},[a("wb-input",{attrs:{placeholder:"请输入"}})],1),t._v(" "),a("Form-item",{attrs:{label:"密码输入框"}},[a("wb-input",{attrs:{placeholder:"请输入",type:"password"}})],1),t._v(" "),a("Form-item",{attrs:{label:"数字输入框"}},[a("wb-input",{attrs:{placeholder:"请输入",type:"number"}})],1),t._v(" "),a("Form-item",{attrs:{label:"日期选择框"}},[a("Wb-input-date-picker")],1),t._v(" "),a("Form-item",{attrs:{label:"时间选择框"}},[a("time-picker")],1),t._v(" "),a("Form-item",{attrs:{label:"下拉框"}},[a("wb-select",[a("wb-option",{attrs:{value:1}},[t._v("北京市")]),t._v(" "),a("wb-option",{attrs:{value:2}},[t._v("上海市")]),t._v(" "),a("wb-option",{attrs:{value:3}},[t._v("深圳市")]),t._v(" "),a("wb-option",{attrs:{value:4}},[t._v("杭州市")]),t._v(" "),a("wb-option",{attrs:{value:5}},[t._v("南京市")]),t._v(" "),a("wb-option",{attrs:{value:6}},[t._v("重庆市")])],1)],1),t._v(" "),a("Form-item",{attrs:{label:"单选框"}},[a("Radio-group",[a("Radio",{attrs:{value:"1"}},[t._v("\n                                男\n                            ")]),t._v(" "),a("Radio",{attrs:{value:"2"}},[t._v("\n                                女\n                            ")])],1)],1),t._v(" "),a("Form-item",{attrs:{label:"多选框"}},[a("Checkbox-group",[a("Checkbox",{attrs:{value:"1"}},[t._v("\n                                吃饭\n                            ")]),t._v(" "),a("Checkbox",{attrs:{value:"2"}},[t._v("\n                                睡觉\n                            ")]),t._v(" "),a("Checkbox",{attrs:{value:"3"}},[t._v("\n                                跑步\n                            ")])],1)],1),t._v(" "),a("Form-item",{attrs:{label:"开关"}},[a("Wb-switch",[a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")]),t._v(" "),a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")])])],1),t._v(" "),a("Form-item",{attrs:{label:"文本域"}},[a("wb-input",{attrs:{type:"textarea",placeholder:"请输入"}})],1),t._v(" "),a("Form-item",[a("Wb-button",{attrs:{type:"primary"}},[t._v("提交")]),t._v(" "),a("Wb-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"}},[t._v("取消")])],1)],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("在 Wb-form 内，每个表单域由 Form-item 组成，可包含的控件有：Input、Radio、Checkbox、Switch、Select、InputDatePicker、TimePicker。")]),t._v(" "),a("p",[t._v("给 Form-item 设置属性 label 可以显示表单域的标签")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"查询表单",template:"ui/templates/form/2.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-form",{attrs:{type:"query"}},[a("Row",[a("Cell",{attrs:{span:"12"}},[a("Form-item",{attrs:{label:"姓名"}},[a("wb-input",{attrs:{placeholder:"请输入"}})],1)],1),t._v(" "),a("Cell",{attrs:{span:"12"}},[a("Form-item",{attrs:{label:"身份证"}},[a("wb-input",{attrs:{placeholder:"请输入"}})],1)],1)],1),t._v(" "),a("Row",[a("Cell",{attrs:{span:"12"}},[a("Form-item",{attrs:{label:"下拉框"}},[a("wb-select",[a("wb-option",{attrs:{value:1}},[t._v("北京市")]),t._v(" "),a("wb-option",{attrs:{value:2}},[t._v("上海市")]),t._v(" "),a("wb-option",{attrs:{value:3}},[t._v("深圳市")]),t._v(" "),a("wb-option",{attrs:{value:4}},[t._v("杭州市")]),t._v(" "),a("wb-option",{attrs:{value:5}},[t._v("南京市")]),t._v(" "),a("wb-option",{attrs:{value:6}},[t._v("重庆市")])],1)],1)],1),t._v(" "),a("Cell",{attrs:{span:"12"}},[a("Form-item",{attrs:{label:"下拉框"}},[a("wb-select",[a("wb-option",{attrs:{value:1}},[t._v("北京市")]),t._v(" "),a("wb-option",{attrs:{value:2}},[t._v("上海市")]),t._v(" "),a("wb-option",{attrs:{value:3}},[t._v("深圳市")]),t._v(" "),a("wb-option",{attrs:{value:4}},[t._v("杭州市")]),t._v(" "),a("wb-option",{attrs:{value:5}},[t._v("南京市")]),t._v(" "),a("wb-option",{attrs:{value:6}},[t._v("重庆市")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("query模式下FromItem上下间隔会缩小，执行校验但是不提示校验错误信息。")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"动态增减表单项",template:"ui/templates/form/3.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-form",{ref:"formValidate1",attrs:{"label-width":100}},[t._l(t.textList,(function(e,s){return a("Form-item",{key:s,attrs:{label:"输入框",prop:e.text,rule:[{required:!0,message:"项目"+e.text+"不能为空"}]}},[a("wb-input",{attrs:{placeholder:"请输入"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}})],1)})),t._v(" "),a("Form-item",[a("Wb-button",{attrs:{type:"primary"},on:{click:t.click1}},[t._v("提交")]),t._v(" "),a("Wb-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},on:{click:t.reset1}},[t._v("重置")]),t._v(" "),a("Wb-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:t.add}},[t._v("增加")]),t._v(" "),a("Wb-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:t.remove}},[t._v("减少")])],1)],2)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("当需要动态维护 Form-item 时，可以给 Form-item 设置属性 rule 来单独为该域做验证。")])]},proxy:!0}])})],1),t._v(" "),a("cell",{staticClass:"pl-20",attrs:{span:"12"}},[a("componetTemplate",{attrs:{title:"对齐方式",template:"ui/templates/form/4.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-form",{attrs:{"label-position":"left"}},[a("Form-item",{attrs:{label:"输入框","label-width":180}},[a("wb-input",{attrs:{placeholder:"请输入"}})],1),t._v(" "),a("Form-item",{attrs:{label:"输入框","label-width":150}},[a("wb-input",{attrs:{placeholder:"请输入"}})],1)],1),t._v(" "),a("Wb-form",{attrs:{"label-position":"right","label-width":100}},[a("Form-item",{attrs:{label:"输入框"}},[a("wb-input",{attrs:{placeholder:"请输入"}})],1),t._v(" "),a("Form-item",{attrs:{label:"输入框"}},[a("wb-input",{attrs:{placeholder:"请输入"}})],1)],1),t._v(" "),a("Wb-form",{attrs:{"label-position":"top"}},[a("Form-item",{attrs:{label:"输入框"}},[a("wb-input",{attrs:{placeholder:"请输入"}})],1),t._v(" "),a("Form-item",{attrs:{label:"输入框"}},[a("wb-input",{attrs:{placeholder:"请输入"}})],1)],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("设置属性 label-position，控制表单项描述的位置，left 为左对齐，right 为右对齐，top 置于表单组件头部。")]),t._v(" "),a("p",[t._v("设置属性 label-width，控制表单项描述的宽度，默认80。")]),t._v(" "),a("p",[t._v("Wb-form 和 Form-item 都可以设置 label-position 和 label-width ，Form-item的优先级高于Wb-form。")])]},proxy:!0}])}),t._v(" "),a("componetTemplate",{attrs:{title:"表单校验",template:"ui/templates/form/5.html"},scopedSlots:t._u([{key:"demo",fn:function(){return[a("Wb-form",{ref:"formValidate",attrs:{rule:t.ruleValidate,"label-width":100}},[a("Form-item",{attrs:{label:"输入框必填",prop:"radio"}},[a("Radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("Radio",{attrs:{value:"1"}},[t._v("\n                                是\n                            ")]),t._v(" "),a("Radio",{attrs:{value:"2"}},[t._v("\n                                否\n                            ")])],1)],1),t._v(" "),a("Form-item",{attrs:{label:"输入框",prop:"text",rule:[{required:"1"==t.radio,message:"不能为空"}]}},[a("wb-input",{attrs:{placeholder:"请输入"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),a("Form-item",{attrs:{label:"下拉框",prop:"select"}},[a("wb-select",{model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[a("wb-option",{attrs:{value:1}},[t._v("北京市")]),t._v(" "),a("wb-option",{attrs:{value:2}},[t._v("上海市")]),t._v(" "),a("wb-option",{attrs:{value:3}},[t._v("深圳市")]),t._v(" "),a("wb-option",{attrs:{value:4}},[t._v("杭州市")]),t._v(" "),a("wb-option",{attrs:{value:5}},[t._v("南京市")]),t._v(" "),a("wb-option",{attrs:{value:6}},[t._v("重庆市")])],1)],1),t._v(" "),a("Form-item",{attrs:{label:"多选框",prop:"checkbox"}},[a("Checkbox-group",{model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}},[a("Checkbox",{attrs:{value:"1"}},[t._v("\n                                吃饭\n                            ")]),t._v(" "),a("Checkbox",{attrs:{value:"2"}},[t._v("\n                                睡觉\n                            ")]),t._v(" "),a("Checkbox",{attrs:{value:"3"}},[t._v("\n                                跑步\n                            ")])],1)],1),t._v(" "),a("Form-item",{attrs:{label:"文本域",prop:"textarea"}},[a("wb-input",{attrs:{type:"textarea",autosize:!0,placeholder:"请输入"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1),t._v(" "),a("Form-item",{attrs:{label:"图片上传",prop:"list",value:t.list,rule:[{required:!0,message:"不能为空",type:"array",min:1}]}},[a("Upload",{attrs:{accept:t.accpetType,action:t.action}}),t._v(" "),a("div",{staticClass:"img-list"},t._l(t.list,(function(e,s){return a("img",{key:s,attrs:{src:t.getUrl(e)}})})),0)],1),t._v(" "),a("Form-item",[a("Wb-button",{attrs:{type:"primary"},on:{click:t.click}},[t._v("提交")]),t._v(" "),a("Wb-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"},on:{click:t.reset}},[t._v("重置")])],1)],1)]},proxy:!0},{key:"description",fn:function(){return[a("p",[t._v("Form 组件基于  async-validator 实现的数据验证，给 Form 设置属性 rule，同时给需要验证的 Form-item 设置属性 prop 指向对于字段即可。")]),t._v(" "),a("p",[t._v("FormItem 也可以设置校验的rule。如果From的rule中也配置了rule，则会跟Form设置的rule合并。")]),t._v(" "),a("p",[t._v("校验规则可以是响应式的对象。")]),t._v(" "),a("p",[t._v("如果FormItem里面不包含表单组件，则可以通过设置value来实现校验。")]),t._v(" "),a("p",[t._v("除了async-validator中定义的type之外，我们还定义了：")]),t._v(" "),a("ul",[a("li",[t._v("mobile: 手机号")]),t._v(" "),a("li",[t._v("cname: 中文名")]),t._v(" "),a("li",[t._v("password: 密码，必须包含大写、小写字符和数字，8-16位")]),t._v(" "),a("li",[t._v("money: 金额，可以配置小数点后的位数（afterPoint）")]),t._v(" "),a("li",[t._v("equal: 与什么（enqualTo）相等")]),t._v(" "),a("li",[t._v("min: 不小于（minTo）")]),t._v(" "),a("li",[t._v("max: 不大于（maxTo）")])])]},proxy:!0}])})],1)],1)],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"form-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#form-methods"}},[t._v("#")]),t._v(" Form Methods")]),t._v(" "),a("h4",{attrs:{id:"校验整个表单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校验整个表单"}},[t._v("#")]),t._v(" 校验整个表单")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("formValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"校验表单项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校验表单项"}},[t._v("#")]),t._v(" 校验表单项")]),t._v(" "),a("p",[t._v("对部分表单字段进行校验的方法，field为需校验的 prop")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("formValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("validateField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"重置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重置"}},[t._v("#")]),t._v(" 重置")]),t._v(" "),a("p",[t._v("重置校验结果, 如果传了filed则只重置这个，如果没有则重置所有")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("formValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resetFields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("formValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resetFields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"form-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#form-props"}},[t._v("#")]),t._v(" Form Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表单类型，可选值有"),a("code",[t._v("normal")]),t._v("和"),a("code",[t._v("query")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("normal")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rule")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表单验证规则，具体配置查看"),a("a",{attrs:{href:"https://github.com/yiminghe/async-validator",target:"_blank",rel:"noopener noreferrer"}},[t._v("async-validator"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("labelPosition")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表单域标签的位置，可选值为"),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("right")]),t._v("、"),a("code",[t._v("top")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("right")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("labelWidth")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表单域标签的宽度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("80")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("showMessage")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示校验信息")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("autocomplete")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否配置为自动完成功能，可选有"),a("code",[t._v("on")]),t._v("、"),a("code",[t._v("off")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("off")])])])])]),t._v(" "),a("h3",{attrs:{id:"form-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#form-events"}},[t._v("#")]),t._v(" Form Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("on-validate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("对表单项进行校验后触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(errors) => void")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("submit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("提交时触发")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("(valid, errors) => void")])])])]),t._v(" "),a("h3",{attrs:{id:"formitem-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formitem-props"}},[t._v("#")]),t._v(" FormItem Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prop")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("定义了prop才会被校验")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("label")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("FormItem项标签名称")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rule")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表单验证规则，具体配置查看"),a("a",{attrs:{href:"https://github.com/yiminghe/async-validator",target:"_blank",rel:"noopener noreferrer"}},[t._v("async-validator"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("labelPosition")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表单域标签的位置，可选值为"),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("right")]),t._v("、"),a("code",[t._v("top")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("right")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("labelWidth")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表单域标签的宽度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("80")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("showMessage")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示校验信息")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("配置后，则根据此值进行校验")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String, Number, Array, Boolean, Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("null")])])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);