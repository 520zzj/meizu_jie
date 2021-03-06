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
      console.log(res[1])
      var arrfast=res[0].title.split(/\，|\,/)
      var htmlfasti=""
      for(var item of arrfast){
        htmlfasti+=`<li class="-item"><a href="" class="-link">${item}</a></li>`
      }
      var htmlfast=`<div class="fast_nav">
      <span class="pro_name">${res[0].pname}</span>
      <ul class="-ulist">${htmlfasti}</ul>
       </div>`
      var fastnav=document.querySelector("[data-toggle=fast_nav]")
      fastnav.innerHTML=htmlfast;
      var htmlsup=''
      var arrsup=res[0].support.split(/\,|\，/)
      for(let item of arrsup){
          htmlsup+=`<span><i class="success"></i>${item}</span>`
      }
     
     var date=new Date()
     date.setDate(date.getDate()+2)
     var htmlcolsort=""
     for(let item of res[1]){
        htmlcolsort+=`<a href="" class="item" data-click="item" data-type="color"><img class="little_img" src="${item.little_img_src}" alt="" > <span>${item.cname}</span></a>`
     }
     var midsrc=res[1][0].midsrc.split(/\,|\，/)
     var bigsrc=res[1][0].bigsrc.split(/\,|\，/)
     var htmlmidimg=""
     for(let i=0;i<midsrc.length;i++){
        htmlmidimg+=`<li data-bigsrc="${bigsrc[i]}"><a href="" class="mid_img"><img data-toggle="midimg" src="${midsrc[i]}" alt=""></a></li>`
     }
     //内存容量
     var htmlintsto=""
     var intsto=res[0].intsto.split(/\,|\，/)
     for(let item of intsto){
        htmlintsto+=`<a href="" class="item" data-click="item" data-prop="save">${item}</a>`
     }
     //花呗默认显示第一组数据
     var htmlhuabei=""
     for(let item of res[2]){
        if(item.sid==0){
          htmlhuabei+=`<a href="" class="item" data-click="item">
          <span class="periods">${item.periods}</span>
          <span class="rate">${item.rate}</span>
       </a>`
        }
     }
     //碎屏保护
     var htmlmeal=""
     var meal=res[0].meal.split(/\,|\，/)
     for(let item of meal){
        htmlmeal+=`<a href="" class="item" data-click="item" data-toggle="meal">${item}</a>`
     }
     //点击加入购物车处的登录和结算提示
     var htmlLogTip=""
     //获取sessionstorage值判断登录状态，选择拼接HTML片段
     //如果session.getItem("login")=="true",则为登录状态，反之不是
     if(sessionStorage.getItem("login")=="true"){
        htmlLogTip=`<div class="log_tip_box">
        <div class="already">已加入购物车</div>
        <a href="" class="golog">去购物车结算 &gt;</a>
        </div>`
     }else{
       htmlLogTip=`<div class="log_tip_box">
       <div class="already">已加入购物车</div>
       <p class="logafter">登录后可显示你加入的商品哦~</p>
       <a href="" class="golog">去登录 &gt;</a>
      </div>`
     }
     //主HTML模板
      var htmldetbox=`<div class="details_box_left">
      <div class="big_img_box"><img class="big_img" src="" alt=""></div>
      <ul class="mid_img_box" data-toggle="mid_imgsrc">
         ${htmlmidimg}
      </ul>
      <div class="details_action_box">
          <ul class="details_action">
              <li> 
                  <a href="">
                          <img src="img/product_details_star.PNG" alt=""><p>收藏</p>
                  </a>
              </li>
              <li>
                  <a href="">
                          <img src="img/product_details_compare.PNG" alt=""><p>对比</p>
                  </a>
              </li>
          </ul>
      </div>
</div>
<div class="details_box_right">
  <div class="props">
      <h3 class="name">${res[0].pname}</h3>
      <p class="desc">${res[0].pdesc}</p>
  </div>
  <div class="shell_box">
      <div class="price_box">
          <em>￥</em><span class="price">${res[0].price}</span>
      </div>
      <div class="add_buy_box">
          <span class="add_buy">加价购</span>
          <span>另外再加<em>19</em>元，即可换购超值商品
              </span>
              <a href="" class="now_add">立即加购 ></a>
      </div>
  </div>
  <div class="sell_service">
      <dl class="support">
          <dt class="dtwili_he">支持</dt>
          <dd class="ddlihe">
             ${htmlsup}
          </dd>
      </dl>
      <dl class="support delivery">
          <dt class="dtwili_he">配送服务</dt>
          <dd class="ddlihe">
              <div class="address">广州市 越秀区 北京街道 <i class="dropdown">
                  <div></div>
              </i></div> 
              <div class="reachtime"><span>24:00 前下单并支付，预计后天（${date.getMonth()+1}月${date.getDate()}日）送达</span></div>
           </dd>
      </dl>
      <div class="online_serve_box">
          <span>本商品由 魅族 负责发货并提供售后服务
              </span> <a href="" class="online_serve"><i class="icon_online"></i><span>在线客服</span></a>
      </div>
  </div>
   <div class="model model_first"> 
                  <span class="model_left">型号</span>
                  <div class="model_right">
                      <a href="http://127.0.0.1:5500/product_details.html?pname=魅族 Note9" class="item" data-toggle="model">魅族 Note9</a>
                      <a href="" class="item" data-toggle="model">魅族 16th Plus</a>
                      <a href="" class="item" data-toggle="model">魅族 16x</a>
                      <a href="" class="item" data-toggle="model">魅族 v8 高配版</a>
                      <a href="" class="item" data-toggle="model">魅族 x8</a>
                      <a href="http://127.0.0.1:5500/product_details.html?pname=魅族 16th" class="item" data-toggle="model">魅族 16th</a>
                  </div>
  </div>
  <div class="model"> 
          <span class="model_left">网络类型</span>
          <div class="model_right">
              <a href="" class="item selected" data-click="item">${res[0].net}</a>
          </div>
  </div>
  <div class="model"> 
          <span class="model_left">颜色分类</span>
          <div class="model_right" data-color="sort">${htmlcolsort}</div>
  </div>
  <div class="model"> 
      <span class="model_left">内存容量</span>
      <div class="model_right">
         ${htmlintsto}
      </div>
  </div>
  <div class="model"> 
          <span class="model_left">选择套餐</span>
          <div class="model_right">
             ${htmlmeal}
          </div>
  </div>
  <div class="model huabei"> 
              <span class="model_left">花呗分期
                  <a href="" class="huabei_link"></a>
              </span>
              <div class="model_right">
                ${htmlhuabei}
              </div>
  </div>
  <div class="model"> 
          <span class="model_left">数量</span>
          <div class="mount">
              <span class="disabled" data-btn="less">-</span><input type="text" value="1" data-toggle="buyMount"><span data-btn="add">+</span>
          </div>
  </div>
  <div class="buy_box">
      <a href="" class="instanbuy">立即购买</a><a href="" class="inshopcart" data-in="shopcart">加入购物车</a>
  </div>
  <div class="log_tip" data-log="tip">
     ${htmlLogTip}  
  </div>
</div>`
      var detbox=document.querySelector("[data-details=box]")
      detbox.innerHTML=htmldetbox;
      //商品图片形式介绍处
      var htmlintro=""
      var intro=res[0].intro.split(/\,|\，/)
      for(let item of intro){
        htmlintro+=`<img src="" alt="" data-origin="${item}">`
      }
      var introbox=document.querySelector("[data-lazy=img]")
      introbox.innerHTML=htmlintro;



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
      //套餐处和型号处
      (()=>{
        //页面初始化时默认选中第一个套餐
        var meals=document.querySelectorAll("[data-toggle=meal]")
        meals[0].classList.add("selected")
        //页面根据商品的名称跳转的，型号处默认选中的商品为地址栏跳转到的商品
        //找出所有型号所在元素
        var models=document.querySelectorAll("[data-toggle=model]")
        for(let elem of models){
          if(pname==elem.innerHTML){
            elem.classList.add("selected")
          }
        }
      })();
       //颜色分类点击高亮显示和图片切换
      (()=>{
        //创建一个数组，临时保存图片地址的数据
        // var data=[
        //   {
        //     litsrc:["//127.0.0.1:9000/img/Cgbj0Fx_ZLSAbkvCAAbf6BLA9aU577.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZKaAHKKzAANLbi_Jh9A009.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZK2AeLuGAAOGkMdE1x4601.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZK6AMuFWAAInES6rB6g430.png120x120.jpg"],
        //     bigsrc:["//127.0.0.1:9000/img/Cgbj0Fx_ZLSAbkvCAAbf6BLA9aU577.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZKaAHKKzAANLbi_Jh9A009.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZK2AeLuGAAOGkMdE1x4601.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZK6AMuFWAAInES6rB6g430.png680x680.jpg"]
        // },
        //   {
        //     litsrc:["//127.0.0.1:9000/img/Cgbj0Vx_ZKWARDEYAAVfKZZCbL0565.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZJ-ABeyzAAFqjruDexM213.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZJ-AGraoAANnMTTdNJU462.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZJ-AOKshAAIEsqI1Tts496.png120x120.jpg"],
        //     bigsrc:["//127.0.0.1:9000/img/Cgbj0Vx_ZKWARDEYAAVfKZZCbL0565.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZJ-ABeyzAAFqjruDexM213.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZJ-AGraoAANnMTTdNJU462.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZJ-AOKshAAIEsqI1Tts496.png680x680.jpg"]
        //   },
        //   {
        //     litsrc:["//127.0.0.1:9000/img/Cgbj0Vx_ZMGAIQA1AAcF5QTOtV0207.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZLSAUAkdAANZKmXVu-g519.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZLqAOAZ7AAN4onnA0GY381.png120x120.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZLuADOmfAAI2auMhK38894.png120x120.jpg"],
        //     bigsrc:["//127.0.0.1:9000/img/Cgbj0Vx_ZMGAIQA1AAcF5QTOtV0207.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZLSAUAkdAANZKmXVu-g519.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Fx_ZLqAOAZ7AAN4onnA0GY381.png680x680.jpg","//127.0.0.1:9000/img/Cgbj0Vx_ZLuADOmfAAI2auMhK38894.png680x680.jpg"]
        //   }
        // ]
        
     
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
         //页面初始化时，显示第一个颜色分类的第一张中图对应的大图
            bigImg.src=liImgs[0].dataset.bigsrc
         //点击颜色分类即是小图，图片展示处切换不同的图片，即是中图切换
         //获取小图元素集合
         var sortcolor=document.querySelectorAll("[data-type=color]")
         //页面初始化，第一个小图出默认选中
         sortcolor[0].classList.add("selected")
         //获取中图元素集合
         var imgs=document.querySelectorAll("[data-toggle=midimg]")
         for(let j=0;j<sortcolor.length;j++){
            sortcolor[j].addEventListener("click",function(){
                //把小图的地址赋值给img的src属性，直接显示效果
                //data[i].litsrc[j]
                //先获取中图的地址
                var arr=res[1][j].midsrc.split(/\,|\，/)
                //  var arr=data[j].litsrc
                // console.log(arr)
                //显示中图
                for(let i=0;i<arr.length;i++){
                  imgs[i].src=arr[i]
                }
                //  for(var i=0;i<data[j].litsrc.length;i++){
                //    imgs[i].src=data[j].litsrc[i]
                //   // console.log(liImgs[i])
                //  }
                  //把大图的地址先存储在li的自定义属性data-bigsrc中
                  var arr2=res[1][j].bigsrc.split(/\,|\，/)
                  for(let i=0;i<arr2.length;i++){
                    liImgs[i].dataset.bigsrc=arr2[i]
                  }
                //   var arr2=data[j].bigsrc
                //  for(var index=0;index<data[j].bigsrc.length;index++){
                //     liImgs[index].dataset.bigsrc=data[j].bigsrc[index]
                //     // console.log(data[j].bigsrc[index])
                //  }
                 //每次切换，默认第一中图对应的大图显示
                 bigImg.src=liImgs[0].dataset.bigsrc
            })
         }
      })();
      //选择不同的内存大小，花呗分期不同
      (()=>{
              //获取花呗元素的父元素
              var div=document.querySelector(".huabei .model_right")
              //找出存储所在元素，并给其绑定事件
              var save=document.querySelectorAll("[data-prop=save]")
              //第一个存储元素默认选中，
              save[0].classList.add("selected")
              for(let i=0;i<save.length;i++){
                  save[i].addEventListener("click",function(){
                     var htmlhuabei=""
                     for(let item of res[2]){
                      if(item.sid==i){
                        htmlhuabei+=`<a href="" class="item" data-click="item">
                        <span class="periods">${item.periods}</span>
                        <span class="rate">${item.rate}</span>
                     </a>`
                      }
                   }
                    div.innerHTML=htmlhuabei
                  })
              }
      
      
          
         
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
      //点击加入购物车
      (()=>{
        //获取加入购物车元素
        var inshopcart=document.querySelector("[data-in=shopcart]")
        //获取登录提示框
        var logTip=document.querySelector("[data-log=tip]")
        inshopcart.addEventListener("click",function(e){
          e.preventDefault()
           //控制登录和结算提示框的显示和隐藏
          logTip.style.display="block"
          var t=setTimeout(()=>{
            logTip.style.display="none"
          },2000)
          //获取要存储的商品信息,商品名称，商品单价，内存，数量，图片地址，网络类型，颜色，用户的id
          var img_src=document.querySelector("[data-toggle=mid_imgsrc]").children[0].children[0].children[0].src
          var pname=res[0].pname
          var unitprice=res[0].price
          var selected=document.querySelectorAll("[data-click=item].selected")
          var net=selected[0].innerHTML
          var color=selected[1].children[1].innerHTML
          var intsto=selected[2].innerHTML
         
          var mount=document.querySelector("[data-toggle=buyMount]").value
         console.log(img_src,pname,unitprice,net,color,mount)
          //未登录的话，把商品的信息保存在sessionstorage，购物车页面打开时就获取sessionstorage里面的商品信息
          if(sessionStorage.getItem("login")!=="true"){
                //如果session里面没有cart表明第一次创建存储购物车的session空间
              if( !sessionStorage.getItem("cart")){
                var arr=[]
              }else{
                //否则，读取session里面的键cart,往cart对应的值加另一个商品的信息
                  var arr=sessionStorage.getItem("cart")
                  //读出来后转换成js对象
                  arr=JSON.parse(arr)
              }
              //获取当前商品的信息
              var cart={img_src,pname,unitprice,net,color,intsto,mount}
              //加入到js对象里面
              arr.push(cart)
              console.log(arr)
                //   更新购物车图标上的预购数量
                var span=document.querySelector("[data-product=number]")
                var num=0
                for(var v of arr){
                  num+=parseInt(v.mount)
                }
                console.log(num)
                span.innerHTML=num;
              //然后再次转换成json字符串保存到session里面
              arr=JSON.stringify(arr)
              sessionStorage.setItem("cart",arr)
               
          
          }else{
          //已登录的话，把商品的信息添加到服务器的数据库，购物车页面打开时，就发送ajax从数据库来获取商品信息
          var uid=sessionStorage.getItem("uid")                                                                                                                                                                                      
            ajax({
              method:"post",
              url:"http://127.0.0.1:9000/shopcart/add",
              dataType:"json",
              data:`img_src=${img_src}&pname=${pname}&unitprice=${unitprice}&net=${net}&color=${color}&intsto=${intsto}&mount=${mount}&uid=${uid}`
            }).then(res=>{
                console.log(res)
            })
          }
        })
      })();
    })

})();

