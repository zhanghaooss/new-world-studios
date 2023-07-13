<template>
	<div>
		<!-- 放映厅 -->
		<el-button type="primary" plain @click="dialogFormVisible = true">新增放映厅</el-button>

		<el-dialog title="新增放映厅" :visible.sync="dialogFormVisible">
			<el-form :model="form" ref="form" :rules="rules" label-width="110px">
				<el-form-item label="放映厅名称" prop="room_name">
					<el-input v-model="form.room_name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="放映厅类型" prop="room_type">
					<el-select
						v-model="form.room_type"
						multiple
						filterable
						remote
						reserve-keyword
						placeholder="请选择放映厅类型"
						:remote-method="remoteMethod"
						:loading="loading"
					>
						<el-option
							v-for="item in type_option"
							:key="item.type_id"
							:label="item.type_name"
							:value="item.type_name"
						>
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="submit">确 定</el-button>
			</div>
		</el-dialog>
		<el-divider content-position="left">放映厅列表</el-divider>

		<el-table :data="cinemaRoomData" style="width: 100%">
			<el-table-column label="放映厅名称" prop="room_name"></el-table-column>
			<el-table-column label="放映厅类型" prop="room_type"></el-table-column>
			<el-table-column sortable label="座位数" align="center">
				<template slot-scope="scope">
					{{ scope.row.room_size ? scope.row.room_size : '[暂未更新]' }}
				</template>
			</el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<el-button
						size="small"
						type="success"
						icon="el-icon-view"
						circle
						@click="$router.push('/home/showingon-plan-list/' + scope.row.id)"
					></el-button>
					<!-- 跳转到对应放映厅的排片计划 -->
					<el-button
						size="small"
						type="primary"
						icon="el-icon-plus"
						circle
						@click="$router.push('/home/showingon-plan-add/' + scope.row.id)"
					></el-button>
					<el-button
						size="small"
						type="warning"
						icon="el-icon-s-grid"
						circle
						@click="$router.push('/home/seat-template/' + scope.row.id)"
					></el-button>
					<el-button
						size="small"
						type="danger"
						icon="el-icon-delete"
						circle
						@click="deleteRoom(scope.row.id)"
					></el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import httpApi from '@/http';
	export default {
		data() {
			return {
				dialogFormVisible: false,
				form: {
					room_name: '',
					room_type: [],
					movie_cinema_id: this.$route.params.cinemaId,
				},
				rules: {
					room_name: [{ required: true, message: '必填', trigger: 'blur' }],
					room_type: [{ required: true, message: '必填', trigger: 'change' }],
				},
				type_option: [],
				loading: false,
				cinemaRoomData: [],
			};
		},
		methods: {
			getTypesList() {
				httpApi.cinemaRoomApi.queryAllTypes().then((res) => {
					this.type_option = res.data.data;
				});
			},
			remoteMethod() {},
			submit() {
				this.$refs['form'].validate((valid) => {
					if (valid) {
						this.form.room_type = String(this.form.room_type);
						httpApi.cinemaRoomApi.add(this.form).then((res) => {
							console.log(res);
							if (res.data.code == 200) {
								this.$message({
									message: '添加成功成功',
									type: 'success',
								});
							}
							this.getRoom();
						});
						this.dialogFormVisible = false;
					}
				});
			},
			getRoom() {
				httpApi.cinemaRoomApi.list({ cinema_id: this.form.movie_cinema_id }).then((res) => {
					console.log(this.form.movie_cinema_id + '对应的所有影厅:', res);
					this.cinemaRoomData = res.data.data;
				});
			},
			deleteRoom(id) {
				httpApi.cinemaRoomApi.delete({ id }).then((res) => {
					console.log('删除放映厅：', res);
					if (res.code == 200) {
						this.$message({
							message: '删除成功',
							type: 'success',
						});
					}
					this.getRoom();
				});
			},
		},
		mounted() {
			this.getTypesList();
			this.getRoom();
		},
	};
</script>

<style lang="scss" scoped></style>
