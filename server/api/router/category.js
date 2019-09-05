const express = require('express');

const Router = express.Router();

const {find} = require('../db/mongo');
const {formatData} = require('../utils')

Router.get('/xxx',(req,res)=>{
    
    res.send(123)
})

// 查（获取所有用户）：get /user
Router.get('/',async (req,res)=>{
    let {skip,limit,sort} = req.query;
    let data = await find('cate',{},{skip,limit,sort});
    res.send(formatData({data}))
})
Router.get('/:id',async (req,res)=>{
    let {id} = req.params;
    let data = await find('cate',{_id:id});
    res.send(formatData({data}))
})

module.exports = Router;
