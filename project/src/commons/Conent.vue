<template>
  <div class="connet "  >
      <el-row :gutter="20" class="container-fluid i_nav"  >
         <el-col :span="6"  v-for="(item,index) in goodslist " :key="index">
           <div class="grid-content bg-purple connet_img" >
               <img :src='item.src'/>
               <p>{{item.text}}</p> 
           </div>
           </el-col>
      </el-row>
       <div class="img_zhineng"> <img src='../img/d_zhineng.png'/> </div>
       <div class="news">
           <el-row>
                   <el-col :span="4">
                        <div class="grid-content bg-purple news_img">
                            <img src="../img/img_203744.jpg">
                        </div>
                   </el-col>
                   <el-col :span="18">
                     <div class="grid-content bg-purple-light new_text">
                    <p> 附近体验馆：广东省中山市古镇镇灯网旗舰店</p>
                    <span> 地址:广东省中山市古镇镇中兴大道121号</span>
                     </div></el-col>
            
           </el-row>
       </div>
        <div></div>
  </div>
 
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// import axios from 'axios';
export default {
  name: "Conent",
  data(){
    return{
      goodslist:[
        {text:"品牌街",src:require('../img/img_176690.png')},
        {text:"团购专区",src:require('../img/img_176691.png')},
        {text:"限时特卖",src:require('../img/img_176692.png')},
        {text:"现货专区",src:require('../img/img_176693.png')},
        {text:"新品上架",src:require('../img/img_176694.png')},
        {text:"体验馆",src:require('../img/img_176695.png')},
        {text:"配灯宝",src:require('../img/img_176696.png')},
        {text:"安全支付",src:require('../img/img_176697.png')},
        
      ],
    }
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.connet {
 
  text-align: center;
  /* background: red; */
}
.i_nav{
  padding:30px 30px 0 0;
}

.connet_img img{
  width: 44px;
}
.img_zhineng img{
  display: inline-block;
  width: 100%;
}
.news{
  background: darkgoldenrod;
}
.new_text p{
    font-size: 15px;
}
.new_text span{
    font-size: 14px;
}
.news_img img{
  padding: 20px;
  width: 100%;
  height: 100%;
}
</style>