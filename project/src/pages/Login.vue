<template>
  <div class="mine">
    <div class="top">
      <i class="el-icon-setting"></i>
      <div class="top_box">
        <div class="cricle"></div>
        <span class="user">{{user}}</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="info">
      <div class="details">
        <div class="text">
          <span>我的订单</span>
          <span class="more">
            查看更多订单
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>
        <div class="pay">
          <el-row>
            <el-col :span="4">
              <div class="box">
                <i class="el-icon-s-ticket"></i>
                <span>待付款</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="box">
                <i class="el-icon-box"></i>
                <span>待发货</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="box">
                <i class="el-icon-truck"></i>
                <span>待收货</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="box">
                <i class="el-icon-chat-line-round"></i>
                <span>待评价</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="box">
                <i class="el-icon-set-up"></i>
                <span>待安装</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="user_view">
      <div class="user-nav">
        <el-row>
          <el-col :span="6">
            <div class="box">
              <i class="el-icon-star-on" style="color:orange"></i>
              <span>商品收藏</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="box">
              <i class="el-icon-sunny" style="color:yellow"></i>
              <span>配灯宝收藏</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="box">
              <i class="el-icon-message-solid" style="color:pink"></i>
              <span>消息中心</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="box">
              <i class="el-icon-shopping-cart-2" style="color:orange"></i>
              <span>购物车</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" >
            <div class="box">
              <i class="el-icon-location-information"
              style="color:green"></i>
              <span>地址管理</span>
            </div>
          </el-col>
          <el-col :span="6" >
            <!-- <div class="box">
              <i class="el-icon-s-ticket"></i>
              <span>商品收藏</span>
            </div> -->
          </el-col>
          <el-col :span="6" >
            <!-- <div class="box">
              <i class="el-icon-s-ticket"></i>
              <span>商品收藏</span>
            </div> -->
          </el-col>
          <el-col :span="6" >
            <!-- <div class="box">
              <i class="el-icon-s-ticket"></i>
              <span>商品收藏</span>
            </div> -->
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: localStorage.getItem("user"),
      data: {}
    };
  },
  methods: {
    goto() {
      console.log(this.$store);
    }
  }
};
</script>
<style>
.mine {
  width: 100%;
}
.mine .top {
  width: 100%;
  height: 100px;
  background-color: #ea5413;
  color: #fff;
}
.mine .el-icon-setting {
  float: right;
  padding: 10px;
}
.mine .top_box {
  width: 90%;
  margin: 0 auto;
  height: 60px;
  padding-top: 20px;
  line-height: 60px;
}
.mine .text {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.mine .text .more {
  float: right;
  color: #999;
}
.mine .top .top_box .cricle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  /* display: inline-block; */
  background: url("http://misc.dengimg.com/style/m/images/user/Avatar-1.png")
    no-repeat center center;
  float: left;
}
.mine .user,
.mine .top .el-icon-arrow-right {
  line-height: 60px;
}
.mine .user {
  float: left;
  margin-left: 20px;
}
.mine .top .el-icon-arrow-right {
  float: right;
}
.mine .info {
  font-size: 12px;
  color: #999;
  background-color: #fff;
}
.mine .details {
  width: 90%;
  margin: 0 auto;
}
.mine .el-row {
  height: 60px;
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.pay i,
.user-nav i {
  display: inline-block;
  font-size: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0px;
}
.pay .box,
.user_view .box {
  position: relative;
  height: 40px;
  line-height: 60px;
  text-align: center;
  margin-top: 10px;
}
.mine .user_view {
  width: 100%;
  margin-top: 10px;
  font-size: 12px;
  color: #999;
  background-color: #fff;
}
.mine .user-nav {
  width: 90%;
  margin: 0 auto;
}

</style>