# 各种居中方案

元素居中是常见的场景，此页为总结各种实现方式

## 水平居中
内联元素（inline,inline-block等），将父元素的`text-align`属性设为`center`。
> text-align CSS属性定义行内内容（例如文字）如何相对它的块父元素对齐。

块级元素（block等），设置`margin-left`,`margin-right`为`auto`,此时左右外边距会平分水平方向的多余空间，实现居中。注意块级元素要有固定宽度，否则会铺满父元素，占据100%宽度。

``` css
/* 内联元素 */
.inline-center-parent{
    text-align:center;
}

/* 块级元素 */
.block-center{
    width:60%;
    margin: 0 auto;
}
```
## 垂直居中
相对于水平居中，垂直居中实现稍微复杂一些

### 内联元素的垂直居中
如果是单行时，设置元素了的`line-height`与父元素的`height`一致即可，`line-height`会继承，设置在父元素上也一样。
``` css
    /*容器样式*/
    .inline-center-parent{
        height: 100px;
        line-height: 100px;
    }
```
**多行时**，上面的样式就会出现问题，因为每行的高度都和容器高度一样，会溢出，此时可以使用`table-cell`来实现居中。
``` css
    /*容器样式*/
    .inline-center-parent{
        display: table-cell;
        vertical-align: middle; // 设置垂直居中
    }

```
也可以将多行内联元素用块级元素包裹，然后就变成了块级元素的居中问题。

### 块级元素的垂直居中
1. 垂直居中可以使用绝对定位处理，`top`设为`50%`（`top以容器的高度计算百分比`），然后再想办法让块元素向上移动自身的一半
  + 如果是**固定高度**
``` css
    .block-center-parent {
        position:relative;
    }

    .block-center {
        position:absolute;
        top:50%;
        height:100px;
        margin-top:-50px; // margin-top为负值，且为高度的一半
    }
```
  + 如果是**高度不固定**

一个思路是通过`transform`变化（tranform平移以自身宽高进行计算），向上移动自身的一半

``` css
    .block-center {
        position:absolute;
        top:50%;
        transform: translateY(-50%);
    }
```
另一个思路是通过`margin:auto`,没错！垂直居中也可以使用`margin:auto`来实现。
``` css
    .block-center {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        height: max-content; 
        width: max-content;
        margin:auto;
    }
```
`margin-top`,`margin-bottom`在普通情况下，设置为`auto`时，默认为`0`；但是绝对定位脱离文档流，又通过top,left,bottom,right指定子元素的边界后，子元素会默认填充整个容器，此时m`argin：auto`会让垂直方向上也平分多余空间。**注意需要指定height和width，否则height和width会填充满整个空间，margin均为0**；

2. 使用flex
`flex`应该是最便捷方式
``` css
    .block-center-parent {
        display:flex; 
        align-items:center; // 规定了交叉轴的对齐方式（默认情况下，垂直方向为交叉轴） 
    }
```
## 垂直水平居中

上面的一些方式可以同时实现水平居中和垂直居中。

1. `display: absolute` + `margin:auto`

``` css
    .block-center {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        height: max-content; 
        width: max-content;
        margin:auto;
    }
```

2. `display: absolute` + `transfrom`

``` css
    /* 水平方向也使用transform */
    .block-center {
        position:absolute;
        top:50%;
        left:50%;
        transform: translateY(-50%);
        transform: translateX(-50%);
    }
```

3. `display:flex`

``` css
    .block-center-parent {
        display:flex; 
        justify-content:center; // 规定了主轴的对齐方式
        align-items:center; // 规定了交叉轴的对齐方式
    }
```

另一种方式是

``` css
    .block-center-parent {
        display:flex; 
    }
    .block-center {
        margin:auto;
    }
```