# 事件处理详解

大概整理下绑定事件的几种方式，兼容IE8- 的方式（如果需要的话），事件委托，阻止传播，取消默认行为，event对象等。

之前做的多是手机端页面，监听事件也一直是 addEventListener ，现代浏览器基本都支持addEventListener ，除了万恶的IE8及更低版本IE。虽说不用太管IE8了（个人愚见），但是还是有必要整理下之前兼容性的处理方式

## HTML事件处理

在HTML标签中直接给属性设置处理程序。HTML中加入了JS代码，因为需要行为、样式、结构分离，这种方式现在已经淘汰，就不深入探究了。

1 `<button onclick="alert('HTML事件处理！')">点我</button>`
 

## DOM0级事件处理

通过元素对象的事件属性来绑定处理程序。

```html
<a href="http://www.baidu.com" class="a1">快点击我！</a>
    document.querySelector('.a1').onclick = function(){ //绑定事件
        alert('DOM0绑定--a');
}
```
先获取到元素a，在给元素的点击事件属性onclick绑定处理程序。

这种方式的特点：
1. 简单易用，兼容性良好，基本所有浏览器都支持
2. 只能绑定一个处理程序，重复绑定会覆盖。如果给a的onclick属性再绑定一个处理程序，那么现在的这个就会被覆盖掉
3. 只会在冒泡阶段触发

取消绑定也非常简单，直接设为null就可以了。

`document.querySelector('.a1').onclick = null; //取消绑定`
 

## DOM2级事件处理

通过事件方法来绑定和解绑处理程序。

```js
<a href="http://www.baidu.com" class="a2">点击我！</a>
    document.querySelector('.a2').addEventListener('click', function(e){ //绑定事件1
      alert('DOM2绑定--a2 -- 1')
    }, false)

    document.querySelector('.a2').addEventListener('click', function(e){ //绑定事件2
      alert('DOM2绑定--a2 -- 2')
    }, false)
```

`addEventListener(eventName,listener,useCapture)` 方式可以为事件绑定处理程序.
+ 第一个参数为事件类型（不带on）；第二个参数是处理程序；
+ 第三个参数可指定哪个阶段触发，false对应冒泡阶段、true对象捕获阶段（默认false），部分低版本浏览器要求这个参数不能为空，所以最好还是带上。

这种方式的特点：
1. 可为同一个事件绑定多个处理程序，会依次触发。多次绑定同一个处理程序，只会生效一次
2. 可指定触发的阶段，捕获阶段或者冒泡阶段
3. 兼容IE8 - 之外的其他浏览器

解绑的方式为：`Element.removeEventListener(eventName,listener,useCapture);` 和绑定的用法一致

　　
IE8- 有一套自己的事件处理方法

+ 绑定：`Element.attachEvent(eventNameWithOn,listener)`

+ 解绑：`Element.detachEvent(eventNameWithOn,listener)`

```js
    document.querySelector('.a2').attachEvent('onclick', function(e){
      alert('DOM2绑定--a2 -- 2')
    })
```
特点：
1. 事件类型带on (eg：onclick)
2. 只能在冒泡阶段触发
3. IE10 - IE5都支持该方法

## 兼容性处理方式
　　
两种方式的差别在事件类型和第三个参数，所以可以做一些处理，封装兼容性处理的方式

```js
    //通用方式
      //绑定
    function addEvent(targetElement,eventName,listener,useCapture){
      if(targetElement.addEventListener){ 
        targetElement.addEventListener(eventName,listener,useCapture);
      }else if(targetElement.attachEvent){
        targetElement.attachEvent('on' + eventName,listener);
      }else {
        targetElement['on' + eventName] = listener;
      }
    }
      //解绑
    function removeEvent(targetElement,eventName,listener,useCapture){
      if(targetElement.addEventListener){
        targetElement.removeEventListener(eventName,listener,useCapture);
      }else if(targetElement.attachEvent){
        targetElement.detachEvent('on' + eventName,listener);
      }else {
        targetElement['on' + eventName] = null;
      }
    }
```
　　测试一下使用，在IE8及其他浏览器都可以正常使用。

```js
    addEvent(document.querySelector('.a2'),'click',test,false)

    function test(e){

      alert('addEvent then removeEvent!');
      removeEvent(document.querySelector('.a2'),'click',test,false);  //取消绑定
    }
```
 

## Event对象

不同的方式获取event对象的方式也不同
+ attachEvent绑定： 通过 window.event获取event对象
+ 其他方式（DOM0和addEventListener）：处理函数传参直接获取
    ```js
    function test(e){ //兼容性的方式
      e = e || window.event;  //event对象
    }
    ```
## this指向
attachEvent绑定的方式，处理程序内部this指向window。想要获取元素对象 可以通过 `window.event.srcElement`
其他方式的this指向触发元素 。 同样的也可以通过 `event.target`获取
```js
e = e || window.event;  //event对象
var target = e.target || e.srcElement;  //触发对象
```

## 阻止传播和取消默认行为

通过event对象的方式取消默认行为：
+ `event.preventDefault()    //其他浏览器`
+ `event.returnValue = false //IE8-`

DOM0级绑定的 还可以直接 return false 来取消默认行为，所有浏览器都支持

event对象阻止传播：
+ `event.stopPropagation() //其他浏览器`
+ `event.cancelBubble = true //IE8 -`

一般可以这样写

```js
  e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;  //阻止传播
  e.preventDefault ? e.preventDefault() : e.returnValue = false;    //取消默认行为
```

## 事件委托

如果多个元素的处理程序类同，如果每个都绑定一次会很繁琐和低效，这时可以**利用冒泡**的原理（他们都会冒泡到父元素）直接在父元素上绑定事件。即为事件委托

```html
<section class="item item-3">
  <button class="btn1">点击我1！</button><button class="btn1">点击我2！</button><button class="btn1">点击我3！</button>
</section>
```
　　
```js
    addEvent(document.querySelector('.item-3'),'click',function(e){
      e = e || window.event;  //event对象
      var target = e.target || e.srcElement;  //触发对象

      if(target.nodeName === 'BUTTON'){
        alert(target.innerText);
      }
    })
```
　　本例中，想要实现点击按钮输出按钮文字。如果给三个按钮分别绑定事件会不会太傻。所以直接绑定了父元素，事件触发时，判断触发对象是否是button标签，如果是，则输出文字