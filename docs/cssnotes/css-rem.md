# rem绝对自适应方案

## rem ? 

css3新增的rem是现在非常受欢迎的单位。看一下MDN上的说明：
> 这个单位代表根元素的 `font-size` 大小（例如 `<html>` 元素的`font-size`）。
使用这个单位可以创建完美的可扩展布局，只需根据页面大小去修改`html`的`font-size`，就能达到适配整个页面的目的。那么问题来了，如何使`html`的`font-size`自适应呢？

## 媒体查询
`media`的用法这里就不赘述，简单说明通过媒体查询修改html的`font-size`以达到页面自适应的目的。

```css
//媒体查询控制html字体大小 
 @media (max-width:767px) {
    html{
      font-size: 14px;
    }
  }
  @media (min-width:768px) {
    html{
      font-size: 16px;
    }
  }
  @media (min-width:992px) {
    html{
      font-size: 20px;
    }
  }
```

通过媒体查询，在不同大小区间的页面上，设置`html`的`font-size`都不一样；

　　页面宽度为`700px`时，`html`的字体大小为`14px`，此时 `1rem` = `14px` ，`li`元素的字体大小就是`14px`，包裹的内边距也是`14px`；改变页面宽度为`800px`，`html`的字体大小为`16px`，此时 `1rem` = `16px` ，li元素的字体大小变为`16px`，包裹的内边距也变为`16px`；

　　这种方式当然媒体查询划分的越细致，自适应越强，但是 ==无法实现完全自适应，只是区间性的。==

## vw

**vw代表的视口的 1/100 100vw代表的即是视口的宽度。使用它我们就可以实现html的font-size完全自适应了。**

```css
  html{
    font-size: calc(16/768*100vw);   //以768时16px为标准进行缩放
  }
```
例子的`768px`为一个假设的标准值，一般设计稿的大小为标准，然后再进行适配。调节页面大小，可以完全自适应。

## JS调整

加载页面和调整窗口大小的时，设置`html`的字体大小，已达到自适应的目的。

```js
    (function(){
      var doc = document.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

      function changeFontSize(){
        var clietWidth = doc.offsetWidth,
            scale = clietWidth/768;   //以768为标准

        doc.style.fontSize = scale * 16 + 'px';
      }

      if (!doc.addEventListener) return;

      window.addEventListener(resizeEvt,changeFontSize)  //窗口大小变化或者手机横屏
      document.addEventListener('DOMContentLoaded',changeFontSize) //加载页面触发
    })()
```

1.获取**视口宽度**

2.以视口宽度对标准的变化，设置`html`的`font-size`

