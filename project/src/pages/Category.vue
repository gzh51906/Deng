<template >

    <div class="z-category">
        <div class="z-cate-title">
            <el-button-group>
                <el-button type="primary" class="z-cate-btn" size="small" >分类</el-button>
                <el-button type="primary" class="z-cate-btn" size="small" >组合筛选</el-button>
            </el-button-group>
        </div>    

        <div class="z-cate-list">
            <el-tabs :tab-position="tabPosition" >
                <el-tab-pane label="类型" >
                    <div class="z-box-content">
                        <div class="cat-top">全部类型</div>
                        <div class="cat-content">
                            <el-row :gutter="8">
                                <el-col :span="8" v-for="item in catlist[0].list" :key="item.gsid">
                                    <div class="grid-content bg-purple z-type-item" @click="goto(item.gsid)"> <img :src="item.gsimage" class="z-type-img" style="width:37px;height:37px;"><span>{{item.gsname}}</span></div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="风格">
                    <div class="z-box-content">
                        <div class="cat-top">全部风格</div>
                        <div class="cat-content">
                            <el-row :gutter="8">
                                <el-col :span="8" v-for="item in catlist[1].list" :key="item.attrid">
                                    <div class="grid-content bg-purple z-type-item"  @click="goto(item.attrid)"> <img :src="item.attrimage" class="z-type-img" style="width:37px;height:37px;"><span>{{item.attrname}}</span></div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="空间">
                    <div class="z-box-content">
                        <div class="cat-top">全部空间</div>
                        <div class="cat-content">
                            <el-row :gutter="8">
                                <el-col :span="8" v-for="item in catlist[2].list" :key="item.attrid">
                                    <div class="grid-content bg-purple z-type-item"> <img :src="item.attrimage" class="z-type-img" style="width:37px;height:37px;"><span>{{item.attrname}}</span></div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="品牌">
                    <div class="z-box-content">
                        <div class="cat-top">全部品牌</div>
                        <div class="cat-content">
                            <el-row :gutter="8">
                                <el-col :span="24" v-for="item in catlist[3].list" :key="item.attrid">
                                    <div class="brand-title">{{item.key}}</div>
                                    <div class="grid-content bg-purple z-brand-item">
                                        <a href="###" v-for="ele in item.list" :key="ele.gbid">
                                            <img :src="ele.gbimage" alt="">
                                            <span>{{ele.gbname}}</span>
                                        </a>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="价格" >
                    <div class="z-box-content">
                        <div class="cat-top">价格</div>
                        <div class="cat-content">
                            <el-row :gutter="8">
                                <el-col :span="24" >
                                    <div class="grid-content bg-purple z-price-item" >
                                        <ul class="z-price">
                                            <li>0-500</li>
                                            <li class="z-price-list" v-for="item in catlist[4].list" :key="item.attrid">
                                                <img :src="item.attrimage" alt="">
                                                <span>{{item.attrname}}</span>
                                            </li>
                                        </ul>
                                        <div class="z-choose">
                                            <input type="text" placeholder="最低价" class="z-price-min"><input type="text" placeholder="最高价" class="z-price-max">
                                            <button class="z-price-btn">确定</button>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="材质">
                    <div class="z-box-content">
                        <div class="cat-top">全部材质</div>
                        <div class="cat-content">
                            <el-row :gutter="8">
                                <el-col :span="8" v-for="item in catlist[5].list" :key="item.attrid">
                                    <div class="grid-content bg-purple z-type-item"> <img :src="item.attrimage" class="z-type-img" style="width:37px;height:37px;"><span>{{item.attrname}}</span></div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>    
        </div>

    </div>

</template>

<script>    
    export default{
        data(){
            return{
                tabPosition:'left',
                tabName:['类型','风格','空间','品牌','价格','材质'],
                catlist:[]    
                
            }
        },
        methods:{
            goto(id){
                this.$router.push({name:'goods',params:{id}})
            }
        },
        async created(){
            let {data} = await this.$axios.get('http://localhost:2000/category')
            
            this.catlist = data.data
            console.log(this.catlist)
        
        }
    }




</script>
<style>
    .z-category{
        height: 100%;
    }
    .z-cate-title{
        width: 100%;
        height: 44px;
        padding-top: 5px;
        box-sizing: border-box;
        border-bottom: 1px solid #e5e5e5;
    }
    .z-cate-list{
        background:#fff;
        height: 100%;
    }
    .z-cate-btn{
        width: 85px;
        color:#555;
        background:#fff;
        border-color:#e9e9e9;
        border-radius: 20px;
    }
    .z-cate-title{
        width: 100%;
        margin:0 auto;
        text-align: center;
        background:#fff;
    }
    .cat-top{
        height: 35px;
        background:#fff;
        text-align: center;
        line-height: 35px;
        padding:0 10px;
        color:orangered;
    }
    .el-tabs{
        height: 100%;
        background: #e5e5e5;
        /* overflow: scroll;  */
    }
    .el-tabs__header{
        background: #fff;
        height: 100%;
        margin-right: 0 !important;
    }
    .el-tabs__content{
        background:#e9e9e9;
        padding:5px;
        height: 100%;
        overflow: scroll;
    }
    .el-tabs__item{
       border-bottom:1px solid #e9e9e9;  
       border-right:none;
    }
    .el-tabs__active-bar{
        height: 0 !important;
    }
    .z-type-img{
        display:block;
        margin:10px auto;
    }
    .z-type-item{
        text-align:center;
        height:85px;
        /* line-height:85px; */
        background:#fff;
        color:#555;
        margin-top:5px;
        font-size:10px;
        display: block;
        padding:10px 0;
        box-sizing: border-box;
        overflow:hidden;
    }
    .z-brand-item{
        background:#fff;
        margin-top:5px; 
        display: block;
        padding:10px 0;
        box-sizing: border-box;
    }
    .z-brand-item a{
        color:#555;
        height: 60px;
        line-height: 60px;
        display:block;
        text-decoration: none;
        border-bottom:1px solid #e5e5e5;
    }
    .z-brand-item a img{
        width: 90px;
        height: 36px;
        vertical-align: middle;
        margin-right: 10px;
    }
    .z-brand-item a span{
        padding-left: 10px;
        font-size: 14px;
    }
    .el-tabs__nav-wrap{
        height: 100%;
    }
    .brand-title{
        margin:5px;
        padding-left: 20px;
    }

    .z-price{
        padding:0 20px 20px 20px;
        font-size: 10px;
         background: #fff;
         overflow: hidden;
    }
    .z-price li{
        width: 45%;
        height: 42px;
        line-height: 42px;
        border:1px solid #999;
        margin:10px 10px 0 0;
        border-radius:5px;
        float:left;
        list-style: none;
        text-align: center;
    }
    .z-price li img{
        width: 30px;
        height: 30px;
        vertical-align: middle;
    }
    .z-choose{
        padding:20px;
        text-align: center;
        background: #fff;
    }
    .z-choose input{
        width: 40%;
        height: 40px;
        text-align: center;
        background:#e5e5e5;
        line-height: 40px;
        border:none;
    }
    .z-price-min{
        margin-right: 10px;
    }
    .z-price-btn{
        display: block;
        width: 85%;
        margin:10px auto;
        height: 35px;
        border:0;
        background:#999;
    }
</style>