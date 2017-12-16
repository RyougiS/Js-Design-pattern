
//不定参数求和 非Number类过滤

function sum() {
  var arg = Array.prototype.slice.call(arguments);
  console.log(arg);
  var arr = [];
  arg.forEach(function(item,index){
    if (!isNaN(item)) {
      arr.push(item);
    }
  });
  var sum = arr.reduce(function(sum,item){
    return sum + item;
  });
  return sum;
}

//
var div = document.createElement("div");
document.body.appendChild(div);
div.id = "element";
var r = parseInt(Math.random()*100);
var a = '<a m="'+(r+1)+'">' + r + '</a>';
div.innerHTML += a;
var nodes = div.childNodes;
nodes.forEach((a)=>{
	if(a.nodeName == "A"){
		a.addEventListener("click",function(){ return alert (a.text) },false)
	}
});

//字符串逆序
function reversText(str) {
  return str.split("").reverse().join("");
}
var reverse = function( str ){
  var newStr = '', i = str.length;
   for(; i >= 0; i--) {
        newStr += str.charAt(i);
   }
   return newStr;
};
reverse('abcde');

//物体平移Animation

//求最大值
Math.max.apply(null,arr);

//返回值是一个数组，该数组内是n个随机且不重复的整数，且整数取值范围是[2,32]
function test(n) {
  var list = [];
  for (var i = 0; i < n; i++) {
    var rNum = Math.floor(Math.random()*30+2);
    if (list.indexOf(rNum) == -1) {
      list.push(rNum);
    }
  }
  return list;
}

//求一个字符串的字节长度
var lenFor = function(str){
  var byteLen=0,len=str.length;
  if(str){
    for(var i=0; i<len; i++){
      if(str.charCodeAt(i)>255){
        byteLen += 2;
      }else{
        byteLen++;
      }
    }
    return byteLen;
  }else{
    return 0;
  }
}  //一般方法
function getBytesLength(str) {
  // 在GBK编码里，除了ASCII字符，其它都占两个字符宽
  return str.replace(/[^\x00-\xff]/g, 'xx').length;
}

//100开始 连除2 10次
function down(n) {
  var height = 100,Sn = 0;
  for (var i = 0; i < n; i++) {
    Sn = Sn + height;
    height = height/2;
    Sn = Sn + height;
  }
  return "总距离Sn:"+Sn+",高度height:"+height;
}
