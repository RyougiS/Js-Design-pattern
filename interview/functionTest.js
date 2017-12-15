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
