import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

const cate = axios.create({
  // 默认配置
  baseURL: 'http://m.deng.com/ajax/getCategotyFilter/'
});


Vue.prototype.$axios = axios;
Vue.prototype.$cate = cate;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
