"use strict";(self["webpackChunkbmdstudio_ms_client"]=self["webpackChunkbmdstudio_ms_client"]||[]).push([[899],{9899:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});i(7658);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"actor-list"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[t("el-form-item",{attrs:{label:"名称"}},[t("el-input",{attrs:{placeholder:"请输入要查找的电影名称"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchMovie.apply(null,arguments)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.searchMovie}},[e._v("查询")])],1)],1),t("el-divider",{attrs:{"content-position":"left"}},[e._v("电影列表")]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.MoviesData.result}},[t("el-table-column",{attrs:{label:"封面",align:"center",width:"110px"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("img",{attrs:{width:"60px",src:e.row.cover,alt:""}})]}}])}),t("el-table-column",{attrs:{label:"标题",prop:"title",align:"center"}}),t("el-table-column",{attrs:{label:"主演",prop:"star_actor",align:"center"}}),t("el-table-column",{attrs:{label:"上映时间",prop:"showingon",align:"center",width:"120px"}}),t("el-table-column",{attrs:{label:"时长",align:"center",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.duration)+"分钟 ")]}}])}),t("el-table-column",{attrs:{label:"所属类别",align:"center",prop:"type"}}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{attrs:{size:"small",type:"info",icon:"el-icon-user-solid",circle:""}}),t("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-picture",circle:""}}),t("el-button",{attrs:{size:"small",type:"warning",icon:"el-icon-edit",circle:""},on:{click:function(t){return e.$router.push(`/home/movie-update/${i.row.id}`)}}}),t("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(t){return e.deleteMovie(i.row.id)}}})]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.MoviesData.page,layout:"->,prev, pager, next , jumper ,  total","page-size":e.MoviesData.pagesize,total:e.MoviesData.total},on:{"current-change":e.currentPageChange}})],1)},s=[],o=i(1294),n={data(){return{name:this.$route.query.name?this.$route.query.name:"",MoviesData:{page:parseInt(this.$route.params.page)||1,pagesize:5,result:[],total:0}}},methods:{getMovieList(){if(0==arguments.length){let e={page:this.MoviesData.page,pagesize:this.MoviesData.pagesize};o.Z.movieApi.queryAllMovie(e).then((e=>{this.MoviesData=e.data.data}))}if(1==arguments[0]){let e={name:this.name.trim(),page:this.MoviesData.page,pagesize:this.MoviesData.pagesize};o.Z.movieApi.queryMovieByName(e).then((e=>{this.MoviesData=e.data.data,this.$router.push({path:`/home/movie-list/${this.MoviesData.page}`,query:{name:this.name}})}))}},searchMovie(){this.name.trim()?(this.MoviesData.page=1,this.getMovieList(1)):(this.$router.push("/home/movie-list/1"),this.getMovieList())},currentPageChange(e){this.MoviesData.page=e,this.$route.query.name?(this.$router.push({path:`/home/movie-list/${e}`,query:{name:this.name}}),this.getMovieList(1)):(this.$router.push("/home/movie-list/"+e),this.getMovieList())},deleteMovie(e){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{o.Z.movieApi.DeleteMovieById({id:e}).then((e=>{console.log(e),200==e.data.code&&(this.$message({type:"success",message:"删除成功!"}),this.searchMovie())}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))}},mounted(){this.$route.query.name?this.getMovieList(1):this.getMovieList(),console.log("$router:",this.$router),console.log("$route:",this.$route)}},l=n,r=i(1001),u=(0,r.Z)(l,a,s,!1,null,"792d636d",null),c=u.exports}}]);
//# sourceMappingURL=899.39897d1e.js.map