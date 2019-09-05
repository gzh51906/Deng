<template>
  <div id="app">
    <router-view></router-view>
    <div class="z_nav">
      <el-row :gutter="24">
      <el-col :span="24">
        <el-menu
          :default-active="active"
          class="el-menu-demo"
          mode="horizontal"
          router
          @select="changeActive"
        >
          <el-menu-item :index="item.path" v-for="item in menu" :key="item.name" class="z_list">
              <i></i>
              {{item.text}}
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    
  </div>
</template>

<script>
  import Vue from 'vue'
  import ElementUI from 'element-ui'
  Vue.use(ElementUI)
  import "element-ui/lib/theme-chalk/index.css";

export default {
  name: 'app',
  data() {
    return {
      active: "/home",
      menu: [
        {
          name: "home",
          text: "首页",
          path: "/home",
        },
        {
          name: "category",
          text: "分类",
          path: "/category",
        },
        {
          name: "cart",
          text: "购物车",
          path: "/cart",
        },
        {
          name: "mine",
          text: "我的订阅",
          path: "/mine",
        }
      ]
    }
  },
  methods:{
    goto(path){
      this.$router.push({path})
    },
    changeActive(index, path) {
      console.log(index, path);
      this.active = index;
    }
  }
}
</script>

<style>
  body,html{
    margin:0;
    height: 100%;
  }
  
  #app{
    height: 100%;
    display: flex;
    background: #eee;
    flex-direction: column;
  }
  .z_nav{
    width: 100%;
    height: 50px;
    position:fixed;
    bottom:0;
    background:#fff;
    z-index:200;
    border-top:1px solid #e9e9e9;
  }
  .z_nav_el{
    height: 50px;
    text-align: center;
    color:#555;
  }
  .el-menu-demo{
    display:flex;
  }
  .el-menu{
    display:flex;
  }
  .z_list{
    text-align: center;
    flex:1;
  }
  .z-category{
      width: 300px;
  }
  #app>div:nth-of-type(1){
    width:100%;
  }
</style>
