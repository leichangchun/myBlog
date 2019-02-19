# 面试题集

此页面记录一些看到过的面试题目及分析

## 如何使`(a === 1 && a === 2 && a === 3)`返回`true`

看见这个题目，第一反应就是在变量`a`取值时进行了一些改变，那就要用`getter`

``` js
var temp = 1;
Object.defineProperty(window, 'a', {
    get: function() { // 每次取值，temp+1
        return this.temp++
    }
});

console.log( a === 1 && a === 2 && a === 3); // true
console.log(a) // 4
```

类似的问题是使 `(a == 1 && a == 2 && a == 3)` 返回`true`，不同点是，这里是` == `，而不再是`===`。
::: tip
`===`恒等运算符在比较过程中，不会有任何类型转换；
`==`相等运算符比较宽松，如果两个操作数不是同一类型，那么相等运算符会尝试进行一些类型转换，然后进行比较。转换规则如下：
1. 如果一个是`null`,一个是`undefined`，则它们相等
2. 如果一个是`数字`，一个是`字符串`，先将**字符串转换成数字**，然后使用转换后的值进行比较
3. 如果其中的一个值为`true`，则转换成`1`再进行比较；如果其中一个值为`false`,这转换成`0`再进行比较
4. 如果一个值是对象，另一个值是数字或者字符串，则将**对象转换成原始值**再进行比较。转换成字符串时，会先调用`toString()`，如果没有`toString()`方法或者返回的不是一个原始值，则再调用`valueOf()`，如果还是不存在或者返回不是原始值，则会抛出一个类型错误的异常。返回的原始值会被转换成字符串；如果转换成数字时，也是类似的，不过是会先调用`valueOf()`，再调用`toString()`,返回的原始值会被转换成数字
5. 其他不同类型之间的比较均不相等
:::

回到题目中，除了第一种使用`getter`的思路外，可以将a作为一个对象，而它的在比较中会转换成数字，所以可以重写`valueOf()`方法,在每次取值的时候，进行一些处理。

``` js
let a = {
    temp:1,
    valueOf:function(){
        return this.temp++
    }
}

console.log(a == 1 && a == 2 && a == 3); // true
console.log(a) {temp:4,valueOf: f ()}
```

## new 操作符 做了什么

> new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

假设`Test`是一个构造函数，通常在创建对象的实例时，要使用`new`，eg:`test = new Test()` ， 那么在调用`new`的时候，发生了什么呢？

步骤如下：
1. 一个继承自 Test.prototype 的新对象被创建。可以理解为：
```js
    // 创建一个空对象，继承构造函数的prototype（继承公共方法）
    let temp = {};
    temp.__proto__ = Test.prototype
```
2. 使用指定的参数调用构造函数 Test ，并将 this 绑定到新创建的对象。new Test 等同于 new Test()，也就是没有指定参数列表，Test 不带任何参数调用的情况。可以理解为：
```js
    // 绑定this到新创建的对象，执行构造函数（创建实例的成员变量）
    Test.call(temp)
```
3. 由构造函数返回的对象就是 new 表达式的结果。**如果构造函数没有显式返回一个对象，则使用步骤1创建的对象**。（一般情况下，构造函数不返回值，但是**用户可以选择主动返回对象，来覆盖正常的对象创建步骤**）
```js
    //默认情况下，返回最初创建的对象，也可以主动返回对象进行覆盖
    test = temp
```

**如果主动返回的不是对象，则会被无视**，还是使用最初创建的对象

```js
    function Test() {
        return 'test-string'
    }

    console.log(new Test()) // Test {} 返回的是空对象，为Test的实例
```

::: tip
注意：
1. **箭头函数不能作为构造函数**，因为箭头函数没有自己的`this`，所以不可以使用`new`，会报错！
2. **如果构造函数在调用时，没有加`new`操作符**，执行过程中`this`会为`window/undefined`，无法正常生成实例。
:::

## 1 == 2 == 0 为什么会返回 true ? 分析过程

首先 `==`是从左到右结合的，运算结果返回`boolean`，比较的过程中允许发生类型转换。

1. `1==2`返回`false`
2. `false==0`会发生类型转换，`false`自动转换成`0`再进行比较，返回`true`

## 定义一个函数，实现将接收的字符串用空格隔开的功能，并让字符串可以直接调用

处理字符串/数组主要考察的是字符串/数组相关方法的掌握情况。
让字符串可以直接调用，就要注意 原型`prototype`和原型链的相关知识，将函数定义在`String`的原型上，这样所有的字符串都可以通过原型链找到该方法。

```js
    String.prototype.seperate = function(){
        return this.split('').jion(' ');
    }
```

## 判断以下代码的执行结果（涉及变量提升，函数声明，原型链，this指向，作用域等知识点）

[掘金](https://juejin.im/post/5c6a0fa451882562851b3cdd) 上看到的一个笔试题目，记录并分析总结以下考察点。

```js
  function Foo () {
    getName = function () { alert(1) }
    return this
  }
  Foo.getName = function () { alert(2) }
  
  Foo.prototype.getName = function () { alert(3) }
    
  var getName = function () { alert(4) }

  function getName () { alert(5) }

//判断输出结果
  Foo.getName(); // 2
  getName(); // 4
  Foo().getName(); // 1
  getName(); // 1

  new Foo.getName(); // 2
  new Foo().getName(); // 3
  new new Foo().getName(); 3
```

第一个 不用说什么，直接调用Foo构造函数的getName属性，输出2。

第二个 调用当前作用域下的getName函数，要注意**函数表达式**和**函数声明**的不同：
1. 函数声明会‘被提前’到外部脚本或者外部函数的顶部，所以这种方式声明的函数，可以在它被定义之前的代码中所调用。
2. 函数表达式，就和声明变量一样了，变量声明会提前到顶部，但是赋值会在执行到原位置的时候才进行。
4会变量提升，但是并没有赋值，然后5函数提升（在4赋值之前调用下getName()，输出的是5），而代码执行4的位置时，会赋值就覆盖了5。所以第二个会输出4。

第三个 Foo()执行时，Foo函数体内并没有getName变量，所以就去上一层window下找，重新赋值了window下的getName为输出1（如果没有找到，会在window下创建一个getName），然后返回了this，这里的this指向的是window，再调用window的getName属性，即为重新赋值后的输出1。

第四个 执行当前作用域下的getName,注意此时getName已经重新赋值，所以输出1

第五个 这里需要特别注意表达式的执行顺序，详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)

<div class="img-center">
    <img src="./img/interview-operate-01.png">
</div>

`.`比`无参数列表new`执行的优先级高，所以是 `new (Foo.getName)()` 输出2

第六个 同样是执行顺序
`()`比`.`的执行优先级高，所以是 `(new Foo()).getName()`,Foo作为构造函数，指定了返回this，而在构造函数中，this指向的是生成的实例，而Foo中没有对实例添加getName属性，所以在调用实例的getName时，会去Foo.prototype中找，所以输出3

第七个 同样是执行顺序
`new ((new Foo()).getName)()` 是以原型链上的getName为构造函数来执行，输出3
