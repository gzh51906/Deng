<template>
  <div class="footer">
    <el-row :gutter="20">
      <el-col :span="6"  v-for="(item,index) in tabs " :key="index">
        <div class="grid-content bg-purple">{{item.text}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

export default {
  name: "Footer",
  data() {
    return {
      tabs: [
        {
          name: "home",
          text: "首页",
          path: "/home",
          icon: "el-icon-s-home"
        },
        {
          name: "goods",
          text: "商品",
          path: "/goods",
          icon: "el-icon-menu"
        },
        {
          name: "cart",
          text: "购物车",
          path: "/cart",
          icon: "el-icon-shopping-cart-2"
        },
        {
          name: "mine",
          text: "我的",
          path: "/mine",
          icon: "el-icon-s-custom"
        }
      ]
    };
  },
  components: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>