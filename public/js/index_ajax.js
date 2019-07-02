 //四个预览图
(()=>{
    ajax({
        method:"get",
        url:"http://127.0.0.1:9000/index/prev",
        dataType:"json"
    }).then(res=>{
        var html=""
        for(var p of res){
        html+=`<li>
        <a href="">
            <img src=${p.psrc} alt="">
                <h4>${p.pname}</h4>
                <p>${p.paction}</p>
        </a>
    </li>`
        }
        var ul=document.querySelector(".pre_show_box")
        ul.innerHTML=html
    })
})();
//手机
(()=>{
    ajax({
        method:"get",
        url:"http://127.0.0.1:9000/index/phone",
        dataType:"json"
    }).then(res=>{
        var html=""
        for(var i=0;i<res.length;i++){
            if(i<2){
                html+=`<li class="middle_img">
                <a href="http://127.0.0.1:5500/product_details.html?pname=${res[i].pname}">
                    <img class="goods_img" src=${res[i].psrc} alt="">
                    <div class="box_info">
                            <h4 class="goods_name">${res[i].pname}</h4>
                            <p class="goods_desc">${res[i].pdesc}</p>
                            <span class="goods_price">&yen;${res[i].pprice}</span>        
                    </div>
                    <span class="product_sign red_gradient">${res[i].psign}</span>
                </a>`
            }else if(i<8){
                html+=`<li class="little_img">
                <a href="http://127.0.0.1:5500/product_details.html?pname=${res[i].pname}">
                    <img src=${res[i].psrc} alt="">
                    <div class="box_info">
                            <h4  class="goods_name">${res[i].pname}</h4>
                            <p class="goods_desc">${res[i].pdesc}</p>
                            <span class="goods_price">&yen;${res[i].pprice}</span>
                    </div>
                    <span class="product_sign yellow_gradient">${res[i].psign}</span>
                </a>
            </li>`
            }else{
                html+=`<li class="little_img">
                <a href="http://127.0.0.1:5500/product_details.html?pname=${res[i].pname}">
                    <img src=${res[i].psrc} alt="">
                    <div class="box_info">
                            <h4  class="goods_name">${res[i].pname}</h4>
                            <p class="goods_desc">${res[i].pdesc}</p>
                            <span class="goods_price">&yen;${res[i].pprice}</span>
                    </div>
                </a>
            </li>`
            }
        } 
        var ul=document.querySelector(".floor_phone .img_list_box")
        ul.innerHTML=html
    })   
})();
//声学
(()=>{
    ajax({
        method:"get",
        url:"http://127.0.0.1:9000/index/sound",
        dataType:"json"
    }).then(res=>{
        var html=""
        for(var i=0;i<res.length;i++){
            if(i%4==0){
                if(res[i].bprice!=null){
                    html+=`<li class="little_img row_first">
                    <a href="">
                        <img class="goods_img" src=${res[i].src} alt="">
                        <div class="box_info">
                                <h4 class="goods_name">${res[i].sname}</h4>
                                <p class="goods_desc">${res[i].sdesc}</p>
                                <span class="goods_price">&yen;${res[i].price}</span>    
                                <s>&yen;${res[i].bprice}</s> 
                        </div>
                    </a>
                </li>`
                }else{
                    html+=`<li class="little_img row_first">
                    <a href="">
                        <img class="goods_img" src=${res[i].src} alt="">
                        <div class="box_info">
                                <h4 class="goods_name">${res[i].sname}</h4>
                                <p class="goods_desc">${res[i].sdesc}</p>
                                <span class="goods_price">&yen;${res[i].price}</span>    
                        </div>
                    </a>
                </li>`
                }
            
            }else{
                if(res[i].bprice!=null){
                    html+=`<li class="little_img">
                    <a href="">
                        <img class="goods_img" src=${res[i].src} alt="">
                        <div class="box_info">
                                <h4 class="goods_name">${res[i].sname}</h4>
                                <p class="goods_desc">${res[i].sdesc}</p>
                                <span class="goods_price">&yen;${res[i].price}</span>
                                <s>&yen;${res[i].bprice}</s>       
                        </div>
                    </a>
                </li>`
                }else{
                        html+=`<li class="little_img">
                <a href="">
                    <img class="goods_img" src=${res[i].src} alt="">
                    <div class="box_info">
                            <h4 class="goods_name">${res[i].sname}</h4>
                            <p class="goods_desc">${res[i].sdesc}</p>
                            <span class="goods_price">&yen;${res[i].price}</span>      
                    </div>
                </a>
            </li>`
                }
            }
        }
        var ul=document.querySelectorAll(".floor_sound_box .img_list_box")[0]   
        ul.innerHTML=html
        //第一列商品的价格颜色
            var spans=document.querySelectorAll(".floor_sound_box .row_first .goods_price")
            spans[0].style.color="#00fefb"
            spans[1].style.color="#6ad0c4"
            spans[2].style.color="#ebce6b"
    })
})();
//配件
(()=>{
    ajax({
        method:"get",
        url:"http://127.0.0.1:9000/index/part",
        dataType:"json"
    }).then(res=>{
        var html=""
        for(var i=0;i<res.length;i++){
            if(i%4==0){
                if(res[i].bprice!=null){
                    html+=`<li class="little_img row_first">
                    <a href="">
                        <img class="goods_img" src=${res[i].src} alt="">
                        <div class="box_info">
                                <h4 class="goods_name">${res[i].pname}</h4>
                                <p class="goods_desc">${res[i].pdesc}</p>
                                <span class="goods_price">&yen;${res[i].price}</span>
                                <s>&yen;${res[i].bprice}</s>        
                        </div>
                    </a>
                </li>`
                }else{
                    html+=`<li class="little_img row_first">
                    <a href="">
                        <img class="goods_img" src=${res[i].src} alt="">
                        <div class="box_info">
                                <h4 class="goods_name">${res[i].pname}</h4>
                                <p class="goods_desc">${res[i].pdesc}</p>
                                <span class="goods_price" >&yen;${res[i].price}</span>
                        </div>
                    </a>
                </li>`
                }
               
            }else{
                if(res[i].bprice!=null){
                    html+=`<li class="little_img">
                    <a href="">
                        <img class="goods_img" src=${res[i].src} alt="">
                        <div class="box_info">
                                <h4 class="goods_name">${res[i].pname}</h4>
                                <p class="goods_desc">${res[i].pdesc}</p>
                                <span class="goods_price" >&yen;${res[i].price}</span>
                                <s>&yen;${res[i].bprice}</s>        
                        </div>
                    </a>
                </li>`
                }else{
                    html+=`<li class="little_img">
                    <a href="">
                        <img class="goods_img" src=${res[i].src} alt="">
                        <div class="box_info">
                                <h4 class="goods_name">${res[i].pname}</h4>
                                <p class="goods_desc">${res[i].pdesc}</p>
                                <span class="goods_price">&yen;${res[i].price}</span>      
                        </div>
                    </a>
                </li>`
                }
               
            }
           
        }
        var ul=document.querySelector(".floor_parts .img_list_box")
        ul.innerHTML=html
          //第一列商品的价格颜色
          var spans=document.querySelectorAll(".floor_parts .row_first .goods_price")
          spans[0].style.color="#fbd843"
          spans[1].style.color="#47b4e1"
          spans[2].style.color="#f1904a"
    })
})();
//生活周边
(()=>{
    ajax({
        method:"get",
        url:"http://127.0.0.1:9000/index/aside",
        dataType:'json'
    }).then(res=>{
        var html=""
        for(var i=0;i<res.length;i++){
            if(i%4==0){
                if(res[i].bprice!=null){
                    html+=`<li class="little_img row_first">
                    <a href="">
                        <img class="goods_img" src=${res[i].src} alt="">
                        <div class="box_info">
                                <h4 class="goods_name">${res[i].aname}</h4>
                                <p class="goods_desc">${res[i].adesc}</p>
                                <span class="goods_price">&yen;${res[i].price}</span>
                                <s>&yen;${res[i].bprice}</s>        
                        </div>
                    </a>
                </li>`
                }else{
                    html+=`<li class="little_img row_first">
                    <a href="">
                        <img class="goods_img" src=${res[i].src} alt="">
                        <div class="box_info">
                                <h4 class="goods_name">${res[i].aname}</h4>
                                <p class="goods_desc">${res[i].adesc}</p>
                                <span class="goods_price" >&yen;${res[i].price}</span>
                        </div>
                    </a>
                </li>`
                }
               
            }else{
                if(res[i].bprice!=null){
                    html+=`<li class="little_img">
                    <a href="">
                        <img class="goods_img" src=${res[i].src} alt="">
                        <div class="box_info">
                                <h4 class="goods_name">${res[i].aname}</h4>
                                <p class="goods_desc">${res[i].adesc}</p>
                                <span class="goods_price" >&yen;${res[i].price}</span>
                                <s>&yen;${res[i].bprice}</s>        
                        </div>
                    </a>
                </li>`
                }else{
                    html+=`<li class="little_img">
                    <a href="">
                        <img class="goods_img" src=${res[i].src} alt="">
                        <div class="box_info">
                                <h4 class="goods_name">${res[i].aname}</h4>
                                <p class="goods_desc">${res[i].adesc}</p>
                                <span class="goods_price">&yen;${res[i].price}</span>      
                        </div>
                    </a>
                </li>`
                }
               
            }
           
        }
        var ul=document.querySelector(".floor_aside .img_list_box")
        ul.innerHTML=html
        var spans=document.querySelectorAll(".floor_aside .row_first .goods_price")
        spans[0].style.color="#45c128"
        spans[1].style.color="#a1ccfe"
    })
})();
//社区热帖
(()=>{
    ajax({
        method:"get",
        url:"http://127.0.0.1:9000/index/cart",
        dataType:"json"
    }).then(res=>{
        var html=""
        for(var c of res){
            html+=`<li class="little_img">
            <a href="">
                <img class="full_img" src=${c.src_full_img} alt="">
                <div class="author_info">
                    <img class="author_head" src=${c.src_head_img} alt="">
                    <span class="author_name">${c.author_name}</span>
                </div>
                <p class="comment_desc">${c.cdesc}</p>
                <h5 class="comment_tip">${c.tip}</h5>
            </a>
        </li>`
        }
        var ul=document.querySelector(".floor_cart .img_list_box")
        ul.innerHTML=html
    })
})();
//flyme
(()=>{
    ajax({
        method:"get",
        url:"http://127.0.0.1:9000/index/flyme",
        dataType:"json"
    }).then(res=>{
        var html=""
        for(var i=0;i<res.length;i++){
            if(i==0){
                html+=`<li class="little_img img_first"><a href=""><img class="full_img" src=${res[i].fsrc} alt="">
                </a>
            </li>`
            }else{
                html+=`<li class="little_img"><a href=""><img class="full_img" src=${res[i].fsrc} alt="">
                <p>${res[i].fdesc}</p>
                </a>
            </li>`
            }
        }
        var ul=document.querySelector(".floor_flyme .img_list_box")
        ul.innerHTML=html
    })
})();
//视频
(()=>{
    ajax({
        method:"get",
        url:"http://127.0.0.1:9000/index/video",
        dataType:"json"
    }).then(res=>{
        var html=""
        for(var v of res){
            html+=`<li class="little_img"><a href="./video/note9-products.mp4" target="_blank"><img class="full_img" src=${v.vsrc} alt="">
            <p >${v.vdesc}</p>
            <span></span>
            </a>
        </li>`
        }
        var ul=document.querySelector(".floor_video .img_list_box")
        ul.innerHTML=html
    })
})();



