## sessionStorage,localStorage,cookie区别

- 都会在浏览器端保存,有大小限制,同源限制

- 会话
  - cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
  - cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
  - sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
- 有效期:
  - cookie在设置期内有效,即使窗口或浏览器关闭,默认是浏览器关闭时候
  - sessionStorage是在窗口关闭后自动删除
  - localStorage长期有效 直到用户删除
- 共享:
  - cookie在同源且符合path规则的文档之间共享
  - sessionStorage不能共享
  - localStorage在同源文档之间共享
- 存储大小：
  - cookie数据大小不能超过4k。
  - sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M-或更大。


- localStorage的修改会促发其他文档窗口的update事件
- cookie有secure属性要求HTTPS传输
- 浏览器不能保存超过300个cookie，单个服务器不能超过20个
- cookie有path概念 子路径可以访问到父路径cookie 父路径不可以访问子路径cookie






### 如何实现浏览器内多个标签页之间的通信?

- localstorge、cookies等本地存储方式

>localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，
  我们通过监听事件，控制它的值来进行页面信息通信；

### HTML5的离线储存怎么使用，工作原理能不能解释一下

在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

- 如何使用：
  - 1、页面头部像下面一样加入一个manifest的属性；
  - 2、在cache.manifest文件的编写离线存储的资源；
  ```
  	CACHE MANIFEST
  	#v0.11
  	CACHE:
  	js/app.js
  	css/style.css
  	NETWORK:
  	resourse/logo.png
  	FALLBACK:
  	/ /offline.html
  ```
  - 3、在离线状态时，操作window.applicationCache进行需求实现。

## jquery的$.extend()、$.fn和$.fn.extend()

### $.fn

```
jQuery.fn = jQuery.prototype = {
　　　init: function( selector, context ) {//….
//……
};
```

`$.fn.init` [链接](http://blog.csdn.net/lfcss/article/details/52086823)

### $.extend()

```
jQuery.extend({
min: function(a, b) { return a < b ? a : b; },
max: function(a, b) { return a > b ? a : b; }
});
jQuery.min(2,3); //  2
jQuery.max(4,5); //  5
```

为jQuery类添加类方法，可以理解为添加静态方法

### $.fn.extend()

对jQuery.prototype进得扩展，就是为jQuery类添加“成员函数”。jQuery类的实例可以使用这个“成员函数”

比如我们要开发一个插件，做一个特殊的编辑框，当它被点击时，便alert 当前编辑框里的内容。可以这么做：

```
$.fn.extend({
    alertWhileClick:function() {
          $(this).click(function(){
                 alert($(this).val());
           });
     }
});
$("#input1").alertWhileClick();

```

$("#input1")　为一个jQuery实例，当它调用成员方法 alertWhileClick后，便实现了扩展，每次被点击时它会先弹出目前编辑里的内容

jQuery.extend() 的调用并不会把方法扩展到对象的实例上，引用它的方法也需要通过jQuery类来实现，如jQuery.init()，而 jQuery.fn.extend()的调用把方法扩展到了对象的prototype上，所以实例化一个jQuery对象的时候，它就具有了这些方法，

### 实现

[链接](https://www.cnblogs.com/Leo_wl/p/3500271.html)

```
var isObj = function (o) {
    return Object.prototype.toString.call(o) === "[object Object]";
  }
_$.fn.extend = function (obj) {
  if (isObj(obj)) {
    for (var i in obj) {
      this[i] = obj[i];
    }
  }
}


$.extend = function (obj) {
  if (isObj(obj)) {
  	for (var i in obj) {
    	this[i] = obj[i];
  	}
  }
}
```

 _$.fn.extend里面的this其实是代表$.prototype,  $.extend 里面的this代表的是$。

## new操作符具体干了什么

- 1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
- 2、属性和方法被加入到 this 引用的对象中。
- 3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。

```
var obj  = {};
obj.__proto__ = Base.prototype;
Base.call(obj);
```

## ["1", "2", "3"].map(parseInt)

```
// 下面的语句返回什么呢:
["1", "2", "3"].map(parseInt);
// 你可能觉的会是[1, 2, 3]
// 但实际的结果是 [1, NaN, NaN]

// 通常使用parseInt时,只需要传递一个参数.
// 但实际上,parseInt可以有两个参数.第二个参数是进制数.
// 可以通过语句"alert(parseInt.length)===2"来验证.
// map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素,
// 元素索引, 原数组本身.
// 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,
// parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.
```