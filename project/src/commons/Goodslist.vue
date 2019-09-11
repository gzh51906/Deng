<template>
  <div class="goodslist">
    <div>
      <el-row :gutter="20">
        <el-col :span="12" v-for="(item,index) in goodslist" :key="index">
          <div class="grid-content bg-purple goodslist_img">
                <div class="goods-img">
                   <img :src="item.gpimage" />
                </div>
                <div class="goods-txt">
                  <span class="goods-tit"><p>{{item.gname}}</p></span>
                  <span class="goods-model">型号：{{item.gbusnumber}}</span>
                  <p class="goods-model">规格：其它尺寸定制</p>
                  <span class="ori-price"></span>
                  <div class="goods-num">
                    <span class="goods-price fl">
                      <em class="fs20">{{item.member_moneyname}}</em>
                      <i>￥</i>{{item.member_price}}
                    </span>
                    <span class="goods-sales fr">销量：{{item.gpsellcount}}</span>
                  </div>
                  <div class="goods-tag"></div>
                </div>      
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
Vue.use(ElementUI);
export default {
  name: "Goodslist",
  data() {
    return {
      goodslist: []
    };
  },

  async created() {
    axios
      .get("api/ajax/getGoods/", {
        params: {
          model: "hot",
          page: 1,
          page_size: 100,
          iamindex: 1,
          is_index: 1
        }
      })
      .then(data => {
        // console.log(data);
        this.goodslist = data.data.data;
        console.log(data.data.data);
      });
  }
};
</script>
 
<style>
* {
  margin: 0;
  padding: 0;
}
.goodslist_img img {
  width: 150px;
}
.goodslist_img {
  width: 173px;
  height: 286px;
  overflow: hidden;
}

</style>