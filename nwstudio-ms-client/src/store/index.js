import Vue from 'vue';
import Vuex from 'vuex';
import httpApi from '@/http';
import { Notification } from 'element-ui';
import router from '@/router';
import { KEYS, setSession, getSession } from '@/utils/storage';

Vue.use(Vuex);

export default new Vuex.Store({
	//还可以分模块写
	state: {
		user: getSession(KEYS.USER_INFO),
		token: getSession(KEYS.TOKEN),
	},
	getters: {},
	mutations: {
		updateUser(state, payload) {
			state.user = payload;
		},
		saveToken(state, payload) {
			state.token = payload;
		},
	},
	actions: {
		login(store, params) {
			httpApi.adminApi.login(params).then((res) => {
				console.log('登陆结果,', res);
				if (res.data.code == 200) {
					store.commit('updateUser', res.data.data.user);
					store.commit('saveToken', res.data.data.token);
					//向Storage中存储user对象
					setSession(KEYS.USER_INFO, JSON.stringify(res.data.data.user));
					setSession(KEYS.TOKEN, JSON.stringify(res.data.data.token));
					router.replace('/home/index');
					Notification.success({
						message: '登录成功',
					});
				} else {
					Notification.error({ message: res.data.msg });
				}
			});
		},
	},

	modules: {},
});
