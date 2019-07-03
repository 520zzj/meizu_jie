const express=require('express')
const router=express.Router()
const pool=require('../pool')

router.get("/",(req,res)=>{
    var uname=req.query.uname
    var upwd=req.query.upwd
    var sql=`select id from user where uname=? and upwd=md5(?)`
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err
        //查询失败
        if(result.length==0)
        res.send({code:-1})
        //查询成功
        else{
            //存在用户信息则登录，并把对应的id存到session中
            req.session.uid=result[0].id
            console.log(req.session.uid+"登录页面的session值")
            res.send({code:1})
        }
    })
})


module.exports=router


