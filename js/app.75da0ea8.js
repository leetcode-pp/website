(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},i={app:0},r=[];function s(e){return l.p+"js/"+({BasicList:"BasicList",Clock:"Clock","ClockDetail~SolutionDetails":"ClockDetail~SolutionDetails",ClockDetail:"ClockDetail",SolutionDetails:"SolutionDetails",Rankings:"Rankings",about:"about"}[e]||e)+"."+{BasicList:"e777ed74",Clock:"4e237dd8","ClockDetail~SolutionDetails":"eabd966f",ClockDetail:"f9626bb3",SolutionDetails:"6399e258",Rankings:"d0ca6611",about:"95860c4c"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={BasicList:1,Clock:1,"ClockDetail~SolutionDetails":1,ClockDetail:1,SolutionDetails:1,Rankings:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({BasicList:"BasicList",Clock:"Clock","ClockDetail~SolutionDetails":"ClockDetail~SolutionDetails",ClockDetail:"ClockDetail",SolutionDetails:"SolutionDetails",Rankings:"Rankings",about:"about"}[e]||e)+"."+{BasicList:"f98e019d",Clock:"db1fc09a","ClockDetail~SolutionDetails":"75d456e0",ClockDetail:"0eb661f6",SolutionDetails:"172fe03c",Rankings:"6d80287e",about:"31d6cfe0"}[e]+".css",i=l.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],u=c.getAttribute("data-href");if(u===a||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],d.parentNode.removeChild(d),n(r)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var f=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}i[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"11eb":function(e,t,n){"use strict";var a=n("49b3"),o=n.n(a);o.a},"1e44":function(e,t,n){},4360:function(e,t,n){"use strict";var a=n("2b0e"),o=n("2f62");a["default"].use(o["a"]),t["a"]=new o["a"].Store({state:{},mutations:{},actions:{},modules:{}})},"49b3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("0fae");var a=n("9e2f"),o=n.n(a),i=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],l={name:"app"},c=l,u=(n("034f"),n("2877")),f=Object(u["a"])(c,r,s,!1,null,null,null),d=f.exports,p=(n("d3b7"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("login-panel",{directives:[{name:"show",rawName:"v-show",value:e.loginPanelShow,expression:"loginPanelShow"}],attrs:{loginPanelShow:e.loginPanelShow},on:{"update:loginPanelShow":function(t){e.loginPanelShow=t},"update:login-panel-show":function(t){e.loginPanelShow=t}}}),n("el-container",[n("el-header",[n("Nav"),n("div",{staticClass:"login_btn"},[n("el-button",{attrs:{type:"text"},on:{click:function(t){e.loginPanelShow=!0}}},[e._v("登录")])],1)],1),n("el-main",{staticClass:"content"},[n("router-view")],1),n("el-footer",[e._v("一个努力做西湖区最好的算法题解的团队")])],1)],1)},g=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-nav"},[e._m(0),n("div",{staticStyle:{width:"100%"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":this.$route.path,router:"",mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},e._l(e.navList,(function(t,a){return n("el-menu-item",{key:a,attrs:{index:t.name}},[n("template",{slot:"title"},[n("span",[e._v(" "+e._s(t.navItem))])])],2)})),1)],1)])])},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("5fbe"),alt:""}})])}],b={name:"nav",data:function(){return{navList:[{name:"/basic",navItem:"基础篇"},{name:"/about",navItem:"进阶篇"},{name:"/topic",navItem:"专题篇"},{name:"/clock",navItem:"打卡"},{name:"/rankings",navItem:"排行榜"}]}},methods:{}},k=b,w=(n("ef0c"),Object(u["a"])(k,h,v,!1,null,"6fd44686",null)),C=w.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login_panel",attrs:{id:"login_container"}},[n("el-card",{staticClass:"login_card"},[n("i",{staticClass:"close el-icon-close",on:{click:function(t){return e.close()}}}),n("h4",{staticClass:"title"},[n("a",{class:{active:"login"==e.active},on:{click:function(t){e.active="login"}}},[e._v("登录")]),n("b",[e._v("·")]),n("a",{class:{active:"signUp"==e.active},on:{click:function(t){e.active="signUp"}}},[e._v("注册")])]),n("el-form",{ref:"ruleForm",staticClass:"login_form",attrs:{model:e.loginForm}},[n("el-form-item",[n("el-input",{staticClass:"user_name_input",attrs:{"prefix-icon":"el-icon-user",placeholder:"用户名"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),n("el-form-item",[n("el-input",{staticClass:"password_input",attrs:{type:"password","prefix-icon":"el-icon-lock",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),n("el-form-item",[n("button",{directives:[{name:"show",rawName:"v-show",value:"login"==e.active,expression:"active == 'login'"}],staticClass:"login_button",on:{click:function(t){return e.handleLogin()}}},[e._v(" 登录 ")]),n("button",{directives:[{name:"show",rawName:"v-show",value:"signUp"==e.active,expression:"active == 'signUp'"}],staticClass:"login_button signUp",on:{click:function(t){return e.handleSignUp()}}},[e._v(" 注册 ")])])],1)],1)],1)},y=[],_=(n("b0c0"),n("b775"));function D(e){return Object(_["a"])({url:"/api/v1/userSignin",method:"post",data:e})}function P(e){return Object(_["a"])({url:"/api/v1/signup",method:"post",data:e})}var x=n("5f87"),j={name:"login",props:{},components:{},data:function(){return{active:"login",loginForm:{userName:"",password:""},userName:"",rules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{close:function(){this.$emit("update:loginPanelShow",!1)},handleLogin:function(){var e=this;if(!this.loginForm.userName||!this.loginForm.password)return this.$message.warning("用户名或密码不能为空！");D({name:this.loginForm.userName,password:this.loginForm.password}).then((function(t){if(200==t.code)return console.log(t),e.userName=t.data.name,Object(x["b"])(t.token),e.close(),e.$message.success("登录成功！")}))},handleSignUp:function(){var e=this;if(!this.loginForm.userName||!this.loginForm.password)return this.$message.warning("用户名或密码不能为空！");P({name:this.loginForm.userName,password:this.loginForm.password}).then((function(t){if(200==t.code)return e.close(),e.$message.success("注册成功！")}))}}},N=j,O=(n("a6e8"),Object(u["a"])(N,S,y,!1,null,"31a10ea2",null)),L=O.exports,$={name:"Home",components:{Nav:C,loginPanel:L},data:function(){return{loginPanelShow:!1}}},B=$,F=(n("11eb"),Object(u["a"])(B,m,g,!1,null,"4b1b4c89",null)),z=F.exports;i["default"].use(p["a"]);var E=[{path:"/",name:"Home",component:z,children:[{path:"/",redirect:{name:"Basic"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/basic",name:"Basic",component:function(){return n.e("BasicList").then(n.bind(null,"ec82"))}},{path:"/clock",name:"Clock",meta:{title:"91官网 - 打卡"},component:function(){return n.e("Clock").then(n.bind(null,"79b0"))}},{path:"/clock/detail/:id",name:"ClockDetail",meta:{title:"91官网 - 打卡详情页面"},component:function(){return Promise.all([n.e("ClockDetail~SolutionDetails"),n.e("ClockDetail")]).then(n.bind(null,"48ba"))}},{path:"/Rankings",name:"Rankings",component:function(){return n.e("Rankings").then(n.bind(null,"4292"))}},{path:"/answerList",name:"answerList",component:function(){return n.e("Rankings").then(n.bind(null,"b81c"))}},{path:"/solutionDetails",name:"SolutionDetails",component:function(){return Promise.all([n.e("ClockDetail~SolutionDetails"),n.e("SolutionDetails")]).then(n.bind(null,"89b5"))}}]}],T=new p["a"]({routes:E});T.afterEach((function(e,t){document.title=e.meta.title||"91算法"}));var R=T,A=n("4360"),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},I=[],q=(n("a9e3"),{name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize})}}}),M=q,H=(n("9a37"),Object(u["a"])(M,U,I,!1,null,"af5312de",null)),J=H.exports;i["default"].component("Pagination",J),i["default"].use(o.a),i["default"].config.productionTip=!1,new i["default"]({router:R,store:A["a"],render:function(e){return e(d)}}).$mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a="Admin-Token";function o(){return"token-mock"}function i(e){return sessionStorage.setItem(a,e)}},"5fbe":function(e,t,n){e.exports=n.p+"img/logo2.d25a389c.png"},"85ec":function(e,t,n){},"9a37":function(e,t,n){"use strict";var a=n("1e44"),o=n.n(a);o.a},a6e8:function(e,t,n){"use strict";var a=n("ad1c"),o=n.n(a);o.a},ad1c:function(e,t,n){},b775:function(e,t,n){"use strict";n("d3b7"),n("0fb7"),n("450d");var a=n("f529"),o=n.n(a),i=(n("9e1f"),n("6ed5")),r=n.n(i),s=n("bc3a"),l=n.n(s),c=n("4360"),u=n("5f87"),f={401:"认证失败，无法访问系统资源",403:"当前操作没有权限",404:"访问资源不存在",default:"系统未知错误，请反馈给管理员"};l.a.defaults.headers["Content-Type"]="application/json;charset=utf-8";var d=l.a.create({baseURL:"/prod-api",timeout:1e4});d.interceptors.request.use((function(e){var t=!1===(e.headers||{}).isToken;return Object(u["a"])()&&!t&&(e.headers["Authorization"]="Bearer "+Object(u["a"])()),"get"===e.method&&e.data&&(e.params=e.data),e}),(function(e){Promise.reject(e)})),d.interceptors.response.use((function(e){var t=e.data.code||200,n=f[t]||e.data.msg||f["default"];if(401!==t)return 500===t?(o()({message:n,type:"error"}),Promise.reject(new Error(n))):e.data;r.a.confirm("登录状态已过期，您可以继续留在该页面，或者重新登录","系统提示",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){c["a"].dispatch("LogOut").then((function(){location.reload()}))}))}),(function(e){return console.log("err"+e),o()({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));t["a"]=d},ef0c:function(e,t,n){"use strict";var a=n("f040"),o=n.n(a);o.a},f040:function(e,t,n){}});
//# sourceMappingURL=app.75da0ea8.js.map