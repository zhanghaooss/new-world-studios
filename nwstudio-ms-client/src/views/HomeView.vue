<template>
	<div>
		<el-container style="height: 100vh">
			<el-aside class="aside" :style="{ width: `${isCollapse ? 65 : 240}px`, transition: '0.4s' }">
				<el-menu
					:default-active="this.$route.path"
					router
					background-color="#345"
					text-color="#bbb"
					:style="{ height: '100vh' }"
					:collapse="isCollapse"
					class="el-menu-vertical-demo"
				>
					<el-menu-item>
						<img width="30px" src="../assets/logo.svg" alt="" />
						<template slot="title">
							<span style="font-size: 1.2em; color: #efefef; font-weight: bold"
								>&nbsp;&nbsp;新世界影城后台管理</span
							>
						</template>
					</el-menu-item>
					<template v-for="(item, index) in MenuList">
						<el-menu-item
							v-if="!item.children || item.children.length == 0"
							:index="item.index"
							:key="item.title"
						>
							<i class="el-icon-message"></i>
							<template slot="title">
								{{ item.title }}
							</template>
						</el-menu-item>
						<el-submenu v-else :index="index + '1'" :key="item.title">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span slot="title">{{ item.title }}</span>
							</template>
							<el-menu-item v-for="i in item.children" :key="i.sub_title" :index="i.index">
								<i class="el-icon-notebook-2"></i>
								<span slot="title">{{ i.sub_title }}</span>
							</el-menu-item>
						</el-submenu>
					</template>
				</el-menu>
			</el-aside>

			<el-container>
				<el-header class="header">
					<i v-show="!isCollapse" class="el-icon-s-fold" @click="isCollapse = true"></i>
					<i v-show="isCollapse" class="el-icon-s-unfold" @click="isCollapse = false"></i>
					<el-breadcrumb style="flex: 1; margin-left: 20px" separator-class="el-icon-arrow-right">
						<el-breadcrumb-item v-for="item in this.$route.meta.breadcrumb" :key="item">{{
							item
						}}</el-breadcrumb-item>
					</el-breadcrumb>
					<span v-if="$store.state.user"
						><i class="el-icon-user-solid"></i> {{ $store.state.user.nickname }}|<i
							class="el-icon-phone"
						></i
						>{{ $store.state.user.phone }}|<i class="el-icon-chat-dot-round"></i
						>{{ $store.state.user.email }}</span
					>
				</el-header>

				<el-main>
					<!-- 二级占位符 -->
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false,
				MenuList: [
					{ title: '首页', index: '/home/index' },
					{
						title: '演员管理',
						children: [
							{ sub_title: '演员列表', index: '/home/actor-list' },
							{ sub_title: '新增演员', index: '/home/actor-add' },
						],
					},
					{
						title: '导演管理',
						children: [
							{ sub_title: '导演列表', index: '/home/director-list' },
							{ sub_title: '新增导演', index: '/home/director-add' },
						],
					},
					{
						title: '电影管理',
						children: [
							{ sub_title: '电影列表', index: '/home/movie-list' },
							{ sub_title: '新增电影', index: '/home/movie-add' },
						],
					},
					{
						title: '电影院管理',
						children: [
							{ sub_title: '电影院列表', index: '/home/cinema-list' },
							{ sub_title: '新增电影院', index: '/home/cinema-add' },
						],
					},
				],
			};
		},

		created() {
			console.log('this.$route(当前路由):', this.$route);
		},
	};
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;

		i {
			font-size: 1.3em;
		}
	}
	.aside::-webkit-scrollbar {
		display: none;
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 240px;
		min-height: 400px;
	}
</style>
