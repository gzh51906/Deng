import Vue from 'vue';

// 1. 引入
import Vuex from 'vuex';

// 2. 安装（使用）
Vue.use(Vuex);

import category from './category';
import common from './common';
import cart from './cart';


// 3. 实例化并配置参数
let store = new Vuex.Store({
    // store模块化
    modules:{
        category,
        cart,
        common,
    }
});



export default store;