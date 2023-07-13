<template>
	<div>
		<!-- 表单 -->
		<el-form ref="form" :model="form" :rules="rules" label-width="100px" style="width: 600px">
			<el-form-item label="封面图片" prop="cover">
				<el-upload
					class="avatar-uploader"
					:action="`${UPLOADURL}/upload`"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload"
				>
					<img style="object-fit: cover" v-if="form.cover" :src="form.cover" class="avatar" />
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<el-form-item label="电影类别" prop="categoryid">
				<el-radio-group v-model="form.categoryId">
					<el-radio :label="1">热映</el-radio>
					<el-radio :label="2">待映</el-radio>
					<el-radio :label="3">经典</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="电影名称" prop="title">
				<el-input v-model="form.title" placeholder="请输入要添加的电影名称" />
			</el-form-item>
			<el-form-item label="电影类型" prop="type">
				<el-select v-model="form.type" multiple placeholder="请选择电影类型">
					<el-option
						v-for="item in types"
						:key="item.id"
						:label="item.typename"
						:value="item.typename"
					>
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="电影主演" prop="starActor">
				<el-select
					v-model="form.starActor"
					multiple
					filterable
					remote
					reserve-keyword
					placeholder="请输入主演名称"
					:remote-method="remoteMethod"
					:loading="loading"
				>
					<el-option
						v-for="item in actors"
						:key="item.id"
						:label="item.actor_name"
						:value="item.actor_name"
					>
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="上映时间" prop="showingon">
				<el-date-picker
					type="date"
					placeholder="选择日期"
					value-format="yyyy-m-d"
					v-model="form.showingon"
					style="width: 100%"
				></el-date-picker>
			</el-form-item>

			<el-form-item label="电影评分" prop="score">
				<el-rate
					style="height: 40px; display: flex; align-items: center"
					v-model="form.score"
					:colors="colors"
				>
				</el-rate>
			</el-form-item>
			<el-form-item label="电影时长" prop="duration">
				<el-input v-model="form.duration" />
			</el-form-item>
			<el-form-item label="电影简介" prop="description">
				<div style="border: 1px solid #ccc">
					<Toolbar
						style="border-bottom: 1px solid #ccc"
						:editor="editor"
						:defaultConfig="toolbarConfig"
						:mode="mode"
					/>
					<Editor
						style="height: 300px; overflow-y: hidden"
						v-model="form.description"
						:defaultConfig="editorConfig"
						:mode="mode"
						@onCreated="onCreated"
					/>
				</div>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import httpApi from '../../http';

	import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
	export default {
		components: { Editor, Toolbar },
		data() {
			return {
				loading: false,
				actors: [],
				types: [],
				editor: null,
				toolbarConfig: {},
				editorConfig: { placeholder: '请输入内容...' },
				mode: 'default', // or 'simple'
				colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
				form: {
					cover: '',
					categoryId: 1,
					title: '',
					type: [],
					starActor: [],
					showingon: '',
					score: 4,
					duration: '',
					description: '<p>hello</p>',
				},
				rules: {
					cover: [{ required: true, message: '该字段必填', trigger: 'blur' }],
					categoryId: [{ required: true, message: '该字段必填', trigger: 'change' }],
					title: [{ required: true, message: '该字段必填', trigger: 'blur' }],
					type: [{ required: true, message: '该字段必填', trigger: 'change' }],
					starActor: [{ required: true, message: '该字段必填', trigger: 'blur' }],
					showingon: [{ required: true, message: '该字段必填', trigger: 'change' }],
					score: [{ required: true, message: '该字段必填', trigger: 'blur' }],
					duration: [{ required: true, message: '该字段必填', trigger: 'blur' }],
					description: [{ required: true, message: '该字段必填', trigger: 'blur' }],
				},
			};
		},
		methods: {
			onCreated(editor) {
				this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
			},
			//远程表单
			remoteMethod(query) {
				httpApi.actorApi.queryActorByName({ name: query }).then((res) => {
					this.actors = res.data.data;
				});
			},
			//电影类型
			getTypes() {
				httpApi.movieApi.queryMoiveType().then((res) => {
					this.types = res.data.data;
				});
			},
			// 提交表单
			submit() {
				this.form.type = this.form.type.join('／');
				this.form.starActor = this.form.starActor.join('／');
				this.$refs['form'].validate((valid) => {
					if (valid) {
						httpApi.movieApi.addMovie(this.form).then((res) => {
							console.log(res);
							if (res.data.code == 200) {
								this.$message({
									message: '恭喜添加成功',
									type: 'success',
								});
								// 重置表单将会重置每个表单项，需要form-item提供prop属性
								this.$refs['form'].resetFields();
							}
						});
					}
				});
			},

			// 上传成功后执行
			handleAvatarSuccess(res, file) {
				console.log('上传成功', res);
				// 将返回的图片访问路径 存入 this.form中
				this.form.cover = res.data;
			},

			// 头像上传前执行：格式、大小的验证，该方法需要返回true、false
			// true:  验证通过可以上传
			// false: 验证不通过，阻止上传
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isPNG = file.type === 'image/png';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!(isJPG || isPNG)) {
					this.$message.error('上传头像图片只能是 JPG/PNG 格式且大小不能超过 2MB!');
				} else if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}

				return (isJPG || isPNG) && isLt2M;
			},
		},
		mounted() {
			this.getTypes();
		},
		beforeDestroy() {
			const editor = this.editor;
			if (editor == null) return;
			editor.destroy(); // 组件销毁时，及时销毁编辑器
		},
	};
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="scss" scoped></style>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409eff;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 120px;
		height: 120px;
		line-height: 120px;
		text-align: center;
	}
	.avatar {
		width: 120px;
		height: 120px;
		display: block;
	}
</style>
