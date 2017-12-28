## 前端三层

- 结构层 html
- 表示层 css
- 行为层 JS

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

## `["1", "2", "3"].map(parseInt)`


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


## HttpRequest中常见的四种ContentType


说到 POST 提交数据方案，包含了 Content-Type 和消息主体编码方式两部分。下面就正式开始介绍它们。

- application/x-www-form-urlencoded
  - 最常用
- multipart/form-data
  - 我们使用表单上传文件时，必须让 form 的 enctyped 等于这个值
- application/json
  - 用来告诉服务端消息主体是序列化后的 JSON 字符串
- text/xml

## 跨域

### 同源策略

- 协议相同
- 域名相同
- 端口相同

`http://www.example.com/dir/page.html`
协议是http://，域名是www.example.com，端口是80

`http://www.example.com/dir2/other.html`：同源
`http://example.com/dir/other.html`：不同源（域名不同）
`http://v2.www.example.com/dir/other.html`：不同源（域名不同）
`http://www.example.com:81/dir/other.html`：不同源（端口不同）

限制

浏览器的两种同源策略会造成跨域问题：

- DOM同源策略。禁止对不同源的页面的DOM进行操作，主要包括iframe、canvas之类的。不同源的iframe禁止数据交互的，含有不同源数据的canvas会受到污染而无法进行操作。
- XmlHttpRequest同源策略。简单来说就禁止不同源的AJAX请求，主要用来防止CSRF攻击。

- （1） Cookie、LocalStorage 和 IndexDB 无法读取。

- （2） DOM 无法获得。

- （3） AJAX 请求不能发送。

### 简单请求 非简单请求

浏览器会把跨域请求分成两类：简单和非简单请求

简单请求有以下特征：
  - 请求方法是以下之一
    - GET
    - POST
    - HEAD
  - 头信息是以下字段之一
    - Accept
    - Accept-Language
    - Content-Language
    - Last-Event-ID
    - Content-Type  //不能是application/json

当浏览器把跨域请求识别为简单请求的时候，就会在头信息里附加上一个Origin字段，该字段会把这次请求的来源（协议、域名、端口）带给服务器，服务器就会检查这个请求的来源。要是服务器同意了这个来源呢，在正常回复浏览器的同时，就也附加上几条字段作为回礼：

- Access-Control-Allow-Origin // 这条写着服务同意的来源，或者一个代表所有来源的 “*”
- Access-Control-Allow-Credentials // 这条写着浏览器可以发Cookie过来了总的来说得到服务器的认可了，这样浏览器就能正常收到回应了

要是不同意，服务器就正常返回数据，啥也不附加，浏览器见不到Access-Control-Allow-Origin会不高兴的，然后就不给你返回的数据了，再然后就是报错，这个错就是上面那这样的（就是提取颜主题色的时候😡）。 而且状态码还是各种各样的，甚至有可能是200

非简单请求

这种不简单的请求，比如PUT或DELETE请求，还有 Content-Type字段类型为application/json的。浏览器会严格一点，在发跨域请求前，会发个“预检”请求看看服务器的态度先，这个预检请求比较特殊，请求方式叫OPTIONS，头信息里不光有Origin字段还有这俩：

- Access-Control-Request-Method // 这条是告诉服务器等会的跨域请求是啥方式
- Access-Control-Request-Headers // 这条是浏览器跨域请求的时候要额外附加的信息

服务器收到预检请求提交过来的信息后，也会严格一点，不仅检查来源，还检查请求方式和头信息字段。要是服务器同意了，就在正常的HTTP回应中附加上Access-Control-Allow-Origin字段，也同样写着服务同意的来源。这就代表这拿到服务器的认可了，毕竟是经历过严格检查的，接下来的每次跨域请求都会正常进行。要是不同意，服务器也是啥都不附加地正常回应，这个时候浏览器看不见Access-Control-Allow-Origin可是会生气的，连跨域请求都懒得发，直接报错。

https://lleohao.github.io/2017/08/12/%E4%B8%80%E7%AF%87%E6%96%87%E7%AB%A0%E8%A7%A3%E5%86%B3%E8%B7%A8%E5%9F%9F/

### 解决跨域

主要 AJAX 类解决

- JSONP

网页通过添加一个`<script>`元素，向服务器请求JSON数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。

```
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}

function foo(data) {
  console.log('Your public IP address is: ' + data.ip);
};

//上面代码通过动态添加<script>元素，向服务器example.com发出请求。注意，该请求的查询字符串有一个callback参数，用来指定回调函数的名字，这对于JSONP是必需的。
//服务器收到这个请求以后，会将数据放在回调函数的参数位置返回。
```


由于`</script>`元素请求的脚本，直接作为代码运行。这时，只要浏览器定义了foo函数，该函数就会立即调用。作为参数的JSON数据被视为JavaScript对象，而不是字符串，因此避免了使用JSON.parse的步骤。

- WebSocket

WebSocket是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。

浏览器发出的WebSocket请求的头信息


```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com

```

上面代码中，有一个字段是Origin，表示该请求的请求源（origin），即发自哪个域名。

正是因为有了Origin这个字段，所以WebSocket才没有实行同源政策。因为服务器可以根据这个字段，判断是否许可本次通信。如果该域名在白名单内，服务器就会做出如下回应。

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```

- CORS

CORS是一个W3C标准，全称是”跨域资源共享”（Cross-origin resource sharing）。

只需要后端同学支持就ok (除了携带cookie)。

只要服务器返回的相应中包含头部信息Access-Control-Allow-Origin: domain-name，domain-name为允许跨域的域名，也可以设置成*，浏览器就会允许本次跨域请求。

- 服务器代理转发

后台起一个express服务,让服务器去请求跨域资源然后再返回给客户端

```
apiRoutes.get('/image', function (req, res) {
    const Url = (req.query)['0'];
    https.get(Url, function (response) {
        response.setEncoding('binary');  //二进制binary
        var type = response.headers["content-type"];
        let Data = '';
        response.on('data', function (data) {    //加载到内存
            Data += data;
        }).on('end', function () {          //加载完
            res.writeHead(200, { 'Access-Control-Allow-Origin': '\*', "Content-Type": type });   //设置头，允许跨域
            res.end(new Buffer(Data, 'binary'));
        })
    })
});
app.use('/api', apiRoutes)

```

但是 图片需要再做一次跨域处理 不然还是容易出现403不同源

- iframe

- location.hash

这种跨域方法主要是通过设置/监听url的hash部分，来实现跨域，同时需要借助第三个页面来进行辅助。

- document.domain

这种方案主要用于主域相同，子域不同的跨域情况。例如: https://jdc.jd.com/ 和 https://www.jd.com/。

通过在https://www.jd.com/打开一个https://jdc.jd.com/，此时JDC的域名是jdc.jd.com/，通过控制台执行document.domain = 'jd.com';。强制设置主域，实现同源。

- window.name：
这个属性的最大特点是，无论是否同源，只要在同一个窗口里，前一个网页设置了这个属性，后一个网页可以读取它。

这种方法的优点是，window.name容量很大，可以放置非常长的字符串；缺点是必须监听子窗口window.name属性的变化，影响网页性能。

- window.postMessage：
这个API为window对象新增了一个window.postMessage方法，允许跨窗口通信，不论这两个窗口是否同源。

举例来说，父窗口http://aaa.com向子窗口http://bbb.com发消息，调用postMessage方法就可以了。

```
var popup = window.open('http://bbb.com', 'title');
popup.postMessage('Hello World!', 'http://bbb.com');
```

postMessage方法的第一个参数是具体的信息内容，第二个参数是接收消息的窗口的源（origin），即"协议 + 域名 + 端口"。也可以设为*，表示不限制域名，向所有窗口发送。

子窗口向父窗口发送消息的写法类似。


`window.opener.postMessage('Nice to see you', 'http://aaa.com');`
父窗口和子窗口都可以通过message事件，监听对方的消息。

```
window.addEventListener('message', function(e) {
  console.log(e.data);
},false);
```

- websocket

WebSocket是一种HTML5的一种新的协议，它实现了浏览器与服务器的全双工通信WebSocket的优势是除了可以实现跨域，还有就是可以保持长连接，而不需要通过轮询实现实时性。

## AJAX 请求方法

- 1、GET方法
  - 发送一个请求来取得服务器上的某一资源
- 2、POST方法
  - 向URL指定的资源提交数据或附加新的数据
- 3、PUT方法
  - 跟POST方法很像，也是想服务器提交数据。但是，它们之间有不同。PUT指定了资源在服务器上的位置，而POST没有
- 4、HEAD方法
  - 只请求页面的首部
- 5、DELETE方法
  - 删除服务器上的某资源
- 6、OPTIONS方法
  - 它用于获取当前URL所支持的方法。如果请求成功，会有一个Allow的头包含类似“GET,POST”这样的信息
- 7、TRACE方法
  - TRACE方法被用于激发一个远程的，应用层的请求消息回路
- 8、CONNECT方法
  - 把请求连接转换到透明的TCP/IP通道

```
$(document).ready(function(){
  $("#b01").click(function(){
    htmlobj=$.ajax({
      url:"/jquery/test1.txt",
      async:false
    });
  $("#myDiv").html(htmlobj.responseText);
  });
});

$.ajax({
  type: 'POST',
  url: url,
  data: data,
  success: success,
  dataType: dataType,
  error:function(xhr){
    console.log(xhr)
  }
});
```
## 获取浏览器内核信息

`window.navigator.appVersion`

## javascript垃圾回收以及原理

- 引用计数垃圾收集
  - 这是最简单的垃圾收集算法。此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”。如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。
  - 引用计数垃圾收集有一个很大的缺陷：无法处理循环引用
- 标记-清除垃圾收集
  - 这个算法假定设置一个叫做根（root）的对象（在Javascript里，根是全局对象）。所有的'根'都被标记为活跃的，所有的子变量也被递归检查。能够从'根'上到达的都不会被认为成垃圾。没有被标记为活跃的就被认为成垃圾。这些内存就会被释放。
  - 虽然两个变量相互引用，但在函数执行完之后，这个两个变量都没有被window对象上的任何对象所引用。因此，他们会被认为不可到达的。
