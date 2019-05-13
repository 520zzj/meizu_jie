//页面滚动到一定距离，结算栏浮动到底部，侧边栏显示和隐藏
(()=>{
    //获取结算栏元素
    var divPay=document.querySelector("[data-toggle=pay]")
    //获取滚动判断位置的元素,这里不用结算栏元素进行位置判断，因为给元素加了样式后，结算栏的位置固定了
    var pos=document.querySelector("[data-toggle=scroll]")
    //获取侧边栏元素
    var navSide=document.querySelector("[data-nav=side]")
    window.onscroll=function(){
        //底部结算栏
        //元素底部到可视区域底部的距离+元素的高度+元素顶部距离可视区域的距离=可视区域的高度
      
        //元素的高度
        var elemHight=pos.offsetHeight
        // console.log(elemHight)
        //获取元素顶部到可视区域顶部的距离
        var toViewtop=pos.getBoundingClientRect().top
        // console.log(toViewtop)
        //获取可视区域的高度
        var viewHight=window.innerHeight
        // console.log(viewHight)
        //获取元素底部到可视区域底部的距离
        var botViewBot=viewHight-elemHight-toViewtop
        // console.log(botViewBot)
        if(botViewBot<=90){
            divPay.classList.add("scrollFloat")
        }else if(botViewBot>90&&divPay.classList.contains("scrollFloat")){
            divPay.classList.remove("scrollFloat")
        }
        //侧边导航栏的显示可隐藏
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop
        //console.log(scrollTop)
        if(scrollTop>=600){
            navSide.style.display="block"
        }else{
            navSide.style.display="none"
        }
    }
    //鼠标移入侧边栏app处，二维码显示
    var app=document.querySelector("[data-toggle=app]")
    app.addEventListener("mouseover",function(){
       app.children[0].children[0].style.top="0px"
       this.style.opacity="1"//透明度的改变
    })
    //鼠标移出侧边栏app处，二维码隐藏
    app.addEventListener("mouseout",function(){
        app.children[0].children[0].style.top="180px"
       this.style.opacity="0.6"
    })
    //鼠标移入侧边栏返回顶部元素处，元素可视长度变长
    var toTop=document.querySelector("[data-toggle=toTop]")
    toTop.addEventListener("mouseover",function(){
        this.style.right="0px"
        this.style.opacity="1"
    })
    toTop.addEventListener("mouseout",function(){
        this.style.right="-70px"
        this.style.opacity="0.6"
    })
})();