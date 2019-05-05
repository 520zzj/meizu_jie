const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/",(req,res)=>{
    var pno=req.query.pno
    var ps=req.query.pageSize
    if(!pno){
        pno=1
    }
    if(!ps){
        ps=9
    }
    var offset=parseInt((pno-1)*ps)
    ps=parseInt(ps)
    var progress=0;
    var data={}
    var sql=`select pid,pname,pdesc,pprice,psrc,psign from product_list limit ?,?`
    pool.query(sql,[offset,ps],(err,result)=>{
        if(err) throw err;
        progress+=50
        data.prolis=result
        if(progress==100){
            res.send(data)
        }
    })

    var sql2=`select iid,cname,csrc,psrc,prolisId from icon_color_src`
    pool.query(sql2,[],(err,result)=>{
        if(err) throw err;
        progress+=50
        data.color=result
        if(progress==100){
            res.send(data)
        }
    })
})
module.exports=router
