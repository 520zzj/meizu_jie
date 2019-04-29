function ajax({method,url,data,dataType}){
    return new Promise(callback=>{
    //创建异步对象
    var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("MicroSoft.XmlHttp")
    //get方法才拼接查询字符串
    if(method.toLowerCase()=="get"&&data!==undefined)
    url+="?"+data
    xhr.open(method,url,true)
    //绑定监听事件
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res=xhr.responseText;
            //如果返回的数据类型是josn才使用json.parse
            if(dataType!==undefined&&dataType.toLowerCase()=="json")
            res=JSON.parse(res)
            callback(res)
        }
    }
    //设置请求主体
    if(method.toLowerCase()=="post")
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    //发送请求
    xhr.send(method.toLowerCase()=="get"?null:data)
    })
}
 