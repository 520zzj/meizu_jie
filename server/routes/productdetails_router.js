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
   var progress=0
   var cfid=null
   var arrProdet=[]
   var sql=`select pid,pname,title,pdesc,price,support,model,net,intsto,meal,intro from product_details where pname=?`
   // var sql2=`select cid,little_img_src,midsrc,bigsrc,cname,cfid from pro_det_col where cfid=${cfid}`
   var sql2=''
   // cfid=1
   // var obj={
   //    sql2:`select cid,little_img_src,midsrc,bigsrc,cname,cfid from pro_det_col where cfid=${cfid}`
   // }
   // function sqlsortcol(cfid){
   //    var sql2=`select cid,little_img_src,midsrc,bigsrc,cname,cfid from pro_det_col where cfid=${cfid}`
   //    return sql2
   // }
   var p=new Promise(function(resolve,reject){
      resolve()
   })
   p.then(pool.query(sql,[pname],(err,result)=>{
      if(err) throw err;
      if(result.length>0){
         cfid=result[0].pid
         sql2=`select cid,little_img_src,midsrc,bigsrc,cname,cfid from pro_det_col where cfid=${cfid}`
        console.log(cfid)
         console.log(sql2)
        arrProdet.push(result[0])
      }
   }))
   .then(pool.query(sql2,[],(err,result)=>{
      if(err) throw err; 
      console.log(sql2)
      console.log(result)
      if(result.length>0){
         console.log(2)
         arrProdet.push(result[0]) 
         res.send(arrProdet)
      }
   }))
  
})

module.exports=router;