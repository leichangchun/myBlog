# css问题记录

 此页记录遇到过的css问题及处理方式

## 属性设置百分比时的计算参考标准

## absolute和relative元素 设置百分比宽高的差异
一般元素在页面所占的空间包括：**magin border padding content**。以前一直以为子元素设置百分比宽高都是以父元素的**content**值为基准计算的。==但是当子元素的position不同时，却是不同的结果==。

用如下小demo测试：

```
  <aside class="container">
    <div class="test">
    </div>
  </aside>

    .container{
        position: relative;
        margin: 100px auto;
        padding: 20px;
        height: 100px;
        width: 100px;
        border : 10px solid green;
        background-color: red;
    }

    .test{
        height: 20%;
        width: 20%;
        position: relative;
        top: 0;
        left: 0;
        background-color: #000000;
    }
```
此时子元素position为relative，效果如下：

<div class="img-center">
    <img src="./img/cacl-ok.png">  
</div>

子元素以父元素的`content`宽度100px为基准计算的20%为20px 且是以content为参考进行的偏移（虽然这里为0）

若子元素position为absolute时，效果如下：

<div class="img-center">
    <img src="./img/cacl-ok.png">  
</div>

此时子元素的百分比宽度是以 父元素的 `padding + content`的值进行计算的 为28px; 而且也是以padding为基础进行偏移的。

::: tip
　　absolute元素的百分比宽高 计算时按照的包含块的 padding + content 的值算的，偏移的参考也要加上padding那部分

　　relative元素的百分比宽高 计算时按照的包含块的 content 的值算的.
:::


## cacl()函数中使用scss变量不生效的问题

使用cacl()动态计算元素的高度，运算中包含一个scss变量 `height: calc(100% - $ws-header-height);` , 在浏览器中发现并没有达到预期效果，scss变量没有被解析。

<div class="img-center">
    <img src="./img/cacl-not-resolve.png">  
</div>

**使用scss的插值语句 `#{}`** ,  `height: calc(100% - #{$ws-header-height});`  就在浏览器中正常解析了。

<div class="img-center">
    <img src="./img/cacl-ok.png">  
</div>

## 父元素opacity属性对子元素的影响

> opacity属性指定了一个元素后面的背景的被覆盖程度;当opacity属性的值应用于某个元素上时，是把这个元素（包括它的内容）当成一个整体看待，即使这个值没有被子元素继承。因此，**一个元素和它包含的子元素都会具有和元素背景相同的透明度**，哪怕这个元素和它的子元素有不同的opacity属性值。

所以用opacity设置透明度会影响到子元素。如果想消除这种影响，可以使用**RGBA()来设置元素的背景透明度，此种设置方法不会影响子元素的透明度**。

## img 为什么会撑开空白边距



## input 的默认宽度问题


<!-- TODO: 总结其他的css问题 -->