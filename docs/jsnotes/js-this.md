# this的指向问题

this是`JavaScript`中的一个==关键字==，不是变量，也不是属性，它不能被赋值。
在绝大多数情况下，它的值取决于函数的调用方式。当然javascript中也有一些方式可以设置this。本文总结下this的指向问题。

## 函数调用时

这里的**函数调用**指的是，函数表达式是普通函数，而不是对象的属性。例如 `x(a1,a2)` 此类。

此时如果是非严格模式，函数中的`this`就会指向`window/全局对象`；严格模式时，会是`undefined`。

``` js
    function normal() {
        console.log(this);
    }

    // 非严格模式
    normal() // window

    // 严格模式
    normal() // undefined

```

所以，可以使用普通函数中的`this`关键字来判断当前是否是严格模式

``` js
    const STRICT = (function(){return !this;}());
```

## 方法调用时

**方法调用**指的是函数表达式是对象的属性时。例如：`a.x(a1,a2)`此类。

此时方法中的`this`指向调用该方法的`对象`，函数体中可以通过`this`引用该对象。

``` js
    let obj = {
        name:'zhao',
        age:18,
        say: function(){
            console.log(this);
            console.log(this.name);
        }
    }

    obj.say(); // obj
               // 'zhao'
```

函数`say()`是作为对象`obj`的方法调用的，`this`指向`obj`

``` js
    // 对temp赋值
    let temp = obj.say;
    temp();   // window
              // undefined
```
temp赋值后，虽然和`obj.say`是同一个函数体，但是确实普通函数，此处`this`指向的判断方式和函数调用时一致。此处是非严格模式，所以指向window
``` js
    let _obj = {
        name:'qian',
        _say:obj.say // _say的函数表达式和say一致
    }

    _obj.say(); // _obj
                // 'qian'
```
同样是同一个函数体，此处由`_obj`调用的，`this`指向`_obj`

## 构造函数调用时

当函数或者方法调用之前带有关键字`new`，那就是**构造函数调用**。例如：`new a()`

构造函数执行时，`this`指向==正在构造的新对象==；但是需要注意：
> 虽然构造函数默认返回`this`指向的对象，但是也可以手动返回其他对象（如果返回值不是一个对象，则返回this对象）

``` js
    let temp;
    function Person(name) {
        this.name = name;
        temp = this; // 暂存this
    }

    let x = new Person('name1');
    console.log(x === temp); // true
```
`Person`在此次执行时，`this`指向了它正在构造的对象`x`

``` js
    let _temp;
    function _Person(name) {
        this.name = name;
        _temp = this; // 暂存this
        return { // 返回指定的对象
            name:'name999'
        }
    }

    let _x = new _Person('name2');
    console.log(_x === _temp); // false
```
在构造函数中返回指定的对象，此时的this就不会指向最后生成的对象

## 事件处理函数

在作为DOM的事件处理函数时，`this`指向触发事件的元素

``` js
    let btn = document.querySelector('#target');

    btn.addEventListener('click', function(e){
        console.log(this === e.currentTarget); 
    },false)
```
触发事件时，会输出`true`,可见`this`指向了触发元素

## 设置this指向

`JavaScript`中有多个方式可以显示的设定所需的`this`值。

### call()和 apply()


### bind()


### 箭头函数

