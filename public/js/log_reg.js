(()=>{
    var li=document.querySelector("[data-lan=drop]")
    var div=li.children[1]
    li.addEventListener("mouseover",function(){
        div.style.display="block"
    })
    li.addEventListener("mouseout",function(){
        div.style.display="none"
    })
})();
(()=>{
    var a=document.querySelector("[data-icon=wexin]")
    var div=document.querySelector("[data-scan=wexin]")
    a.addEventListener("mouseover",function(){
        div.style.display="block"
    })
    a.addEventListener("mouseout",function(){
        div.style.display="none"
    })
})()