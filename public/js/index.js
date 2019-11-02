 //轮播图
(()=>{
    "use strict"
    var n=0;//记录当前图片的位置
    var banner=document.querySelector(".banner_nav>.banner")
    var banner_img=document.querySelector (".banner_nav>.banner>.banner_img")
    function task(){
        n++ 
        if(n==7)
        n=0
        //把含有class为banner_active的li的class清空
        var liRemoveClass=document.querySelector("[class=banner_active]")
        liRemoveClass.className=""
        //给当前图片对应的li添加class为banner_active
        liRemoveClass.parentNode.children[n].className="banner_active"
        banner_img.style.left=banner.offsetWidth*(-n)+"px"
        if(n==0)//最后到第一张时去除变换效果
        banner_img.style.transition="all 0s linear"
        else
        banner_img.style.transition="all .5s linear"  
    }
    var timer=setInterval(task,3000)    
    //判断窗口宽度发生改变
   window.onresize=function(){
        //获取当前banner宽度,计算当前图片位置对应ul移动的长度并赋值给banner_img.的left属性
    banner_img.style.left=banner.offsetWidth*(-n)+"px"
   }
   //获取按钮的位置跳到指定的图片
   var ulSlide=document.querySelector("[data-banner=slide]")
   var liBtn=document.querySelectorAll("[data-banner=btn]")
   ulSlide.addEventListener("click",function(e){
    if(e.target.getAttribute("data-banner")=="btn"){
        //跳到按钮对应图片的位置
        for(var i=0;i<liBtn.length;i++){
            if(e.target==liBtn[i]){//1 获取按钮位置 
                n=i
                //2 给banner_img的left属性重新赋值
                banner_img.style.left=banner.offsetWidth*(-n)+"px"
                  //把含有class为banner_active的li的class清空
                var liRemoveClass=document.querySelector("[class=banner_active]")
                liRemoveClass.className=""
                //给当前图片对应的li添加class为banner_active
                liRemoveClass.parentNode.children[n].className="banner_active"
            }
        }
        clearInterval(timer)
        timer=null//清空定时器从新计时
        timer=setInterval(task,3000)
    }
   })
})();

//广告
$(window).load(function(){//css加载完再执行
    //游戏广告定时弹出
    var divAd=document.getElementById("gameAd")
    var styleobj=getComputedStyle(divAd)
    function ad(){
        divAd.style.bottom="0px"
    }
    var  timer1=setTimeout(ad,10000)
    var adBtn=document.querySelector("[data-ad=btn]")
    adBtn.addEventListener("click",function(){
        divAd.style.bottom="-225px"
        clearTimeout(timer1)//清空定时器从新计时
        timer1=null
        timer1=setTimeout(ad,50000)
    })
});
//侧边导航栏
(()=>{
    var navAside=document.querySelector("[data-nav=aside]")
    //scrollTop大于670时，侧边导航栏出现
    window.onscroll=function(){
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop   //获得滚动距离
        var itemBox=document.getElementsByClassName("item_box")[0]//获取蓝色背景元素
        if(scrollTop>670){
            navAside.parentNode.style.display="block"
             //滚动到对应的位置时，导航栏对应处背景显示蓝色
            if(scrollTop>=960&&scrollTop<2900){
                itemBox.style.top="-175px"
            }else if(scrollTop>=2900&&scrollTop<4620){
               itemBox.style.top="-125px" 
            }else if(scrollTop>=4620&&scrollTop<6340){
                itemBox.style.top="-75px" 
            }else if(scrollTop>=6340&&scrollTop<7682){
                itemBox.style.top="-25px" 
            }else if(scrollTop>=7682&&scrollTop<8562){
                itemBox.style.top="25px" 
            }else if(scrollTop>=8562&&scrollTop<9202){
                itemBox.style.top="75px" 
            }else if(scrollTop>=9202&&scrollTop<9815){
                itemBox.style.top="125px" 
        }
        else
        navAside.parentNode.style.display="none"
        //点击侧边导航栏，页面跳到相应的位置
        navAside.addEventListener("click",function(e){
            if(e.target.className=="list_item"){
                switch(e.target){
                    case navAside.children[0]:scrollTo(0,960);
                    break;
                    case navAside.children[1]:scrollTo(0,2900);
                    break;
                    case navAside.children[2]:scrollTo(0,4620);
                    break;
                    case navAside.children[3]:scrollTo(0,6340);
                    break;
                    case navAside.children[4]:scrollTo(0,7682);
                    break;
                    case navAside.children[5]:scrollTo(0,8562);
                    break;
                    case navAside.children[6]:scrollTo(0,9202);
                    break;

                }
               
            }
        })
        }
    }    
})();


   



