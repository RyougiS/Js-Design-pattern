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

