<template>
	<div class="person">
		<img :src="avatar" alt="" />
		<div>{{ name }}</div>
		<el-popconfirm
			confirm-button-text="好的"
			cancel-button-text="不用了"
			icon="el-icon-info"
			icon-color="red"
			title="确定删除吗？"
			@confirm="clickx"
		>
			<i class="el-icon-circle-close" slot="reference"></i>
		</el-popconfirm>
	</div>
</template>

<script>
	export default {
		// 当前组件有两个自定义属性，分别是：name与avatar
		// 父组件可以通过这两个属性向当前组件传参：
		// <person name="张三" avatar="张三.jpg"></person>

		// props: ['name', 'avatar']

		// 对象的方式自定义属性，可以对属性进行约束
		props: {
			name: {
				type: String, // 用于约束参数类型  必须传递String过来
				required: true, // 用于约束参数必填
			},
			avatar: {
				type: String,
				required: true,
			},
		},

		methods: {
			clickx() {
				// 点击叉子之后执行
				// 手动抛出一个自定义事件，通知父组件用户点了叉子
				this.$emit('delete', { name: '老新', time: '刚才' });
			},
		},
	};
</script>

<style lang="scss" scoped>
	.person:hover i {
		display: block;
	}
	.person {
		display: inline-block;
		margin: 0px 10px 10px 0px;
		position: relative;

		i {
			position: absolute;
			top: -8px;
			right: -8px;
			background-color: #fff;
			border-radius: 50%;
			font-size: 1.2em;
			display: none;
		}

		img {
			width: 90px;
		}
		div {
			font-size: 0.9em;
			width: 90px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
