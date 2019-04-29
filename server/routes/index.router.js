//接收来自主页的请求，连接数据库，响应请求
const express=require("express");
const router=express.Router();
const pool=require("../pool.js");
router.get("/prev",(req,res)=>{
    var sql=`select * from index_prev`
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err)
        res.send(result)
    })
})
router.get("/phone",(req,res)=>{
    var sql=`select * from index_phone`
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err)
        res.send(result)
    })
})
router.get("/sound",(req,res)=>{
    var sql=`select * from index_sound`
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err)
        res.send(result)
    })
})
router.get("/part",(req,res)=>{
    var sql=`select * from index_part`
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err)
        res.send(result)
    })
})
router.get("/aside",(req,res)=>{
    var sql=`select * from index_aside`
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err)
        res.send(result)
    })
})
router.get("/cart",(req,res)=>{
    var sql=`select * from index_cart`
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err)
        res.send(result)
    })
})
router.get("/flyme",(req,res)=>{
    var sql=`select * from index_flyme`
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err)
        res.send(result)
    })
})
router.get("/video",(req,res)=>{
    var sql=`select * from index_video`
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err)
        res.send(result)
    })
})
// 获取输入框提示信息
router.get("/product_list",(req,res)=>{
    var keyword=req.query.keyword
    var sql=`select pname from product_list where pname like "%${keyword}%"`
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err)
        res.send(result)
    })
})
module.exports=router;