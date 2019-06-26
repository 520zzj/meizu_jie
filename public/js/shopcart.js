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
                        <em>￥</em><span data-toggle="unipri">${p.unitprice}</span>
                    </li>
                    <li class="col-mount">
                        <div class="mount_box">
                            <span class="disable">-</span><input type="text" value=${p.amount} data-toggle="mount"><span>+</span>
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
            //删除单个商品
            //获取含有x或--的元素的父元素
            var lis=document.querySelectorAll(".list_item .col-edit")
        //如何在页面刷新后，给商品从新绑定点击事件？        
        //获取删除确认框元素
            var delTip=document.querySelector("[data-del=tip]")
            //确认框的操作 
            //获取确认框删除和取消按钮元素
            var btnDel=document.querySelector("[data-btn=del]")
            var btnCancel=document.querySelector("[data-btn=cancel]")
            //给每个商品绑定点击删除单个商品的事件        
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
                                    var boxs=document.querySelectorAll(".cart .checkbox")
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
                                    //页面刷新之后从新绑定选中框的逻辑关系
                                    change(choose);
                                    //页面刷新后，从新给商品绑定数量，单价关系
                                    mouRel();
                                    //删除单个商品刷新后，从新计算显示选中商品数量，总商品数量,总价
                                    allChoAll();
                                    //刷新页面后，从新给商品绑定删除商品的事件 
                                    delsig();
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
            //调用删除单个商品的事件
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
                        //找出所有选择框
                       // 移除掉刷新之前商品绑定事件
                       var boxs=document.querySelectorAll(".cart .checkbox")
                       for(var b of boxs){
                            b.removeEventListener("click",choose)
                       }
                       //从新绑定全选与单选的关系
                       change(choose);
                        //批量删除商品后，页面刷新了，也要从新给商品绑定数量和价格的关系
                        mouRel();
                        //删除多个商品刷新后，从新计算显示选中商品数量，总商品数量,总价
                        allChoAll();
                        //这里刷新商品，前面的绑定商品的事件都没了，要重新绑定
                        delsig();
                    })
                })
                })
            
            })();

        })();

        
        //点击按钮-和+控制商品的事件
        //点击按钮数量发生变化，小计也随之数量发生变化
        //封装成函数
        function mouRel(){
            //找出所有的购买数量所在元素
            var inputs=document.querySelectorAll("[data-toggle=mount]")
            for(let input of inputs){
                //找出每个商品数量所在元素对应的小计所在元素
                let subtotal=input.parentNode.parentNode.nextElementSibling.lastElementChild
                //找出单价所在元素
                let unipric=input.parentNode.parentNode.previousElementSibling.lastElementChild
                //页面初始化的时候，判断商品数量，<=1时候-按钮就禁用，>=10时候+按钮就禁用
                //给-绑定事件
                 //-禁用情况
                let n=parseInt(input.value)
                //console.log(n)
                if(n<=1){
                    input.previousElementSibling.classList.add("disable")
                }else if(n>1&&input.previousElementSibling.classList.contains("disable")){
                    input.previousElementSibling.classList.remove("disable")
                }
                //+禁用情况
                if(n>=10){
                    input.nextElementSibling.classList.add("disable")
                }else if(n<10&&input.nextElementSibling.classList.contains("disable")){
                    input.nextElementSibling.classList.remove("disable")
                }
                //页面初始化的时候，确定购买数量和小计的关系
                subtotal.innerHTML=n*parseFloat(unipric.innerHTML)
                //给-添加事件
                input.previousElementSibling.addEventListener("click",function(){
                        //当n的值《=1时，n值不能再减少,并且-按钮禁用
                        if(n<=1){
                            this.classList.add("disable") 
                            // console.log(1)       
                            return;   
                        //当n值>1时，n值减少，如果+按钮被禁用，取消禁用              
                        }else{
                            if(n==10)
                            this.nextElementSibling.nextElementSibling.classList.remove("disable")
                            n--
                            this.nextElementSibling.value=n    
                        }
                        //小计跟随数量变化
                        subtotal.innerHTML=n*parseFloat(unipric.innerHTML)
                })
                //给+添加事件
                input.nextElementSibling.addEventListener("click",function(){
                    //当n的值>=10的时候，n值不能再增加，并+按钮禁用
                    if(n>=10){
                        this.classList.add("disable")
                        return;
                    //当n的值<10的时候，n值增加，并且如果-按钮禁用，取消禁用
                    }else{
                        if(n==1)
                        this.previousElementSibling.previousElementSibling.classList.remove("disable")
                        n++
                        this.previousElementSibling.value=n
                    }
                    //小计跟随数量变化
                    subtotal.innerHTML=n*parseFloat(unipric.innerHTML)
                })
            }
        };
        //初始化页面时，调用一次该函数
        mouRel();
        
        //结算栏处数字变化
        function allChoAll(){
            //找出选中的商品，即是含有checked类且含有data-toggle="sigleBox"的元素
            //找出“共n商品”，“已选择n件”，“合计n元”处所在元素
            //找出 购买数量，单价所在元素
            var selBoxs=document.querySelectorAll(".checked[data-toggle=sigleBox]")
            var allMount=document.querySelector("[data-toggle=all_mount]")
            var choMou=document.querySelector("[data-toggle=choose_mount]")
            var tolPri=document.querySelector("[data-toggle=totalPrice]")
            var inputs=document.querySelectorAll("[data-toggle=mount]")
            //找出“去结算”按钮所在元素
            var btnPay=document.querySelector("[data-toggle=btnPay]")
            //页面初始化时，显示共有多少件商品
            //定义一个变量保存购买数量
            var n=0
            for(var input of inputs){
                n+=parseInt(input.value)
            }
            allMount.innerHTML=n;
            //定义保存选中商品数量的变量
            var m=0
            //定义保存总价的变量
            var allPri=0
            for(var selBox of selBoxs){
                //把选中的各个商品的数量累计起来
                m+=parseInt(selBox.parentNode.nextElementSibling.nextElementSibling.children[0].children[1].value)
                //把选中的各个商品的总价累计起来
                allPri+=parseInt(selBox.parentNode.nextElementSibling.nextElementSibling.children[0].children[1].value)*parseFloat(selBox.parentNode.parentNode.lastElementChild.previousElementSibling.children[1].innerHTML)
            }
            //把选中的总数量显示出来
            choMou.innerHTML=m;
            //把累计的总价显示出来
            tolPri.innerHTML=allPri;
            if(allPri!==0)
            btnPay.classList.add("active")
            else if(btnPay.classList.contains("active")&&allPri==0){
                btnPay.classList.remove("active")
            }
            
        };
        allChoAll();

        //选择商品和没有选中切换
        function  choose(){
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
            //每次发生选择切换时，都计算并显示选中的商品的数量
            allChoAll()
        }
        function change(choose){
             //找出所有选择框
             var boxs=document.querySelectorAll(".cart .checkbox")
            for(let box of boxs){
                box.addEventListener("click",choose)
            }
    
        }
        change(choose);
    });

})();
 
