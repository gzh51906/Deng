<template>
    <div class="z-goods">
        <div class="z-search">
            <div class="backbtn " @click="gocat()">
                <i class="el-icon-back"></i>
            </div>
            <div class="demo-input-suffix">
                <el-input
                    style="height:30px"
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input2">
                </el-input>
            </div>
            <div class="search-btn">搜索</div>
        </div>
        <div class="z-goods-filter">
            <div class="filter-btn"  @click="renqisort()">人气</div>
            <div class="filter-btn"  @click="pricesort()">价格</div>
            <div class="filter-btn"  @click="xinpinsort()">新品</div>
            <div class="filter-btn"  @click="xiaoliangsort()">销量</div>
        </div>
        <el-row :gutter="20" style="margin:5px auto;">
            <el-col :span="11" v-for="item in list" :key="item._id" class="z-goods-item" @click.native="goto(item.gpgoodsid)">
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
                list:[],
                input2:'', 
            }
        },
        async created(){
            let {id} = this.$route.params
            let {data:{data}} = await this.$axios.get(`http://120.24.156.103:2000/goods/${id}`);
            this.list = data
        },
        methods:{
            async pricesort(){ 
                let {data:{data}} = await this.$axios.get(`http://120.24.156.103:2000/goods/${this.$route.params.id}/price`);
                this.list = data
            },
            async renqisort(){ 
                let {data:{data}} = await this.$axios.get(`http://120.24.156.103:2000/goods/${this.$route.params.id}/renqi`);
                this.list = data
            },
            async xiaoliangsort(){ 
                let {data:{data}} = await this.$axios.get(`http://120.24.156.103:2000/goods/${this.$route.params.id}/xiaoliang`);
                this.list = data
            },
            async xinpinsort(){ 
                let {data:{data}} = await this.$axios.get(`http://120.24.156.103:2000/goods/${this.$route.params.id}/xinpin`);
                this.list = data
            },
            gocat(){ 
                this.$router.push({name:'category'})
            },
            goto(id){
                this.$router.push({name:'info',params:{id}})
            }
            
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
    .backbtn{
        height: 40px;
        line-height:40px ;
        
    }
    .el-icon-back{
        font-size: 24px;
        color:#999;
        padding-left: 10px;
    }
    .z-search{
        height: 40px;
        background:#fff;
        line-height: 40px;
    }
    .z-search>div{
        float: left;
    }
    .demo-input-suffix{
        padding:0 25px;
    }
    .el-input__inner{
        height: 30pxs;
    }
</style>