(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},o={app:0},r=[];function s(e){return c.p+"js/"+({BasicList:"BasicList",Clock:"Clock","ClockDetail~TeachingDetails":"ClockDetail~TeachingDetails",ClockDetail:"ClockDetail",TeachingDetails:"TeachingDetails",Rankings:"Rankings",about:"about"}[e]||e)+"."+{BasicList:"d9b902d3",Clock:"7fb1b295","ClockDetail~TeachingDetails":"857a9587",ClockDetail:"783b4618",TeachingDetails:"43f4e3b2",Rankings:"4f07091d",about:"95860c4c"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={BasicList:1,Clock:1,"ClockDetail~TeachingDetails":1,ClockDetail:1,TeachingDetails:1,Rankings:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({BasicList:"BasicList",Clock:"Clock","ClockDetail~TeachingDetails":"ClockDetail~TeachingDetails",ClockDetail:"ClockDetail",TeachingDetails:"TeachingDetails",Rankings:"Rankings",about:"about"}[e]||e)+"."+{BasicList:"6aa2fee1",Clock:"34c4c8d9","ClockDetail~TeachingDetails":"75d456e0",ClockDetail:"891c5559",TeachingDetails:"006c3da0",Rankings:"6d80287e",about:"31d6cfe0"}[e]+".css",o=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[e],p.parentNode.removeChild(p),n(r)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){i[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"0c6d":function(e,t,n){"use strict";n("d3b7"),n("0fb7"),n("450d");var a=n("f529"),i=n.n(a),o=(n("9e1f"),n("6ed5")),r=n.n(o),s=n("bc3a"),c=n.n(s),l=n("4360"),u=n("5f87"),d={401:"认证失败，无法访问系统资源",403:"当前操作没有权限",404:"访问资源不存在",default:"系统未知错误，请反馈给管理员"};c.a.defaults.headers["Content-Type"]="application/json;charset=utf-8";var p=c.a.create({baseURL:"/prod-api",timeout:1e4});p.interceptors.request.use((function(e){var t=!1===(e.headers||{}).isToken;return Object(u["a"])()&&!t&&(e.headers["Authorization"]="Bearer "+Object(u["a"])()),"get"===e.method&&e.data&&(e.params=e.data),e}),(function(e){Promise.reject(e)})),p.interceptors.response.use((function(e){var t=e.data.code||200,n=d[t]||e.data.msg||d["default"];if(401!==t)return 500===t?(i()({message:n,type:"error"}),Promise.reject(new Error(n))):e.data;r.a.confirm("登录状态已过期，您可以继续留在该页面，或者重新登录","系统提示",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){l["a"].dispatch("LogOut").then((function(){location.reload()}))}))}),(function(e){return console.log("err"+e),i()({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));t["a"]=p},"1e44":function(e,t,n){},2762:function(e,t,n){},"39bc":function(e,t,n){},4360:function(e,t,n){"use strict";var a=n("2b0e"),i=n("2f62");a["default"].use(i["a"]),t["a"]=new i["a"].Store({state:{},mutations:{},actions:{},modules:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("0fae");var a=n("9e2f"),i=n.n(a),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{key:e.$route.path})],1)},s=[],c={name:"app"},l=c,u=(n("034f"),n("2877")),d=Object(u["a"])(l,r,s,!1,null,null,null),p=d.exports,f=(n("d3b7"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("login-panel",{directives:[{name:"show",rawName:"v-show",value:e.loginPanelShow,expression:"loginPanelShow"}],attrs:{loginPanelShow:e.loginPanelShow},on:{"update:loginPanelShow":function(t){e.loginPanelShow=t},"update:login-panel-show":function(t){e.loginPanelShow=t}}}),n("el-container",[n("el-header",[n("Nav"),n("div",{staticClass:"login_btn"},[n("el-button",{attrs:{type:"text"},on:{click:function(t){e.loginPanelShow=!0}}},[e._v("登录")])],1)],1),n("el-main",{staticClass:"content"},[n("router-view")],1),n("el-footer",[e._v("一个努力做西湖区最好的算法题解的团队")])],1)],1)},m=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-nav"},[n("a",{staticClass:"logo",on:{click:function(t){return e.$router.push("/basic")}}},[n("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1gi9038a4xpj30u009zab5.jpg",alt:"leetcode-pp-91"}})]),n("div",{staticStyle:{width:"100%"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":this.$route.path,router:"",mode:"horizontal","background-color":"#fff","text-color":"#545c64","active-text-color":"#ffd04b"}},e._l(e.navList,(function(t,a){return n("el-menu-item",{key:a,attrs:{index:t.name}},[n("template",{slot:"title"},[n("span",[e._v(" "+e._s(t.navItem))])])],2)})),1)],1)])])},v=[],b={name:"header-nav",data:function(){return{navList:[{name:"/basic",navItem:"基础篇"},{name:"/advance",navItem:"进阶篇"},{name:"/topic",navItem:"专题篇"},{name:"/clock",navItem:"打卡"},{name:"/rankings",navItem:"排行榜"}]}},methods:{}},k=b,w=(n("b6b9"),Object(u["a"])(k,h,v,!1,null,"f9404dc4",null)),C=w.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login_panel",attrs:{id:"login_container"}},[n("el-card",{staticClass:"login_card"},[n("i",{staticClass:"close el-icon-close",on:{click:function(t){return e.close()}}}),n("h4",{staticClass:"title"},[n("a",{class:{active:"login"==e.active},on:{click:function(t){e.active="login"}}},[e._v("登录")]),n("b",[e._v("·")]),n("a",{class:{active:"signUp"==e.active},on:{click:function(t){e.active="signUp"}}},[e._v("注册")])]),n("el-form",{ref:"ruleForm",staticClass:"login_form",attrs:{model:e.loginForm}},[n("el-form-item",[n("el-input",{staticClass:"user_name_input",attrs:{"prefix-icon":"el-icon-user",placeholder:"用户名"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),n("el-form-item",[n("el-input",{staticClass:"password_input",attrs:{type:"password","prefix-icon":"el-icon-lock",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),n("el-form-item",[n("button",{directives:[{name:"show",rawName:"v-show",value:"login"==e.active,expression:"active == 'login'"}],staticClass:"login_button",on:{click:function(t){return e.handleLogin()}}},[e._v(" 登录 ")]),n("button",{directives:[{name:"show",rawName:"v-show",value:"signUp"==e.active,expression:"active == 'signUp'"}],staticClass:"login_button signUp",on:{click:function(t){return e.handleSignUp()}}},[e._v(" 注册 ")])])],1)],1)],1)},_=[],D=(n("b0c0"),n("0c6d"));function S(e){return Object(D["a"])({url:"/api/v1/userSignin",method:"post",data:e})}function P(e){return Object(D["a"])({url:"/api/v1/signup",method:"post",data:e})}var T=n("5f87"),j={name:"login",props:{},components:{},data:function(){return{active:"login",loginForm:{userName:"",password:""},userName:"",rules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{close:function(){this.$emit("update:loginPanelShow",!1)},handleLogin:function(){var e=this;if(!this.loginForm.userName||!this.loginForm.password)return this.$message.warning("用户名或密码不能为空！");S({name:this.loginForm.userName,password:this.loginForm.password}).then((function(t){if(200==t.code)return console.log(t),e.userName=t.data.name,Object(T["b"])(t.token),e.close(),e.$message.success("登录成功！")}))},handleSignUp:function(){var e=this;if(!this.loginForm.userName||!this.loginForm.password)return this.$message.warning("用户名或密码不能为空！");P({name:this.loginForm.userName,password:this.loginForm.password}).then((function(t){if(200==t.code)return e.close(),e.$message.success("注册成功！")}))}}},x=j,N=(n("a6e8"),Object(u["a"])(x,y,_,!1,null,"31a10ea2",null)),L=N.exports,O={name:"Home",components:{Nav:C,loginPanel:L},data:function(){return{loginPanelShow:!1}}},$=O,B=(n("a059"),Object(u["a"])($,g,m,!1,null,"482c78e2",null)),z=B.exports;o["default"].use(f["a"]);var F=[{path:"/",name:"Home",component:z,children:[{path:"/",redirect:{name:"Basic"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/basic",name:"Teaching",component:function(){return n.e("BasicList").then(n.bind(null,"a046"))}},{path:"/advance",name:"Teaching",component:function(){return n.e("BasicList").then(n.bind(null,"a046"))}},{path:"/topic",name:"Teaching",component:function(){return n.e("BasicList").then(n.bind(null,"a046"))}},{path:"/teachingDetails",name:"TeachingDetails",component:function(){return Promise.all([n.e("ClockDetail~TeachingDetails"),n.e("TeachingDetails")]).then(n.bind(null,"20f0"))}},{path:"/clock",name:"Clock",meta:{title:"91官网 - 打卡"},component:function(){return n.e("Clock").then(n.bind(null,"79b0"))}},{path:"/clock/detail/:id",name:"ClockDetail",meta:{title:"91官网 - 打卡详情页面"},component:function(){return Promise.all([n.e("ClockDetail~TeachingDetails"),n.e("ClockDetail")]).then(n.bind(null,"48ba"))}},{path:"/Rankings",name:"Rankings",component:function(){return n.e("Rankings").then(n.bind(null,"4292"))}},{path:"/answerList",name:"answerList",component:function(){return n.e("Rankings").then(n.bind(null,"b81c"))}}]}],E=new f["a"]({routes:F});E.afterEach((function(e,t){document.title=e.meta.title||"91算法"}));var R=E,A=n("4360"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},U=[],q=(n("a9e3"),{name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e})},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize})}}}),M=q,H=(n("9a37"),Object(u["a"])(M,I,U,!1,null,"af5312de",null)),J=H.exports;o["default"].component("Pagination",J),o["default"].use(i.a),o["default"].config.productionTip=!1,new o["default"]({router:R,store:A["a"],render:function(e){return e(p)}}).$mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var a="Admin-Token";function i(){return"token-mock"}function o(e){return sessionStorage.setItem(a,e)}},"85ec":function(e,t,n){},"9a37":function(e,t,n){"use strict";var a=n("1e44"),i=n.n(a);i.a},a059:function(e,t,n){"use strict";var a=n("39bc"),i=n.n(a);i.a},a6e8:function(e,t,n){"use strict";var a=n("ad1c"),i=n.n(a);i.a},ad1c:function(e,t,n){},b6b9:function(e,t,n){"use strict";var a=n("2762"),i=n.n(a);i.a}});
//# sourceMappingURL=app.5fd1d8f1.js.map