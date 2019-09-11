const express = require('express');
 
const Router = express.Router();

const {insert} = require('../db/mongo');
const {formatData} = require('../utils');

Router.post('/cart',async (req,res)=>{
    
    let data = await insert('cartlist',{"user":"laoxie"});
    res.send(data)
     
})

module.exports = Router;
