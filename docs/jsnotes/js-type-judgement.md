# 类型判断

类型判断是个常见问题，有多种不同的判断方式，每种方式都有适用的场景。

## typeof

> `typeof` 操作符返回一个字符串，表示未经计算的操作数的类型。

`typeof operand` 或者 `typeof (operand)` 都可以，括号为可选的。

类型      | 结果
:----     |:----:
Undefined | "undefined"
==Null==  | =="object"==
Boolean	  | "boolean"
Number	  | "number"
String	  | "string"
Symbol（ECMAScript 6 新增）|	"symbol"  
==函数对象==   | =="function"==
任何其他对象 |	"object"

typeof 会将 `null` 和 `Object` 都返回为 "object", 这样就无法区分具体的对象类型（Array , Date , Error等）。

**注意：其中函数对象特别返回为"function" 。**

``` js
    // 'number'
    typeof 1
    typeof NaN
    typeof Infinity    
    
    // 'string'
    typeof '1'
    
    // 'boolean'
    typeof true
    
    // 'undefined'
    typeof undefined
    
    // 'symbol'
    typeof Symbol(1)
    
    // 'object'
    typeof null
    
    // 'object'
    typeof {}
    typeof []
    typeof new Date()
    typeof new Number(1)

    // 'function'
    typeof function(){}
    typeof class A {}
    typeof Math.sin

```



## instanceof

> instanceof运算符用于测试构造函数的prototype属性是否出现在==对象==的原型链中的任何位置

`object instanceof constructor`
+ **左侧参数如果不是对象，将返回false**
+ 右侧参数如果不是构造函数，将报错

``` js
    let x = 1;
    let y = new Number(1);
    
    x instanceof Number // false   1 不是对象
    y instanceof Number // true  new Number(1)为对象

    // 虽然这种方式测试“x”有原型，但是应该是在获取的时候，自动进行了对象包装， 其实获取的是 new Number(1)
    x.__proto__ === Object.getPrototypeOf(x) === Number.prototype 

    // 沿着原型链比对  y.__proto__.__proto__ === Object.prototype , 故返回true
    y instanceof Object // true
```

instanceof 的判断结果会随着对象或者构造函数的改变而不同，而不是固定的值

``` js
    class A {}
    class B {}
    let a = new A();

    a instanceof A  // true
    a instanceof B  // false

    // 修改a的 __proto__ 指向
    a.__proto__ = B.prototype

    a instanceof A  // false
    a instanceof B  // true
```
instanceof不能判断原始数据类型，但是可以**用来判断对象具体是那种类型**

``` js

    [] instanceof Array // true
    new Error() instanceof Error // true
    (/[1-9]+/) instanceof RegExp // ture
    new Date() instanceof Date // true

    let x = document.querySelectorAll('h1')
    x instanceof NodeList // true
    ···
```

## Object.prototype.toString()

> `toString() `方法返回一个表示该对象的字符串。默认情况下，`toString()`方法被每个Object对象继承。如果此方法在自定义对象中未被覆盖，`toString()` 返回 **"[object type]"** ，其中**type是对象的类型**。

待检测对象也许会重写`toString()`方法，这时就无法检测`toString`来判断类型。所以要保证能够检测类型，需要调用`Object.prototype.toString`来进行判断。如下：

``` js
    let X = function(x) {
        this.name = x
    }

    let x =  new X(); 

    x.toString() // "[object,Object]"  使用继承的toString
    Object.prototype.toString.call(x) // "[object,Object]"

    X.prototype.toString = function() { // 重写父类的toString方法
        return 'not type'
    }

    x.toString() // "not type"   使用重写后的toString ， 就不再返回类型

    Object.prototype.toString.call(x) // "[object,Object]"
```

返回的" \[ object, Type\]" 不好分辨，可以进行特殊的处理，直接返回类型名称。

``` js
    // 获取类型
    function getType(target){
        let types = {}
        let temp = Object.prototype.toString.call(target)
        //types映射类型
        'Boolean Number String Null Undefined Symbol Function Array Date RegExp Object Error NodeList'.split(' ').map(value => {
            types[`[object ${value}]`] = value.toLowerCase()
        })

        if (types[temp]) {
            return types[temp]
        }else if (temp.indexOf('HTML') !== -1) { // 判断是否为DOM元素
            return 'element' 
        }else {
            return
        }
    }
    
    // 测试

    getType(1) //  "number"
    getType(Symbol(1)) // "symbol"
    getType([]) // "array"
    getType({}) // "object"
    getType(document.querySelectorAll('div')) // "nodelist"

```
用如上方法，就可以便捷的获取到类型名称了。

## 其他API

### 判断值是否是 NaN Number.isNaN()

> `Number.isNaN()` 判断值是否是 NaN，和全局函数 isNaN() 相比，该方法**不会强制将参数转换成数字**，只有在参数是真正的数字类型，且值为 NaN 的时候才会返回 true。

``` js
    Number.isNaN(NaN);        // true
    Number.isNaN(Number.NaN); // true
    Number.isNaN(0 / 0)       // true
    
    Number.isNaN(null);       // false
    Number.isNaN(37);         // false
    Number.isNaN("37");       // false

    Number.isNaN("NaN");      // false 不会隐式转换
    window.isNaN('NaN')       // true 会隐式转换
```

### 判断值是否为有穷数 Number.isFinite()

> `Number.isFinite()` 方法用来检测传入的参数是否是一个有穷数（finite number）。 和全局的 isFinite() 函数相比，这个方法**不会强制将一个非数值的参数转换成数值**，这就意味着，**只有数值类型的值，且是有穷的（finite），才返回 true**

``` js
    Number.isFinite(Infinity);  // false
    Number.isFinite(NaN);       // false
    Number.isFinite(-Infinity); // false

    Number.isFinite(0);         // true
    Number.isFinite(2e64);      // true

    Number.isFinite('0');       // false, 全局函数 isFinite('0') 会返回 true
```
### 判断值是否为整数 Number.isInteger()

> `Number.isInteger()` 方法用来判断给定的参数是否为整数。

``` js
    Number.isInteger(0);         // true
    Number.isInteger(1);         // true
    Number.isInteger(-100000);   // true

    Number.isInteger(0.1);       // false
    Number.isInteger(Math.PI);   // false

    Number.isInteger(Infinity);  // false
    Number.isInteger(-Infinity); // false
    Number.isInteger("10");      // false 不会进行隐式转换
    Number.isInteger(true);      // false
    Number.isInteger(false);     // false
    Number.isInteger([1]);       // false
```

