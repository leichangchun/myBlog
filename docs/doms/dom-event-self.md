# 自定义事件

除了浏览器提供的原生事件外，有时我们还需要自定义事件以满足特定的需求，比如小模块之间的通信，传递信息等。JavaScript提供了几种自定义事件的方式：
1. Event() 构造函数, 创建一个新的事件对象 Event
2. CustomEvent()  创建一个自定义事件
3. document.createEvent() 创建一个新的事件（Event），随之必须调用自身的 init 方法进行初始化。

## Event()
语法 ： `event = new Event(typeArg, eventInit) `

+ typeArg是一个表示事件类型的字符串。
+ eventInit是事件的配置项：
  
  + "bubbles"，可选，Boolean类型，默认值为 false，表示该事件是否冒泡。
  + "cancelable"，可选，Boolean类型，默认值为 false， 表示该事件能否被取消。
  + "composed"，可选，Boolean类型，默认值为 false，指示事件是否会在阴影根之外

自定义事件的监听和原生事件一样；触发的时候通过 `targetDom.dispatchEvent(event)`触发，看下面的栗子

```js
//用来触发自定义事件
<button type="button" name="button" class="test">点我</button>
 
var button = document.querySelector('button');

var selfEvent = new Event('self',{
    "bubbles" : true,
    "cancelable" : false,
    "composed" : false
});

//监听
document.addEventListener('self',function(e){
    alert('事件顺利触发啦！')
})

//触发
button.addEventListener('click',function(){
    document.dispatchEvent(selfEvent) //触发自定义事件
})
```

**需要注意的是，IE不支持该方法。**

如果自定义事件的时候，需要传递一些额外的字段，这个时候就可以用CustomEvent()

## CustomEvent()

和Event()方法类似，不过在创建的时候，CustomEventInit中多了一个`detail`字段，可以**用来传递额外的对象**，而且少了composed字段。

触发和监听都和Event()类似，而且同样**不支持IE**

```js
    //IE不支持  可携带数据
    var custom = new CustomEvent('custom',{
      "detail" : {  //可携带额外的数据
        age : 18
      },
      "bubbles" : true,
      "cancelable" : false,
    });

    //监听
    document.addEventListener('custom',function(e){
      console.log(e);
    })

    //触发
    button.addEventListener('click',function(){
      document.dispatchEvent(custom)
    })
```
那么如果想要兼容IE的话，要怎么办呢？

## document.createEvent()

这种方式已经被==官方声明不推荐使用==了。但是浏览器都是支持的，IE也都支持

`document.createEvent('Event')` 创建一个自定义事件之后，在触发事件之前一定需要进行初始化。而且要注意只能是document创建，不过使用的时候，所有元素都可以，和之前两种方式一样。

初始化事件的时候指定事件名及能否冒泡，能否被阻止等。

```js
    //只能是document创建  事件被触发前，必须通过initEvent()初始化   兼容性好IE支持 但是已废弃
    var create = document.createEvent('Event');
    create.initEvent('create', false, false);

    //监听
    document.addEventListener('create',function(e){
      console.log(e);
    })

    //触发
    button.addEventListener('click',function(){
      document.dispatchEvent(create)
    })
```