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
      var arrfast=res.title.split(/\，|\,/)
      var htmlfasti=""
      for(var item of arrfast){
        htmlfasti+=`<li class="-item"><a href="" class="-link">${item}</a></li>`
      }
      var htmlfast=`<div class="fast_nav">
      <span class="pro_name">${res.pname}</span>
      <ul class="-ulist">${htmlfasti}</ul>
       </div>`
      var fastnav=document.querySelector("[data-toggle=fast_nav]")
      fastnav.innerHTML=htmlfast;
      var htmldetbox=`<div class="details_box_left">
      <div class="big_img_box"><img class="big_img" src="" alt=""></div>
      <ul class="little_img_box">
          <li data-bigsrc="${1}"><a href="" class="little_img"><img data-toggle="img" src="" alt=""></a></li>
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
      <h3 class="name">魅族 Note9</h3>
      <p class="desc">现货开售 | 骁龙675 后置4800万</p>
  </div>
  <div class="shell_box">
      <div class="price_box">
          <em>￥</em><span class="price">1398.00</span>
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
              <span><i class="success"></i> 花呗分期</span>
              <span><i class="success"></i> 百城速达</span>
              <span><i class="success"></i> 顺丰发货</span>
              <span><i class="success"></i> 7天无理由退货</span>
          </dd>
      </dl>
      <dl class="support delivery">
          <dt class="dtwili_he">配送服务</dt>
          <dd class="ddlihe">
              <div class="address">广州市 越秀区 北京街道 <i class="dropdown">
                  <div></div>
              </i></div> 
              <div class="reachtime"><span>24:00 前下单并支付，预计后天（4月18日）送达</span></div>
           </dd>
      </dl>
      <div class="online_serve_box">
          <span>本商品由 魅族 负责发货并提供售后服务
              </span> <a href="" class="online_serve"><i class="icon_online   "></i><span>在线客服</span></a>
      </div>
  </div>
   <div class="model model_first"> 
                  <span class="model_left">型号</span>
                  <div class="model_right">
                      <a href="" class="item selected">魅族 Note9</a>
                      <a href="" class="item">魅族 16th Plus</a>
                      <a href="" class="item">魅族 16x</a>
                      <a href="" class="item">魅族 v8 高配版</a>
                      <a href="" class="item">魅族 x8</a>
                      <a href="" class="item">魅族 16th</a>
                  </div>
  </div>
  <div class="model"> 
          <span class="model_left">网络类型</span>
          <div class="model_right">
              <a href="" class="item selected" data-click="item">全网络公开版</a>
          </div>
  </div>
  <div class="model"> 
          <span class="model_left">颜色分类</span>
          <div class="model_right" data-color="sort">
              <a href="" class="item selected" data-click="item" data-type="color"><img class="little_img" src="//127.0.0.1:9000/img/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png80x80.png" alt="" > <span>幻黑</span></a>
              <a href="" class="item" data-click="item" data-type="color"><img class="little_img" src="./img/Cgbj0Fx_ZKSATnTJAAU3Ca8M6D8964.png80x80.png" alt=""> <span>皓白</span></a>
              <a href="" class="item" data-click="item" data-type="color"><img class="little_img" src="./img/Cgbj0Fx_ZMCAdyF9AAbOHZSdVO8974.png80x80.png" alt=""> <span>黑耀蓝</span></a>
          </div>
  </div>
  <div class="model"> 
      <span class="model_left">内存容量</span>
      <div class="model_right">
          <a href="" class="item selected" data-click="item" data-prop="save">4+64G</a>
          <a href="" class="item" data-click="item" data-prop="save">6+64G</a>
          <a href="" class="item" data-click="item" data-prop="save">4+128G</a>
      </div>
  </div>
  <div class="model"> 
          <span class="model_left">选择套餐</span>
          <div class="model_right">
              <a href="" class="item selected" data-click="item">官方标配</a>
              <a href="" class="item" data-click="item">碎屏保套餐</a>
          </div>
  </div>
  <div class="model huabei"> 
              <span class="model_left">花呗分期
                  <a href="" class="huabei_link"></a>
              </span>
              <div class="model_right">
                  <a href="" class="item" data-click="item">
                      <span class="periods">¥466.00×3期</span>
                      <span class="rate">免续费</span>
                   </a>
                  <a href="" class="item" data-click="item">
                      <span class="periods">¥233.00×6期</span>
                      <span class="rate">免续费</span>
                   </a>
                  <a href="" class="item" data-click="item">
                      <span class="periods">¥125.23×12期</span>
                      <span class="rate">含手续费 ￥8.73/期</span>
                   </a>
              </div>
  </div>
  <div class="model"> 
          <span class="model_left">数量</span>
          <div class="mount">
              <span class="disabled" data-btn="less">-</span><input type="text" value="1"><span data-btn="add">+</span>
          </div>
  </div>
  <div class="buy_box">
      <a href="" class="instanbuy">立即购买</a><a href="" class="inshopcart" data-in="shopcart">加入购物车</a>
  </div>
  <div class="log_tip" data-log="tip">
      <div class="log_tip_box">
              <div class="already">已加入购物车</div>
              <p class="logafter">登录后可显示你加入的商品哦~</p>
              <a href="" class="golog">去登录 &gt;</a>
      </div>    
  </div>
</div>`
      var detbox=document.querySelector("[data-details=box]")
      detbox.innerHTML=htmldetbox;






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
         //页面初始化时，显示第一个颜色分类的第一张小图对应的大图
            bigImg.src=liImgs[0].dataset.bigsrc
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
    })

})();

