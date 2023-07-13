import myaxios from '../MyAxios';

import BaseUrl from '../BaseUrl';
const bmdUrl = BaseUrl.BMDURL;

const movieThumbApi = {
	/**
	 * 添加剧照接口
	 * @param {Object} params 详见接口文档
	 */
	add(params) {
		return myaxios.post(bmdUrl + '/movie-thumb/add', params);
	},

	/**
	 * 查询相应电影id下的所有剧照
	 * @param {Object} params 详见接口文档 page,pagesize
	 */
	listByMovieId(params) {
		return myaxios.get(bmdUrl + '/movie-thumbs/movieid', params);
	},

	/**
	 * 删除相应ID的剧照
	 * @param {Object} params  {id:1}
	 */
	delete(params) {
		return myaxios.post(bmdUrl + '/movie-thumb/del', params);
	},
};

export default movieThumbApi;
