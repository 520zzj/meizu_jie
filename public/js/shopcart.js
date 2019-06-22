(function(){
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
                        <div class="checkbox" data-toggle="sigleBox"></div>
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
    };
    ajax({
        method:"get",
        url:"http://127.0.0.1:9000/shopcart",
        dataType:"json"
    }).then(res=>{
        console.log(res);
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
         //给“编辑”和“完成”添加点击事件，发生切换
        (function(){
        //找到“编辑，完成”处的元素，并添加点击事件
            var edit=document.querySelector("[data-toggle=edit]")
            edit.addEventListener("click",function(){
        //找出要发生改变的元素集合
                var lis=document.querySelectorAll(".list_item .col-edit")
                //由编辑切换成完成时，所有的商品操作为可删除状态，符号变x
                if(this.innerHTML=="编辑"){
                    this.innerHTML="完成"
                    for(var  li of lis){
                        li.children[0].innerHTML="x"
                    }
                //由完成切换成编辑时，所有的商品操作为不可删除状态，符号变--
                }else if(this.innerHTML=="完成"){
                    this.innerHTML="编辑"
                    for(var li of lis){
                        li.children[0].innerHTML="--"
                    }
                }
            })
        })();
        //编辑/完成,删除商品
        (function(){
            //把删除单个商品封装成函数，按照程序流程只执行一次，刷新商品后绑定事件丢失，lis也没有从新查找。所以在 函数里面从新调用了该函数。
            function delsig(){


              //选择商品和没有选中切换
            //   (function(){
                //找出所有选择框
                var boxs=document.querySelectorAll(".cart .checkbox")
               console.log(boxs)
                //找出所有全选框
                var selAll=document.querySelectorAll("[data-toggle=selAll]")
                // console.log(selAll)
                // 找出所有的非全选框
                var sigleBoxs=document.querySelectorAll("[data-toggle=sigleBox]")
                //把类数组对象转换成数组
                sigleBoxs=Array.from(sigleBoxs)
                function  choose(){
                    //选上时，
                    //当前点击按钮如果是全选按钮，所有的按钮都选上，添加checked类
                    //否则仅仅当前按钮选上，添加checked类
                    //取消时，
                    //当前点击按钮如果是全选按钮，所有的按钮都取消，去掉checked类
                    //否则去掉当前按钮和全选按钮上的checked类
                    //当非全选按钮都选上时，全选按钮也选上
                    if(!this.classList.contains("checked")){
                        if(this.dataset.toggle=="selAll"){
                            console.log(boxs.length)
                            for(var i=0;i<boxs.length;i++){
                                boxs[i].classList.add("checked")
                            }
                        }else{
                            this.classList.add("checked")
                        }
                    }else{
                        if(this.dataset.toggle=="selAll"){
                            for(var i=0;i<boxs.length;i++){
                                boxs[i].classList.remove("checked")
                            }
                        }else{
                            this.classList.remove("checked")
                            for(var j=0;j<selAll.length;j++){
                                selAll[j].classList.remove("checked")
                            }
                        }
                    }
                    //非全选框都选上，即是都含有checked类时，全选框也选上
                    var flag=sigleBoxs.every(function(elem,i,arr){
                        return elem.classList.contains("checked")
                    })
                    if(flag){
                        for(var sa of selAll){
                            sa.classList.add("checked")
                        }
                    }
                
                }
                for(let box of boxs){
                    box.addEventListener("click",choose)
                }
         
            // })();

            //获取含有x或--的元素的父元素
            var lis=document.querySelectorAll(".list_item .col-edit")
        //如何在页面刷新后，给商品从新绑定点击事件？        
        //删除单个商品
        //获取删除确认框元素
            var delTip=document.querySelector("[data-del=tip]")
            //确认框的操作 
            //获取确认框删除和取消按钮元素
            var btnDel=document.querySelector("[data-btn=del]")
            var btnCancel=document.querySelector("[data-btn=cancel]")
            //给每个商品绑定点击事件        
                for(let li of lis){
                    li.children[0].addEventListener("click",function(){
                        //当编辑列内容为x的时候才执行点击事件
                        if(li.children[0].innerHTML=="x"){
                            //先弹出确认删除确认框
                            delTip.style.display="block"
                            //点击删除按钮,执行商品的删除
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
                                    //确认框隐藏
                                    delTip.style.display="none"
                                    //刷新商品,局部刷新
                                    loadhtml(result);
                                   // 移除掉刷新之前商品绑定事件
                                   for(var b of boxs){
                                    b.removeEventListener("click",choose)
                                }
                                     //刷新商品列表后，依然是可删除状态，可以继续删除其他商品
                                    //获取dom树重绘后的x或--对应的元素，否则无法获取更新后的x或--
                                    lis=document.querySelectorAll(".list_item .col-edit")
                                    //让删除商品后依然保持x，可继续删除其余商品
                                    for(var li of lis){
                                        li.children[0].innerHTML="x"
                                    } 
                                    delsig()
                                    // function taskx(lis){
                                    //     for(var  li of lis){
                                    //         li.children[0].innerHTML="x"
                                    //         console.log(1)
                                    //     }
                                    // }
                                    // var p=new Promise(function(resolve,reject){
                                    //     resolve();
                                    // })
                                    // p.then(loadhtml(result)).then(taskx(lis))
                                    })

                                })
                            })
                            //点击取消按钮，返回商品页面
                            btnCancel.addEventListener("click",function(){
                                delTip.style.display="none"
                            })
                        }
                    })
                    
                }
                
            }
            delsig();
            //批量删除功能，点击“删除选中的商品"
            (function(){
                //找到“删除选中的商品”的元素,并绑定点击事件
                var delMore=document.querySelector("[data-toggle=delMore]")
                delMore.addEventListener("click",function(){
                //找到选中的商品，即含有checked类的单选框，1是有checked类，2是有自定义属性data-toggle="sigleBox"
                var selBoxs=document.querySelectorAll(".checked[data-toggle=sigleBox]")
                //获取对应的商品id
                var ids=""
                for(var selBox of selBoxs){
                    console.log(selBox.parentNode.parentNode.lastElementChild.children)
                    ids+=selBox.parentNode.parentNode.lastElementChild.children[0].dataset.id+","
                }
                ids=ids.slice(0,ids.length-1)
                console.log(ids)
                //发送ajax请求，删除对应的商品
                ajax({
                    method:"get",
                    url:"http://127.0.0.1:9000/shopcart/delMore",
                    dataType:"json",
                    data:"ids="+ids
                }).then(res=>{
                    console.log(res)
                    //发送ajax请求，获取剩余商品，刷新页面
                    ajax({
                        method:"get",
                        url:"http://127.0.0.1:9000/shopcart",
                        dataType:"json"
                    }).then(res=>{
                        loadhtml(res);
                        //这里刷新商品，前面的绑定商品的事件都没了，要重新绑定
                        delsig();
                    })
                })
                })
            
            })();

        })();
      
      
    });

})();
 
