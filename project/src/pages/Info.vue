<template>
    <div class="info">
        <el-tabs v-model="activeName" >
            <el-tab-pane label="商品" name="first">
                <div class="block">
                    <el-carousel trigger="click">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <img :src="info.gpimage" class="info-img">
                    </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="goods-info">
                    <div class="z-info-title">{{info.gname}}</div>
                    <div class="z-info-slogan">{{info.gsubtitle}}</div>
                    <div class="z-info-model">型号:{{info.gbusnumber}}</div>
                    <div class="z-info-price">￥{{info.gpprice}}({{info.money_name}})</div>
                    <div class="z-info-detail"><span>安装费:￥{{info.gpcost}}</span><span>销量:{{info.gpsellcount}}</span><span>库存:3</span></div>
                    <div class="z-info-yushou">预售<span>付款后30天内发货 </span></div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="详情" name="second">详情</el-tab-pane>
            <el-tab-pane label="参数" name="third">参数</el-tab-pane>
        </el-tabs>
        
        
        <div class="info-bottom">
            <el-button-group class="z-info-btn">
                <el-button type="primary"><i class="el-icon-s-home el-icon--top" @click="gohome"></i>首页</el-button>
                <el-button type="primary"><i class="el-icon-star-off el-icon--top"></i>收藏</el-button>
                <el-button type="primary"><i class="el-icon-shopping-cart-1 el-icon--top"></i>购物车</el-button>
                <el-button type="primary" class="gocart" @click="add2cart(jinfo)">加入购物车</el-button>
            </el-button-group>

        </div>
    </div>


</template>
<script>
import { Collapse } from 'element-ui';
    export default{
        data(){
            return{
                info:"",
                activeName:'first',
                jinfo:"",
            }
        },

        async created(){
            let {data:{data}} = await this.$axios.get(`http://localhost:2000/goods/${this.$route.params.id}/info`);
            this.info = data[0];
            this.jinfo = JSON.stringify(data[0])
            console.log(JSON.stringify(this.info))
        },
        methods:{
            add2cart(data){
                this.$axios.get(`http://120.24.156.103:2000/cart/cart`)
            },
            gohome(){
                this.$router.push("/home")
            }
        },




    }


</script>

<style scoped>
    .info{
        width: 100%;
    }
    .el-tabs{
        text-align: center;
    }
    .block{
        height: 375px;
    }
    .el-carousel-item{
        height: 100% !important;
    }
    
    .el-carousel{
        height: 375px !important;
    }
    .info-img{
        max-width: 100%;
        height: 375px;
    }
    .goods-info{
        background:#fff;
        padding:10px;
        text-align: left;
    }
    .el-tabs__content{
        padding:0 !important;
    }
    .z-info-title{
        font-size: 14px;
        line-height: 16px;
        height: 32px;
        overflow: hidden;
        padding-bottom: 5px;
    }
    .z-info-slogan{
        color:#ec4d46;
        padding-bottom: 10px;
        font-size: 12px;
        width: 100%;
    }
    .z-info-model{
        font-size: 14px;
        height: 24px;
        line-height: 24px;
        color:#999;
        width:100%;
    }
    .z-info-price{
        color:#ea5413;
        font-size: 16px;
        width: 100%;
        padding-bottom: 10px;
    }
    .z-info-detail{
        width: 100%;
        font-size: 14px;
        color:#999;
        padding:5px 0;
        border-bottom: 1px solid #e9e9e9;
    }
    .z-info-detail span{
        margin:5px 15px;
        
    }.z-info-detail span:nth-of-type(1){
        margin-left: 0;
    }
    .z-info-yushou{
         font-size: 14px;
         line-height: 20px;
         height: 20px;
    }
    .z-info-yushou span{
        color:#f55f0c;
        margin-left: 10px;
    }
    .el-tabs__header{
        margin-bottom:0 !important;
    }
    .info-bottom{
        height: 50px;
        background: skyblue;
        position: fixed;
        bottom:0;
        z-index: 500;
        width:100%;
    }
    .el-icon--top{
        display:block;
        font-size: 22px;
    }
    .z-info-btn{
        display: flex;
    }
    .el-button{
        background:#fff;
        color:#555;
        border:0;
    }
    .gocart{
        flex:1;
        background: #f55f0c;
        color:#fff;
    }
</style>