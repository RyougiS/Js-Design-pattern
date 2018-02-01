/*
* @Author: Marte
* @Date:   2017-12-05 16:50:49
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-12 09:12:45
*/

var arr = [1, [2, [3, 4,[7,8],5,6]]];

function flatten(arr) {
    return arr.toString().split(',').map(function(item){
        return +item
    })
}

console.log(flatten(arr))

//-------------------------------------------------------
function flatten1(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}

console.log(flatten1(arr))
//--------------------------------------------------------
function flatten2(arr) {

    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }

    return arr;
}

console.log(flatten2(arr))

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






