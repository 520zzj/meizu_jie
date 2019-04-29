    //语言切换
$(function(){
    var li_language=document.querySelector(".footer-box .footer-top .footer-link .language-item")
    var drop_lang=document.querySelector(".footer-box .footer-top .footer-link .language-dropdown")
    li_language.addEventListener("mouseover",function(){
        drop_lang.style.display="block"
    })
    li_language.addEventListener("mouseout",function(){
        drop_lang.style.display="none"
    })
});
//微信二维码
$(function(){
    var a_weichat=document.querySelector(".footer-box .footer-top .weichat")
    var weichat_code=document.querySelector(".footer-box .outer-link .weichat_qr_code")
    a_weichat.addEventListener("mouseover",function(){
        weichat_code.style.display="block"
    })
    a_weichat.addEventListener("mouseout",function(){
        weichat_code.style.display="none"
    })
});
//登录操作
(()=>{
    var login_btn=document.querySelector("[data-login=btn]")
    var login_uname=document.querySelector("[data-login=uname]")
    var login_upwd=document.querySelector("[data-login=upwd]")
    var span_uname=login_uname.parentNode.nextElementSibling.children[0]
    span_upwd=login_upwd.parentNode.nextElementSibling.children[0]
    //验证用户名
    login_uname.addEventListener("blur",function(){
        var reg=/^\w{3,8}$/
        if(!reg.test(login_uname.value)){
            span_uname.parentNode.classList.add("tips_fail")
            span_uname.innerHTML="输入不规范"
        }
    })
    login_uname.addEventListener("focus",function(){
        span_uname.innerHTML=""
        span_uname.parentNode.classList.remove("tips_fail")
    })
   //验证用户密码
   login_upwd.addEventListener("input",function(){
       if(login_upwd.value!=""){
        var reg=/^\d{6}$/
        span_upwd.parentNode.classList.add("tips_fail")
        span_upwd.innerHTML="请输入规范"
        if(reg.test(login_upwd.value)){
            span_upwd.parentNode.classList.remove("tips_fail")
            span_upwd.innerHTML=""
        }
       }
    })
    //点击登录按钮
    var errbox=document.querySelector("[data-login=errbox]")
    login_btn.addEventListener("click",function(){
        var uname=login_uname.value
        var upwd=login_upwd.value
        ajax({
            method:"get",
            url:"http://127.0.0.1:9000/login/",
            dataType:"json",
            data:`uname=${uname}&upwd=${upwd}`
        }).then(res=>{
            console.log(res)//{code:1}  
            //如果res.code==1,则跳转页面
            //否则提示用户或密码错误
            if(res.code==1){
                console.log("页面跳转")
            }else{
                errbox.style.display="block"
            }
        })
    })
//点击确定按钮，错误提示窗消失
    var confirm_btn=document.querySelector("[data-login=cf]")
    confirm_btn.addEventListener("click",function(){
        errbox.style.display="none"
    })
  
})();
