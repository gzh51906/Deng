<template>
  <div class="banner ">
    <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="(item,index) in banners" :key="index" @click="goto">
       <img :src="item.image" />
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import axios from "axios"
Vue.use(ElementUI);
export default {
  name: "Banner",
  data(){
    return{
       banners: [
				{
					image: 'http://img06.dengimg.com/Gallery/AutoLink/img_210586.jpg'
				},{
					image: 'http://img06.dengimg.com/Gallery/AutoLink/img_210585.jpg'
				},{
					image: 'http://img06.dengimg.com/Gallery/AutoLink/img_210584.jpg'
				},{
					image: 'http://img06.dengimg.com/Gallery/AutoLink/img_210583.jpg'
				},{
					image: 'http://img06.dengimg.com/Gallery/AutoLink/img_210582.jpg'
				}
			]
    }
  },
  components: {

  },methods: {
    goto(){
      
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.banner {
  height: 187.5px;
  width: 100%;
  background: red;
  text-align: center;
}

.banner img{
  display:inline-block;
  width: 100%;
  height: 187.5px;
}
.el-carousel__indicator--horizontal{
   display: inline-block;
    padding: 15px 3px;
    
}
.el-carousel__indicators--horizontal{
bottom: 100px;
border-radius:50%; 
}
</style>