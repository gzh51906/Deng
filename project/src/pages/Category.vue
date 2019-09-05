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
                                    <div class="grid-content bg-purple z-type-item"> <img :src="item.gsimage" class="z-type-img" style="width:37px;height:37px;"><span>{{item.gsname}}</span></div>
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
                                    <div class="grid-content bg-purple z-type-item"> <img :src="item.attrimage" class="z-type-img" style="width:37px;height:37px;"><span>{{item.attrname}}</span></div>
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
                                <el-col :span="24" v-for="item in catlist[2].list" :key="item.attrid">
                                    <div class="grid-content bg-purple z-type-item"></div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="价格" >价格</el-tab-pane>
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
            tabClick(){
                alert(123)
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
    .z-cate-title{
        width: 100%;
        height: 44px;
        padding-top: 5px;
        box-sizing: border-box;
        border-bottom: 1px solid #e5e5e5;
    }
    .z-cate-list{
        background:#fff;
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
    }
    .el-tabs__header{
        background: #fff;
        height: 100%;
        margin-right: 0 !important;
    }
    .el-tabs__content{
        background:#e9e9e9;
        padding:5px;
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
    .el-tabs__nav-wrap{
        height: 100%;
    }
</style>