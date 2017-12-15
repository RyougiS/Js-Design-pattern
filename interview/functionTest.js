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
})

//字符串逆序
function reversText(str) {
  return str.split("").reverse().join("")
}
var reverse = function( str ){
  var newStr = '', i = str.length;
   for(; i >= 0; i--) {
        newStr += str.charAt(i);
   }
   return newStr;
};
reverse('abcde')

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
