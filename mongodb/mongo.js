const MongoClient = require('mongodb').MongoClient;
const fs = require("fs");
const qs = require("querystring");
// Connection URL
const url = 'mongodb://localhost:27017/';

MongoClient.connect(url,(err,client)=>{
    if(err){
        console.log(err.message);
        return ;
    }
    //use hello => 链接数据库;
    let odb = client.db("hello");
    // odb.createCollection('site2', function (err, res) {
    //     if (err) throw err;
    //     console.log("创建集合!");
    //     client.close();
    // });

    // odb.collection("site") //获取集合
    // .insert([{name:"yanghuaizhi",age:"16"},{name:"wuyanzu",age:"40"}],(err,result)=>{
    //     if(err) throw err;
        
    //     console.log("数据插入成功");

    // })

    // odb.collection("site")
    // .update({age:"16"},{$set:{name:"gaohongbo"}},(err,result)=>{
    //     if(err) throw err;
    //     console.log("成功更新");
    //     client.close();
    // })


    // odb.collection("movie").find({}).skip(5).limit(5).toArray((err,result)=>{
    //     console.log(result.length);
    //     let sResult = JSON.stringify(result)

    //     fs.writeFile("movie.json", sResult,"utf8",(err)=>{
    //         if(err){
    //             console.log(err);
    //         }
    //     })
    //     // console.log(result);
    // })
    //一定要关闭数据库;
    // client.close();
})

