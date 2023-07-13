import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BaseUrl from './http/BaseUrl';

// 全局变量
Vue.prototype.UPLOADURL = BaseUrl.UPLOADURL;
Vue.use(ElementUI);
Vue.config.productionTip = false;
//高德密钥
window._AMapSecurityConfig = {
	securityJsCode: 'c0638bbae6c8a11043a851e89c9cc68a',
};
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
