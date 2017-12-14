/*
* @Author: Marte
* @Date:   2017-12-13 16:08:36
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-13 17:25:51
*/
//========================================================
//获取url字符串参数
function UrlSearch() {
   var name,value;
   var str=location.href; //取得整个地址栏
   var num=str.indexOf("?")
   str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

   var arr=str.split("&"); //各个参数放到数组里
   for(var i=0;i < arr.length;i++){
    num=arr[i].indexOf("=");
    if(num>0){
     name=arr[i].substring(0,num);
     value=arr[i].substr(num+1);
     this[name]=value;
     }
    }
}
var Request=new UrlSearch();
for (var prop in Request) {
  console.log(prop + " = " + Request[prop]);
}

function GetRequest() {

  var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}

function getUrlParam(k) {
    var regExp = new RegExp('([?]|&)' + k + '=([^&]*)(&|$)');
    var result = window.location.href.match(regExp);
    if (result) {
        return decodeURIComponent(result[2]);
    } else {
        return null;
    }
}

reg = /(\w+)=(\w+)/g
reg.exec(b)