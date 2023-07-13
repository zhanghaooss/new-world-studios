import myaxios from '../MyAxios';
import BaseUrl from '../BaseUrl';
const bmdUrl = BaseUrl.BMDURL;

const adminApi = {
	/**
	 * 执行登录业务
	 * @param {Object} params {username:xx,  password:xxx}
	 */
	login(params) {
		return myaxios.post(bmdUrl + '/user/login', params);
	},
};

export default adminApi;
