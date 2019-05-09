const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/huabei",(req,res)=>{
    //临时构建一个数组
    var arr=[[{periods:"¥466.00×3期",rate:"免费手续"},{periods:"¥233.00×6期",rate:"免费手续"},{periods:"¥125.23×12期",rate:"免费手续"}],[{periods:"¥532.66×3期",rate:"免费手续"},{periods:"¥266.33×6期",rate:"免费手续"},{periods:"¥143.14×12期",rate:"含手续费 ￥9.98/期"}]]
    res.send(arr)
})

module.exports=router;