(function(){
    ajax({
        method:"get",
        url:"http://127.0.0.1:9000/shopcart",
        dataType:"json"
    }).then(res=>{
        console.log(res);
        function loadhtml(res){
            var html=""
            for(var p of res){
                html+=`<div class="one_pro">
                <div class="add">
                    <span class="add_sign">加价购</span>
                    <span class="add_amount">另加15元起，即可换购超值商品</span>
                    <a href="" class="add_now">立即加购 &gt;</a>
                </div>
                <div class="pro_lists">
                    <ul class="list_item">
                        <li class="col-choose">
                            <div class="checkbox"></div>
                            <a href="" class="img_link">
                                    <img class="little_img"
                                    src=${p.img_src} alt="">
                            </a>
                            <div class="desc">
                                <h3 class="name">${p.pname}</h3>
                                <p class="config">${p.props}</p>
                            </div>
                        </li>
                        <li class="col-price">
                            <em>￥</em><span>${p.unitprice}</span>
                        </li>
                        <li class="col-mount">
                            <div class="mount_box">
                                <span class="disable">-</span><input type="text" value=${p.amount}><span>+</span>
                            </div>
                        </li>
                        <li class="col-subtotal"> 
                            <em>￥</em><span>${p.subtotal}</span>
                        </li>
                        <li class="col-edit">
                            <div data-id=${p.id}>--</div>
                        </li>
                    </ul>
                </div>
            </div>`
            }
            var proBox=document.querySelector(".pro_box")
            proBox.innerHTML=html;
        }
        loadhtml(res);

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
                this.children[0].style.height="180px"
            this.children[0].children[0].style.top="0px"
            this.style.opacity="1"//透明度的改变
            })
            //鼠标移出侧边栏app处，二维码隐藏
            app.addEventListener("mouseout",function(){
                this.children[0].style.height="0px"
                this.children[0].children[0].style.top="180px"
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
            toTop.addEventListener("click",function(){
                window.scrollTo(0,0)
            })
        })();
        //提示登录处
        (function(){
            var span=document.querySelector("[data-toggle=off]")
            var div=document.querySelector("[data-toggle=logTip]")
            span.addEventListener("click",function(){
                div.style.display="none"
            })
        })();
        //编辑/完成,删除商品
        (function(){
            var edit=document.querySelector("[data-toggle=edit]")
            var lis=document.querySelectorAll(".list_item .col-edit")
            edit.addEventListener("click",function(){
                if(edit.innerHTML=="编辑"){
                    edit.innerHTML="完成"
                    for(var  li of lis){
                        li.children[0].innerHTML="x"
                    }
                }else if(this.innerHTML=="完成"){
                    this.innerHTML="编辑"
                    for(var li of lis){
                        li.children[0].innerHTML="--"
                    }
                }
            })
            //删除单个商品
            var delTip=document.querySelector("[data-del=tip]")
             //确认框的操作 
             var btnDel=document.querySelector("[data-btn=del]")
             var btnCancel=document.querySelector("[data-btn=cancel]")
            for(let li of lis){
                li.children[0].addEventListener("click",function(){
                    //当编辑列内容为x的时候才执行点击事件
                    if(li.children[0].innerHTML=="x"){
                        //先弹出确认删除确认框
                        delTip.style.display="block"
                        //点击删除按钮
                        btnDel.addEventListener("click",function(){
                        //获取该商品的id,发送ajax请求,删除该商品，并刷新页面
                          var id=li.children[0].dataset.id    
                          ajax({
                              method:"get",
                              url:"http://127.0.0.1:9000/shopcart/delete",
                              dataType:"json",
                              data:"id="+id
                          }).then(res=>{
                             //删除商品后，刷新商品
                              ajax({
                                  method:"get",
                                  url:"http://127.0.0.1:9000/shopcart",
                                  dataType:"json"
                              }).then(result=>{
                                loadhtml(result);
                                //确认框隐藏
                                delTip.style.display="none"
                              })
                          })
                        })
                    }
                })
            }
           
        
        })();
    })
})();
