const express=require("express")
const router=express.Router()
const pool=require("../pool.js")

//插入新用户信息
router.post("/insert",(req,res)=>{
    var uname=req.body.uname
    var upwd=req.body.upwd
    var phone=req.body.phone
    var email=req.body.email
    var sql=`INSERT INTO user(id,uname,upwd,phone,email) VALUES (null,?,md5(?),?,?)`
    pool.query(sql,[uname,upwd,phone,email],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows!=0)
       res.send({code:1,msg:"注册成功"})
       else
       res.send({code:-1,msg:"注册失败"})
    })
})
//查询是否存在已注册用户
router.get("/select",(req,res)=>{
    var uname=req.query.uname
    var sql=`select id from user where uname=?`
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
        if(result.length!=0){
            res.send({code:-1,msg:"用户名已存在"})
        }else{
           res.send({code:1,msg:"用户名可用"})
        }
     
     
    })
})
module.exports=router