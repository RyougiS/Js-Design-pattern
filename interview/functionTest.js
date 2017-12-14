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
