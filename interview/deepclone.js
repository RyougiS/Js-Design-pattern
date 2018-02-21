/*
* @Author: Marte
* @Date:   2017-12-14 14:37:12
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-14 17:21:51
*/

function deepClone(source) {
  // 递归终止条件
  if (!source || typeof source !== 'object') {
    return source;
  }
  var obj = source.constructor === Array ? [] : {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (source[key] && typeof source[key] === 'object') {
        obj[key] = deepClone(source[key]);
      } else {
        obj[key] = source[key];
      }
    }
  }
  return obj;
}

var object1 = {arr: [1, 2, 3], obj: {key: 'value' }, func: function(){return 1;}};

// 深拷贝
var newObj= deepClone(object1);
// 改变原对象属性
object1.arr.push(4);

console.log(object1.arr); // [1, 2, 3, 4]
console.log(newObj.arr); // [1, 2, 3]
