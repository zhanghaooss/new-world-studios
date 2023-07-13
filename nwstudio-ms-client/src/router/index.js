import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/home/index',
	},

	{
		path: '/home',
		component: HomeView,

		children: [
			{
				path: 'index',
				name: '/home/index',
				component: () => import('../views/Index.vue'),
			},

			{
				path: 'actor-add',
				name: '/home/actor-add',
				component: () => import('../views/actor/ActorAdd.vue'),
				meta: {
					breadcrumb: ['演员管理', '新增演员'],
				},
			},
			{
				path: 'actor-list',
				name: '/home/actor-list',
				component: () => import('../views/actor/ActorList.vue'),
				meta: {
					breadcrumb: ['演员管理', '演员列表'],
				},
			},
			{
				path: 'director-add',
				name: '/home/director-add',
				component: () => import('../views/director/DirectorAdd.vue'),
				meta: {
					breadcrumb: ['导演管理', '新增导演'],
				},
			},
			{
				path: 'director-list',
				name: '/home/director-list',
				component: () => import('../views/director/DirectorList.vue'),
				meta: {
					breadcrumb: ['导演管理', '导演列表'],
				},
			},

			{
				path: 'movie-list',
				name: '/home/movie-list',
				component: () => import('../views/movie/MovieList.vue'),
				meta: {
					breadcrumb: ['电影管理', '电影列表'],
				},
			},
			{
				path: 'movie-list/:page',
				name: '/home/movie-list/page',
				component: () => import('../views/movie/MovieList.vue'),
				meta: {
					breadcrumb: ['电影管理', '电影列表'],
				},
			},
			{
				path: 'movie-add',
				name: '/home/movie-add',
				component: () => import('../views/movie/MovieAdd.vue'),
				meta: {
					breadcrumb: ['电影管理', '新增电影'],
				},
			},
			{
				path: 'movie-update/:id',
				name: '/home/movie-update/id',
				component: () => import('../views/movie/MovieUpdate.vue'),
				meta: {
					breadcrumb: ['电影管理', '电影列表', '修改电影'],
				},
			},
			{
				path: 'cinema-add',
				name: '/home/cinema-add',
				component: () => import('../views/cinema/CinemaAdd.vue'),
				meta: {
					breadcrumb: ['电影院管理', '新增电影院'],
				},
			},
			{
				path: 'cinema-list',
				name: '/home/cinema-list',
				component: () => import('../views/cinema/CinemaList.vue'),
				meta: {
					breadcrumb: ['电影院管理', '电影院列表'],
				},
			},
			{
				path: 'cinema-update/:cinemaId',
				name: '/home/cinema-update/cinemaId',
				component: () => import('../views/cinema/CinemaUpdate.vue'),
				meta: {
					breadcrumb: ['电影院管理', '电影院列表', '修改电影院'],
				},
			},
			{
				path: 'cinema-room-list/:cinemaId',
				name: '/home/cinema-room-list/cinemaId',
				component: () => import('../views/cinema/CinemaRoomList.vue'),
				meta: {
					breadcrumb: ['电影院管理', '电影院列表', '影厅列表'],
				},
			},
			{
				path: 'showingon-plan-add/:roomId',
				name: '/home/showingon-plan-add/roomId',
				component: () => import('../views/cinema/ShowingonPlanAdd.vue'),
				meta: {
					breadcrumb: ['电影院管理', '电影院列表', '影厅列表', '添加排片'],
				},
			},
			{
				path: 'showingon-plan-list/:roomId',
				name: '/home/showingon-plan-list/roomId',
				component: () => import('../views/cinema/ShowingonPlanList.vue'),
				meta: {
					breadcrumb: ['电影院管理', '电影院列表', '影厅列表', '排片计划列表'],
				},
			},
			{
				path: 'seat-template/:id',
				name: '/home/seat-template/id',
				component: () => import('../views/cinema/CinemaRoomSeatTemplate.vue'),
				meta: {
					breadcrumb: ['电影院管理', '电影院列表', '影厅列表', '座位模板'],
				},
			},
		],
	},
	{
		path: '/user/login',
		name: '/user/login',
		component: () => import('../views/user/Login.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
router.beforeEach((to, from, next) => {
	console.log('哪里来', from);
	console.log('哪里去', to);
	if (to.path == '/user/login') {
		next();
		return;
	}
	if (store.state.user) {
		next();
	} else {
		router.push('/user/login');
	}
	next(); //调用此方法才可以继续跳转原本的业务流程
});
export default router;
