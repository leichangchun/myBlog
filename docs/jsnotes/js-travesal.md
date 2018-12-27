# JavaScript遍历对象
原生的JavaScript 遍历方式记录

## for 循环遍历 
```js
let array1 = ['a','b','c'];
 
for (let i = 0;i < array1.length;i++){
   console.log(array1[i]);  // a  b  c 
}
```
## Array方法
JavaScript 提供了 `foreach()`  `map()` 两个可遍历 Array对象 的方法。forEach和map用法类似，都可以遍历到数组的每个元素，而且参数一致；  　

```js
Array.forEach(function(value , index , array){ //value为遍历的当前元素，index为当前索引，array为正在操作的数组
  //do something
},thisArg)      //thisArg为执行回调时的this值
```
不同点：
+ forEach() 方法对数组的每个元素执行一次提供的函数。总是返回undefined；
+ map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。返回值是一个新的数组；

例子如下：
```js
var array1 = [1,2,3,4,5];
 
var x = array1.forEach(function(value,index){
 
    console.log(value);   //可遍历到所有数组元素
 
    return value + 10
});
console.log(x);   //undefined    无论怎样，总返回undefined
 
var y = array1.map(function(value,index){
 
    console.log(value);   //可遍历到所有数组元素
 
    return value + 10
});
console.log(y);   //[11, 12, 13, 14, 15]   返回一个新的数组
```

对于类似数组的结构，可**先转换为数组，再进行遍历**

```js
let divList = document.querySelectorAll('div');   //divList不是数组，而是nodeList
 
//进行转换后再遍历
[].slice.call(divList).forEach(function(element,index){
  element.classList.add('test')
})
 
 
Array.prototype.slice.call(divList).forEach(function(element,index){
  element.classList.remove('test')
})
 
[...divList].forEach(function(element,index){   //ES6写法
  //do something
})
```
## `for ··· in ··· ` /  `for ··· of ···`
for...in 语句以任意顺序遍历一个对象的**可枚举属性**。对于每个不同的属性，语句都会被执行。每次迭代时，分配的是==属性名==　　

```js
let array2 = ['a','b','c']
let obj1 = {
  name : 'lei',
  age : '16'
}
 
for(variable  in array2){   //variable  为 index
  console.log(variable )   //0 1 2
}
 
for(variable  in obj1){   //variable 为属性名
  console.log(variable)   //name age
}
```

::: tip
因为**迭代的顺序是依赖于执行环境**的，所以数组遍历不一定按次序访问元素。 因此当迭代那些访问次序重要的 arrays 时用整数索引去进行 for 循环 (或者使用 Array.prototype.forEach() 或 for...of 循环) 。
:::
　　
ES6新增了 `遍历器(Iterator)` 机制，为不同的数据结构提供统一的访问机制。只要部署了Iterator的数据结构都可以使用 for ··· of ··· 完成遍历操作 [Iterator详解](http://es6.ruanyifeng.com/#docs/iterator )，每次迭代分配的是==属性值==

原生具备 Iterator 接口的数据结构如下： `Array Map Set String TypedArray 函数的arguments对象 NodeList对象`

```js
let array2 = ['a','b','c']
let obj1 = {
  name : 'lei',
  age : '16'
}
 
for(variable  of array2){   //variable  为 value
  console.log(variable )   //'a','b','c'
}
 
for(variable  of obj1){  //普通对象不能这样用
  console.log(variable)   // 报错 ： main.js:11Uncaught TypeError: obj1[Symbol.iterator] is not a function
}

let divList = document.querySelectorAll('div');

for(element of divlist){  //可遍历所有的div节点
    //do something 
}
```

如何让普通对象可以用for of 进行遍历呢？  [阮一峰ES6](http://es6.ruanyifeng.com/#docs/iterator)  一书中有详细说明了！


除了迭代时分配的一个是属性名、一个是属性值外，for in 和 for of 还有其他不同  [MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)

+ for...in循环会遍历一个object所有的可枚举属性。
+ for...of会遍历具有iterator接口的数据结构
+ for...in 遍历（当前对象及其原型上的）每一个属性名称,而 for...of遍历（当前对象上的）每一个属性值

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};
 
let iterable = [3, 5, 7];
iterable.foo = "hello";
 
for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}
 
for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```js