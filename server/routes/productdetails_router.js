const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/",(req,res)=>{
   
   var sql=`select id,periods,rate,sid from pro_det_huabei`
   pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result)
   })
})

module.exports=router;