# 原型和原型链

在javaScript中，经常会说到原型（prototype）和原型链（prototype）。我曾经以为我完全理解了，但是后来总是会发现不同的地方，这次进行一次系统的整理。

## 原型

### 什么是原型？

看一下*权威指南*中的说明
> 每一个javaScript对象（null除外）都和另一个对象相关联。“另一个”对象就是我们熟知的原型，**每一个对象都从原型继承属性**。

如果是通过关键字`new`和`构造函数`调用创建的对象，比如`let x = new Date()`，此时`x`的原型就是**构造函数**的**prototype**属性。
如果是通过对象直接量创建的对象的时候，比如`let y = {}`。此时的`y`会和`Object.prototype`相关联。
如果是通过`Object.create()`创建的对象，比如`let z = Object.create(obj)`。此时`z`的原型就是它的第一个参数`obj`（也可以是null）。

```js
 let x = new Date(),
     y1 = {},
     y2 =[],
     obj = {a:1},
     z = Object.create(obj);

 Object.getPrototypeOf(x) === Date.prototype // true
 Object.getPrototypeOf(y1) === Object.prototype // true
 // 注意这里是数组
 Object.getPrototypeOf(y2) === Array.prototype // true
 Object.getPrototypeOf(z) === obj // true

```
上面都是内置构造函数，自定义的函数也一样

```js
 function Test(){
     console.log('constructor Test');
 }

 let test =  new Test();

 Object.getPrototypeOf(test) === Test.prototype // true
```

### 原型有什么作用呢？

现在知道绝大多部分对象都会有自己的原型，如此重要的一个特性是做什么的呢？简单来说，是**用来实现继承**的。

思考一个简单的问题，定义一个对象`let x = {a:1}`。`x`没有定义任何方法，但是却可以使用一些方法（比如：`toString`），那么`toString`方法来自哪里呢？

```js
 let x = {a:1};
 // toString继承自Object.prototype
 x.toSting() // "[object Object]"
```
实例对象的原型中会有公共的方法，






