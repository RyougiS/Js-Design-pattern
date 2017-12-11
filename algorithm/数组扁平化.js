/*
* @Author: Marte
* @Date:   2017-12-05 16:50:49
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-11 15:43:47
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

//=======================================================
//
/*引例
    var docs = [
            {
                id: 1,
                words: ['hello',"world"]
            },
            {
                id: 2,
                words: ['hello',"kids"]
            },
            {
                id: 3,
                words: ['zzzz',"hello"]
            },
            {
                id: 4,
                words: ['world',"kids"]
            }

    ];
    findDocList(docs,['hello']) //文档1，文档2，文档3
    findDocList(docs,['hello','world']) //文档1
*/

function findDocList(docs,arr){
    let arrStr = arr.join(""),
        itemStr,
        result = [];
    docs.forEach(function  (item) {
        itemStr = item.words.join("");
        console.log(itemStr);
        if(itemStr.search(new RegExp(arrStr))!==-1){
            result.push("文档"+item.id);
        }
    })
    console.log(result);
}

//------------------------------------------------------
//不用循环，创建一个长度为 100 的数组，并且每个元素的值等于它的下标。
//
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


