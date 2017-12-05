/*
* @Author: Marte
* @Date:   2017-12-05 16:50:49
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-05 16:54:54
*/

var arr = [1, [2, [3, 4,[7,8]5,6]]];

function flatten(arr) {
    return arr.toString().split(',').map(function(item){
        return +item
    })
}

console.log(flatten(arr))

//-------------------------------------------------------
function flatten(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}

console.log(flatten(arr))
//--------------------------------------------------------
function flatten(arr) {

    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }

    return arr;
}

console.log(flatten(arr))