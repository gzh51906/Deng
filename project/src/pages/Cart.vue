<template>
  <div class="cart">
    <div class="top">
      <el-row>
        <el-col :span="24" class="cart-word">
          <i class="el-icon-back" @click="back"></i>
          <el-button type="text">购物车</el-button>
          <el-button type="text" class="card-edit">编辑</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="goods">
      <div class="goods-list" v-for="item in cartData" :key="item.goodsid">
        <div class="store">
          <el-row :gutter="20">
            <el-col :span="24">
              <div :class="item.isActive ? 'checkbox checked':'checkbox'">
                <i :class="item.isActive ? 'el-icon-check':''"></i>
              </div>
              <span>{{item.store}}</span>
            </el-col>
          </el-row>
        </div>
        <div class="goods-info">
          <el-row :gutter="20" class="row"> 
            <el-col :span="24">
              <div
                :class="item.isActive ? 'checkbox checked':'checkbox'"
                @click="changeDot(item.goodsid,item.isActive)"
              >
                <i :class="item.isActive ? 'el-icon-check':''"></i>
              </div>
              <div class="detail">
                <img :src="item.goodsurl" alt />
              </div>
              <div class="goods-text">
                <h3>{{item.goodsname}}</h3>
                <p>型号：{{item.type}}</p>
                <p>规格：{{item.type}}</p>
                <p>￥{{item.total}}</p>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="line">
            <el-col :span="11" class="num">
              <span>购买数量</span>
            </el-col>
            <el-col :span="13" class="cal">
              <el-input-number size="mini"></el-input-number>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="cart-cal">
      <div class="cart-tal">
        <el-row>
          <el-col :span="10" class="mid">
            <div class="checkbox checked">
              <i class="el-icon-check"></i>
            </div>
            <span>全选</span>
            <span>合计：</span>
          </el-col>
          <el-col :span="14">
            <el-button type="danger" class="getsum">结算</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      cartData(state) {
        return state.cart.cartlist;
      },
    })
  },
  methods: {
    ...mapMutations({
      changeQty: "changeQty",
      remove: "removeItem",
      changeDot:"changeDot",
      clear: function(commit, payload) {
        commit("clearCart");
      }
    }),
    // ...mapActions(['changeDotAsync']),
    back() {
      this.$router.go(-1); 
    }
  },
  created() {
    this.$store.dispatch("getcart");
    this.$store.dispatch("changeDot",{goodsid,isActive});
  }
};
</script>
<style>
.cart {
  width: 100%;
  color: #999;
  font-size: 12px;
}
.cart .top {
  height: 45px;
  background-color: #ea5413;
  color: #fff;
}
.cart .top span {
  font-size: 12px;
  color: #fff;
}
.cart .cart-word {
  line-height: 45px;
  text-align: center;
  position: relative;
}
.cart .top .el-icon-back {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.cart .top .card-edit {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.cart .goods-list {
  margin-top: 8px;
  background-color: #fff;
}
.cart .goods-list .store {
  height: 30px;
  line-height: 30px;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
}
.cart .checkbox {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #999;
  /* line-height: 15px; */
  display: inline-block;
  vertical-align: middle;
  position: relative;
}

.cart .checked {
  background-color: #ea5413;
}
.cart .checked .el-icon-check {
  font-size: 15px;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.cart .store span {
  margin-left: 10px;
  vertical-align: middle;
}
.cart .goods-info {
  height: 100px;
  background-color: #fff;
}
.cart .goods-info .detail img {
  width: 80px;
  height: 80px;
  vertical-align: middle;
  margin-left: 10px;
}
.goods-info div {
  display: inline-block;
}
.goods-info p {
  line-height: 10px;
}

.cart .goods-list .goods-info {
  height: 130px;
  width: 90%;
  margin: 0 auto;
}
.cart .goods-info .goods-text {
  line-height: 12px;
  font-size: 12px;
  color: #333;
  vertical-align: middle;
  margin-left: 10px;
}
.goods-text h3 {
  font-size: 14px;
  margin: 5px;
}
.goods-text p {
  line-height: 12px;
  margin: 5px;
}
.goods-info .el-row {
  width: 100%;
}
.goods-info .row {
  margin-top: 10px;
}
.goods-info .num {
  text-align: center;
}
.goods-info .cal {
  position: absolute;
  right: 0px;
  top: 0;
}
.goods-info .line {
  height: 30px;
  line-height: 30px;
  position: relative;
}
.cart .cart-cal .cart-tal {
  width: 90%;
  margin: 0 auto;
  height: 40px;
}
.cart .cart-cal {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 50px;
  background-color: #fff;
}
.cart .cart-cal .mid {
  margin-top: 10px;
}
.cart .cart-cal .mid span {
  margin-left: 10px;
}
.cart .getsum {
  float: right;
  vertical-align: middle;
}
.goods {
  height: 500px;
  overflow: auto;
}
</style>