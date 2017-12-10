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
