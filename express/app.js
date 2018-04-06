 const express = require("express");
 const app = express();

 app.get("/",(req,res)=>{
    // res.send("hello world");
    res.sendFile("./views/index.html")
 })

 app.listen("8000","localhost",()=>{
     console.log("服务开启成功");
 });