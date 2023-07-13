import myaxios from '../MyAxios';
import BaseUrl from '../BaseUrl';
const bmdUrl = BaseUrl.BMDURL;
const directorApi = {
	/**
	 * 查询所有导演列表
	 * @returns Promise
	 */
	queryAllDirector() {
		let url = bmdUrl + '/movie-directors';
		let param = { page: 1, pagesize: 100 };
		return myaxios.get(url, param);
	},
	/**
	 * 新增导演导演
	 * @param {Object} param {directorName:演员名字,directorAvatar:演员头像}
	 * @returns Promise
	 */
	addDirector(param) {
		let url = bmdUrl + '/movie-director/add';
		return myaxios.post(url, param);
	},
	/**
	 * 通过导演关键字查找
	 * @param {Object} param 查询导演的参数 { name:关键字 }
	 * @returns Promise
	 */
	queryDirectorByName(param) {
		let url = bmdUrl + '/movie-directors/name';
		return myaxios.post(url, param);
	},
	/**
	 * 通过id删除导演
	 * @param {Object} param  { id:导演id }
	 * @returns Promise
	 */
	DeleteDirectorById(param) {
		let url = bmdUrl + '/movie-director/del';
		return myaxios.post(url, param);
	},
};

export default directorApi;
