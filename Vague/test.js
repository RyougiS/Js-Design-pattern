/*
* @Author: Marte
* @Date:   2017-12-13 11:23:04
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-14 17:04:47
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

(function  () {
    var a = b = 'res'
})()
console.log(a)
console.log(b)



var a = (function  () {
    var i = 0;
    return {
        aa:function  () {
            i++;
            console.log(i);
        },
        bb:function  (j) {
            console.log(j);
        }
    }
})()
console.log(a);
aa();
a.bb(5)
a.aa();
a.aa.call(window)

var Fn = function  () {
    console.log(1);
    for (var i = 0; i < 5; i++) {
        var t = i;
        setTimeout(function  () {
            console.log(t);
        },i*1000)
    };
    console.log(2);
}

var Fn = function  () {
    console.log(1);
    for (var i = 0; i < 5; i++) {
        setTimeout(function  () {
            console.log(i); //异步
        },i*1000)
    };
    console.log(2);
}

var obj = {
    name:"aaa"
}
var Fn = function  (obj) {
    var newObj = obj;
    newObj.name = 'BBB';
    newObj.type = 'new';
    console.log(newObj);
    console.log(obj);
}
console.log(obj);
Fn(obj)
console.log(obj);


var a = 2;
var func = (function  () {
    var a = 3;
    return function  () {
        a++;
        alert(a)
    }
})()

function func1 () {
    var n = 99;
    nAdd = function  () {
        this.n += 1;
        console.log(this.n)
    };
    function func2 () {
        console.log(n)
    }
    return func2;
}
var res = func1();
res();
nAdd();
res();

//检测一个字符串 正则
var reg = /^[0-9]\w{1,50}$/;

window.val = 1;
var json = {
    val:10,
    fn:function  () {
        this.val += 2
    }
};
json.fn();
var fn = json.fn;
fn();
json.fn.call(window);
console.log(val + json.val)

(function  () {
    var val = 1;
    var json = {
        val:10,
        fn:function  () {
            val += 2
        }
    };
    json.fn();
    console.log(json.val + val)
})()

var name = "1"
var obj = {
    name : 'obj',
    dose : function  () {
        this.name = "dose";
        return function  () {
            console.log(this)
            return this.name
        }
    }
}
console.log(obj.dose().call(this));

var k = c = 0;
function a(n) {
  return n ? (n-1)*a(n-1):n;
    k++;c++;
    if (c>10) {
      return c
    }
}
a(5)
console.log(c);
console.log(k);

function cc(i) {
  if (i == 3) {
    i+=2
  }
  if (i == 5) {
    i--
  }
  if (i == 4) {
    i -= 2
  }
  return i
}
for (var i = 2; i < 6; i++) {
  console.log(cc(i));
}

var fullname = 'John';
var obj = {
  fullname:'Collin',
  getFullname:function () {
      console.log(this);
      return this.fullname
  },
  arrow:()=>{console.log(this); return this.fullname},
  name:function () {
    var fn = () => {
      return console.log(this);
             console.log(this.fullname);
    }
  },
  prop:{
    getFullname:function () {
      console.log(this);
      return this.fullname
    },
    arrow:()=>{console.log(this); return this.fullname}
  }
}
//箭头函数根本没有自己的this，导致内部的this就是外层代码块的this,函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());

var x = 1,y=z=0;
function add(n) {
  return n = n+2
}
y = add(x);
function add(n) {
  return n=n+3
}
z = add(x)

function foo() {
  var i = 0;
  return function () {
    console.log(i++);
  }
}
var f1 = foo(),f2 = foo();
f1();
f1();
f2();
