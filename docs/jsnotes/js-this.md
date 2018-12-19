# this的指向问题

this是`JavaScript`中的一个==关键字==，不是变量，也不是属性，它不能被赋值。
在绝大多数情况下，它的==值取决于函数的调用方式==。当然javascript中也有一些方式可以设置this。本文总结下this的指向问题。

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
temp赋值后，虽然和`obj.say`是同一个函数体，但是却是普通函数，此处`this`指向的判断方式和函数调用时一致。此处是非严格模式，所以指向window
``` js
    let _obj = {
        name:'qian',
        _say:obj.say // _say的函数表达式和say一致
    }

    _obj.say(); // _obj
                // 'qian'
```
同样是同一个函数体，此处由`_obj`调用的，`this`指向`_obj`

## this没有作用域限制

this关键字没有作用域的限制，所以嵌套函数不会使用函数中的`this`
``` js
    let obj = {
        name:'zhao',
        say: function(){
            console.log(this);

            test();

            function test() { // 新增一个嵌套函数
                console.log(this)
            }
        }
    }

    obj.say() // obj
              // window
```
`test`在`say`函数体中是作为函数调用的，所以指向window或者undefined(严格模式下),和say函数体中的`this`没有任何关系，还是**按照嵌套函数的调用方式判断**。

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

[`call`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)和[`apply`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)都可以设定函数执行时this的指向

> apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数
> call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。

`apply`和`call`的作用和使用方式都类似，唯一的差别就是传递参数不一样

``` js
    // 使用方式
    func.apply(thisArg, [argsArray])   //参数数组
    fun.call(thisArg, arg1, arg2, ...) //参数列表
```

> 指定的this值并不一定是该函数执行时真正的this值，如果这个函数处于非严格模式下，则指定为null和undefined的this值会自动指向全局对象(浏览器中就是window对象)，同时值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象

``` js

    let person = {
        name:'shun',
        say :function(){
            console.log(this.name);
        }
    }

    person.say(); //'shun'
    person.say.call({name:'li'}); // 'li'
    person.say.apply({name:'zhou'}); // 'zhou'

```
上例中`person.say`在执行时，`this`指向了不同的对象。

### bind()

[`bind`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)也用于指定函数的this和参数，且会返回一个新的函数。新函数在执行时会使用指定的this和参数

``` js
    this._name = 'lei';

    function say() {
        console.log(this._name);
    }

    let _say = say.bind({_name:'zhang'}); // 返回一个新的函数，绑定了this到指定的对象

    say();  // 'lei' 普通调用，非严格模式下的this指向window
    _say(); // 'zhang' this指向 {_name:'zhang'}

```

### 箭头函数

> 在箭头函数中，this与封闭词法上下文的this保持一致。在全局代码中，它将被设置为全局对象

::: tip
箭头函数中的this无法通过call、bind、或者apply改变，传入的this值会被忽略，它的==this值始终是它被创建时的上下文==
:::

``` js
    let g,temp,j;

    obj = {
        say : function () {
            g = this;
            return (() => this);
        }
    }

    temp = obj.say();
    j = temp();

    console.log(g === obj,j ===obj); // true,true

```

`obj.say()`执行时，say中this指向obj,也就是在此时创建了箭头函数，并会返回赋值给temp,`temp()`是作为普通函数调用(按照之前的判断来说，应该指向window)，但是由于它是箭头函数，this值为创建时的上下文，所以也this也指向obj。再看下面的情况,换一种调用方式

``` js
    let x = {name:'xi'}
    // 改变箭头函数在创建时，say中的this指向为x
    temp = obj.say.call(x);
    
    j = temp();
    console.log(j); // {name:'xi'}
```
箭头函数的this还是指向创建时的上下文，这里是对象`x`

```js
    // 接上代码
    // 尝试用call改变this指向
    j = temp.call({name:'call'});
    console.log(j); // {name:'xi'} 改变无效

```
尝试用call改变箭头函数的this指向，当然是==无效==的。
