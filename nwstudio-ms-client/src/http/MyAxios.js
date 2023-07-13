import axios from 'axios';
// qs模块可以将对象转换为查询字符串
import qs from 'qs';
import store from '@/store';

// 创建axios实例
const instance = axios.create();

instance.interceptors.request.use(function (config) {
	let token = store.state.token;
	if (token) {
		config.headers['Authorization'] = token;
	}
	return config;
});
const myaxios = {
	/**
	 * 基于 axios 发送 get 请求，返回 Promise 对象。
	 * @param {String} url 请求资源路径
	 * @param {Object} params 请求参数
	 */
	get(url, params) {
		return instance({ url, params, method: 'GET' });
	},

	/**
	 * 基于axios发送post请求
	 * @param {String} url 请求资源路径
	 * @param {Object} params 请求参数  {page:1, pagesize:20}
	 */
	post(url, params) {
		// qs模块，可以将params转换成查询字符串
		// {page:1, pagesize:20}  ==>  page=1&pagesize=20
		return instance({
			url,
			data: qs.stringify(params),
			method: 'POST',
		});
	},
};

export default myaxios;
