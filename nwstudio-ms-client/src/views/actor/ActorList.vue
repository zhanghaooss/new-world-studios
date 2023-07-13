<template>
	<div class="actor-list">
		<template>
			姓名
			<el-autocomplete
				class="inline-input"
				v-model="state2"
				:fetch-suggestions="querySearch"
				placeholder="请输入演员名字"
				:trigger-on-focus="false"
				@select="handleSelect"
				@keydown.enter.native="handleEnter"
			></el-autocomplete>
			<el-button
				style="margin-left: 10px"
				type="primary"
				slot="append"
				icon="el-icon-search"
				@click="searchAc"
			></el-button>
		</template>
		<el-divider content-position="left">演员列表</el-divider>
		<!-- <ul class="acList">
			<li class="actor" v-for="actor in resList" :key="actor.id">
				<img :src="actor.actor_avatar" alt="" />
				<p>{{ actor.actor_name }}</p>
			</li>
		</ul> -->
		<Person
			v-for="actor in resList"
			:name="actor.actor_name"
			:avatar="actor.actor_avatar"
			:key="actor.id"
			@delete="DeleteActor($event, actor.id)"
		></Person>
	</div>
</template>

<script>
	import Person from '../../components/Person.vue';
	import httpApi from '../../http';
	export default {
		data() {
			return {
				/**
				 * @param {Array} actorLists 初始演员列表
				 * @param {Array} inputTip 输入提示演员列表
				 * @param {Array} resList 查询结果列表
				 */
				actorLists: [],
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
			ActorList() {
				httpApi.actorApi.queryAllActor().then((res) => {
					let result = res.data.data;
					this.actorLists = result.map((actor) => ({
						...actor,
						value: actor.actor_name,
					}));
					this.resList = this.actorLists;
					this.inputTip = this.actorLists;
				});
			},
			//获取更新后的列表
			getListByName(name) {
				httpApi.actorApi.queryActorByName({ name: name }).then((res) => {
					this.resList = res.data.data;
				});
			},
			handleEnter() {
				if (this.state2) {
					this.getListByName(this.state2.trim());
				} else {
					this.resList = this.actorLists;
				}
			},
			//点击按钮查询
			searchAc() {
				if (this.state2) {
					this.getListByName(this.state2.trim());
				} else {
					this.ActorList();
				}
			},
			// 显示搜索建议
			querySearch(queryString, cb) {
				var inputTip = this.inputTip;
				var results = queryString ? inputTip.filter(this.createFilter(queryString)) : inputTip;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return (inputTip) => {
					return inputTip.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
				};
			},
			//点击搜索的建议
			handleSelect(item) {
				this.getListByName(item.actor_name);
			},
			//删除
			/**
			 * @param {Event} event 事件传参
			 * @param {Number} id 演员id
			 */
			DeleteActor(event, id) {
				httpApi.actorApi.DeleteActorById({ id: id }).then((res) => {
					if (res.data.code == 200) {
						this.searchAc();
					}
				});
			},
		},
		mounted() {
			//初始化列表
			this.ActorList();
		},
	};
</script>

<style lang="scss" scoped>
	.acList {
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		.actor {
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
