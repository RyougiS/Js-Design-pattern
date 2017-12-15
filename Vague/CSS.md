## 盒子模型种类

盒子模型分为两类：W3C标准盒子模型和IE盒子模型

这两者的关键差别就在于：

W3C盒子模型——属性高（height）和属性宽（width）这两个值不包含 填充（padding）和边框（border）
IE盒子模型——属性高（height）和属性宽（width）这两个值包含 填充（padding）和边框（border）

## display值

- block           块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
- none            缺省值。象行内元素类型一样显示。
- inline          行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
- inline-block  默认宽度为内容宽度，可以设置宽高，同行显示。
- list-item       象块类型元素一样显示，并添加样式列表标记。
- table           此元素会作为块级表格来显示。
- inherit         规定应该从父元素继承 display 属性的值。

## position的值relative和absolute定位原点

- absolute
    - 生成绝对定位的元素，相对于值不为 static的第一个父元素进行定位。

- fixed （老IE不支持）
    - 生成绝对定位的元素，相对于浏览器窗口进行定位。

- relative
    - 生成相对定位的元素，相对于其正常位置进行定位。

- static
    - 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left,right z-index 声明）。

- inherit
    - 规定从父元素继承 position 属性的值。

## css3 新特性

- 新增各种CSS选择器  （: not(.input)：所有 class 不是“input”的节点）
- 圆角          （border-radius:8px）
- 多列布局        （multi-column layout）
- 阴影和反射   （Shadow\Reflect）
- 文字特效        （text-shadow、）
- 文字渲染        （Text-decoration）
- 线性渐变        （gradient）
- 旋转          （transform）
- 缩放,定位,倾斜,动画,多背景
- 例如:transform:\scale(0.85,0.90)\ translate(0px,-30px)\ skew(-9deg,0deg)\Animation:

## CSS选择符有哪些？哪些属性可以继承？

- *
    - 1.id选择器（ # myid）
    - 2.类选择器（.myclassname）
    - 3.标签选择器（div, h1, p）
    - 4.相邻选择器（h1 + p）
    - 5.子选择器（ul > li）
    - 6.后代选择器（li a）
    - 7.通配符选择器（ * ）
    - 8.属性选择器（a[rel = "external"]）
    - 9.伪类选择器（a:hover, li:nth-child）

- *
    - 可继承的样式： font-size font-family color, UL LI DL DD DT;

- *
    - 不可继承的样式：border padding margin width height ;

## CSS优先级算法如何计算

*   优先级就近原则，同权重情况下样式定义最近者为准;
*   载入样式以最后载入的定位为准;

- 优先级为:
    - 同权重: 内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）。
    - !important >  id > class > tag
    - important 比 内联优先级高

## CSS3新增伪类有那些

- p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
- p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
- p:only-of-type    选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
- p:only-child        选择属于其父元素的唯一子元素的每个 <p> 元素。
- p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。

- ::after         在元素之前添加内容,也可以用来做清除浮动。
- ::before            在元素之后添加内容
- :enabled
- :disabled       控制表单控件的禁用状态。
- :checked        单选框或复选框被选中。

## 清除浮动的几种方式，各自的优缺点

- 父级div定义height
- 结尾处加空div标签clear:both
- 父级div定义伪类:after和zoom -----最好
- 父级div定义overflow:hidden
- 父级div也浮动，需要定义宽度
- 结尾处加br标签clear:both

```
* 1 content内容为空格用于修复opera下文档中出现
*   contenteditable属性时在清理浮动元素上下的空白
* 2 使用display使用table而不是block：可以防止容器和
*   子元素top-margin折叠,这样能使清理效果与BFC，IE6/7
*   zoom: 1;一致
**/

.clearfix:before,
.clearfix:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.clearfix:after {
    clear: both;
}

/**
* IE 6/7下使用
* 通过触发hasLayout实现包含浮动
**/
.clearfix {
    *zoom: 1;
}

/*清除浮动，触发hasLayout；
  Zoom属性是IE浏览器的专有属性，它可以设置或检索对象的缩放比例。解决ie下比较奇葩的bug。*/

```

## 如何创建块级格式化上下文(block formatting context),BFC有什么用

- 创建规则：
    - 根元素
    - 浮动元素（float不是none）
    - 绝对定位元素（position取值为absolute或fixed）
    - display取值为inline-block,table-cell, table-caption,flex, inline-flex之一的元素
    - overflow不是visible的元素
- 作用：
    - 可以包含浮动元素
    - 不被浮动元素覆盖
    - 阻止父子元素的margin折叠

## 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？

Flash Of Unstyled Content：用户定义样式表加载之前浏览器使用默认样式显示文档，用户样式加载渲染之后再从新显示文档，造成页面闪烁。

- 使用@import方法导入CSS时

- 将样式表链接放在页面不同位置时，在IE5/6下某些页面会无样式显示内容且瞬间闪烁，这现象就是文档样式短暂失效（Flash Of Unstyled Content），即FOUC。

解决方法：避免使用@import方法导入CSS,把样式表放到文档的head

## 文字...显示

```
.demo {
    display: block;
    text-overflow: ellipsis; //显示省略符号来代表被修剪的文本，也可以自定义
    overflow: hidden; //溢出内容隐藏
    white-space:nowrap; //强制文本在一行内显示
}
```

## 页面导入样式时，使用link和@import有什么区别

- (1) link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
- (2) 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
- (3) import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;
- (4) link最大限度支持并行下载，@import过多嵌套导致串行下载，出现FOUC
- (5) @import必须在样式规则之前，可以在css文件中引用其他文件

## REM

rem屏幕适配之前，先说一下一般做移动端适配的方法，一般可以分为：

- 1 简单一点的页面，一般高度直接设置成固定值，宽度一般撑满整个屏幕。

- 2 稍复杂一些的是利用百分比设置元素的大小来进行适配，或者利用flex等css去设置一些需要定制的宽度。

- 3 再复杂一些的响应式页面，需要利用css3的media query属性来进行适配，大致思路是根据屏幕不同大小，来设置对应的css样式。

REM 意思就是根据网页的根元素来设置字体大小，和em（font size of the element）的区别是，em是根据其父元素的字体大小来设置，而rem是根据网页的跟元素（html）来设置字体大小的


### rem基准值计算

1 由于我们所写出的页面是要在不同的屏幕大小设备上运行的
2 所以我们在写样式的时候必须要先以一个确定的屏幕来作为参考，这个就由我们拿到的视觉稿来定
3 假如我们拿到的视觉稿是以iphone6的屏幕为基准设计的
4 iPhone6的屏幕大小是375px，
`	rem = window.innerWidth  / 10`
这样计算出来的rem基准值就是37.5

### 动态设置html的font-size

1 利用css的media query来设置
2 利用scss less的处理函数
3 利用javascript来动态设置 根据我们之前算出的基准值，我们可以利用js动态算出当前屏幕所适配的font-size

```
var documentElement = document.documentElement;

function callback() {
    var clientWidth = documentElement.clientWidth;
    // 屏幕宽度大于780，不在放大
    clientWidth = clientWidth < 780 ? clientWidth : 780;
    documentElement.style.fontSize = clientWidth / 10 + 'px';
}

document.addEventListener('DOMContentLoaded', callback);
window.addEventListener('orientationchange' in window ? 'orientationchange' : 'resize', callback);
```

>需要单独处理高清屏

一般我们获取到的视觉稿大部分是iphone6的，所以我们看到的尺寸一般是双倍大小的，在使用rem之前，我们一般会自觉的将标注/2，其实这也并无道理，但是当我们配合rem使用时，完全可以按照视觉稿上的尺寸来设置。

1 设计给的稿子双倍的原因是iphone6这种屏幕属于高清屏，也即是设备像素比(device pixel ratio)dpr比较大，所以显示的像素较为清晰。

2 一般手机的dpr是1，iphone4，iphone5这种高清屏是2，iphone6s plus这种高清屏是3，可以通过js的window.devicePixelRatio获取到当前设备的dpr，所以iphone6给的视觉稿大小是（\*2）750×1334了。

3 拿到了dpr之后，我们就可以在viewport meta头里，取消让浏览器自动缩放页面，而自己去设置viewport的content例如（这里之所以要设置viewport是因为我们要实现border1px的效果，加入我给border设置了1px，在scale的影响下，高清屏中就会显示成0.5px的效果）

`meta.setAttribute('content', 'initial-scale=' + 1/dpr + ', maximum-scale=' + 1/dpr + ', minimum-scale=' + 1/dpr + ', user-scalable=no');`

4 设置完之后配合rem，修改

```
@function px2rem($px){
    $rem : 75px;
    @return ($px/$rem) + rem;
}
```

双倍75，这样就可以完全按照视觉稿上的尺寸来了。不用在/2了，这样做的好处是：
1 解决了图片高清问题。

2 解决了border 1px问题（我们设置的1px，在iphone上，由于viewport的scale是0.5，所以就自然缩放成0.5px）
