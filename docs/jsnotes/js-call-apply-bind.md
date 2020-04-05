# 自己实现 call , apply , bind

自己实现这些函数并不是为了在项目中使用，肯定没有本身的好；只是为了加深对这些函数的理解。

## call/apply/bind的作用以及差异

`call` `apply` `bind` 都可以用来指定`this`的值，但是在用法上存在一些差异。

+ `call`和`apply`都可以指定一个`this`对象和若干个参数来*调用函数*。不同的是，`call`和`apply`传参的方式不一样

```js
// 参数列表
function.call(thisArg, arg1, arg2, ...)

// 参数数组
function.apply(thisArg, [argsArray])
```

+ `bind`会*返回一个新的函数*，新函数的`this`为`bind`传入的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```js
// 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

## call/apply的实现

`call`和`apply`的作用基本一致，唯一的差异就是参数传入的方式。所以实现的方式也是基本一致的，需要注意的就是参数的解析。

我们知道，对象直接调用方法时，`this`指向该对象。

```js
let x = {
    a:1,
    test:function() {
        console.log(this.a)
    }
}

x.test() // 1

```

可以通过这种方式来控制函数执行时的`this`。

```js
        Function.prototype._call = function(_obj){
            // 传入_obj为null时，this指向window
            var obj = _obj || window;

            // 获取调用_call的函数，并赋值给指定对象的属性，这样通过指定对象调用改函数时，就达到了改变this指向的目的
            obj._fn = this;
            
            // 这样执行可以达到改变this指向的目的，但是无法处理参数
            // obj._fn()

            var args = []

            // 处理参数
            for (var i = 1; i < arguments.length; i++) {
                // args.push(arguments[i]) // 直接将值写入数组，会导致字符串类型的参数，在eval执行中被解析成变量，导致报错

                args.push('arguments[' + i + ']') // 这里把变量存下来，后面执行时通过变量取值
            }

            // 执行函数，由于参数个数未知，只能通过这种方式来处理参数
            var result = eval('obj._fn(' + args + ')')

            // 执行完成后，删除添加的属性
            delete obj._fn

            // 返回结果

            return result;
        }
```
