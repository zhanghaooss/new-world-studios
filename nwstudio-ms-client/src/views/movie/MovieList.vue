<template>
	<div class="actor-list">
		<el-form :inline="true" class="demo-form-inline">
			<el-form-item label="名称">
				<el-input
					v-model="name"
					placeholder="请输入要查找的电影名称"
					@keydown.enter.native="searchMovie"
				>
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="searchMovie">查询</el-button>
			</el-form-item>
		</el-form>
		<el-divider content-position="left">电影列表</el-divider>
		<el-table :data="this.MoviesData.result" style="width: 100%">
			<el-table-column label="封面" align="center" width="110px">
				<template slot-scope="scope">
					<img width="60px" :src="scope.row.cover" alt="" />
				</template>
			</el-table-column>
			<el-table-column label="标题" prop="title" align="center"> </el-table-column>
			<el-table-column label="主演" prop="star_actor" align="center"> </el-table-column>
			<el-table-column label="上映时间" prop="showingon" align="center" width="120px">
			</el-table-column>
			<el-table-column label="时长" align="center" width="120px">
				<template slot-scope="scope"> {{ scope.row.duration }}分钟 </template>
			</el-table-column>
			<el-table-column label="所属类别" align="center" prop="type"> </el-table-column>
			<el-table-column label="操作" align="center" width="200">
				<template slot-scope="scope">
					<el-button size="small" type="info" icon="el-icon-user-solid" circle></el-button>
					<el-button size="small" type="success" icon="el-icon-picture" circle></el-button>
					<el-button
						size="small"
						type="warning"
						icon="el-icon-edit"
						circle
						@click="$router.push(`/home/movie-update/${scope.row.id}`)"
					></el-button>
					<el-button
						size="small"
						type="danger"
						icon="el-icon-delete"
						circle
						@click="deleteMovie(scope.row.id)"
					></el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			background
			:current-page="MoviesData.page"
			layout="->,prev, pager, next , jumper ,  total"
			:page-size="MoviesData.pagesize"
			:total="MoviesData.total"
			@current-change="currentPageChange"
		>
		</el-pagination>
	</div>
</template>

<script>
	import httpApi from '../../http';
	export default {
		data() {
			return {
				name: this.$route.query.name ? this.$route.query.name : '',
				MoviesData: {
					page: parseInt(this.$route.params.page) || 1,
					pagesize: 5,
					result: [],
					total: 0,
				},
			};
		},

		methods: {
			//加载首页电影列表
			getMovieList() {
				if (arguments.length == 0) {
					let params = { page: this.MoviesData.page, pagesize: this.MoviesData.pagesize };
					httpApi.movieApi.queryAllMovie(params).then((res) => {
						this.MoviesData = res.data.data;
					});
				}
				if (arguments[0] == 1) {
					let params = {
						name: this.name.trim(),
						page: this.MoviesData.page,
						pagesize: this.MoviesData.pagesize,
					};
					httpApi.movieApi.queryMovieByName(params).then((res) => {
						this.MoviesData = res.data.data;
						this.$router.push({
							path: `/home/movie-list/${this.MoviesData.page}`,
							query: { name: this.name },
						});
					});
				}
			},
			/**
			 * 查找电影
			 * 业务：点击搜索携带输入框的关键字 返回模糊查询的结果列表
			 * 刷新停留 刷新之后输入框的内容还在，且结果列表依旧是模糊查询的结果列表
			 * 点击分页时候 切换的是模糊查询的结果列表
			 */
			searchMovie() {
				if (this.name.trim()) {
					this.MoviesData.page = 1;
					this.getMovieList(1);
				} else {
					this.$router.push('/home/movie-list/1');
					this.getMovieList();
				}
			},
			/**
			 * 分页跳转
			 */
			currentPageChange(page) {
				this.MoviesData.page = page;
				//刷新保留当前页，需要往地址中加当前页的参数
				if (this.$route.query.name) {
					this.$router.push({ path: `/home/movie-list/${page}`, query: { name: this.name } });
					this.getMovieList(1);
				} else {
					this.$router.push('/home/movie-list/' + page);
					this.getMovieList();
				}
			},
			/**
			 * 删除电影
			 */
			deleteMovie(id) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				})
					.then(() => {
						httpApi.movieApi.DeleteMovieById({ id }).then((res) => {
							console.log(res);
							if (res.data.code == 200) {
								this.$message({
									type: 'success',
									message: '删除成功!',
								});
								this.searchMovie();
							}
						});
					})
					.catch(() => {
						this.$message({
							type: 'info',
							message: '已取消删除',
						});
					});
			},
		},
		mounted() {
			this.$route.query.name ? this.getMovieList(1) : this.getMovieList();
			console.log('$router:', this.$router);
			console.log('$route:', this.$route);
		},
	};
</script>

<style lang="scss" scoped></style>
