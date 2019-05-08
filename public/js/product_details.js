(()=>{
    window.scrollTo(0,0)
  //服务说明处图片懒加载
  //定义一个判断元素是否在可视区域的函数
  function isInSight(elem){
    //获取元素到可视区域顶部的距离
    var bound=elem.getBoundingClientRect()
    var top=bound.top
     //获取可视区域的高度
    var clientHeight=window.innerHeight
    //返回一个判断结果
    //加100是为了在可视区域前100px处提前加载图片
    return top<=clientHeight+100
  }
   //获取图片元素
  
   var imgs=document.querySelectorAll(".introduce .lazy_img img")
   console.log(imgs)
 //把图片懒加载封装成函数
   function lazyLoad(imgs){
        for(let img of imgs){
            if(isInSight(img)){ 
                img.src=img.dataset.origin
            }
        }
   }
    //标题导航栏浮动起来
    var navTitle=document.querySelector("[data-toggle=fast_nav]")
    var navAside=document.querySelector("[data-nav=aside]")
   window.onscroll=function(){
       //调用图片懒加载函数
        lazyLoad(imgs) 
        var hasflo=document.querySelector(".fastfloat")
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop
        //标题导航栏的浮动条件
        if(scrollTop<=80&&hasflo!=undefined){
            navTitle.classList.remove("fastfloat")
        }else if(scrollTop>80)
            navTitle.classList.add("fastfloat")
        console.log(scrollTop)
        //侧边导航栏的显示和隐藏
        if(scrollTop>900)
        navAside.style.display="block"
        else
        navAside.style.display="none"
   }
  
   
})();
