## css选择器及其优先级
id选择器#id100

类选择器#classname10

属性选择器a[ref=“eee”]10

伪类选择器li:last-child10

标签选择器div1

伪元素选择器li:after1

相邻兄弟选择器h1+p0

子选择器ul>li0

后代选择器li a0

通配符选择器*0

对于选择器的优先级：

标签选择器、伪元素选择器：1

类选择器、伪类选择器、属性选择器：10

id 选择器：100

内联样式：1000

注意事项：

!important声明的样式的优先级最高；

如果优先级相同，则最后出现的样式生效；

继承得到的样式的优先级最低；

通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；

样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式。


## 对盒模型的理解

CSS3中的盒模型有以下两种：标准盒子模型、IE盒子模型

盒模型都是由四个部分组成的，分别是margin、border、padding和content。

标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同：

标准盒模型的width和height属性的范围只包含了content，

IE盒模型的width和height属性的范围包含了border、padding和content。

可以通过修改元素的box-sizing属性来改变元素的盒模型：

box-sizeing: content-box表示标准盒模型（默认值）

box-sizeing: border-box表示IE盒模型（怪异盒模型）

##  对BFC的理解，如何创建BFC
先来看两个相关的概念：

Box: Box 是 CSS 布局的对象和基本单位，⼀个⻚⾯是由很多个 Box 组成的，这个Box就是我们所说的盒模型。
Formatting context：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其他元素的关系和相互作⽤。

块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。
通俗来讲：BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。

创建BFC的条件：

根元素：body；
元素设置浮动：float 除 none 以外的值；
元素设置绝对定位：position (absolute、fixed)；
display 值为：inline-block、table-cell、table-caption、flex等；
overflow 值为：hidden、auto、scroll；

BFC的特点：

垂直方向上，自上而下排列，和文档流的排列方式一致。

在BFC中上下相邻的两个容器的margin会重叠

计算BFC的高度时，需要计算浮动元素的高度

BFC区域不会与浮动的容器发生重叠

BFC是独立的容器，容器内部元素不会影响外部元素

每个元素的左margin值和容器的左border相接触

BFC的作用：

解决margin的重叠问题：由于BFC是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个BFC，就解决了margin重叠的问题。

解决高度塌陷的问题：在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把父元素变成一个BFC。常用的办法是给父元素设置overflow:hidden。

创建自适应两栏布局：可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。
## position的属性有哪些，区别是什么

position有以下属性值：

absolute生成绝对定位的元素，相对于static定位以外的一个父元素进行定位。元素的位置通过left、top、right、bottom属性进行规定。

relative生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过left、top、right、bottom属性进行规定。

fixed生成绝对定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。

static默认值，没有定位，元素出现在正常的文档流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左向右排列。

inherit规定从父元素继承position属性的值

前面三者的定位方式如下：

relative： 元素的定位永远是相对于元素自身位置的，和其他元素没关系，也不会影响其他元素。

fixed： 元素的定位是相对于 window （或者 iframe）边界的，和其他元素没有关系。但是它具有破坏性，会导致其他元素位置的变化。

absolute： 元素的定位相对于前两者要复杂许多。如果为 absolute 设置了 top、left，浏览器会根据什么去确定它的纵向和横向的偏移量呢？答案是浏览器会递归查找该元素的所有父元素，如果找到一个设置了position:relative/absolute/fixed的元素，就以该元素为基准定位，如果没找到，就以浏览器边界定位。如下两个图所示：

## 弹性盒

display: flex;：将元素设置为弹性容器。

flex-direction：定义主轴的方向。可以是row(默认)、column、row-reverse或column-reverse。

justify-content：定义在主轴上如何对齐元素。可以是flex-start(默认)、flex-end、center、space-between、space-around或space-evenly。

align-items：定义在交叉轴上如何对齐元素。可以是stretch(默认)、flex-start、flex-end、center、baseline。

align-self：定义某个元素在交叉轴上的对齐方式。可以是auto(默认)、flex-start、flex-end、center、baseline。

flex-wrap：定义元素是否换行。可以是nowrap(默认)、wrap或wrap-reverse。

flex-flow：是flex-direction和flex-wrap的简写。

flex：定义元素的伸缩性。可以是一个数字，也可以是flex-grow、flex-shrink和flex-basis的组合。

order：定义元素在弹性容器中的顺序。

