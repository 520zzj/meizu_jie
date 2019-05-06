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
    var sql=`select pid,pname,pdesc,pprice,psign from product_list limit ?,?`
  //商品信息
    pool.query(sql,[offset,ps],(err,result)=>{
        if(err) throw err;
        progress+=50
        data.prolis=result
        if(progress==150){
            res.send(data)
        }
    })


    var sql2=`select iid,cname,csrc,psrc,prolisId from icon_color_src`
   //指示器保存的信息
    pool.query(sql2,[],(err,result)=>{
        if(err) throw err;
        progress+=50
        data.color=result
        if(progress==150){
            res.send(data)
        }
    })
//获取商品个数，来确定共有多少页数
    var sql3=`select count(pid) as mount from product_list`
    pool.query(sql3,[],(err,result)=>{
        if(err) throw err;
        //计算总页数
        data.pages=Math.ceil(result[0].mount/ps)
        progress+=50
        if(progress==150)
        res.send(data)
    })
})

 

module.exports=router
