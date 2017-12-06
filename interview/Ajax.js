/*
* @Author: Marte
* @Date:   2017-12-06 15:46:13
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-06 15:50:23
*/

 // 1. 创建连接
    var xhr = null;
    xhr = new XMLHttpRequest()
    // 2. 连接服务器
    xhr.open('get', url, true)
    // 3. 发送请求
    xhr.send(null);
    // 4. 接受请求
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                success(xhr.responseText);
            } else { // fail
                fail && fail(xhr.status);
            }
        }
    }


// ajax的全称：Asynchronous Javascript And XML。
//  异步传输+js+xml。
//  所谓异步，在这里简单地解释就是：向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，与此同时，页面是不会发生整页刷新的，提高了用户体验。

//  (1)创建XMLHttpRequest对象,也就是创建一个异步调用对象
//  (2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
//  (3)设置响应HTTP请求状态变化的函数
//  (4)发送HTTP请求
//  (5)获取异步调用返回的数据
//  (6)使用JavaScript和DOM实现局部刷新