(function(e){function n(n){for(var r,o,i=n[0],c=n[1],s=n[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(n);while(f.length)f.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={1:0},a={1:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"a80965da",3:"0406f46f",4:"ad35e90e",5:"0f78a6dd",6:"a9a2ca8d",7:"9be3cb18",8:"9b8c0bba"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={2:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{2:"f2c8ad67",3:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return n()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var r=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),t(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(p);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var p=l;u.push([0,0]),t()})({0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("967e"),o=t.n(r),a=(t("a481"),t("96cf"),t("fa84")),u=t.n(a),i=(t("7d6e"),t("e54f"),t("985d"),t("31cd"),t("2b0e")),c=t("1f91"),s=t("42d2"),l=t("b05d"),f=t("18d6"),p=t("a639");i["a"].use(l["a"],{config:{},lang:c["a"],iconSet:s["a"],plugins:{LocalStorage:f["a"],SessionStorage:p["a"]}});var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},g=[],h={name:"App"},m=h,v=t("2877"),b=Object(v["a"])(m,d,g,!1,null,null,null),w=b.exports,y=t("2f62"),x=(t("551c"),t("06db"),t("7f7f"),t("fc74")),k=t.n(x),P=t("59a1"),S=t.n(P),j=t("bc3a"),O=t.n(j),_="https://gaetan-rouseyrol.dev",E=function(){function e(){k()(this,e)}return S()(e,[{key:"login",value:function(e){return O.a.post(_+"/api/login_check",{email:e.email,password:e.password}).then((function(e){return e.data.token&&f["a"].set("user",JSON.stringify(e.data)),e.data})).catch((function(e){return prompt(e.message)}))}},{key:"logout",value:function(){f["a"].remove("user"),f["a"].remove("user.data")}},{key:"register",value:function(e){return O.a.post(_+"/register",{name:e.name,email:e.email,password:e.password}).then((function(e){return console.log(e)}),(function(e){return console.log(e.message)}))}}]),e}(),A=new E,I=JSON.parse(f["a"].getItem("user")),C=I?{status:{loggedIn:!0},user:I}:{status:{loggedIn:!1},user:null},L={namespaced:!0,state:C,actions:{login:function(e,n){var t=e.commit;return A.login(n).then((function(e){return t("loginSuccess",e),Promise.resolve(e)}),(function(e){return t("loginFailure"),Promise.reject(e)}))},logout:function(e){var n=e.commit;A.logout(),n("logout")},register:function(e,n){var t=e.commit;return A.register(n).then((function(e){return t("registerSuccess"),Promise.resolve(e.data)}),(function(e){return t("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,n){e.status.loggedIn=!0,e.user=n},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}};i["a"].use(y["a"]);var N=function(){var e=new y["a"].Store({modules:{auth:L},strict:!1});return e},T=(t("6762"),t("8c4f")),F=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"713b"))},children:[{path:"",name:"home",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"bc13b"))}},{path:"scan",name:"scan",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"3801"))}},{path:"pantry",name:"pantry",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"1101"))}},{path:"profile",name:"profile",component:function(){return t.e(7).then(t.bind(null,"2ff9"))}},{path:"login",name:"login",component:function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"013f"))}}]}];F.push({path:"*",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"e51e"))}});var M=F;i["a"].use(T["a"]);var q=function(){var e=new T["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:M,mode:"hash",base:""});return e.beforeEach((function(e,n,t){var r=["/login"],o=!r.includes(e.path),a=f["a"].getItem("user");o&&!a?t("/login"):t()})),e},B=function(){return J.apply(this,arguments)};function J(){return J=u()(o.a.mark((function e(){var n,t,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof N){e.next=6;break}return e.next=3,N({Vue:i["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=N;case 7:if(n=e.t0,"function"!==typeof q){e.next=14;break}return e.next=11,q({Vue:i["a"],store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=q;case 15:return t=e.t1,n.$router=t,r={router:t,store:n,render:function(e){return e(w)}},r.el="#q-app",e.abrupt("return",{app:r,store:n,router:t});case 20:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}var V=t("9483");Object(V["a"])("service-worker.js",{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){},offline:function(){},error:function(){}});var $=t("a925"),D={failed:"Action failed",success:"Action was successful"},H={"en-us":D};i["a"].use($["a"]);var K=new $["a"]({locale:"en-us",fallbackLocale:"en-us",messages:H}),Q=function(e){var n=e.app;n.i18n=K};function U(){return z.apply(this,arguments)}function z(){return z=u()(o.a.mark((function e(){var n,t,r,a,u,c,s,l,f;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:n=e.sent,t=n.app,r=n.store,a=n.router,u=!0,c=function(e){u=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),l=[Q,void 0],f=0;case 11:if(!(!0===u&&f<l.length)){e.next=29;break}if("function"===typeof l[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[f]({app:t,router:a,store:r,Vue:i["a"],ssrContext:null,redirect:c,urlPath:s});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!1!==u){e.next=31;break}return e.abrupt("return");case 31:new i["a"](t);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),z.apply(this,arguments)}i["a"].prototype.$axios=O.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&t.e(0).then(t.t.bind(null,"a0db",7)),U()},"31cd":function(e,n,t){}});