/*
* @Author: Marte
* @Date:   2017-12-11 10:29:07
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-11 13:45:28
*/
    var arr = [1,2,4,4,3,3,1,5,3];

    function res(arr) {
        var tmp = [];
        arr.sort().sort(function (a,b) {
            if(a === b && tmp.indexOf(a) === -1){
                tmp.push(a)
            }
        })
        return tmp
    }
    var result = res(arr);
    console.log(result )

    var arr = [1,2,4,4,3,3,1,5,3];

    function res(arr) {
        var tmp = [];
        arr.forEach(function (item) {
            (arr.indexOf(item) !== arr.lastIndexOf(item) && tmp.indexOf(item) === -1) && tmp.push(item)
        })
        return tmp;
    }
    var result = res(arr);
    console.log(result.sort())

    var arr = [1,2,4,4,3,3,1,5,3];

    function res(arr) {
        var tmp = [];
        var str = arr.join(',');
        arr.forEach(function (item) {
            if( str.replace(item,"").indexOf(item) > -1 && tmp.indexOf(item) === -1 ){
                tmp.push(item);
            }
        })
        return tmp
    }
    var result = res(arr);
    console.log(result)

    var arr = [1,2,4,4,3,3,1,5,3];

    function res(arr) {
        var tmp = [];
        var copy = [];
        arr.forEach(function (item) {
            if(copy.indexOf(item) === -1){
                copy.push(item)
            }else{
                if(tmp.indexOf(item) === -1){
                    tmp.push(item)
                }
            }
        })
        return tmp.sort()
    }
    var result = res(arr);
    console.log(result)


//-----------------------------------------------------------
//字符串中重复字符的个数以及最大重复次数的字符
//

var char = "aaaabbbbuuuhhhyyygggAAAvvvGGG"
function charStat (str) {
    var arr = char;
    var temp = {};
    arr.replace(/(\w{1})/g,function  (a) {
        temp[a] ? temp[a] += 1 : temp[a] = 1
    })
    return temp
}
charStat(char);

var char = "aaaaaaabbbbuuuhhhyyygggAAAvvvGGG"
function maxChar (str) {
    var arr = char;
    var temp = {};
    arr.replace(/(\w{1})/g,function  (a) {
        temp[a] ? temp[a] += 1 : temp[a] = 1
    })
    var num = 0;
    for(var k in temp){
        if(temp[k]>num){
            num=temp[k]
            console.log(num)
            return k+":"+num;
        }
    }
}
maxChar(char);


var str='asdjbnvhaiushufsaa';
var obj={};
(function(){
    for(var i=0;i<str.length;i++){
        var key=str[i]
        if(!obj[key]){
            obj[key]=1
        }else{
            obj[key]++
        }
    }
    console.log(obj);
    console.log(obj instanceof Array)
    var num=0;
    for(var k in obj){
        if(obj[k]>num){
            num=obj[k]
            console.log(k)
        }
    }
})(str)

