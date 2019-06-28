(function(){
  //获取地址栏里的name,根据name来发送ajax请求，显示对应的商品
  //定义一个函数，来获取地址栏的id
  function getQueryVariable(variable){
    //window.location.search获取的是查询字符串，例如?id=1&name=lisi
    //substring(1)截取字符串，从下标1开始到结束
    var query=window.location.search.substring(1);
    //id=1&name=lisi
    var vars=query.split("&")
    //["id=1","name=lisi"]
    for(var i=0;i<vars.length;i++){
      var pair=vars[i].split("=")
      if(pair[0]==variable){return pair[1];}
    }
    return false;
  }
    //调用函数getQueryVariable来获取上个页面点击的商品的名称
    var pname=decodeURI(getQueryVariable("pname"))
    //发生ajax请求，获取该商品的信息
    ajax({
      method:"get",
      url:"http://127.0.0.1:9000/prodetails/",
      dataType:"json",
      data:"pname="+pname
    }).then(res=>{
      console.log(res)
    })

})();

(()=>{
  //首次加载滚动条置顶
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
        //侧边导航栏的显示和隐藏
        if(scrollTop>900)
        navAside.style.display="block"
        else
        navAside.style.display="none"
   }
})();
 //颜色分类点击高亮显示和图片切换
(()=>{
  //创建一个数组，临时保存图片地址的数据
  var data=[
    {
      litsrc:["//127.0.0.1:9000/img/Cgbj0Fx_ZLSAbkvCAAbf6BLA9aU577.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZKaAHKKzAANLbi_Jh9A009.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZK2AeLuGAAOGkMdE1x4601.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZK6AMuFWAAInES6rB6g430.png120x120.jpg"],
      bigsrc:["//127.0.0.1:9000/img/Cgbj0Fx_ZLSAbkvCAAbf6BLA9aU577.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZKaAHKKzAANLbi_Jh9A009.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZK2AeLuGAAOGkMdE1x4601.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZK6AMuFWAAInES6rB6g430.png680x680.jpg"]
  },
    {
      litsrc:["//127.0.0.1:9000/img/Cgbj0Vx_ZKWARDEYAAVfKZZCbL0565.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZJ-ABeyzAAFqjruDexM213.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZJ-AGraoAANnMTTdNJU462.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZJ-AOKshAAIEsqI1Tts496.png120x120.jpg"],
      bigsrc:["//127.0.0.1:9000/img/Cgbj0Vx_ZKWARDEYAAVfKZZCbL0565.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZJ-ABeyzAAFqjruDexM213.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZJ-AGraoAANnMTTdNJU462.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZJ-AOKshAAIEsqI1Tts496.png680x680.jpg"]
    },
    {
      litsrc:["//127.0.0.1:9000/img/Cgbj0Vx_ZMGAIQA1AAcF5QTOtV0207.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZLSAUAkdAANZKmXVu-g519.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZLqAOAZ7AAN4onnA0GY381.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZLuADOmfAAI2auMhK38894.png120x120.jpg"],
      bigsrc:["//127.0.0.1:9000/img/Cgbj0Vx_ZMGAIQA1AAcF5QTOtV0207.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZLSAUAkdAANZKmXVu-g519.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZLqAOAZ7AAN4onnA0GY381.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZLuADOmfAAI2auMhK38894.png680x680.jpg"]
    }
  ]
  
  //利用冒泡
  // var div=document.querySelector("[data-color=sort]")
  // div.addEventListener("click",function(e){
  //   e.preventDefault()
    
  //     //去掉含有selected 类的a的selected 类
  //     if(e.target.tagName=="A"||e.target.tagName=="IMG"||e.target.tagName=="SPAN"){
  //       var hassel=document.querySelector("[data-color=sort] a.selected")
  //       hassel.classList.remove("selected")
  //     }
  //     //并给对应的a元素添加selected类
  //     if(e.target.tagName=="A")
  //     e.target.classList.add("selected")
  //     else if(e.target.tagName=="IMG"||e.target.tagName=="SPAN")
  //     e.target.parentNode.classList.add("selected")
  // })

   //给每个配置选项添加点击事件
   var as=document.querySelectorAll("[data-click=item]")
   for(let a of as){
      a.addEventListener("click",function(e){
          e.preventDefault()
          var row_as=this.parentNode.children
          for(var row_a of row_as){
            if(row_a.classList.contains("selected")){
              row_a.classList.remove("selected")
            }
          }
        this.classList.add("selected")
      })
   }
   
   //图片展示处，点小图，切换对应的大图
   //获取保存大图的li元素的集合
   var liImgs=document.querySelectorAll("[data-bigsrc]")
   //获取大图元素
   var bigImg=document.querySelector(".details_box .details_box_left .big_img")
   for(let liImg of liImgs){
      liImg.addEventListener("click",function(e){
        e.preventDefault()
        bigImg.src=this.dataset.bigsrc
      })
   }
   //点击颜色分类，图片展示处切换不同的图片
   var sortcolor=document.querySelectorAll("[data-type=color]")
   //获取小图元素集合
   var imgs=document.querySelectorAll("[data-toggle=img]")
   for(let j=0;j<sortcolor.length;j++){
      sortcolor[j].addEventListener("click",function(){
          //把小图的地址赋值给img的src属性，直接显示效果
          //data[i].litsrc[j]
          //先获取小图的地址
           var arr=data[j].litsrc
          // console.log(arr)
          //显示小图
           for(var i=0;i<data[j].litsrc.length;i++){
             imgs[i].src=data[j].litsrc[i]
            // console.log(liImgs[i])
           }
            //把大图的地址先存储在li的自定义属性data-bigsrc中
            var arr2=data[j].bigsrc
           for(var index=0;index<data[j].bigsrc.length;index++){
              liImgs[index].dataset.bigsrc=data[j].bigsrc[index]
              // console.log(data[j].bigsrc[index])
           }
           //每次切换，默认第一小图对应的大图显示
           bigImg.src=liImgs[0].dataset.bigsrc
      })
   }
})();
//选择不同的内存大小，花呗分期不同
(()=>{
      ajax({
        method:"get",
        url:"http://127.0.0.1:9000/prodetails/huabei",
        dataType:"json"
      }).then(res=>{
        //console.log(res)
       
        var div=document.querySelector(".huabei .model_right")
        var save=document.querySelectorAll("[data-prop=save]")
        for(let item of save){
            item.addEventListener("click",function(e){
                var html=""
              if(this.innerHTML=="4+64G"){
                for(var v of res){
                    if(v.sid=="1"){ 
                        html+=`<a href="" class="item" data-click="item">
                        <span class="periods">${v.periods}</span>
                        <span class="rate">${v.rate}</span>
                     </a>`
                    }
                }
                div.innerHTML=html
              }else{
                  for(var v of res){
                     if(v.sid==2){
                        html+=`<a href="" class="item" data-click="item">
                        <span class="periods">${v.periods}</span>
                        <span class="rate">${v.rate}</span>
                     </a>`
                     }
                  }
                  div.innerHTML=html
              }
            })
        }


      })
   
})();
//添加和减少购买数量
(()=>{
    var less=document.querySelector("[data-btn=less]")
    var add=document.querySelector("[data-btn=add]")
    less.addEventListener("click",function(){
        var n=parseInt(this.nextElementSibling.value)
        n--
        if(n>=1){
            this.nextElementSibling.value=n
        }
        if(n<10&&add.classList.contains("disabled")){
            add.classList.remove("disabled")
        }
        if(n==1){
            less.classList.add("disabled")
        }
    })
    add.addEventListener("click",function(){
        var n=parseInt(this.previousElementSibling.value)
        n++
        if(n<=10){
            this.previousElementSibling.value=n
        }else{
            this.classList.add("disabled")
        }
        if(n>1&&less.classList.contains("disabled")){
            less.classList.remove("disabled")
        }
    })
})();
//登录提示
(()=>{
  var inshopcart=document.querySelector("[data-in=shopcart]")
  var logTip=document.querySelector("[data-log=tip]")
  inshopcart.addEventListener("click",function(e){
    e.preventDefault()
    logTip.style.display="block"
    var t=setTimeout(()=>{
      logTip.style.display="none"
    },2000)
  })
})();