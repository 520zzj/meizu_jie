 //主页引入页头  
 (()=>{
    ajax({
        method:"get",
        url:"header.html"
    }).then(res=>{
        document.getElementById("header-main").innerHTML=res;
        Promise.all( [
            ajax({
                method:"get",
                url:"http://127.0.0.1:9000/head/phone",
                dataType:"json"
                }).then(res=>{
                var html=""
                for(var p of res){
                    html+=`<li data-img="list"><a href=""><img src=${p.hsrc} alt=""></a>
                    <p>${p.hname}</p>
                    <p>&yen;${p.price}</p>
                    </li>`
                }
                var ul=document.querySelector("[data-menu=dropdown]:first-child [data-menu=box]")
                ul.innerHTML=html;
            })
        ]  
        ).then(()=>{
            (()=>{
                //二级菜单图片列表未被选中的图做模糊处理
                var lisImgs=document.querySelectorAll("[data-img=list]")
                for(var lisImg of lisImgs){ 
                    lisImg.onmouseover=function(){
                     var ulover=this.parentNode.children;
                     for(var v of ulover){
                         v.className="opa"
                     }//当前li的兄弟li全都加opacity，自己不加
                      this.className=""
                    }
                    lisImg.onmouseout=function(){
                        var ulout=this.parentNode.children
                        for(var v of ulout){
                            v.className=""
                        }
                    }
                }
            })();
        });
       
    
        
    (()=>{
         //导航二级菜单图片列表的显示和隐藏
    var lis=document.querySelectorAll("[data-menu=dropdown]")
     for(var li of lis){
        li.onmouseover=function(){ 
                this.children[1].style.height="200px";
                if(this==lis[lis.length-1]){//最后一个二级菜单高度做处理
                    this.children[1].style.height="310px";
                }
         }  
        li.onmouseout=function(){
            this.children[1].style.height="0px"
        }
     }
 })();


 (()=>{
    //用户图标处二级菜单
    var liUser=document.querySelector("[data-user=menu]")
    liUser.addEventListener("mouseover",function(){
        this.children[1].classList.remove("hidden")
    })
    liUser.addEventListener("mouseout",function(){
        this.children[1].classList.add("hidden")
    })
 })();

 (()=>{
    //购物车图标提示
    var liCart=document.querySelector("[data-cart=tip]")
    liCart.addEventListener("mouseover",function(){
        this.children[2].style.display="block";
    })
    liCart.addEventListener("mouseout",function(){
        this.children[2].style.display="none";      
    })
 })();

 (()=>{
    //点击导航栏，导航栏背景变白
     var liMenus=document.querySelectorAll("[data-menu=dropdown]")
     var bgcTrapar=document.querySelectorAll("[data-bgc=trapar]")
     for(var liMenu of liMenus){
         liMenu.addEventListener("mouseover",function(){
             for(var v of bgcTrapar){
                 v.style.background="white"
             }
         })
         liMenu.addEventListener("mouseout",function(){
             for(var v of bgcTrapar){
                 v.style.background="transparent"
             }
         })
     }
 })();

 //搜索框
//  (()=>{
//      //点击图标搜索
//      $(".header .search img").click(function(){
//         if( $(".header .search input").val().trim().length!==0)
//         console.log($(".header .search input").val())
//        })
//      $(".header .search input")
//      .focus()//获取焦点
//     .keyup(function(e) {//按下enter键搜索
//     if (e.keyCode == "13")
//         $(".header .search img").trigger("click")
//     })
//  })();

//搜索功能
(()=>{
    //自定义获取焦点的指令
    Vue.directive("focus",{
        inserted(elem){//挂载上去，就获取到了所在的dom元素
            elem.focus()
        }
    })
    var vm=new Vue({
        //按enter键进行搜索
        el:".box_right .search",
        data:{
            val:"",//绑定value
            tips:[],//保存搜索相关的信息
            now:-1,//手动输入值的下标
            event:"",//获取上下按键的e对象
            val_self:""//保存手动输入的值
        },
        methods:{
            search(){//点击图标搜索，执行查询操作
                 console.log("查到"+this.val)
            },
            search_tip(){//输入信息，显示相关提示信息
                //  console.log(this.val+"的相关信息")
                if(this.val.trim()!==""&&this.event.keyCode!==38&&this.event.keyCode!==40){
                    axios.get("http://127.0.0.1:9000/index/product_list",{
                        params:{
                            keyword:this.val
                        }
                    }).then(res=>{  
                        vm.tips=res.data
                        // console.log(res)
                    })
                }
                
            },
            arrowdown(e){
                this.event=e
                this.now++
                if(this.now>this.tips.length-1)//now超过数组最后的下标就重置
                this.now=-1
                if(this.now==-1){
                    this.val=this.val_self
                }else{//后台读取的数据下标对应的值，付给input的value值
                    this.val=this.tips[this.now].pname
                }
                
            },
            arrowup(e){
                this.event=e
                this.now--
                if(this.now<-1)//now<-1,就跳到数组最后一个下标
                this.now=this.tips.length-1
                if(this.now==-1)
               this.val=this.val_self
                else
                this.val=this.tips[this.now].pname
            },
          
        },
        watch:{
            val(){
                this.search_tip()
                if(this.event.keyCode!==38&&this.event.keyCode!==40)
                this.val_self=this.val//按上下箭头的值不保存
            }
        },
        mounted:function(){
            //页面刷新后回到顶部
            window.scrollTo(0,0)
        }
      
    })
    //失去焦点和获取焦点时，提示信息列表的显示和隐藏
    var input=document.querySelector(".box_right .search input")
    var tips_ul=document.querySelector(".box_right .search .search_tip")
    input.onblur=function(){
        tips_ul.style.display="none"
    }
    input.onfocus=function(){
        tips_ul.style.display="block"
    }
})();

    }) 
})() 
   

  
 
   

