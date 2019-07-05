const express=require("express")
const pool=require("../pool")
const router=express.Router()

router.get("/",(req,res)=>{
    var sql=`select id,img_src,pname,unitprice,net,color,intsto,mount,fscid from shopcart`
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
//逐条插入
router.post("/add",(req,res)=>{
    var img_src=req.body.img_src
    var pname=req.body.pname
    var unitprice=req.body.unitprice
    var net=req.body.net
    var color=req.body.color
    var intsto=req.body.intsto
    var mount=req.body.mount
    var fscid=req.body.uid
    var sql=`insert into shopcart(id,img_src,pname,unitprice,net,color,intsto,mount,fscid) value (null,?,?,?,?,?,?,?,?)`
    pool.query(sql,[img_src,pname,unitprice,net,color,intsto,mount,fscid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1})
        }else{
            res.send({code:-1})
        }
    } )
})
//批量插入
router.post("/addMore",(req,res)=>{
    var cart=req.body.cart
    //转换成js对象
    cart=JSON.parse(cart)
    var fscid=req.body.uid
    console.log("这里是批量插入")
    console.log(cart)
    console.log(fscid)
    var arrin=[],arrout=[]
    for(var item of cart){
        arrin=[null,item.img_src,item.pname,item.unitprice,item.net,item.color,item.intsto,item.mount,fscid]
        arrout.push(arrin)
    }
    var sql=`insert into shopcart(id,img_src,pname,unitprice,net,color,intsto,mount,fscid) values ?`
    pool.query(sql,[arrout],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1})
        }else{
            res.send({code:-1})
        }
    }) 
})
module.exports=router