const promise = new Promise(resolve,reject){
    //...some code
    if (/*异步操作*/) {
        resolve(value)
    } else {
        reject(error)
    }
}
/*
resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
*/
promise.then(function (value) {
    //...success
},function (err) {
    console.log(err);
})
//一般例子
function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done')
    })
}
timeout(100).then((value)=>{
    console.log(value);
})

// Promise 新建后就会立即执行。
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');
//异步加载图片
function loadImageAsync(url) {
    return new Promise((resolve,reject)=>{
        const image = new Image();

        image.onload = function () {
            resolve(image);
        };
        image.onerror = function () {
            reject(new Error("Could not load at" + url));
        };

        image.src = url;
    })
}
//AJAX
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
