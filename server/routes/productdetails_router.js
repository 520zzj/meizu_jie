const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/huabei",(req,res)=>{  
   var sql=`select id,periods,rate,sid from pro_det_huabei`
   pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result)
   })
})
router.get("/",(req,res)=>{
   var pname=req.query.pname
   console.log(pname)
   var sql=`select pid,pname,title,pdesc,price,support,model,net,intsto,meal,intro from product_details where pname=?`
   pool.query(sql,[pname],(err,result)=>{
      if(err) throw err;
      res.send(result)
      console.log(result)
   })
})

module.exports=router;