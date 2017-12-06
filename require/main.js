/*
* @Author: Marte
* @Date:   2017-12-06 10:24:29
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-06 10:50:55
*/

// CMD与AMD区别

// AMD和CMD最大的区别是对依赖模块的执行时机处理不同，而不是加载的时机或者方式不同，二者皆为异步加载模块。

// AMD依赖前置，js可以方便知道依赖模块是谁，立即加载；

// 而CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块，这也是很多人诟病CMD的一点，牺牲性能来带来开发的便利性，实际上解析模块用的时间短到可以忽略。

// ES6标准发布后，module成为标准，标准使用是以export指令导出接口，以import引入模块，但是在我们一贯的node模块中，我们依然采用的是CommonJS规范，使用require引入模块，使用module.exports导出接口。
//


//1.命名式导入
import {myMember} from "my-module";
import {foo, bar} from "my-module";
//花括号里面的变量与export后面的变量一一对应

import * as myModule from "my-module";
//通过*符号，我们可以导入模块中的全部属性和方法。当导入模块全部导出内容时，就是将导出模块（’my-module.js’）所有的导出绑定内容，插入到当前模块（’myModule’）的作用域中



import {reallyReallyLongModuleMemberName as shortName} from "my-module";
//导入模块对象时，也可以使用as对导入成员重命名，以方便在当前模块内使用


import {reallyReallyLongModuleMemberName as shortName, anotherLongModuleName as short} from "my-module";
//导入多个成员时，同样可以使用别名

import "my-module";
//导入一个模块不作为任何绑定

//2.默认导入
import myDefault from "my-module";
//直接导入默认值

import myDefault, * as myModule from "my-module"; // myModule 做为命名空间使用
或
import myDefault, {foo, bar} from "my-module"; // 指定成员导入

