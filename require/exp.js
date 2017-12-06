/*
* @Author: Marte
* @Date:   2017-12-06 10:17:04
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-06 10:49:29
*/
// export语法声明用于导出函数、对象、指定文件（或模块）的原始值。
// node 中是exports  CMD 规范

//1.命名式导出
export { myFunction };
export const foo = Math.sqrt(2);//导出常量

export * from 'article'; //模块继承

var name = 'IT笔录';
var domain = 'http://itbilu.com';
export {name, domain}; // 相当于导出{name:name,domain:domain} ES6

var name = 'IT笔录';
var domain = 'http://itbilu.com';
export {name as siteName, domain};//我们可以使用as关键字对导出成员进行重命名

//export 必须变成 export{a}的形式 需要解构 export a 就算a是个函数也不允许


//2.默认导出
export default function() {}; // 可以导出一个函数
export default class(){}; // 也可以出一个类
//默认导出每个导出只有一个单一值，这个输出可以是一个函数、类或其它类型的值，这样在模块import导入时也会很容易引用

