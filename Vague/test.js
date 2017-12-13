/*
* @Author: Marte
* @Date:   2017-12-13 11:23:04
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-13 16:09:02
*/

var a = {};
b = Object.prototype;
[a.prototype === b,Object.getPrototypeOf(a) === b]

var foo = {n:1};
var bar = foo;
foo.x = foo = {n : 2};
console.log(foo.x);

var obj = {
    escape:function  (str) {
        return str.replace("a","b")
    },
    func:function  () {
        for (var i = 0; i < 3; i++) {
            var str = "a";
            setTimeout(function  () {
                str = str + "a";
                console.log(this.escape(str))
            },i * 1000)
        };
    }
}
obj.func();

div{
    box-sizing:border-box;
    width:40px;
    height:40px;
    padding:10px;
    border:10px solid black;
    margin:10px;
    background-color:blue;
}
//求蓝色区域宽度
//

var a = 100;
function test () {
    console.log(a);
    a = 10;
    console.log(a);
}
test();
console.log(a);

var a = 100;
function test () {
    console.log(a);
    var a = 10;
    console.log(a);
}
test();
console.log(a);

var a = 10;
function test () {
    a = 100;
    console.log(a);
    console.log(this.a);
    var a;
    console.log(a);
}
test()

