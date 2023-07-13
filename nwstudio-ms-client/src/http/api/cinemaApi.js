import myaxios from '../MyAxios';
import BaseUrl from '../BaseUrl';
const bmdUrl = BaseUrl.BMDURL;
const cinemaApi = {
	queryCinemaTags() {
		let url = bmdUrl + '/cinema/tags';
		return myaxios.get(url);
	},
	/**
	 * 新建电影院
	 * @param {Object} params
	 * @returns Promise
	 */
	addCinema(params) {
		let url = bmdUrl + '/cinema/add';
		return myaxios.post(url, params);
	},
	/**
	 * 查询所有电影院
	 * @returns Promise
	 */
	queryAllCinema() {
		let url = bmdUrl + '/cinemas';
		return myaxios.get(url);
	},
	/**
	 * 根据id获取电影院
	 * @param {Object} params {id}
	 * @returns Promise
	 */
	queryCinemaById(params) {
		let url = bmdUrl + '/cinema/query';
		return myaxios.get(url, params);
	},
	/**
	 * 修改电影院
	 * @param {Object} params
	 * @returns Promise
	 */
	updateCinema(params) {
		let url = bmdUrl + '/cinema/update';
		return myaxios.post(url, params);
	},
};
export default cinemaApi;
