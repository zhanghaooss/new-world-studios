"use strict";(self["webpackChunkbmdstudio_ms_client"]=self["webpackChunkbmdstudio_ms_client"]||[]).push([[921],{1428:function(t,e,s){s.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"person"},[e("img",{attrs:{src:t.avatar,alt:""}}),e("div",[t._v(t._s(t.name))]),e("el-popconfirm",{attrs:{"confirm-button-text":"好的","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定删除吗？"},on:{confirm:t.clickx}},[e("i",{staticClass:"el-icon-circle-close",attrs:{slot:"reference"},slot:"reference"})])],1)},r=[],a={props:{name:{type:String,required:!0},avatar:{type:String,required:!0}},methods:{clickx(){this.$emit("delete",{name:"老新",time:"刚才"})}}},n=a,c=s(1001),o=(0,c.Z)(n,i,r,!1,null,"505aa538",null),l=o.exports},921:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"actor-list"},[[t._v(" 姓名 "),e("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入演员名字","trigger-on-focus":!1},on:{select:t.handleSelect},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleEnter.apply(null,arguments)}},model:{value:t.state2,callback:function(e){t.state2=e},expression:"state2"}}),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"append",type:"primary",icon:"el-icon-search"},on:{click:t.searchAc},slot:"append"})],e("el-divider",{attrs:{"content-position":"left"}},[t._v("演员列表")]),t._l(t.resList,(function(s){return e("Person",{key:s.id,attrs:{name:s.actor_name,avatar:s.actor_avatar},on:{delete:function(e){return t.DeleteActor(e,s.id)}}})}))],2)},r=[],a=s(1428),n=s(1294),c={data(){return{actorLists:[],inputTip:[],resList:[],state2:""}},components:{Person:a.Z},methods:{ActorList(){n.Z.actorApi.queryAllActor().then((t=>{let e=t.data.data;this.actorLists=e.map((t=>({...t,value:t.actor_name}))),this.resList=this.actorLists,this.inputTip=this.actorLists}))},getListByName(t){n.Z.actorApi.queryActorByName({name:t}).then((t=>{this.resList=t.data.data}))},handleEnter(){this.state2?this.getListByName(this.state2.trim()):this.resList=this.actorLists},searchAc(){this.state2?this.getListByName(this.state2.trim()):this.ActorList()},querySearch(t,e){var s=this.inputTip,i=t?s.filter(this.createFilter(t)):s;e(i)},createFilter(t){return e=>0===e.value.toLowerCase().indexOf(t.toLowerCase())},handleSelect(t){this.getListByName(t.actor_name)},DeleteActor(t,e){n.Z.actorApi.DeleteActorById({id:e}).then((t=>{200==t.data.code&&this.searchAc()}))}},mounted(){this.ActorList()}},o=c,l=s(1001),u=(0,l.Z)(o,i,r,!1,null,"379a6e29",null),d=u.exports}}]);
//# sourceMappingURL=921.ed0a1bad.js.map