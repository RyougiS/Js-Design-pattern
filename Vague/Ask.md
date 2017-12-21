## 原型 原型链

- 每个对象都会在内部初始化一个属性，prototype,当我们访问一个对象的属性时候，如果这个对象内部不存在这个属性，那么他就会去prototype里面找这个属性，这个prototype又会有自己的prototype，于是他就会这么一直找下去，也就是所谓的原型链
- 关系`instance.constructor.prototype == instance.proto`
- 特点：JS对象是通过引用来传递的，我们创建的每个新对象实体中并没有属于自己的原型副本，当我们修改原型的时候，与之相关的对象也会继承这一改变
- 当我们需要一个属性的时候，JS引擎会先看当前对象中是否有这个属性，没有的话，就查找他的prototype对象是否有这个属性，一直递推一直到Object内部对象

__原型链的问题__

- 问题一: 当原型链中包含引用类型值的原型时,该引用类型值会被所有实例共享;
- 问题二: 在创建子类型(例如创建Son的实例)时,不能向超类型(例如Father)的构造函数中传递参数.

__`hasOwnProperty`__

这个函数可以只对对象查找 不去查找原型
一般遍历对象时候 判断是否是属于当前对象时候用
返回一个`Boolean`

## 继承

继承意味着复制操作，JS默认并不会复制对象的属性，相反，JS只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。

### 原型链继承

```
function Parent () {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child () {

}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // kevin

//1.引用类型的属性被所有实例共享 2.不能传参
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {

}

Child.prototype = new Parent();

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy", "yayu"]
```

### 构造函数继承

基本思想:即在子类型构造函数的内部调用超类型构造函数.

```
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {
    Parent.call(this);
}

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]

//优点：

//1.避免了引用类型的属性被所有实例共享

//2.可以在 Child 中向 Parent 传参 子类型创建时也能够向父类型传递参数.
function Parent (name) {
    this.name = name;
}

function Child (name) {
    Parent.call(this, name);
}

var child1 = new Child('kevin');

console.log(child1.name); // kevin

var child2 = new Child('daisy');

console.log(child2.name); // daisy

//缺点 方法都在构造函数中定义 每次创建实例都会创建一遍方法
```

### 组合继承

基本思路: 使用原型链实现对原型属性和方法的继承,通过借用构造函数来实现对实例属性的继承.

```
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {

    Parent.call(this, name);

    this.age = age;

}

Child.prototype = new Parent();//调用一次构造函数

var child1 = new Child('kevin', '18');//调用一次构造函数

child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
```

优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
组合继承避免了原型链和借用构造函数的缺陷,融合了它们的优点,成为 JavaScript 中最常用的继承模式. 而且, instanceof 和 isPrototypeOf( )也能用于识别基于组合继承创建的对象.

缺点 调用两次构造函数

### 原型继承

在object()函数内部, 先创建一个临时性的构造函数, 然后将传入的对象作为这个构造函数的原型,最后返回了这个临时类型的一个新实例.
从本质上讲, createObj对传入其中的对象执行了一次浅复制.

```
function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}
//相当于ES5的Object.create模拟实现，把传入的对象作为创建的对象原型
```

缺点：包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。

```
var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}

var person1 = createObj(person);
var person2 = createObj(person);

person1.name = 'person1';
console.log(person2.name); // kevin

person1.friends.push('taylor');
console.log(person2.friends); // ["daisy", "kelly", "taylor"]
```

修改person1.name的值，person2.name的值并未发生改变，并不是因为person1和person2有独立的 name 值，而是因为person1.name = 'person1'，给person1添加了 name 值，并非修改了原型上的 name 值。

### 寄生式继承

寄生式继承的思路与(寄生)构造函数和工厂模式类似, 即创建一个仅用于封装继承过程的函数,该函数在内部以某种方式来增强对象,最后再像真的是它做了所有工作一样返回对象. 如下

```
function createObj (o) {
    var clone = object(original);//通过调用object函数创建一个新对象
    clone.sayHi = function(){//以某种方式来增强这个对象
        alert("hi");
    };
    return clone;//返回这个对象
}
```
创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。
缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。

### 寄生组合式继承

 寄生组合式继承就是为了降低调用父类构造函数的开销而出现的 .

```
function Parent(name) {
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}

function Child(name, parentName) {
    Parent.call(this, parentName);  
    this.name = name;    
}

function create(proto) {
    function F(){}
    F.prototype = proto;
    F.prototype.construtor = F;
    return new F();
}

Child.prototype = create(Parent.prototype);
Child.prototype.sayName = function() {
    console.log('child name:', this.name);
}
Child.prototype.construtor = Child;

var parent = new Parent('father');
parent.sayName();    // parent name: father


var child = new Child('son', 'father');
child.sayName();     // child name: son
```

```
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

// 关键的三步
var F = function () {};

F.prototype = Parent.prototype;

Child.prototype = new F();


var child1 = new Child('kevin', '18');

console.log(child1);

//封装一下

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);
```

它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。

### ES 6 继承

```
class Parent {
    constructor(name) {
	this.name = name;
    }
    doSomething() {
	console.log('parent do something!');
    }
    sayName() {
	console.log('parent name:', this.name);
    }
}

class Child extends Parent {
    constructor(name, parentName) {
	super(parentName);
	this.name = name;
    }
    sayName() {
 	console.log('child name:', this.name);
    }
}

const child = new Child('son', 'father');
child.sayName();            // child name: son
child.doSomething();        // parent do something!

const parent = new Parent('father');
parent.sayName();           // parent name: father
```

goooooooooooooood

## new运算符

```
var obj  = {};
obj.__proto__ = F.prototype;
F.call(obj);
```
第一行，我们创建了一个空对象obj;

第二行，我们将这个空对象的proto成员指向了F函数对象prototype成员对象;

第三行，我们将F函数对象的this指针替换成obj，然后再调用F函数.

__以 new 操作符调用构造函数的时候，函数内部实际上发生以下变化：__

- 1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
- 2、属性和方法被加入到 this 引用的对象中。
- 3、新创建的对象由 this 所引用，并且最后隐式的返回 this.

## Javascript作用链域

- 全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。
- 当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找，直至全局函数，这种组织形式就是作用域链

## eval

- 它的功能是把对应的字符串解析成JS代码并运行；
- 应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）
- 由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')');

## this

this总是指向函数的直接调用者（而非间接调用者）；

This 被分为三种情况：全局对象、当前对象或者任意对象;判断处于那种情况，这完全取决于函数的调用方式，JavaScript 中函数的调用有以下几种方式

- 作为函数调用
- 作为对象方法调用
- 作为构造函数调用
- 使用 apply 或 call 调用
- 在事件中，this指向触发这个事件的对象(IE中的attachEvent中的this总是指向全局对象Window)
- 定时器 自执行函数 都指向window
- ES6中的箭头函数没有this，指向定义时所在的对象，而不是使用时所在的对象,箭头函数可以让this指向固定化，这种特性很有利于封装回调函数。

作为函数调用

```
function example(){ 　　　　
    this.n = 'hello world !'; 　　　　
    console.log(this.n);
    console.log(this); 　　
} 　　
example(); // hello world ! Window

　　
var n = 'hello world !'; 　　
function example(){ 　　　
    console.log(this.n); 　　
}
example(); // hello world !
　　
var n = 'hello world !'; 　　
function example(){ 　　　　
    this.n = 0; 　　
    } 　
example(); 　
console.log(n); // 0 !
```

作为对象方法调用

```
var name="Akita";
var dogs={
    name:"Collie",
    showName:function(){
        console.log(this.name);
        }
    }
dogs.showName(); //输出 Collie
var otherName=dogs.showName;
otherName(); //输出 Akita

```

作为构造函数调用

```
function example(){ 　　　　
    this.n = 'hello world !'; 　
} 　　
var other = new example(); 　　
console.log(other.n); //hello world !

```

使用 apply 或 call 调用

```
var n = 'hello world!'; 　　
function example(){ 　　　　
    console.log(this.n); 　　
} 　　
var o={}; 　　
o.n = 'hey~'; 　　
o.m = example; 　　
o.m.apply();//hello world!
o.m.apply(o);//hey~

```

ES6中的箭头函数没有this

```
var name = "JSON"
var obj = {
	name:"json",
	bar:()=>(console.log(this.name)),
	foo:function(){console.log(this.name)}
}
obj.foo();
obj.bar();
```

## 闭包

闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部
闭包 = 函数 + 函数能够访问的自由变量

闭包的特性：
- 函数内再嵌套函数
- 内部函数可以引用外层的参数和变量
- 参数和变量不会被垃圾回收机制回收
- 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
- 在代码中引用了自由变量

基本应用：循环绑定事件,现在不怎么用了要么let，要么事件

```
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo = checkscope();
foo();
```

## call,bind,apply

- 三者都是用来改变函数执行时候的上下文，
- 三者第一个参数都是改变函数运行时的this指向
- 三者都可以利用后续参数来传参
- bind是返回一个对应的函数 call apply立即调用

```
function Person(name){
  this.name = name;
}
Person.prototype = {
  constructor: Person,
  showName: function(){
    console.log(this.name);
  }
}
var person = new Person('qianlong');
  person.showName();
```

person 现在是由Person构造出来的对象
接下来
```
var animal = {
  name: 'cat'
}
// 1 call
person.showName.call(animal);
// 2 apply
person.showName.apply(animal);
// 3 bind
person.showName.bind(animal)();

```

我们拿别人的showName方法，并动态改变其上下文帮自己输出了信息，说到底就是实现了复用

__区别__

>上面看起来三个函数的作用差不多，干的事几乎是一样的，那为什么要存在3个家伙呢，留一个不就可以。所以其实他们干的事从本质上讲都是一样的动态的改变this上下文,但是多少还是有一些差别的..

`func.call(this, arg1, arg2);`
`func.apply(this, [arg1, arg2])`

call和apply改变了函数的this上下文后便执行该函数,而bind则是返回改变了上下文后的一个函数

call,apply区别:
他们俩之间的差别在于参数的区别，call和aplly的第一个参数都是要改变上下文的对象，而call从第二个参数开始以参数列表的形式展现，apply则是把除了改变上下文对象的参数放在一个数组里面作为它的第二个参数。

```
fn.call(obj, arg1, arg2, arg3...);
fn.apply(obj, [arg1, arg2, arg3...]);
```

**求数组中的最大和最小值**

```
var arr = [34,5,3,6,54,6,-67,5,7,6,-8,687];
Math.max.apply(Math, arr);
Math.max.call(Math, 34,5,3,6,54,6,-67,5,7,6,-8,687);
Math.min.apply(Math, arr);
Math.min.call(Math, 34,5,3,6,54,6,-67,5,7,6,-8,687);
```

**将伪数组转化为数组**

>js中的伪数组(例如通过document.getElementsByTagName获取的元素)具有length属性，并且可以通过0、1、2…下标来访问其中的元素，但是没有Array中的push、pop等方法。我们可以利用call、apply来将其转化为真正的数组这样便可以方便地使用数组方法了。

可以应用吧传递进来的函数参数列表 转化为数组来处理
```
var arrayLike = {
  0: 'qianlong',
  1: 'ziqi',
  2: 'qianduan',
  length: 3
}
```

**数组追加**

```
var arr1 = [1,2,3];
var arr2 = [4,5,6];
[].push.apply(arr1, arr2);
```

**判断变量类型**

常用 `Object.prototype.toString.call()` 返回字符串 `[object xxxxx]`

**继承**

看前面的
