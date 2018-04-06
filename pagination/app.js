
/*  
分页项目：
    前端：
        1. ajax加载数据，通过数据渲染页面;
        2. ajax 发送给后台页码信息
        3. 重新渲染页面;
    后端：  
        1. 请求 对应接口(localhost:3000/pagination ) 的时候 返回json数据;
            [{},{},{}]
            {   
                "page":"1",
                "pageSize":"5",
                "data":[{},{}]
            }
        2. 请求接口 带有数据 ( 字段 page = number); 根据page查询对应的数据,重新返回json;
    loclahost:3000/pagination
    请求方式: GET；
    返回数据: json 
            {
                "page":"1",
                "pageSize":"5",
                "data":[{},{}]
            }
    接受参数: page=number
    返回结果：json
            {
                "page":"1",
                "pageSize":"5",
                "data":[{},{}]
            }
*/
import express from "express";
import mongodb from "mongodb";
const mongo = mongodb.MongoClient;//创建一个客户端实例 , 并连接到本地主机的默认端口
const app = express();
//主页路由设置;
//前端路由;
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})
//接口路由; 
app.get("/pagination",(req,res)=>{
    // 查看前端发送的 page 字段的数据;
    // console.log(req.query.page);
    // 链接数据库;获取数据；返回数据;
    // res.send("[1,2,3,4,5]");
    // console.log(mongo);
    //判定前端是否传入数据; 如果值为空那么赋值为0;
    let page = req.query.page;
    page = page ? parseInt(page) : 0;
    //链接数据库并返回数据;
    mongo.connect("mongodb://localhost:27017",(err,client)=>{
        let odb = client.db("hello");//连接到hello数据库
        //设计分页逻辑 => skip | limit 来执行; skip 上的page值 => 前端发送的内容;
        odb.collection("movie")
        .find({})
        .skip(page * 5)
        .limit(5)
        .toArray((err,result)=>{
            let oResult = Object.assign({},{//对象合并的方法，第一个参数为空数组，
                data:result
            });
            res.send(oResult);
        })
    });
})
//端口监听;
app.listen("3000","localhost",()=>{
    console.log("服务开启成功,请访问 http://localhost:3000");
})