# CSS选择器
> 选择器用于定位我们想要的网页HTML元素。

汇总下便于查阅，内容来自 [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Selectors)

## 简单选择器
> 通过元素类型、class 或 id 匹配一个或多个元素.
### 类型选择器
> 一个选择器名和指定的**HTML元素名**的**不区分大小写**的匹配
```css
p {color:red}
```
### 类选择器
> 类选择器由一个点`.` 以及类后面的**类名**组成。类名是在HTML **class文档元素属性**中**没有空格的任何值**

元素的class可以多个不同的属性值，只有有一个属性值与类选择器匹配即被选中

```css
.className {margin:10px}
```
### ID选择器
> ID选择器由哈希/磅符号 `#`组成，后面是给定元素的**ID名称**。 任何元素都可以使用**id属性**设置**唯一**的ID名称。
```css
#idName {padding:5px}
```
### 通用选择器
> 通用选择`*`是最终的王牌。它允许**选择在一个页面中的所有元素**。
```css
* {padding:0;margin:0}
```
## 属性选择器
> 属性选择器是一种特殊类型的选择器，它根据元素的 属性 和属性值来匹配元素。它们的通用语法由方括号 `[]`组成，其中包含**属性名称**，后跟**可选条件**以匹配属性的值。 属性选择器可以根据其匹配属性值的方式分为两类： 存在和值属性选择器和子串值属性选择器。

### 存在和值属性选择器
这些属性选择器尝试匹配精确的属性值：
+ [attr]：该选择器选择**包含attr属性**的所有元素，不论attr的值为何。
+ [attr=val]：该选择器仅选择**attr属性被赋值为val**的所有元素。
+ [attr~=val]：该选择器仅选择具有 attr 属性的元素，而且**要求 val 值是 attr 值包含的被空格分隔的取值列表里中的一个**。

有点绕口，看栗子。

```html
<ul>
    <li>li zero</li>
    <li data-test data-val="val-start">li first</li>
    <li data-test="test" data-val="valstart valmid">li second</li>
    <li data-test="test one two three" data-val="valstart valmid valend">li third</li>
</ul>
```
```css
    /* 选中所有有data-test属性的元素, 所有的li元素*/
    [data-test] {color: red}
    /* data-test属性值为“test”的元素 ， li second */
    [data-test="test"]{text-decoration: underline}
    /* data-test属性值包含有“test” 的元素 li second、li third*/
    [data-test~="test"] {font-weight: bold}
```
<div class="img-center">
    <img src="./img/css-selector-01.png">
</div>

### 子串值属性选择器

这种情况的属性选择器也被称为“伪正则选择器”，因为它们提供类似 regular expression 的灵活匹配方式（但请注意，这些选择器并不是真正的正则表达式）：

+ [attr|=val] : 选择attr属性的值是 val 或值以 val- 开头的元素（注意，这里的 “-” 不是一个错误，这是用来处理语言编码的）。
+ [attr^=val] : 选择attr属性的值以 val 开头（包括 val）的元素。
+ [attr$=val] : 选择attr属性的值以 val 结尾（包括 val）的元素。
+ [attr*=val] : 选择attr属性的值中包含子字符串 val 的元素（一个子字符串就是一个字符串的一部分而已，例如，”cat“ 是 字符串 ”caterpillar“ 的子字符串）。

和上面例子使用同样一份html结构

```css
    /*以'val-'开头，或者属性值是'val'的元素 ， 只有 li first满足*/
    [data-val|="val"] { color: red } 

    /*以'val'开头，或者属性值是'val'的元素 ， li first second third满足*/
    [data-val^="val"] { text-decoration: underline } 

    /*以'end'结尾 ， 只有 li third 满足*/
    [data-val$="end"] { font-weight: bold } 
    
    /*包含'mid'， 有 li second third 满足*/
    [data-val*="mid"] { font-size: 20px; } 
```
<div class="img-center">
    <img src="./img/css-selector-02.png">
</div>

## 伪类和伪元素选择器

### 伪类

> 一个 CSS  伪类（pseudo-class） 是一个以冒号(:)作为前缀，被添加到一个选择器末尾的**关键字**，当你希望样式**在特定状态下**才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类（pseudo-class）。

伪类有很多种,这里展示了一些常用的，所有的见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes) ：

关键字 | 含义 | 备注
:-- | :-- | :--
:active | 表示**被用户激活**的元素；当用鼠标交互时，它代表的是用户按下按键和松开按键之间的时间 | 这个样式可能会被后声明的其他链接相关的伪类覆盖，所有注意**添加顺序** :link — :visited — :hover — :active
:checked | 表示任何处于选中状态的radio, checkbox 或("select") 元素中的option HTML元素("option") | 可利用 :checked伪类，让用户基于复选框的状态切换内容，而无需使用JavaScript
:default | 表示一组相关元素中的默认表单元素 | 该选择器可以在 \< button>, \< input type="checkbox">, \< input type="radio">, 以及 \< option> 上使用
:dir() | 匹配特定文字书写方向的元素 | :dir() 并不等于使用 \[ dir=… \] 属性选择器
:disabled | 伪类表示任何被禁用的元素。 | 一个元素不能被激活（如选择、点击或接受文本输入）或获取焦点，则该元素处于被禁用状态。
:empty | 代表没有子元素的元素。 | 子元素只可以是元素节点或文本（包括空格）。注释或处理指令都不会产生影响。
:enabled | 表示任何启用的元素。 | 如果一个元素能够被激活（如选择、点击或接受文本输入）或获取焦点，则该元素是启用的。
:first-child | 表示在一组兄弟元素中的第一个元素。(选取属于其父元素的首个子元素) | 
:first-of-type | 
:fullscreen | 
:focus | 
:hover | 
:indeterminate | 
:in-range | 
:invalid | 
:lang() | 
:last-child | 
:last-of-type | 
:left | 
:link | 
:not() | 
:nth-child() | 
:nth-last-child() | 
:nth-last-of-type() | 
:nth-of-type() | 
:only-child | 
:only-of-type | 
:optional | 
:out-of-range | 
:read-only | 
:read-write | 
:required | 
:right | 
:root | 
:scope | 
:target | 
:valid | 
:visited | 

下面是一些例子：

#### :first-child 例子
```html

```


### 伪元素