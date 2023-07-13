<template>
	<div class="director-list">
		<template>
			姓名
			<el-autocomplete
				class="inline-input"
				v-model="state2"
				:fetch-suggestions="querySearch"
				placeholder="请输入导演名字"
				:trigger-on-focus="false"
				@select="handleSelect"
				@keydown.enter.native="handleEnter"
			></el-autocomplete>
			<el-button
				style="margin-left: 10px"
				type="primary"
				slot="append"
				icon="el-icon-search"
				@click="searchDi"
			></el-button>
		</template>
		<el-divider content-position="left">导演列表</el-divider>
		<!-- <ul class="acList">
			<li class="director" v-for="director in resList" :key="director.id">
				<img :src="director.director_avatar" alt="" />
				<p>{{ director.director_name }}</p>
			</li>
		</ul> -->
		<Person
			v-for="director in resList"
			:name="director.director_name"
			:avatar="director.director_avatar"
			:key="director.id"
			@delete="DeleteDirector($event, director.id)"
		></Person>
	</div>
</template>

<script>
	import myaxios from '../../http/MyAxios';
	import Person from '../../components/Person.vue';
	import httpApi from '@/http';
	export default {
		data() {
			return {
				directorLists: [],
				inputTip: [],
				resList: [],
				state2: '',
			};
		},
		components: {
			Person,
		},
		methods: {
			//默认首页列表
			DirectorList() {
				httpApi.directorApi.queryAllDirector().then((res) => {
					let result = res.data.data;
					this.directorLists = result.map((director) => ({
						...director,
						value: director.director_name,
					}));
					this.resList = this.directorLists;
					this.inputTip = this.directorLists;
				});
			},
			//获取更新后的列表
			getListByName(name) {
				httpApi.directorApi.queryDirectorByName({ name: name }).then((res) => {
					this.resList = res.data.data;
				});
			},
			handleEnter() {
				if (this.state2) {
					this.getListByName(this.state2.trim());
				} else {
					this.resList = this.directorLists;
				}
			},
			//点击按钮查询
			searchDi() {
				if (this.state2) {
					this.getListByName(this.state2.trim());
				} else {
					this.DirectorList();
				}
			},
			// 显示搜索建议
			querySearch(queryString, cb) {
				var inputTip = this.inputTip;
				var results = queryString ? inputTip.filter(this.createFilter(queryString)) : inputTip;
				// 调用 callback 返回建议列表的数据
				console.log(results);
				cb(results);
			},
			createFilter(queryString) {
				return (inputTip) => {
					return inputTip.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
				};
			},
			//点击搜索的建议
			handleSelect(item) {
				this.getListByName(item.director_name);
			},
			//删除
			DeleteDirector(event, id) {
				httpApi.directorApi.DeleteDirectorById({ id }).then((res) => {
					if (res.data.code == 200) {
						this.searchDi();
					}
				});
			},
		},
		mounted() {
			//初始化列表
			this.DirectorList();
		},
	};
</script>

<style lang="scss" scoped>
	.acList {
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		.director {
			padding: 5px;
			width: 100px;
			display: flex;
			flex-direction: column;
			img {
				width: 100%;
				border-radius: 5px;
			}
			p {
				text-align: center;
			}
		}
	}
</style>
