(function(){
    ajax({
        method:"get",
        url:"http://127.0.0.1:9000/productlist/",
        dataType:"json",
        data:"pno=1"
    }).then(res=>{
        console.log(res)
        //返回的结果包含商品信息，指示器信息，总页数
        var htmli="",htmlo=""
        var arr=[]
        for(var p of res.prolis){
            for(var c of res.color){
                if(c.prolisId==p.pid){
                    //根据指示器外键和商品id匹配，把同一个商品的指示器放到一个数组里面
                    arr.push(c)
                }
              
            }
            for(var item of arr){
                //根据数据来动态加载指示器样式
                htmli+=`<li data-link="1" title=${item.cname} data-imgsrc=${item.psrc} data-lazy="org">
                <img data-link="2" src=${item.csrc} alt="" data-color="icon">
            </li>`
            }
            if(p.psign==null){
                htmlo+=`<li class="list_item" title='${p.pname}'>
                <a href="" class="list_link" data-link="a">
                    <img src="" alt="" data-link="0">
                    <ul class="pro_color" data-link="0">${htmli}</ul>
                    <h3 class="name" data-link="0">${p.pname}</h3>
                    <p class="desc" data-link="0">${p.pdesc}</p>
                    <p class="price" data-link="0">
                        <em data-link="1">￥</em>
                        <span data-link="1">${p.pprice}</span>
                    </p>
                </a>
            </li>`
            }else{
                htmlo+=`<li class="list_item" title='${p.pname}'>
                <a href="" class="list_link" data-link="a">
                    <img src="" alt="" data-link="0">
                    <ul class="pro_color" data-link="0">${htmli}</ul>
                    <h3 class="name" data-link="0">${p.pname}</h3>
                    <p class="desc" data-link="0">${p.pdesc}</p>
                    <p class="price" data-link="0">
                        <em data-link="1">￥</em>
                        <span data-link="1">${p.pprice}</span>
                    </p>
                    <span class="sign" data-link="0">${p.psign}</span>
                </a>
            </li>`
            }
           
       arr.length=0;
       htmli=""
        }
        var ul=document.querySelector(".container .pro_list")
        ul.innerHTML=htmlo;
        //推荐，新品，价格
        (()=>{
            var div=document.querySelector("[data-nav=pro_list]")
            var price=div.children[2]
            //点击事件,点在谁身上谁变蓝
            var n=0;//记录是否是第一次点price
            div.addEventListener("click",function(e){//利用冒泡
                if(e.target.dataset.nav=="link"){
                    var hasact=div.getElementsByClassName("active")[0]
                    hasact.classList.remove("active")//有蓝色的类移除掉，目标元素添加蓝色的类
                    e.target.classList.add("active")
                    if(e.target==price){//如果点在price上，向下箭头也变蓝
                        n++
                        if(n==1)//第一次点price下箭头变蓝
                        price.classList.add("price_down_choose")
                        //当点在price上面，鼠标移入移出price，下箭头颜色不变
                        price.removeEventListener("mouseout",msout)
                        if(n>1){//后面再点price，上下箭头切换蓝色
                            price.classList.toggle("price_down_choose")
                            price.classList.toggle("price_up_choose")
                        }
                        
                    }else{//当点击其他时，重置n，鼠标键出事件，上下箭头变灰
                        n=0
                        price.className=""
                        price.addEventListener("mouseout",msout)
                    }
                }
            })
            
            price.addEventListener("mouseover",function(){
                //鼠标移入移出，下箭头颜色也发生变化
                    this.classList.add("price_down_choose")
                })
                function msout(){//鼠标移出price的事件
                    this.classList.remove("price_down_choose")
                }
                    price.addEventListener("mouseout",msout)

        })();
        //版本颜色的显示和隐藏
        (()=>{
            
            //鼠标跨过任意一个a里面的子元素，都获得该a元素
            function getA(child){
                if(child.dataset.link=="a")
                return child
                else if(child.dataset.link=="0")
                return child.parentNode
                else if(child.dataset.link=="1")
                return child.parentNode.parentNode
                else if(child.dataset.link=="2")
                return child.parentNode.parentNode.parentNode
                else return null;
            }
            var ul=document.querySelector(".pro_list")
            ul.addEventListener("mouseover",function(e){
                if(getA(e.target)!==null)//鼠标移入a以及子元素里面，版本颜色显示
                getA(e.target).children[1].style.visibility="visible"
            })
            ul.addEventListener("mouseout",function(e){
                if(e.target.className=="list_link"){//当鼠标移出a时，给a加一个鼠标移出的事件
                    e.target.addEventListener("mouseout",function(event){
                        event.stopPropagation()//a的子元素不会触发a上面的鼠标移出事件
                        e.target.children[1].style.visibility="hidden"
                    })
                }
                
            })
        })();
        //点击指示器切换主图的操作
        (()=>{
            //每个商品里面默认选中第一个导航小图标   
            var uls=document.querySelectorAll(".pro_list .pro_color")
            // console.log(imgs,uls)
            for(var ul of uls){
                ul.children[0].children[0].classList.add("active")
            }
            //找出含有active类的元素，并将其父元素的data-imgsrc属性的值给含有data-lazy=img的img标签，让其显示出图片
            var hasAct=document.querySelectorAll(".pro_list .pro_color img.active")
            // console.log(hasAct)
            for(var elem of hasAct){
                // console.log(elem.parentNode)
                var imgsrc=elem.parentNode.dataset.imgsrc
                var img=elem.parentNode.parentNode.previousElementSibling
                img.src=imgsrc
            }
             //点击小图标切换商品的主图
            
             //先找出所有的小图标元素
             var icons=document.querySelectorAll("[data-color=icon]")
             for(let icon of icons){
                  //给小图标添加点击事件
                icon.addEventListener("click",function(e){
                    //阻止祖先元素a元素的默认行为
                    e.preventDefault()
                    //先将含有active类的img去掉active类
                    var hasActs=document.querySelectorAll(".pro_list .pro_color img.active")
                    for(var item of hasActs){
                        item.classList.remove("active")
                    }
                    //给当前点击元素加active
                    this.classList.add("active")
                    //把自定义属性值给img来达到图片的切换
                    this.parentNode.parentNode.previousElementSibling.src=this.parentNode.dataset.imgsrc
                })
    
             }
          
            
        })();
        //动态加载分页导航栏
        var html3=""
        for(var i=1;i<=res.pages;i++){
            html3+=`<li><a href="#">${i}</a></li>`
        }
        var ul_pages=document.querySelector("[data-target=pages]")
        ul_pages.innerHTML=html3
        //默认为第一页
        ul_pages.children[0].children[0].classList.add("active")
        //给页码加点击事件，点击并获取当前页的商品信息
        ul_pages.addEventListener("click",function(e){
            if(e.target.tagName=="A"){
                var n=parseInt(e.target.innerHTML)
                ajax({
                    method:"get",
                    url:"http://127.0.0.1:9000/productlist",
                    data:`pno=${n}`,
                    dataType:"json"
                }).then(res=>{
                    console.log(res)
                    //把上面动态加载商品列表的代码封装成一个函数，
                    //这里调用
                    //把第一次请求回来的商品列表信息和指示器信息放到一个专用的数组里面，
                    //当点击页码响应回来的信息覆盖掉数组里面原有的信息，再次调用函数
                })
            }
        })
    });
   
})();

