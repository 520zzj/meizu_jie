const express=require("express")
const router=express.Router()
const pool=require("../pool.js")
router.get("/phone",(req,res)=>{
    var sql=`select * from head_phone`
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err)
        res.send(result)
    })
})
//获取某用户的购物车预购买数量
router.get('/buyNum',(req,res)=>{
    var fscid=req.query.uid//获取用户id
    var sql=`select mount from shopcart where fscid=?`
    pool.query(sql,[fscid],(err,result)=>{
        if(err) throw err;
        else{
            var num=0
            for(var v of result){
                num+=parseInt(v.mount)
            }
            res.send({code:1,data:num})
        }
    })
})

module.exports=router