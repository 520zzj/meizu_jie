//使用express构建web服务器
const express=require('express');
const bodyParser=require('body-parser');
var cors=require('cors');
var session=require("express-session")
//引入路由模块
const Index=require("./routes/index.router.js");
const Head=require("./routes/head.router.js")
const login=require("./routes/login_router")
const register=require("./routes/register_router")
var app=express();
var server=app.listen(9000);
app.use(session({//配置session
    secret:"128字符串",
    resave:false,
    saveUninitialized:true
}))
//启用cors跨域，只允许   的请求访问
//前端附带身份凭证，withCredentials=true，服务器不能用origin的值不能为*
app.use(cors({
    "origin":["http://127.0.0.1:8080","http://127.0.0.1:5500"],
    credentials:true
}));
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
/*把主页路由器挂载到/index下面*/
app.use("/index",Index)
// 把网页头部的路由器挂载到/head下面
app.use("/head",Head)
app.use("/login",login)
app.use("/register",register)