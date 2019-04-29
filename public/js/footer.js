(()=>{
        ajax({method:"get",url:"footer.html"}).then(res=>{
            document.getElementById("footer-main").innerHTML=res;
(()=>{
    //语言种类二级菜单
    var language=document.querySelector("[data-icon=language]")
    language.addEventListener("mouseover",function(){
        this.children[1].style.display="block";
    })
language.addEventListener("mouseout",function(){
    this.children[1].style.display="none"
})
})();

(()=>{
    //扫码
    var scan=document.querySelector("[data-scan=icon]")
    scan.addEventListener("mouseover",function(e){
        if(e.target.className=="icon_link")
            scan.children[0].style.display="block"
        if(e.target.className=="icon_weichat")
            scan.children[1].style.display="block"
    })
scan.addEventListener("mouseout",function(e){
    if(e.target.className=="icon_link")
        scan.children[0].style.display="none"
    if(e.target.className=="icon_weichat")
        scan.children[1].style.display="none"
})
})()
        })
})();
   

   









