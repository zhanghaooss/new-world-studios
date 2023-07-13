import myaxios from '../MyAxios';
import BaseUrl from '../BaseUrl';
const bmdUrl = BaseUrl.BMDURL;
const actorApi = {
	/**
	 * 查询所有演员列表
	 * @returns Promise
	 */
	queryAllActor() {
		let url = bmdUrl + '/movie-actors';
		let param = { page: 1, pagesize: 100 };
		return myaxios.get(url, param);
	},
	/**
	 * 新增演员
	 * @param {Object} param {actorName:演员名字,actorAvatar:演员头像}
	 * @returns Promise
	 */
	addActor(param) {
		let url = bmdUrl + '/movie-actor/add';
		return myaxios.post(url, param);
	},
	/**
	 * 通过演员关键字查找
	 * @param {Object} param 查询演员的参数 { name:关键字 }
	 * @returns Promise
	 */
	queryActorByName(param) {
		let url = bmdUrl + '/movie-actors/name';
		return myaxios.post(url, param);
	},
	/**
	 * 通过id删除演员
	 * @param {Object} param  { id:演员id }
	 * @returns Promise
	 */
	DeleteActorById(param) {
		let url = bmdUrl + '/movie-actor/del';
		return myaxios.post(url, param);
	},
};

export default actorApi;
