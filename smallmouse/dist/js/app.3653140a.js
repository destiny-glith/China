(function(e){function n(n){for(var o,r,a=n[0],i=n[1],l=n[2],s=0,f=[];s<a.length;s++)r=a[s],u[r]&&f.push(u[r][0]),u[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,r=1;r<t.length;r++){var a=t[r];0!==u[a]&&(o=!1)}o&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},r={app:0},u={app:0},c=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"10bea3b7","chunk-2d0c80d0":"2de58c90","chunk-2d21d068":"4e3db732","chunk-65bc6bf2":"63c44566","chunk-e905417c":"6fa65122","chunk-461b3e5d":"694484cc","chunk-69b3d486":"bb1d3b0f","chunk-2ed71e9a":"e1712a3c","chunk-77857233":"62d8ea0e","chunk-73658eeb":"cffd428e","chunk-11b83a5d":"a42f8caa","chunk-2d0f0be6":"79ef952c","chunk-2d21e936":"1824b4b9","chunk-81515480":"ec5c72bd"}[e]+".js"}function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-65bc6bf2":1,"chunk-e905417c":1,"chunk-461b3e5d":1,"chunk-69b3d486":1,"chunk-2ed71e9a":1,"chunk-77857233":1,"chunk-73658eeb":1,"chunk-11b83a5d":1,"chunk-81515480":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0c80d0":"31d6cfe0","chunk-2d21d068":"31d6cfe0","chunk-65bc6bf2":"bdb57b0b","chunk-e905417c":"87f3490f","chunk-461b3e5d":"96b88f50","chunk-69b3d486":"be4c97bc","chunk-2ed71e9a":"0d14902b","chunk-77857233":"cb38316f","chunk-73658eeb":"b52b3371","chunk-11b83a5d":"c53ff20c","chunk-2d0f0be6":"31d6cfe0","chunk-2d21e936":"31d6cfe0","chunk-81515480":"9f86d200"}[e]+".css",u=i.p+o,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var l=c[a],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===u))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){l=f[a],s=l.getAttribute("data-href");if(s===o||s===u)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var o=n&&n.target&&n.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],d.parentNode.removeChild(d),t(c)},d.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){r[e]=0}));var o=u[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise(function(n,t){o=u[e]=[n,t]});n.push(o[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e),l=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,t[1](c)}u[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var d=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",[e.$route.meta.keepAlive?t("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():t("router-view"),t("router-view",{attrs:{name:"footer"}})],1)},u=[],c=(t("5c0b"),t("2877")),a={},i=Object(c["a"])(a,r,u,!1,null,null,null),l=i.exports,s=t("8c4f"),f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",{staticClass:"footer"},[t("ul",[t("router-link",{attrs:{to:"/",tag:"li"}},[t("i",{staticClass:"iconfont icon-shouye"}),t("span",[e._v("首页")])]),t("router-link",{attrs:{to:"/kind",tag:"li"}},[t("i",{staticClass:"iconfont icon-fenlei"}),t("span",[e._v("分类")])]),t("router-link",{attrs:{to:"/mouseshop",tag:"li"}},[t("i",{staticClass:"iconfont icon-songguo"}),t("span",[e._v("松鼠币商城")])]),t("router-link",{attrs:{to:"/cart",tag:"li"}},[t("i",{staticClass:"iconfont icon-tubiaolunkuo-"}),t("span",[e._v("购物车")])]),t("router-link",{attrs:{to:"/user",tag:"li"}},[t("i",{staticClass:"iconfont icon-gerenzhongxin"}),t("span",[e._v("个人中心")])])],1)])},d=[],h=t("2f62"),b={computed:{totaNum:function(){return this.$store.getters.totaNum}}},p=b,m=(t("87d2"),Object(c["a"])(p,f,d,!1,null,null,null)),k=m.exports;o["a"].use(s["a"]);var g=new s["a"]({mode:"hash",base:"",routes:[{path:"/detail/:id",name:"detail",components:{default:function(){return Promise.all([t.e("chunk-e905417c"),t.e("chunk-69b3d486"),t.e("chunk-2ed71e9a")]).then(t.bind(null,"8248"))}}},{path:"/register",name:"register",components:{default:function(){return Promise.all([t.e("chunk-e905417c"),t.e("chunk-73658eeb"),t.e("chunk-2d21e936")]).then(t.bind(null,"d5c2"))}}},{path:"/findpwd",name:"findpwd",components:{default:function(){return Promise.all([t.e("chunk-e905417c"),t.e("chunk-73658eeb"),t.e("chunk-2d0f0be6")]).then(t.bind(null,"9e59"))}}},{path:"/login",name:"login",components:{default:function(){return Promise.all([t.e("chunk-e905417c"),t.e("chunk-73658eeb"),t.e("chunk-11b83a5d")]).then(t.bind(null,"9ed6"))}}},{path:"/",name:"home",components:{default:function(){return Promise.all([t.e("chunk-e905417c"),t.e("chunk-69b3d486"),t.e("chunk-77857233")]).then(t.bind(null,"7abe"))},footer:k},meta:{keepAlive:!0}},{path:"/home",name:"home",components:{default:function(){return Promise.all([t.e("chunk-e905417c"),t.e("chunk-69b3d486"),t.e("chunk-77857233")]).then(t.bind(null,"7abe"))},footer:k},meta:{keepAlive:!0}},{path:"/home/articleinfo",name:"articleinfo",components:{default:function(){return Promise.all([t.e("chunk-e905417c"),t.e("chunk-461b3e5d")]).then(t.bind(null,"8715"))},footer:k}},{path:"/kind",name:"kind",components:{default:function(){return t.e("chunk-2d0c80d0").then(t.bind(null,"52da"))},footer:k}},{path:"/mouseshop",name:"mouseshop",components:{default:function(){return t.e("chunk-2d21d068").then(t.bind(null,"d017"))},footer:k}},{path:"/cart",name:"cart",components:{default:function(){return Promise.all([t.e("chunk-e905417c"),t.e("chunk-81515480")]).then(t.bind(null,"1b7b"))},footer:k}},{path:"/user",name:"user",components:{default:function(){return t.e("chunk-65bc6bf2").then(t.bind(null,"e382"))},footer:k}},{path:"/about",name:"about",component:function(){return t.e("about").then(t.bind(null,"f820"))}}]});o["a"].use(h["a"]);var v=new h["a"].Store({state:{loginState:"",userInfo:"",buyBaby:[],buylist:""},getters:{totaNum:function(e){var n=0;return e.buylist.map(function(e){n+=e.num}),n},totaprice:function(e){var n=0;return e.buylist.map(function(e){e.flag?n+=e.num*e.sale:n+=0}),n.toFixed(2)}},mutations:{changeLoginSatate:function(e,n){e.loginState=n.result},addUserInfo:function(e,n){e.userInfo=n.result},addBuycart:function(e,n){e.buylist=n.result}}}),y=t("9483");Object(y["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:g,store:v,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var o=t("5e27"),r=t.n(o);r.a},"5e27":function(e,n,t){},"87d2":function(e,n,t){"use strict";var o=t("9a68"),r=t.n(o);r.a},"9a68":function(e,n,t){}});
//# sourceMappingURL=app.3653140a.js.map