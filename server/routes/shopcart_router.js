const express=require("express")
const pool=require("../pool")
const router=express.Router()

router.get("/",(req,res)=>{
    var sql=`select id,img_src,pname,props,unitprice,amount,subtotal from shopcart`
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
router.get("/delete",(req,res)=>{
    console.log(req.session.uid+"购物车页面的session值")
    var id=req.query.id;
    var sql=`delete from shopcart where id=?`
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows!=0)
        res.send({code:1,msg:"删除成功"})
        else
        res.send({code:-1,msg:"删除失败"})
    })
})
router.get("/delMore",(req,res)=>{
    var id=req.query.ids
    var sql="delete from shopcart where id in ("+id+")"
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows!=0)
        res.send({code:1,msg:"删除成功"})
        else
        res.send({code:-1,msg:"删除失败"})
    })
})
module.exports=router