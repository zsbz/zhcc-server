webpackJsonp([3],{NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[t("transition",[t("keep-alive",[t("router-view")],1)],1)],1)},staticRenderFns:[]},u=r("VU/8")(null,a,!1,null,null,null).exports,s=r("NYxO"),i=r("bOdI"),l=r.n(i),c=(n={},l()(n,"SET_LOADING",function(e,t){e.showLoading=t}),l()(n,"SET_BREADCRUMB_ITEMS",function(e,t){e.breadcrumbItems=t}),n),d={setLoading:function(e,t){(0,e.commit)("SET_LOADING",t)},setBreadcurmbItems:function(e,t){(0,e.commit)("SET_BREADCRUMB_ITEMS",t)}},m={showLoading:function(e){return e.showLoading},breadcrumbItems:function(e){return e.breadcrumbItems}};o.default.use(s.a);var p=new s.a.Store({state:{showLoading:!1,breadcrumbItems:[]},mutations:c,actions:d,getters:m}),f=r("BO1k"),h=r.n(f),g=r("Gu7T"),v=r.n(g),b=r("/ocq"),y=r("T+/8");o.default.use(b.a);var w=new b.a({routes:[{mode:"history",base:"/",path:"/login",name:"login",component:y.default,meta:{requiresAuth:!1}},{path:"/index",redirect:"/",meta:{requiresAuth:!0}}]});!function(){if(!sessionStorage.routers)return;var e={path:"/",name:"/",component:function(e){return r.e(1).then(function(){var t=[r("KR8f")];e.apply(null,t)}.bind(this)).catch(r.oe)},children:[].concat(v()(function(){var e=JSON.parse(sessionStorage.routers),t=[],n=function(e){if(null!=e.code){var n=JSON.parse(e.properties),o={path:e.url,name:e.code,component:function(t){return r.e(0).then(function(){var n=[r("eTVe")("./"+e.code+"/index")];t.apply(null,n)}.bind(this)).catch(r.oe)},meta:{routerId:e.id,requiresAuth:n.meta.requiresAuth,nameFullPath:n.nameFullPath}};t.push(o)}},o=!0,a=!1,u=void 0;try{for(var s,i=h()(e);!(o=(s=i.next()).done);o=!0){var l=s.value;n(l)}}catch(e){a=!0,u=e}finally{try{!o&&i.return&&i.return()}finally{if(a)throw u}}return t}()))};w.addRoutes([e])}(),w.beforeEach(function(e,t,r){var n=sessionStorage.getItem("token");"/"!==e.path||n?e.meta.requiresAuth?n?r():r({path:"/login",query:{redirect:e.fullPath}}):r():r({path:"/login",query:{redirect:e.fullPath}})}),w.afterEach(function(e,t){var r=[];if(r.push({title:"首页",to:"/"}),e.meta.nameFullPath){var n=e.meta.nameFullPath.split("/");n.forEach(function(t,o){var a={title:t,to:o==n.length-1?e.path:""};r.push(a)})}w.app.$store.dispatch("setBreadcurmbItems",r)});var S=w,I=r("zL8q"),O=r.n(I);r("tvR6");o.default.config.productionTip=!1,o.default.use(O.a),new o.default({el:"#app",store:p,router:S,template:"<App/>",components:{App:u}})},SVcA:function(e,t,r){"use strict";r.d(t,"d",function(){return o}),r.d(t,"a",function(){return a}),r.d(t,"c",function(){return u}),r.d(t,"f",function(){return s}),r.d(t,"g",function(){return i}),r.d(t,"e",function(){return l}),r.d(t,"b",function(){return c});var n=r("vLgD"),o=function(e){return Object(n.a)({url:"/routers",method:"get",params:{offset:e.offset,limit:e.limit,name:e.name}})},a=function(e){return Object(n.a)({url:"/routers/"+e,method:"get"})},u=function(e){return Object(n.a)({url:"/routers/search",method:"get",params:{parentId:e}})},s=function(e){return Object(n.a)({url:"/routers",method:"post",data:e})},i=function(e,t){return Object(n.a)({url:"/routers/"+e,method:"put",data:t})},l=function(e){return Object(n.a)({url:"/routers/"+e,method:"delete"})},c=function(e){return Object(n.a)({url:"/routers/all?includeLocked="+e,method:"get"})}},"T+/8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("BO1k"),o=r.n(n),a=r("Gu7T"),u=r.n(a),s=r("mvHQ"),i=r.n(s),l=r("Dd8w"),c=r.n(l),d=r("vLgD"),m=r("mw3O"),p=r.n(m),f=(r("SVcA"),r("NYxO")),h={data:function(){return{displayLoading:!1,loginForm:{username:"admin",password:"admin"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入口令",trigger:"blur"}]}}},computed:c()({},Object(f.b)(["showLoading"])),methods:{doLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){var r,n;t&&(e.$store.dispatch("setLoading",!0),(r=e.loginForm.username,n=e.loginForm.password,Object(d.a)({url:"/auth/token",method:"post",data:p.a.stringify({loginName:r,password:n})})).then(function(t){sessionStorage.setItem("currentUser",i()({id:t.data.userId,name:t.data.username})),sessionStorage.setItem("token",t.data.token),sessionStorage.setItem("routers",i()(t.data.routers)),e.initIndexRouter();var r=decodeURIComponent(e.$route.query.redirect||"/");e.$router.push(r),e.$store.dispatch("setLoading",!1)}).catch(function(t){e.$store.dispatch("setLoading",!1),e.$message({showClose:!0,message:t,type:"error"})}))})},initIndexRouter:function(){var e={path:"/",name:"/",component:function(e){return r.e(1).then(function(){var t=[r("KR8f")];e.apply(null,t)}.bind(this)).catch(r.oe)},children:[].concat(u()(this.generateChildRouters()))};this.$router.addRoutes([e])},generateChildRouters:function(){if(!sessionStorage.routers)return[];var e=JSON.parse(sessionStorage.routers),t=[];console.log(e);var n=function(e){if(console.log(e),null!=e.code){var n=JSON.parse(e.properties),o={path:e.url,name:e.code,component:function(t){return r.e(0).then(function(){var n=[r("eTVe")("./"+e.code+"/index")];t.apply(null,n)}.bind(this)).catch(r.oe)},meta:{routerId:e.id,requiresAuth:n.meta.requiresAuth,nameFullPath:n.nameFullPath}};t.push(o)}},a=!0,u=!1,s=void 0;try{for(var i,l=o()(e);!(a=(i=l.next()).done);a=!0){n(i.value)}}catch(e){u=!0,s=e}finally{try{!a&&l.return&&l.return()}finally{if(u)throw s}}return t}}},g={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.rules,"label-position":"left","label-width":"0px",autoComplete:"on"}},[r("h3",{staticClass:"login_title"},[e._v("系统登录")]),e._v(" "),r("div",{staticClass:"login-body"},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}}),e._v(" "),r("div",{staticClass:"login-username",attrs:{slot:"prepend"},slot:"prepend"})],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),r("template",{slot:"prepend"},[r("div",{staticClass:"login-password"})])],2),e._v(" "),r("el-form-item",{staticStyle:{width:"100%"}},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.doLogin(t)}}},[e._v("登录")])],1)],1)])],1)},staticRenderFns:[]};var v=r("VU/8")(h,g,!1,function(e){r("leFx")},null,null);t.default=v.exports},leFx:function(e,t){},tvR6:function(e,t){},vLgD:function(e,t,r){"use strict";var n=r("//Fk"),o=r.n(n),a=r("mtWM"),u=r.n(a).a.create({baseURL:"http://localhost:8080",timeout:5e3});u.interceptors.request.use(function(e){return sessionStorage.getItem("token")&&(e.headers["X-Token"]=sessionStorage.getItem("token")),e},function(e){o.a.reject(e)}),u.interceptors.response.use(function(e){return 2==e.data.errCode&&router.push({path:"/login",querry:{redirect:router.currentRoute.fullPath}}),e},function(e){return o.a.reject(e)}),t.a=u}},["NHnr"]);
//# sourceMappingURL=app.e28921ced8d09c804042.js.map