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
    //获取输入框dom元素
    var login_btn=document.querySelector("[data-login=btn]")
    var login_uname=document.querySelector("[data-login=uname]")
    var login_upwd=document.querySelector("[data-login=upwd]")
    //声明用于接收验证输入框函数的返回值的变量,默认为false
    var un=false,up=false
   // 封装输入框的验证，并返回一个bool值,为验证结果
    //参数pattern：验证的正则表达式
    //参数elem：要验证的输入框元素
    //isNull：当输入内容为空时的提示
    //success:验证通过的提示
    //fail：验证失败的提示 
    function myreg(pattern,elem,isNull,success,fail){
    var div=elem.parentNode.nextElementSibling
        var reg=pattern
        if(elem.value==""){
            div.className=""
            div.classList.add("tips_fail")
            div.innerHTML=isNull
            return false;
        }else{
            if(reg.test(elem.value)){
                div.className=""
                div.classList.add("tips_success")
                div.innerHTML=success
                return true;
            }else{
                div.className=""
                div.classList.add("tips_fail")
                div.innerHTML=fail
                return false;
            }
        }
    }
    if(login_uname!==null&&login_btn!==null&&login_upwd!==null){
        //验证用户名
        login_uname.addEventListener("blur",function(){
            un=myreg(/^\w{3,8}$/,this,"用户名不能为空","格式正确","格式不规范")
        })
        
        //验证密码
        //input事件监听输入框value的变化
        login_upwd.addEventListener("input",function(){
            up=myreg(/^\d{6}$/,this,"密码不能为空","格式正确","格式不规范")
        })
        //点击登录按钮
        var errbox=document.querySelector("[data-login=errbox]")
        login_btn.addEventListener("click",login)
        //点击登录按钮的函数
        function login(){
            //当输入框都不为空的时候才允许发送ajax
            if(un&&up){
                ajax({
                    method:"get",
                    url:"http://127.0.0.1:9000/login/",
                    dataType:"json",
                    data:`uname=${login_uname.value}&upwd=${login_upwd.value}`
                }).then(res=>{
                    console.log(res)//{code:1}  
                    //如果res.code==1,则跳转页面
                    //否则提示用户或密码错误
                    if(res.code==1){
                        //登录成功返回上一页
                       window.history.go(-1)
                    }else{
                        errbox.style.display="block"
                    }
                })
            }   
        }
        //监听密码输入框，按enter键执行登录操作,用keyup事件
        login_upwd.addEventListener("keyup",function(e){
        //当按回车键时，触发点击登录的函数
        if(e.keyCode==13){
            login()
        }
        })
    }
    
 

//点击确定按钮，错误提示窗消失
    var confirm_btn=document.querySelector("[data-login=cf]")
    confirm_btn.addEventListener("click",function(){
        errbox.style.display="none"
    })
  
})();
