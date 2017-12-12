/*
* @Author: Marte
* @Date:   2017-12-12 09:11:31
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-12 11:26:36
*/

//=============================================================
//菲波那切数列
//1.
const F = (no) => {
    let a = 0;
    let b = 1;
    let i = 1;
    let arr = [];
    while(i++ <= no) {
        [a, b] = [b, a+b]
        arr[i] = a
    }
    arr.splice(0,2)
    console.log(arr)
    return a;
}
//2.

function fn(n) {
    if(n==0 || n == 1)
        return n;
    return fn(n-1) + fn(n-2);
}

//3.

function Fn(n){
  var a1=1;
  var a2=1;
  var result=1;
  var arr = [];
  for(var i=2;i<n;i++){
    result=a1+a2;
    arr[i] = result;
    a1=a2;
    a2=result;
  }
  arr[0] = 1;
  arr[1] = 1;
  console.log(arr)
  return result;
 }

//==============================================================
//
//不用循环，创建一个长度为 100 的数组，并且每个元素的值等于它的下标。
//
Array(10000).join(' ').split('').map(function(item,index){return index})
[...Array(100)];
Array(100).fill('').map((item, index) => index)
Object.keys(Array.from({length:100}))

Object.keys(Array.apply(null,{length:100}))



//=====================================================
//数组混淆乱序
//
function randomsort(a, b) {

    return Math.random()>.5 ? -1 : 1;

    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1

}

var arr = [1, 2, 3, 4, 5];

arr.sort(randomsort);
//测试
console.time("test");
Object.keys(Array.from({length:15000})).sort(randomsort).sort(function(a,b){return a-b})
console.timeEnd("test")

//=======================================================
//算总和
Object.keys(Array.from({length:100})).map((item)=>Number(item)).reduce((pre,cur)=>pre + cur)

//=======================================================
Array.prototype.entries() //返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。

Array.prototype.keys() //返回一个新的Array迭代器，它包含数组中每个索引的键。

Array.prototype.values() //返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。

for (let index of ['a', 'b'].keys()) {    //遍历键
console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {   //遍历值
console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {   //遍历键/值对
console.log(index, elem);
}
// 0 "a"
// 1 "b"