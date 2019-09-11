const express = require('express');
 
const Router = express.Router();

const {find} = require('../db/mongo');
const {formatData} = require('../utils')



// 查（获取所有用户）：get /user
Router.get('/',async (req,res)=>{
    let {skip,limit,sort} = req.query;
    let data = await find('zgoods',{},{skip,limit,sort});
    res.send(formatData({data}))
})
Router.get('/:id',async (req,res)=>{
    let {id} = req.params;
    let data = await find('zgoods',{gsortid:id});
    res.send(formatData({data}))
     
})
Router.get('/:id/xiaoliang',async (req,res)=>{
    let {id} = req.params;
    let data = await find('zgoods',{gsortid:id},{sort:"gpsellcount",asc:1});
    res.send(formatData({data}))
     
})
Router.get('/:id/price',async (req,res)=>{
    let {id} = req.params;
    let data = await find('zgoods',{gsortid:id},{sort:"gpprice",asc:1});
    res.send(formatData({data}))
     
})
Router.get('/:id/renqi',async (req,res)=>{
    let {id} = req.params;
    let data = await find('zgoods',{gsortid:id},{sort:"gpmesellcount",asc:1});
    res.send(formatData({data}))
     
})
Router.get('/:id/xinpin',async (req,res)=>{
    let {id} = req.params;
    let data = await find('zgoods',{gsortid:id},{sort:"gpids",asc:1});
    res.send(formatData({data}))
     
})

Router.get('/:id/info',async (req,res)=>{
    let {id} = req.params;
    let data = await find('zgoods',{gpgoodsid:id});
    res.send(formatData({data}))
     
})
module.exports = Router;
