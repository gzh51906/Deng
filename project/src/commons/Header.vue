<template>
  <div class="header">
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <div class="head-searchImg" id="search-img-btn">
            <i class="el-icon-camera"></i>
            <p class="txt">识图购</p>
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-light">
          <el-button>搜索</el-button>
        </div>
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
  name: "Header",
  components: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#search-img-btn{
  text-align: center
}
/* .header {
  /* height: 40px; */
  /* background: red; */
/* } */
</style>