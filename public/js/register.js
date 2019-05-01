// 注册验证
(function(){
    var uname=document.querySelector("[data-reg=uname]")
    var upwd=document.querySelector("[data-reg=upwd]")
    var cfupwd=document.querySelector("[data-reg=cfupwd]")
    var phone=document.querySelector("[data-reg=phone]")
    var email=document.querySelector("[data-reg=email]")
    //保存验证结果的一些变量,默认全为false
    var un=false,up=false,cf=false,ph=false,em=false
    // 当文本框失去焦点的时候，判断输入是否合法，并给与提示 
    //用户名验证，还需验证是否用户名被占用，发送ajax查询到被占用，给与提示
    uname.addEventListener("blur",function(){
     un=myreg(/^\w{3,8}$/,this,"用户名不能为空","用户名可用","格式不规范")
     if(un){
        ajax({
            method:"get",
            dataType:"json",
            url:"http://127.0.0.1:9000/register/select",
            data:"uname="+uname.value
        }).then(res=>{
            if(res.code==-1){
                console.log(res.msg)
                uname.parentNode.nextElementSibling.innerHTML=res.msg
                // //提示颜色也发生变化为红色
                uname.parentNode.nextElementSibling.className=""
                uname.parentNode.nextElementSibling.classList.add("err")
                
            }
        })
     }
      
    })
    upwd.addEventListener("blur",function(){
        up=myreg(/^\d{6}$/,this,"密码不能为空","密码可用","格式不规范")
        
    })
    cfupwd.addEventListener("blur",function(){
       var val=upwd.value
       var reg=new RegExp("^"+val+"$")
       cf=myreg(reg,this,"确认密码不能为空","两次输入密码一致","两次输入的密码不一致")
    })
    phone.addEventListener("blur",function(){
        ph=myreg(/^1[34578]\d{9}$/,this,"手机号不能为空","手机号可用","格式不规范")
    })
    email.addEventListener("blur",function(){
        em=myreg(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,this,"邮箱不能为空","邮箱可用","格式不规范")
    })
    

    // 封装输入框的验证，并返回一个bool值,为验证结果
    //参数pattern：验证的正则表达式
    //参数elem：要验证的输入框元素
    //isNull：当输入内容为空时的提示
    //success:验证通过的提示
    //fail：验证失败的提示
    function myreg(pattern,elem,isNull,success,fail){
    var span=elem.parentNode.nextElementSibling 
        if(!elem.value){
            span.className=""
            span.classList.add("err")
            span.innerHTML=isNull
            return false;
        }
        else{
            if(pattern.test(elem.value)){
                span.className=""
                span.classList.add("success")
                span.innerHTML=success
                return true;
            }else{
                span.className=""
                span.classList.add("err")
                span.innerHTML=fail
                return false;
            }
        }
    }


    //给提交按钮添加点击事件，发送ajax请求
    var sb=document.querySelector("[data-reg=submit]")
    sb.addEventListener("click",function(){
        //输入框全部验证通过才允许发送请求
        if(un&&up&&cf&&ph&&em){
            ajax({
                method:"post",
                dataType:"json",
                url:"http://127.0.0.1:9000/register/insert",
                data:`uname=${uname.value}&upwd=${upwd.value}&phone=${phone.value}&email=${email.value}`
            }).then(res=>{
                console.log(res)
            })
        }
      
    })
})();
