# 继承

### 构造函数和原型

理解JavaScript继承的基础是了解 [原型和原型链](/jsnotes/js-prototype-and-chain.md)。

在了解了原型相关之后，我们知道每个实例在创建的时候都会和一个构造函数的`prototype`对象相关联。并可以通过`__proto__`访问到该对象。

```js
    // 构造函数
    function A(name) {
        this.name = name
        this.sayName = function(){console.log(this.name)}
    }

    // 原型
    A.prototype.name = 'A in prototype'
    A.prototype.test = [0]
    A.prototype.sayName = function(){console.log(this.name + ' in prototype')}

    // 创建实例
    let a1 = new A('a1')
    let a2 = new A('a2')
```
`a1`和`a2` 创建如下图
<div class="img-center">
    <img src="./img/inherit-01.png">
</div>

通过属性和方法执行结果我们可以看出：

+ 在构造函数`A` 执行时，为实例`a1``a2`添加了属性和方法，并且**可以传递参数**
+ 实例`a1``a2`都会和`A.prototype`相关联（`new 操作符实现的`），可以访问到其中的属性和方法
+ 实例`a1``a2`会优先访问自身的属性或方法，当自身存在时就不会访问`A.prototype`上的
+ `A.prototype`是所有实例**共享**的，实例对`A.prototype`引用类型的属性进行更改时，会相互影响

`原型`和`构造函数`是继承中的重要角色，无论实现的技巧有何不同，但终归要使用到这两个知识点。

## 原型链继承

利用原型链不断向上索引的特性，修改之类的原型为父类的实例，可以实现继承。

```js
    function B() {// ...}

    // B的原型为A的一个实例
    // A执行时，可能会生成一些属性和方法
    // [B的实例] => B.prototype/[A的实例] => A.prototype  B继承了A的方法
    B.prototype = new A()
    // constructor设为B
    B.prototype.constructor = B

    let b1 = new B()
    let b2 = new B()
```

<div class="img-center">
    <img src="./img/inherit-02.png">
</div>

此种方式存在的问题：
+ 父类是共享的，实例对引用类型的属性会相互影响 eg: A.prototype.test；
+ 无法向父类的构造函数中传递参数，在修改子类原型时，父类实例就已经被创建了

## 借用构造函数

在构造函数执行时，会为实例添加属性/方法，所有可以采用`借用构造函数`（父类的构造函数在子类内部调用）的方法实现继承，可以解决上一种方式的两个问题。

```js
// 在A的构造函数中增加一个引用类型的属性验证子类实例的数据是否互通
function A(name) {
    this.name = name
    this.ages = [18]
    this.sayName = function(){console.log(this.name)}
}

function C(name) {
    // 调用父类A的构造函数，并传入参数
    A.call(this,name)
}

let c1 = new C('c1')
let c2 = new C('c2')
```

<div class="img-center">
    <img src="./img/inherit-03.png">
</div>

可以传递参数，实例的属性不会相互影响。但是创建时会为每一个实例都添加一套方法，很浪费资源，而且不能继承到父类原型上的方法和属性，只能继承父类自己的方法和属性

## 组合继承

前面两种方式各有优劣，且可以互补，组合起来就是比较好的一种继承方式。用原型来继承需要共享方法/属性，构造函数来继承父类的属性

```js
function A(name) {
    this.name = name
}

A.prototype.sayName = function(){console.log(this.name)}

function D(name,age) {
    // 继承A中的属性，传递参数
    A.call(this,name)
    this.age = age
}

// 继承父类原型上的方法
D.prototype = new A()
D.prototype.constructor = D

let d1 = new D('d1',18)
let d2 = new D('d2',19)
```

<div class="img-center">
    <img src="./img/inherit-03.png">
</div>

可以传递参数，父类中的属性不会相互影响，父类原型中的方法是公用的

## 寄生组合继承

## class语法中的继承