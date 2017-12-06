/*
* @Author: Marte
* @Date:   2017-12-06 10:42:56
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-06 10:49:49
*/

// --file.js--
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open("GET", url, true);
  xhr.send();
}
export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}
// --main.js--
import { getUsefulContents } from "file";
getUsefulContents("http://itbilu.com", data => {
  doSomethingUseful(data);
});

//-----------------------------------------------------------
// d.js
export default function() {}
// 等效于：
function a() {};
export {a as default};

import a from './d';
// 等效于，或者说就是下面这种写法的简写，是同一个意思
import {default as a} from './d';
//-----------------------------------------------------------
// a.js
var a = function() {};
export {a as fun};
// b.js
import {fun as a} from './a';
a();
//export的时候，对外提供的接口是fun，它是a.js内部a这个函数的别名，但是在模块外面，认不到a，只能认到fun。