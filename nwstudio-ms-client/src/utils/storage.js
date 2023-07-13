// src/utils/storage.js
// 提供webstorage的数据存储与读取功能的工具模块

/**
 * 此处管理项目中所有需要存储的KEY
 */
export const KEYS = {
	USER_INFO: 'USER_INFO',
	CITY_NAME: 'CITY_NAME',
	TOKEN: 'TOKEN',
};
/**
 * 将传入的key与data配对，存入sessionStorage中
 * @param {String} key
 * @param {Object} data
 */
export const setSession = (key, data) => {
	sessionStorage.setItem(key, JSON.stringify(data));
};
/**
 * 获取key绑定的data
 * @param {String} key
 * @returns
 */
export const getSession = (key) => {
	let data = sessionStorage.getItem(key);
	if (data) {
		return JSON.parse(data);
	} else {
		return null;
	}
};
export const setLocal = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data));
};

export const getLocal = (key) => {
	let data = localStorage.getItem(key);
	if (data) {
		return JSON.parse(data);
	} else {
		return null;
	}
};
