<template>
	<div>
		为<b style="color: #409eff">{{ roomInfo.cinema_name }}</b
		>的<b style="color: #409eff"
			>{{ roomInfo.cinema_room_name }}（{{ roomInfo.cinema_room_type }}）</b
		>添加排片计划
		<el-divider></el-divider>
		<!--表单  -->
		<el-form ref="form" :model="form" label-width="80px" style="width: 700px">
			<el-form-item label="选择电影">
				<el-select
					v-model="form.movie_id"
					filterable
					remote
					reserve-keyword
					:remote-method="remoteMethod"
					:loading="loading"
					placeholder="输入要安排的电影"
					style="width: 100%"
					ref="currentMovie"
				>
					<el-option
						v-for="item in queryMovie"
						:label="item.title"
						:key="item.id"
						:value="item.id"
					></el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="放映日期">
				<el-col :span="11">
					<el-date-picker
						type="date"
						v-model="form.showingon_date"
						value-format="yyyy-MM-dd"
						placeholder="选择日期"
						style="width: 100%"
					></el-date-picker>
				</el-col>
				<el-col class="line" :span="2" style="text-align: center">-</el-col>
				<el-col :span="11">
					<el-time-select
						v-model="form.showingon_time"
						placeholder="选择时间"
						:picker-options="{
							start: '06:00',
							step: '00:15',
							end: '23:59',
						}"
						style="width: 100%"
					></el-time-select>
				</el-col>
			</el-form-item>

			<el-form-item label="票价">
				<el-input v-model="form.price"></el-input>
			</el-form-item>

			<el-form-item label="立即发布">
				<el-switch :active-value="1" :inactive-value="0" v-model="form.status"></el-switch>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">提交</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import httpApi from '@/http';
	export default {
		data() {
			return {
				form: {
					cinema_id: '',
					cinema_room_id: this.$route.params.roomId,
					movie_id: '',
					showingon_date: '',
					showingon_time: '',
					status: '',
					price: '',
				},
				roomInfo: {}, //保存放映厅基本信息
				loading: false,
				queryMovie: [], //保存模糊查询电影列表之后的结果
			};
		},
		methods: {
			remoteMethod(query) {
				if (query !== '') {
					this.loading = true;
					let params = { page: 1, pagesize: 20, name: query };
					httpApi.movieApi.queryMovieByName(params).then((res) => {
						this.loading = false;
						console.log('模糊查询电影列表结果', res);
						this.queryMovie = res.data.data.result;
					});
				}
				//远程搜索电影列表的方法
			},
			onSubmit() {
				this.form.cinema_id = this.roomInfo.cinema_id;
				this.form.status = this.form.status ? 1 : 0;
				console.log(this.form);
				httpApi.showingonPlanApi.add(this.form).then((res) => {
					console.log('添加排片计划的结果：', res);
					if (res.data.code == 200) {
						this.$notify({
							title: '添加成功',
							dangerouslyUseHTMLString: true,
							message: `<p>电影名称：《${this.$refs['currentMovie'].selectedLabel}》</p>
	             <p>播放日期：${this.form.showingon_date} ${this.form.showingon_time}</p>
	             <p>放映厅：${this.roomInfo.cinema_room_name}</p>
               <p>票价：￥${this.form.price}</p>`,
							type: 'success',
						});
						this.$refs['form'].resetFields();
					}
				});
			},
		},
		mounted() {
			let params = { id: this.form.cinema_room_id };
			httpApi.cinemaRoomApi.queryById(params).then((res) => {
				console.log('放映厅信息', res);
				this.roomInfo = res.data.data;
			});
		},
	};
</script>

<style lang="scss" scoped></style>
