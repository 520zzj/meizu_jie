(()=>{
    var li=document.querySelector("[data-lan=drop]")
    var div=li.children[1]
    li.addEventListener("mouseover",function(){
        div.style.display="block"
    })
    li.addEventListener("mouseout",function(){
        div.style.display="none"
    })
})();
(()=>{
    var a=document.querySelector("[data-icon=wexin]")
    var div=document.querySelector("[data-scan=wexin]")
    a.addEventListener("mouseover",function(){
        div.style.display="block"
    })
    a.addEventListener("mouseout",function(){
        div.style.display="none"
    })
})();
(()=>{
    function getQueryVariable(varible){
        var query=window.location.search.substring(1)
        var vars=query.split("&")
        for(var i=0;i<vars.length;i++){
            var pair=vars[i].split("=")
            if(pair[0]==varible){
                return pair[1]
            }
        }
        //如果输入的参数查询字符串里面没有就终止页面跳转
        return false;
    }
    //调用获取查询字符串中参数的函数获取传递过来的参数
    var action=getQueryVariable("action")
    console.log(action)
    var html=""
    //获取登录注册的父元素
    var logRegBox=document.querySelector("[data-toggle=logRegBox]")
    if(action=="log"){
        html+=`<div class="login-box">
        <form action="" class="main-form">
            <p><input type="text" data-login="uname" placeholder="3-10位数字,字母或下划线的用户名" class="ipt"></p>
            <div class="ipt_tip"><span></span></div>
            <p><input type="password" data-login="upwd" placeholder="6位数字的密码" class="ipt"></p>
            <div class="ipt_tip"><span></span></div>
            <p class="remen_code_box"><label for=""><input type="checkbox" data-remenber="code"><i class="remen_code">记住密码</i></label></p>
            <p><input  class="ipt ipt_btn" data-login="btn" value="登录" type="button"></p>
            <div class="regi_code"><a href="">注册</a><a href="">忘记密码？</a></div>
        </form>
    </div>`
    }else if(action=="reg"){
        html+=`<div class="reg-box">
        <form action="">
            <div class="txt">
                <span class="newuser">新用户注册</span>
                <a href="" class="instanlog">直接登录</a>
            </div>
            <div class="form-group">
                <span>用户名：</span>
                <input autofocus type="text" placeholder="3-8位数字、字母或下划线" data-reg="uname">
            </div>
            <span></span>
            <div class="form-group">
                <span>登录密码：</span>
                <input type="password" placeholder="6位数字" data-reg="upwd">
            </div>
            <span></span>
            <div class="form-group">
                <span>确认密码：</span>
                <input type="password" placeholder="6位数字" data-reg="cfupwd">
            </div>
            <span></span>
            <div class="form-group">
                <span>邮箱：</span>
                <input type="text" placeholder="请输入邮箱地址" data-reg="email">
            </div>
            <span></span>
            <div class="form-group">
                <span>手机号：</span>
                <input type="text" placeholder="请输入你的手机号" data-reg="phone">
            </div>
            <span></span>
            <div class="sb">
                <input class="sb_btn" type="button" value="提交" data-reg="submit">
            </div>
        </form>
    </div>`
    }
    logRegBox.innerHTML=html;
})();
