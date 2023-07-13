(function(){var e={3938:function(e,t){"use strict";const n={DEV:{BMDURL:"http://localhost:3010",UPLOADURL:"http://localhost:9000"},PRO:{BMDURL:"https://web.codeboy.com/bmdapi",UPLOADURL:"https://web.codeboy.com/bmduploadapi"}};t["Z"]=n.DEV},6014:function(e,t,n){"use strict";var o=n(4161),r=n(5410),i=n.n(r),a=n(9385);const s=o.Z.create();s.interceptors.request.use((function(e){let t=a.Z.state.token;return t&&(e.headers["Authorization"]=t),e}));const l={get(e,t){return s({url:e,params:t,method:"GET"})},post(e,t){return s({url:e,data:i().stringify(t),method:"POST"})}};t["Z"]=l},1294:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var o=n(6014),r=n(3938);const i=r.Z.BMDURL,a={queryAllActor(){let e=i+"/movie-actors",t={page:1,pagesize:100};return o.Z.get(e,t)},addActor(e){let t=i+"/movie-actor/add";return o.Z.post(t,e)},queryActorByName(e){let t=i+"/movie-actors/name";return o.Z.post(t,e)},DeleteActorById(e){let t=i+"/movie-actor/del";return o.Z.post(t,e)}};var s=a;const l=r.Z.BMDURL,c={queryAllDirector(){let e=l+"/movie-directors",t={page:1,pagesize:100};return o.Z.get(e,t)},addDirector(e){let t=l+"/movie-director/add";return o.Z.post(t,e)},queryDirectorByName(e){let t=l+"/movie-directors/name";return o.Z.post(t,e)},DeleteDirectorById(e){let t=l+"/movie-director/del";return o.Z.post(t,e)}};var d=c;const u=r.Z.BMDURL,m={queryAllMovie(e){let t=u+"/movie-infos";return o.Z.get(t,e)},queryMoiveType(){let e=u+"/movie-types";return o.Z.get(e)},queryMovieByTypeId(e){let t=u+"/movie-infos/category";return o.Z.get(t,e)},queryMoiveById(e){let t=u+"/movie-info/query";return o.Z.get(t,e)},queryMovieByName(e){let t=u+"/movie-infos/name";return o.Z.post(t,e)},addMovie(e){let t=u+"/movie-info/add";return o.Z.post(t,e)},updateMoive(e){let t=u+"/movie-info/update";return o.Z.post(t,e)},DeleteMovieById(e){let t=u+"/movie-info/del";return o.Z.post(t,e)},bindActorForMovie(e){let t=u+"/movie-info/bind-actors";return o.Z.post(t,e)}};var p=m;const f=r.Z.BMDURL,h={queryCinemaTags(){let e=f+"/cinema/tags";return o.Z.get(e)},addCinema(e){let t=f+"/cinema/add";return o.Z.post(t,e)},queryAllCinema(){let e=f+"/cinemas";return o.Z.get(e)},queryCinemaById(e){let t=f+"/cinema/query";return o.Z.get(t,e)},updateCinema(e){let t=f+"/cinema/update";return o.Z.post(t,e)}};var b=h;const v=r.Z.BMDURL,g={login(e){return o.Z.post(v+"/user/login",e)}};var y=g;const Z=r.Z.BMDURL,_={delete(e){return o.Z.post(Z+"/cinema-room/del",e)},add(e){return o.Z.post(Z+"/cinema-room/add",e)},list(e){return o.Z.get(Z+"/cinema-rooms/cinemaid",e)},queryAllTypes(){return o.Z.get(Z+"/cinema-room/types")},updateSeatTemplate(e){return o.Z.post(Z+"/cinema-room/edit-seat-template",e)},queryById(e){return o.Z.get(Z+"/cinema-room/query",e)}};var w=_;const C=r.Z.BMDURL,A={add(e){return o.Z.post(C+"/movie-thumb/add",e)},listByMovieId(e){return o.Z.get(C+"/movie-thumbs/movieid",e)},delete(e){return o.Z.post(C+"/movie-thumb/del",e)}};var k=A;const x=r.Z.BMDURL,O={add(e){return o.Z.post(x+"/plan/add",e)},queryByRoomId(e){return o.Z.get(x+"/plans/roomid",e)},delete(e){return o.Z.post(x+"/plan/del",e)},publish(e){return o.Z.post(x+"/plan/publish",e)},noPublish(e){return o.Z.post(x+"/plan/no-publish",e)}};var N=O;const M={actorApi:s,directorApi:d,movieApi:p,cinemaApi:b,adminApi:y,cinemaRoomApi:w,movieThumbApi:k,showingonPlanApi:N};var S=M},9264:function(e,t,n){"use strict";var o=n(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],a=n(1001),s={},l=(0,a.Z)(s,r,i,!1,null,null,null),c=l.exports,d=n(5431);(0,d.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=n(9039),m=n(9385),p=n(8499),f=n.n(p),h=n(3938);o["default"].prototype.UPLOADURL=h.Z.UPLOADURL,o["default"].use(f()),o["default"].config.productionTip=!1,window._AMapSecurityConfig={securityJsCode:"c0638bbae6c8a11043a851e89c9cc68a"},new o["default"]({router:u.Z,store:m.Z,render:e=>e(c)}).$mount("#app")},9039:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});n(7658);var o=n(6369),r=n(2631),i=function(){var e=this,t=e._self._c;return t("div",[t("el-container",{staticStyle:{height:"100vh"}},[t("el-aside",{staticClass:"aside",style:{width:(e.isCollapse?65:240)+"px",transition:"0.4s"}},[t("el-menu",{staticClass:"el-menu-vertical-demo",style:{height:"100vh"},attrs:{"default-active":this.$route.path,router:"","background-color":"#345","text-color":"#bbb",collapse:e.isCollapse}},[t("el-menu-item",[t("img",{attrs:{width:"30px",src:n(9574),alt:""}}),t("template",{slot:"title"},[t("span",{staticStyle:{"font-size":"1.2em",color:"#efefef","font-weight":"bold"}},[e._v("  新世界影城后台管理")])])],2),e._l(e.MenuList,(function(n,o){return[n.children&&0!=n.children.length?t("el-submenu",{key:n.title,attrs:{index:o+"1"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-location"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.title))])]),e._l(n.children,(function(n){return t("el-menu-item",{key:n.sub_title,attrs:{index:n.index}},[t("i",{staticClass:"el-icon-notebook-2"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.sub_title))])])}))],2):t("el-menu-item",{key:n.title,attrs:{index:n.index}},[t("i",{staticClass:"el-icon-message"}),t("template",{slot:"title"},[e._v(" "+e._s(n.title)+" ")])],2)]}))],2)],1),t("el-container",[t("el-header",{staticClass:"header"},[t("i",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapse,expression:"!isCollapse"}],staticClass:"el-icon-s-fold",on:{click:function(t){e.isCollapse=!0}}}),t("i",{directives:[{name:"show",rawName:"v-show",value:e.isCollapse,expression:"isCollapse"}],staticClass:"el-icon-s-unfold",on:{click:function(t){e.isCollapse=!1}}}),t("el-breadcrumb",{staticStyle:{flex:"1","margin-left":"20px"},attrs:{"separator-class":"el-icon-arrow-right"}},e._l(this.$route.meta.breadcrumb,(function(n){return t("el-breadcrumb-item",{key:n},[e._v(e._s(n))])})),1),e.$store.state.user?t("span",[t("i",{staticClass:"el-icon-user-solid"}),e._v(" "+e._s(e.$store.state.user.nickname)+"|"),t("i",{staticClass:"el-icon-phone"}),e._v(e._s(e.$store.state.user.phone)+"|"),t("i",{staticClass:"el-icon-chat-dot-round"}),e._v(e._s(e.$store.state.user.email))]):e._e()],1),t("el-main",[t("router-view")],1)],1)],1)],1)},a=[],s={data(){return{isCollapse:!1,MenuList:[{title:"首页",index:"/home/index"},{title:"演员管理",children:[{sub_title:"演员列表",index:"/home/actor-list"},{sub_title:"新增演员",index:"/home/actor-add"}]},{title:"导演管理",children:[{sub_title:"导演列表",index:"/home/director-list"},{sub_title:"新增导演",index:"/home/director-add"}]},{title:"电影管理",children:[{sub_title:"电影列表",index:"/home/movie-list"},{sub_title:"新增电影",index:"/home/movie-add"}]},{title:"电影院管理",children:[{sub_title:"电影院列表",index:"/home/cinema-list"},{sub_title:"新增电影院",index:"/home/cinema-add"}]}]}},created(){console.log("this.$route(当前路由):",this.$route)}},l=s,c=n(1001),d=(0,c.Z)(l,i,a,!1,null,"8b0e54b6",null),u=d.exports,m=n(9385);o["default"].use(r.ZP);const p=[{path:"/",redirect:"/home/index"},{path:"/home",component:u,children:[{path:"index",name:"/home/index",component:()=>n.e(420).then(n.bind(n,2420))},{path:"actor-add",name:"/home/actor-add",component:()=>n.e(612).then(n.bind(n,1612)),meta:{breadcrumb:["演员管理","新增演员"]}},{path:"actor-list",name:"/home/actor-list",component:()=>n.e(921).then(n.bind(n,921)),meta:{breadcrumb:["演员管理","演员列表"]}},{path:"director-add",name:"/home/director-add",component:()=>n.e(787).then(n.bind(n,1787)),meta:{breadcrumb:["导演管理","新增导演"]}},{path:"director-list",name:"/home/director-list",component:()=>n.e(954).then(n.bind(n,954)),meta:{breadcrumb:["导演管理","导演列表"]}},{path:"movie-list",name:"/home/movie-list",component:()=>n.e(899).then(n.bind(n,9899)),meta:{breadcrumb:["电影管理","电影列表"]}},{path:"movie-list/:page",name:"/home/movie-list/page",component:()=>n.e(899).then(n.bind(n,9899)),meta:{breadcrumb:["电影管理","电影列表"]}},{path:"movie-add",name:"/home/movie-add",component:()=>Promise.all([n.e(126),n.e(967)]).then(n.bind(n,4967)),meta:{breadcrumb:["电影管理","新增电影"]}},{path:"movie-update/:id",name:"/home/movie-update/id",component:()=>Promise.all([n.e(126),n.e(790)]).then(n.bind(n,790)),meta:{breadcrumb:["电影管理","电影列表","修改电影"]}},{path:"cinema-add",name:"/home/cinema-add",component:()=>n.e(114).then(n.bind(n,7114)),meta:{breadcrumb:["电影院管理","新增电影院"]}},{path:"cinema-list",name:"/home/cinema-list",component:()=>n.e(505).then(n.bind(n,3505)),meta:{breadcrumb:["电影院管理","电影院列表"]}},{path:"cinema-update/:cinemaId",name:"/home/cinema-update/cinemaId",component:()=>n.e(398).then(n.bind(n,5398)),meta:{breadcrumb:["电影院管理","电影院列表","修改电影院"]}},{path:"cinema-room-list/:cinemaId",name:"/home/cinema-room-list/cinemaId",component:()=>n.e(502).then(n.bind(n,2502)),meta:{breadcrumb:["电影院管理","电影院列表","影厅列表"]}},{path:"showingon-plan-add/:roomId",name:"/home/showingon-plan-add/roomId",component:()=>n.e(662).then(n.bind(n,8662)),meta:{breadcrumb:["电影院管理","电影院列表","影厅列表","添加排片"]}},{path:"showingon-plan-list/:roomId",name:"/home/showingon-plan-list/roomId",component:()=>n.e(485).then(n.bind(n,7485)),meta:{breadcrumb:["电影院管理","电影院列表","影厅列表","排片计划列表"]}},{path:"seat-template/:id",name:"/home/seat-template/id",component:()=>n.e(367).then(n.bind(n,8367)),meta:{breadcrumb:["电影院管理","电影院列表","影厅列表","座位模板"]}}]},{path:"/user/login",name:"/user/login",component:()=>n.e(78).then(n.bind(n,4078))}],f=new r.ZP({mode:"history",base:"/",routes:p});f.beforeEach(((e,t,n)=>{console.log("哪里来",t),console.log("哪里去",e),"/user/login"!=e.path?(m.Z.state.user?n():f.push("/user/login"),n()):n()}));var h=f},9385:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(6369),r=n(3822),i=n(1294),a=n(8499),s=n(9039);const l={USER_INFO:"USER_INFO",CITY_NAME:"CITY_NAME",TOKEN:"TOKEN"},c=(e,t)=>{sessionStorage.setItem(e,JSON.stringify(t))},d=e=>{let t=sessionStorage.getItem(e);return t?JSON.parse(t):null};o["default"].use(r.ZP);var u=new r.ZP.Store({state:{user:d(l.USER_INFO),token:d(l.TOKEN)},getters:{},mutations:{updateUser(e,t){e.user=t},saveToken(e,t){e.token=t}},actions:{login(e,t){i.Z.adminApi.login(t).then((t=>{console.log("登陆结果,",t),200==t.data.code?(e.commit("updateUser",t.data.data.user),e.commit("saveToken",t.data.data.token),c(l.USER_INFO,JSON.stringify(t.data.data.user)),c(l.TOKEN,JSON.stringify(t.data.data.token)),s.Z.replace("/home/index"),a.Notification.success({message:"登录成功"})):a.Notification.error({message:t.data.msg})}))}},modules:{}})},9574:function(e,t,n){"use strict";e.exports=n.p+"img/logo.7f1a95b2.svg"},4654:function(){}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{78:"4a49068f",114:"c39d8de4",126:"78b55ffa",367:"74cae5d0",398:"e4075bd7",420:"3cddd0e8",485:"56edb11f",502:"6c422eae",505:"4b9e4703",612:"cc86e1e2",662:"6ee3294c",787:"3c53c237",790:"901400c7",899:"39897d1e",921:"ed0a1bad",954:"1a27f5d3",967:"96e77b15"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{78:"b6f76c91",367:"fac8d47a",505:"48596988",612:"101cd938",787:"101cd938",790:"340c7f5f",921:"f88b49ac",954:"5a81305d",967:"340c7f5f"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="bmdstudio-ms-client:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=s,i.parentNode&&i.parentNode.removeChild(i),r(l)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={78:1,367:1,505:1,612:1,787:1,790:1,921:1,954:1,967:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var d=l(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkbmdstudio_ms_client"]=self["webpackChunkbmdstudio_ms_client"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9264)}));o=n.O(o)})();
//# sourceMappingURL=app.8fca4014.js.map