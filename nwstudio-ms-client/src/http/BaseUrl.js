// 管理不同环境下的基础请求路径
const BASEURL_ENV = {
	DEV: {
		BMDURL: 'http://localhost:3010',
		UPLOADURL: 'http://localhost:9000',
	},
	PRO: {
		BMDURL: 'https://web.codeboy.com/bmdapi',
		UPLOADURL: 'https://web.codeboy.com/bmduploadapi',
	},
};
//现在导出的是开发环境的url
export default BASEURL_ENV.DEV;
