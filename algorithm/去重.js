/*
* @Author: Marte
* @Date:   2017-12-05 13:35:48
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-11 15:43:45
*/

var arr = [1,2,3,1,2,3,4,5,4,5];  //测试样例

// 1.双循环------------------------------------------
function unique(arr) {
    var newArr = [];
    var len = arr.length;
    var isRepeat;

    for(var i=0; i<len; i++) {  //第一次循环
        isRepeat = false;
        for(var j=i+1; j<len; j++) {  //第二次循环
            if(arr[i] === arr[j]){
                isRepeat = true;
                break;
            }
        }
        if(!isRepeat){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function unique(arr) {
    var newArr = [];
    var len = arr.length;
    for(var i=0; i<len; i++){ // 第一次循环
        for(var j=i+1; j<len; j++){ // 第二次循环
            if(arr[i] === arr[j]){
                j = ++i;
            }
        }
        newArr.push(arr[i]);
    }
    return newArr;
}

// 2.indexOf() --------------------------
function unique(arr) {
    return arr.filter(function(item, index){ //item 表示数组中的每个元素，index 是每个元素的出现位置。
       return arr.indexOf(item) === index; // indexOf 返回第一个索引值
   });
}

function unique(arr) {
    var newArr = [];
    arr.forEach(function(item){ //一次循环，item 即为数组中的每一项
        if(newArr.indexOf(item) === -1){
            newArr.push(item);
        }
    });
    return newArr;
}

//3.排序 sort--------------------------------------
function unique(arr) {
    var newArr = [];
    arr.sort();
    for(var i = 0; i < arr.length; i++){
        if( arr[i] !== arr[i+1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//4.利用对象-------------------------------------

function unique(arr) {
    var newArr = [];
    var len = arr.length;
    var tmp = {};
    var tmpKey;
    for(var i=0; i<len; i++){
        tmpKey = typeof arr[i] + JSON.stringify(arr[i]);

        console.log(tmpKey)

        if(!tmp[tmpKey]){
            tmp[tmpKey] = 1;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function unique(array) {
    var obj = {};
    return array.filter(function (item, index, array) {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}

//5.ES6----------------------------------------------
function unique(arr){
     var set = new Set(arr);
     return Array.from(set);
}//推荐

function unique(array) {
    return [...new Set(array)];
}

var unique = (a) => [...new Set(a)]




var arr = [1,1,'1','1',0,0,'0','0',new String("1"),new String("1"),undefined,undefined,null,null,NaN,NaN,{},{},[],[],/a/,/a/]
console.log(unique(arr));

var str1 = '1';
var str2 = new String('1');

console.log(str1 == str2); // true
console.log(str1 === str2); // false

console.log(null == null); // true
console.log(null === null); // true

console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(/a/ == /a/); // false
console.log(/a/ === /a/); // false

console.log({} == {}); // false
console.log({} === {}); // false

//================================================
//
//一个整数，它的各位数字如果是左右对称的，则这个数字是对称数。那么请找出 1 至 10000 中所有的对称数
//
function symmetric(){
    var i=1,
    str,
    newStr,
    result=[];
    for(;i<1000;i++){
        str=""+i;
        newStr=result.map.call(str,function(item){
        return item;
    }).reverse().join("");
    if(str===newStr){
        result.push(+str);
    }
    }
    return result;
}
