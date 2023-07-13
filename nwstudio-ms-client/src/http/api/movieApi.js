import myaxios from '../MyAxios';
import BaseUrl from '../BaseUrl';
const bmdUrl = BaseUrl.BMDURL;
const movieApi = {
	/**
	 * 获取所有电影列表
	 * @param {Object} param { page: 1, pagesize: 10 }
	 * @returns Promise
	 */
	queryAllMovie(param) {
		let url = bmdUrl + '/movie-infos';
		return myaxios.get(url, param);
	},
	/**
	 * 获取电影类型列表
	 * @returns  Promise
	 */
	queryMoiveType() {
		let url = bmdUrl + '/movie-types';
		return myaxios.get(url);
	},
	/**
	 * 根据类别id查询电影列表
	 * @param {Object} param  {cid:3,page:1,pagesize:20}
	 * @returns Promise
	 */
	queryMovieByTypeId(param) {
		let url = bmdUrl + '/movie-infos/category';
		return myaxios.get(url, param);
	},
	/**
	 * 查询ID对应的电影
	 * @param {Object} param {id:5}
	 */
	queryMoiveById(param) {
		let url = bmdUrl + '/movie-info/query';
		return myaxios.get(url, param);
	},
	/**
	 * 通过电影关键字查找
	 * @param {Object} param 查询电影的参数 { name:xx,page:xx,pagesize:xx}
	 * @returns Promise
	 */
	queryMovieByName(param) {
		let url = bmdUrl + '/movie-infos/name';
		return myaxios.post(url, param);
	},
	/**
	 * 新增电影电影
	 * @param {Object} param {categoryId:xx,cover:xx,title:xx,type:xx,starActor:xx,showingon:xx,score:xx,description:xx,duration:xx}
	 * @returns Promise
	 */
	addMovie(param) {
		let url = bmdUrl + '/movie-info/add';
		return myaxios.post(url, param);
	},
	/**
	 *
	 * @param {Object} param {id:xx,categoryId:xx,cover:xx,title:xx,type:xx,starActor:xx,showingon:xx,score:xx,description:xx,duration:xx}
	 * @returns Promise
	 */
	updateMoive(param) {
		let url = bmdUrl + '/movie-info/update';
		return myaxios.post(url, param);
	},
	/**
	 * 通过id删除电影
	 * @param {Object} param  { id:电影id }
	 * @returns Promise
	 */
	DeleteMovieById(param) {
		let url = bmdUrl + '/movie-info/del';
		return myaxios.post(url, param);
	},
	/**
	 * 为电影绑定演员
	 * @param {Object} param {movie_id:xx,actor_ids:xx}
	 * @returns Promise
	 */
	bindActorForMovie(param) {
		let url = bmdUrl + '/movie-info/bind-actors';
		return myaxios.post(url, param);
	},
};

export default movieApi;
