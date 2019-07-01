const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/",(req,res)=>{
   var pname=req.query.pname
   // console.log(pname)
   var progress=0
   var cfid=null
   var arrProdet=[]
   var sql=`select pid,pname,title,pdesc,price,support,model,net,intsto,meal,intro from product_details where pname=?`
   var sql2=''
   var sql3=''
   function query1(){
      return new Promise(function(resolve,rejuct){
         pool.query(sql,[pname],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
               cfid=result[0].pid
               sql2=`select cid,little_img_src,midsrc,bigsrc,cname,cfid from pro_det_col where cfid=${cfid}`
               sql3=`select id,periods,rate,sid,hfid from pro_det_huabei where hfid=${result[0].pid}`
              arrProdet.push(result[0])
              resolve()
            }
         })
        
      })
   }
  function query2(){
     return new Promise(function(resolve,reject){
      pool.query(sql2,[],(err,result)=>{
         if(err) throw err; 
         if(result.length>0){
            arrProdet.push(result) 
            resolve();
         }
      })
     })
  }
  function query3(){
     return new Promise(function(resolve,reject){
         pool.query(sql3,[],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
               arrProdet.push(result)
               res.send(arrProdet)
            }
            resolve();
         })
     })
  }
  query1().then(query2).then(query3)
 
  
})

module.exports=router;