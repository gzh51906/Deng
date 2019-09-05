
import Vue from 'vue'
import axios from 'axios';

import Home from '../pages/Home.vue'
import Category from '../pages/Category.vue'
import Reg from '../pages/Reg.vue'
import Login from '../pages/Login.vue'
import Mine from '../pages/Mine.vue'
import Cart from '../pages/Cart.vue'
import Goods from '../pages/Goods.vue'

//引入路由
import VueRouter from  'vue-router'

//使用路由
Vue.use(VueRouter)

//实例化路由
let router = new VueRouter({
    mode:'history',
    routes:[{
        name:'home',
        component:Home,
        path:"/home"
    },{
        name:'category',
        component:Category,
        path:"/category"
    },{
        name:'goods',
        component:Goods,
        path:"/goods"
    },{
        name:'mine',
        component:Mine,
        path:"/mine"
    },{
        name:'cart',
        component:Cart,
        path:"/cart"
    },{
        name:'login',
        component:Login,
        path:"/login"
    },{
        name:'reg',
        component:Reg,
        path:"/reg"
    }]

})

export default router
