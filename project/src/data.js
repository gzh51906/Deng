const mongodb = require('mongodb');

const {DBurl} = require('../config.json');

// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;

//连接mongoDB

MongoClient.connect(DBurl, async(err, client)=>{
    // err:连接失败时的错误信息，默认为null
    // client：连接数据库的客户端
    // if(err) throw err;

    // 连接具体一个数据库，无则自动创建
    let db = client.db('category');
    let collection = db.collection("ztype");
    let result = await collection.find().toArray()
    console.log(result)
    
});

