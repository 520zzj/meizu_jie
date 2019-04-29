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
module.exports=router