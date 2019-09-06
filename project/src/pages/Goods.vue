<template>
    <div class="z-goods">
        <div class="z-goods-filter">
            <div class="filter-btn" v-for="btn in filterbtn" :key="btn">{{btn}}</div>
        </div>
        <el-row :gutter="20" style="margin:5px auto;">
            <el-col :span="11" v-for="item in list" :key="item._id" class="z-goods-item">
                <div class="grid-content bg-purple">
                    <img :src="item.gpimage" alt="">
                    <div class="goods-info">
                        <p class="goods-title">{{item.gname}}</p>
                        <p class="goods-model">型号:{{item.gbusnumber}}</p>
                        <p class="goods-model">{{item.gpskuvalue[0].name}}:{{item.gpskuvalue[0].value}}</p>
                        <p class="goods-price">{{item.money_name}}:{{item.gpprice}}<span>销量:{{item.gpsellcount}}</span></p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>


</template>

<script>
    export default{
        data(){
            return{
                filterbtn:["人气","价格","新品","销量"],
                list:[]
            }
        },
        async created(){
            console.log(this.$route.params.id)
            let {id} = this.$route.params
            let {data:{data}} = await this.$axios.get(`http://localhost:2000/goods/${id}`);
            console.log(data)
            this.list = data
        }

    }



</script>

<style scoped>
    .z-goods{
        height: 100%;
        overflow: scroll;
    }
    .z-goods-filter{
        width: 100%; 
        height: 40px;
        background:#fff;
        display:flex;
    }
    .filter-btn{
        flex:1;
        text-align: center;
        line-height: 40px;
        font-size: 12px;
    }
    .z-goods-item{
        height: 285px;
        background: #fff;
        margin:0 0 10px 10px;
        padding:0 !important;
    }
    .z-goods-item img{
        max-width: 100%;
    }
    .goods-info{
        padding:0 7px;
    }
    .goods-title{
        font-size: 14px;
        height: 28px;
        line-height: 28px;
        overflow:hidden;
        margin:0;
    }
    .goods-model{
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        overflow:hidden;
        margin:0;
    }
    .goods-price{
        font-size: 13px;
        height: 28px;
        line-height: 28px;
        overflow:hidden;
        margin:0;
        color:orangered;
    }
    .goods-price span{
        color:#999;
        font-size: 10px;
        padding-left: 15px;
    }
</style>