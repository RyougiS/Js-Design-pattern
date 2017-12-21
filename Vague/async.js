function fetchUser() {
    return new Promise((resolve, reject) => {
        fetch('https://api.github.com/users/superman66')
        .then((data) => {
            resolve(data.json());
        }, (error) => {
            reject(error);
        })
    });
}
/**
 * Promise 方式
 */
function getUserByPromise() {
    fetchUser()
        .then((data) => {
            console.log(data);
        }, (error) => {
            console.log(error);
        })
}
getUserByPromise();

/**
 * Generator 方式
 *Generator 的方式解决了 Promise 的一些问题，流程更加直观、语义化。但是 Generator 的问题在于，函数的执行需要依靠执行器，每次都需要通过 g.next() 的方式去执行。
 */
function* fetchUserByGenerator() {
    const user = yield fetchUser();
    return user;
}

const g = fetchUserByGenerator();
const result = g.next().value;
result.then((v) => {
    console.log(v);
}, (error) => {
    console.log(error);
})
/**
 * async 方式
 *async 函数完美的解决了上面两种方式的问题。流程清晰，直观、语义明显。操作异步流程就如同操作同步流程。同时 async 函数自带执行器，执行的时候无需手动加载。
 */
 async function getUserByAsync(){
     let user = await fetchUser();
     return user;
 }
getUserByAsync()
.then(v => console.log(v));

//async 函数返回一个 Promise 对象
async function  f() {
    return 'hello world'//函数内部 return 返回的值。会成为 then 方法回调函数的参数。
};
f().then( (v) => console.log(v)) // hello world

/* 如果 async 函数内部抛出异常，则会导致返回的 Promise 对象状态变为 reject 状态。
 *抛出的错误而会被 catch 方法回调函数接收到。
 */

 async function e(){
     throw new Error('error');
 }
 e().then(v => console.log(v))
 .catch( e => console.log(e));
 /*
 async 函数返回的 Promise 对象，必须等到内部所有的 await 命令的 Promise 对象执行完，才会发生状态改变
也就是说，只有当 async 函数内部的异步操作都执行完，才会执行 then 方法的回调。
*/
const delay = timeout => new Promise(resolve=> setTimeout(resolve, timeout));
async function f(){
    await delay(1000);
    await delay(2000);
    await delay(3000);
    return 'done';
}
f().then(v => console.log(v));//会等待6S
// 正常情况下，await 命令后面跟着的是 Promise ，如果不是的话，也会被转换成一个 立即 resolve 的 Promise
// 如下面这个例子：
async function  f() {
    return await 1
};
f().then( (v) => console.log(v)) // 1
// 如果返回的是 reject 的状态，则会被 catch 方法捕获。

let a;
async function f() {
    await Promise.reject('error');
    a = await 1; // 这段 await 并没有执行
}
f().then(v => console.log(a));
// 如上面所示，当 async 函数中只要一个 await 出现 reject 状态，则后面的 await 都不会被执行。
// 解决办法：可以添加 try/catch。

// 正确的写法
let a;
async function correct() {
    try {
        await Promise.reject('error')
    } catch (error) {
        console.log(error);
    }
    a = await 1;
    return a;
}
correct().then(v => console.log(a)); // 1
// 如果有多个 await 则可以将其都放在 try/catch 中


// 使用asnyc函数
"presets": ["es2015", "stage-3"],
"plugins": ["transform-runtime"]



// ==========================================================================================
function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}
function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(m, n) {
    console.log(`step2 with ${m} and ${n}`);
    return takeLongTime(m + n);
}

function step3(k, m, n) {
    console.log(`step3 with ${k}, ${m} and ${n}`);
    return takeLongTime(k + m + n);
}
async function doIt() {
    console.time("doIt");
    const time1 = 300;
    const time2 = await step1(time1);
    const time3 = await step2(time1, time2);
    const result = await step3(time1, time2, time3);
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
}

doIt();
// ==========================================================================================

/*
（1）内置执行器。

Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。

asyncReadFile();
上面的代码调用了asyncReadFile函数，然后它就会自动执行，输出最后结果。这完全不像 Generator 函数，需要调用next方法，或者用co模块，才能真正执行，得到最后结果。

（2）更好的语义。

async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

（3）更广的适用性。

co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。

（4）返回值是 Promise。

async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。

进一步说，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。
*/
