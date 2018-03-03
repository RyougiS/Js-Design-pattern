## 一些基本概念

### 视窗 viewport

简单的理解，viewport是严格等于浏览器的窗口。在桌面浏览器中，viewport就是浏览器窗口的宽度高度。但在移动端设备上就有点复杂。

移动端的viewport太窄，为了能更好为CSS布局服务，所以提供了两个viewport:虚拟的viewportvisualviewport和布局的viewportlayoutviewport。

### 设备像素比(device pixel ratio)

设备像素比简称为dpr，其定义了物理像素和设备独立像素的对应关系。它的值可以按下面的公式计算得到：著作权归作
者所有。

> 设备像素比 ＝ 物理像素 / 设备独立像素
> 设备独立像素:可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素(比如说CSS像素)，然后由相关系统转换为物理像素
>物理像素：买手机的时候会有一个 n x m 的分辨率，那是屏幕的n x m个呈像的点，一个点（小方格）为一个物理像素。它是屏幕能显示的最小粒度.
>CSS像素：就是CSS里的Px，上面已经讲了是viewport中的一个小方格。
>像素密度：即dpi或ppi，屏幕每英寸所占的物理像素点。

众所周知，iPhone6的设备宽度和高度为375pt * 667pt,可以理解为设备的独立像素；而其dpr为2，根据上面公式，我们可以很轻松得知其物理像素为750pt * 1334pt

例如 :在不同的屏幕上，CSS像素所呈现的物理尺寸是一致的，而不同的是CSS像素所对应的物理像素具数是不一致的。在普通屏幕下1个CSS像素对应1个物理像素，而在Retina屏幕下，1个CSS像素对应的却是4个物理像素。

### viewport meta标签

其主要用来告诉浏览器如何规范的渲染Web页面，而你则需要告诉它视窗有多大。

```
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
// width    设置viewport宽度，为一个正整数，或字符串‘device-width’
// device-width  设备宽度
// height   设置viewport高度，一般设置了宽度，会自动解析出高度，可以不用设置
// initial-scale    默认缩放比例（初始缩放比例），为一个数字，可以带小数
// minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
// maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
// user-scalable    是否允许手动缩放
```

其中name属性声明了这个meta标签元素想要声明的内容的名称,content就是声明的具体内容了。

width和scale都可以用来设置viewport的值
- viewport = width;
- viewport = idea viewport /scale;

为了保证与设计稿一致,比如设计稿如果是750的横向分辨率，那么实际页面的device-width，以iphone6来说，也等于750，这样的话设计稿上标注的尺寸只要除以某一个值就能够转换为rem了。通过js设置viewport的方法如下：

```
var scale = 1 / devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
```

### visual viewport和layout viewport

>把layout viewport想像成为一张不会变更大小或者形状的大图。现在想像你有一个小一些的框架，你通过它来看这张大图。（译者：可以理解为「管中窥豹」）这个小框架的周围被不透明的材料所环绕，这掩盖了你所有的视线，只留这张大图的一部分给你。你通过这个框架所能看到的大图的部分就是visual viewport。当你保持框架（缩小）来看整个图片的时候，你可以不用管大图，或者你可以靠近一些（放大）只看局部。你也可以改变框架的方向，但是大图（layout viewport）的大小和形状永远不会变。

当你进行页面缩放的时，你可以想象你拿着这个小框架离这张大图越来越近了，那么你所看到的大图的内容也越来越少了。原本在未缩放的页面上看起来很小的尺寸，现在通过viewport看上去变大了，事实上这部分的css的px值并没有变化，仅仅是因为进行放大后，css的1px的值所占的屏幕分辨率的值变大了。

同理，当你缩小整个页面的时候，看到大图的内容也越来越多，同时，原本看起来很大的尺寸，现在再通过viewport看上去的时候又变小了。同理,css的1px的值并没有发生变化,但是1px值所占的屏幕分辨率的值变小了。

在放大和缩小的过程中，visual viewport和layout viewport的宽，高都没发生任何的变化,变化的仅仅就像是用户拿着这个visual viewport去远离或者靠近layout viewport，在远离或者靠近的过程中，就会呈现出缩放的效果来。

- 如果visual viewport 的宽度 > layout viewport 的宽度，那么viewport需要zoom in,以适应visual viewport的宽度
- 如果visual viewport 的宽度 < layout viewport的宽度，那么viewport需要zoom out，以适应visual viewport的宽度

### 移动设备中1px不等于1个物理像素

| 型号       | 像素(物理)分辨率    |  逻辑分辨率  |  倍率  |
| --------   | -----:   | :----: | :----: |
| iphone5       | 640*1136    |   320*568    |   2    |
| iphone6       | 750*1334      |   375*667   |   2    |
| iphone6P      | 1242*2208      |   414*736    |   3    |
