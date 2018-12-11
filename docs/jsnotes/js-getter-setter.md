# getter和setter

对象的属性是由属性名name，值key，和其他特性（可读写性 writable，可枚举性enumerable，可配置性configurable）组成的。从ES5开发，提供了getter和setter 可以将属性值的获取和设置分别绑定到方法上，称之为“存取器”。有了`getter`和`setter`我们就能够在属性值的变更和获取时实现一些操作。

## 简单的getter , setter

直接在对象中创建属性的getter和setter，并进行测试。

```js
    window.x = {
        _num : 50,
        get percent (){
            return this._num + '%';
        },
        set percent(value){
            console.log('update _num :' + value);
            this._num = value;
        }
    };
```
注意语法规则，是通过get和set关键字创建的percent属性的getter和setter函数。**get函数是没有参数的，set函数会将等号右边的值作为参数。**当访问percent属性时，会返回_num加%，当设置percent时，会打印日志并将值赋给_num。

::: tip
get不能添加任何参数，否则会报错 `Uncaught SyntaxError: Getter must not have any formal parameters.`
:::

## 使用defineProperty

如何在已有的对象上添加getter和setter呢？  
`Object.defineProperty(obj, prop, descriptor)` ，obj为将要操作的对象，prop是将要定义或者修改的属性名，descriptor是将要被修改或者定义的描述符。

```js
    Object.defineProperty(x , 'percent' , {
        get : function (){
            return this._num + '%';
        },
        set :function (value){
            console.log('update _num :' + value);
            this._num = value;
        }
    });
```

`defineProperty()`添加或者修改属性的时候需要注意：

1. 数据描述符`configurable`标志着该属性能够被改变，能够被删除，默认为false

2. 数据描述符`enumerable`标志着该属性是否可枚举，默认为false。**只有可枚举属性才会在for in中遍历，Object.keys()中返回**。另外，**所有的内置方法都是不可枚举的**，eg：toString

3. 数据描述符value默认为undefined，writable默认为false。所以defineProperty默认新增的属性，是不可以被赋值运算符修改的。

4. 存取描述符set和get都默认为undefined

5. set/get是不能够和value或者writable一起用的，因为当是存取器属性的时候，当设置了set标志着可写，设置了get就标志着可读，而value也是通过get函数返回的，所以不能同时使用。

## Class中的 getter setter

ES6新增`class`的概念，改变了构造对象的书写方式，class中同样可以设置存取器。

```js
    class X {
        constructor ( _num) {
            this._num = _num;
        }

        get percent () {
            return this._num + '%';
        }

        set percent (value) {
            console.log('update _num :' + value);
            this._num = value;
        }
    }
```

## TypeScript中的 getter和setter

Angular项目中使用的是`ts`，`ts`的class语法与ES6的稍有不同，通过项目中的一个小栗子记录下ts中的getter和setter。场景如下，有一个datepicker组件，可以调整时间级别为5分钟或者天。不同级别时，datepicker组件需要作出不同的调整。

<div class="img-center">
    <img src="./img/get-set-01.png">
</div>

做如下处理： datepicker组件中有`@input`来接受级别的调整，在set中做一些操作。

```ts
export class LdatepickerComponent implements OnInit {

  public _level: Level = 'minite';

  @Input()
    get level (): Level {
      return this._level;
    }

    set level ( value: Level ) {
      // 修改级别后 重置组件的状态
        doSomething()

      // 发送新的时间为0
        doOther()    

      this._level = value;
    }
}
```
当选择不同的级别时，传入到datepicker组件的level会变化，此时的set会对组件做一些自定义的操作，实现需求。