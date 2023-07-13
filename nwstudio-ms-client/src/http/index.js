//  src/http/index
// 整合所有子模块的入口

import actorApi from './api/actorApi.js';
import directorApi from './api/directorApi.js';
import movieApi from './api/movieApi.js';
import cinemaApi from './api/cinemaApi.js';
import adminApi from './api/AdminApi.js';
import cinemaRoomApi from './api/CinemaRoomApi.js';
import movieThumbApi from './api/MovieThumbApi.js';
import showingonPlanApi from './api/ShowingonPlanApi.js';
const httpApi = {
	actorApi,
	directorApi,
	movieApi,
	cinemaApi,
	adminApi,
	cinemaRoomApi,
	movieThumbApi,
	showingonPlanApi,
};

export default httpApi;
