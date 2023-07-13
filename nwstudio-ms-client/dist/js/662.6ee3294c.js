"use strict";(self["webpackChunkbmdstudio_ms_client"]=self["webpackChunkbmdstudio_ms_client"]||[]).push([[662],{8662:function(e,t,o){o.r(t),o.d(t,{default:function(){return c}});var i=function(){var e=this,t=e._self._c;return t("div",[e._v(" 为"),t("b",{staticStyle:{color:"#409eff"}},[e._v(e._s(e.roomInfo.cinema_name))]),e._v("的"),t("b",{staticStyle:{color:"#409eff"}},[e._v(e._s(e.roomInfo.cinema_room_name)+"（"+e._s(e.roomInfo.cinema_room_type)+"）")]),e._v("添加排片计划 "),t("el-divider"),t("el-form",{ref:"form",staticStyle:{width:"700px"},attrs:{model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"选择电影"}},[t("el-select",{ref:"currentMovie",staticStyle:{width:"100%"},attrs:{filterable:"",remote:"","reserve-keyword":"","remote-method":e.remoteMethod,loading:e.loading,placeholder:"输入要安排的电影"},model:{value:e.form.movie_id,callback:function(t){e.$set(e.form,"movie_id",t)},expression:"form.movie_id"}},e._l(e.queryMovie,(function(e){return t("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"放映日期"}},[t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.form.showingon_date,callback:function(t){e.$set(e.form,"showingon_date",t)},expression:"form.showingon_date"}})],1),t("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),t("el-col",{attrs:{span:11}},[t("el-time-select",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间","picker-options":{start:"06:00",step:"00:15",end:"23:59"}},model:{value:e.form.showingon_time,callback:function(t){e.$set(e.form,"showingon_time",t)},expression:"form.showingon_time"}})],1)],1),t("el-form-item",{attrs:{label:"票价"}},[t("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),t("el-form-item",{attrs:{label:"立即发布"}},[t("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),t("el-button",[e._v("取消")])],1)],1)],1)},s=[],r=o(1294),a={data(){return{form:{cinema_id:"",cinema_room_id:this.$route.params.roomId,movie_id:"",showingon_date:"",showingon_time:"",status:"",price:""},roomInfo:{},loading:!1,queryMovie:[]}},methods:{remoteMethod(e){if(""!==e){this.loading=!0;let t={page:1,pagesize:20,name:e};r.Z.movieApi.queryMovieByName(t).then((e=>{this.loading=!1,console.log("模糊查询电影列表结果",e),this.queryMovie=e.data.data.result}))}},onSubmit(){this.form.cinema_id=this.roomInfo.cinema_id,this.form.status=this.form.status?1:0,console.log(this.form),r.Z.showingonPlanApi.add(this.form).then((e=>{console.log("添加排片计划的结果：",e),200==e.data.code&&(this.$notify({title:"添加成功",dangerouslyUseHTMLString:!0,message:`<p>电影名称：《${this.$refs["currentMovie"].selectedLabel}》</p>\n\t             <p>播放日期：${this.form.showingon_date} ${this.form.showingon_time}</p>\n\t             <p>放映厅：${this.roomInfo.cinema_room_name}</p>\n               <p>票价：￥${this.form.price}</p>`,type:"success"}),this.$refs["form"].resetFields())}))}},mounted(){let e={id:this.form.cinema_room_id};r.Z.cinemaRoomApi.queryById(e).then((e=>{console.log("放映厅信息",e),this.roomInfo=e.data.data}))}},l=a,n=o(1001),m=(0,n.Z)(l,i,s,!1,null,"11ecb724",null),c=m.exports}}]);
//# sourceMappingURL=662.6ee3294c.js.map