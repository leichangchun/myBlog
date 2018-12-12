# 实现数组和对象的深浅拷贝

## 原始数据类型和对象类型赋值时的差异

JavaScript的数据类型分为**原始数据类型和对象类型**。二者在内存中存放的方式不同，导致了其赋值时差异。分别举个栗子 

```js
  var x = 1;
  var y = x;  //y获得了和x同样的值
  y = 2;
  console.log(x);  // 1

  var m = [1,2]; //m存放的是指向[1,2]这个数组对象的引用地址
  var n = m; //n也获得 [1,2]数组对象的引用地址
  n[0] = 3;
  console.log(m);  //[3,2] 
```
::: tip
由上栗子可以看出 ：原**始数据类型赋值时，给的是实实在在的数据值** ，赋值后二者只是值一样而已，不会相互影响； 而**对象类型，给的是 原数据的引用地址**，所以新旧数据会互相影响，因为本质上还是同一个数据对象，如上栗中的数组
:::

## 什么是浅拷贝？

顾名思义，浅拷贝就是流于表面的拷贝方式；**当属性值为对象类型时，只拷贝了对象数据的引用，导致新旧数据没有完全分离，还会互相影响**。再举个栗子···

```js
//测试数据
var array1 = ['a',1,true,{name:'lei',age:18}];
 
//concat()  slice() 实现浅拷贝
var array2 = array1.concat()
 
//修改拷贝后的数据
array2[0] = 'b';            //array1[0]是原始数据类型 所以是直接赋值的
array2[3].name = 'zhang';   //array1[3]是对象数据类型 所以拷贝的是对象的引用，其实还是和原数组使用同一对象
 
console.log(array1);   //  ['a',1,true,{name:'zhang',age:18}]
```

栗子中 array2是array1的浅拷贝对象，数组元素是原始数据类型的不会相互影响了（array1[0]），但是array1[3]是对象类型，还是会互相影响。

## 如何实现浅拷贝

上栗中的  `array.concat()`或者`array.slice()` 是特殊的实现数组浅拷贝的方式。

如何自己实现呢？ 遍历对象/数组的每个属性，然后赋值给一个新的对象不就行了么，如下实现

```js
//实现浅拷贝
  function shallowCopy( target ){
    if(typeof target !== 'object') return ;
    //判断目标类型，来创建返回值
    var newObj = target instanceof Array ? [] : {};
 
    for(var item in target){
      //只复制元素自身的属性，不复制原型链上的
      if(target.hasOwnProperty(item)){
        newObj[item] = target[item]
      }
    }
 
    return newObj
  }
 
  //测试
 
  var test = [1,'a',{name:'lei',age:18}];
 
  var copy = shallowCopy(test);
  console.log(copy[2].name);   //lei
 
  copy[2].name = 'zhang';
  console.log(test[2].name);   //zhang   原数据也被修改

```

## 深拷贝及其实现

从浅拷贝解释基本可以明白，深拷贝就是 ‘完全’拷贝，拷贝之后**新旧数据完全分离，不再共用对象类型的属性值**，不会互相影响。


### 取巧方式 `JSON.parse(JSON.stringify(Obj)) `  

```js
var test = [1,'a',{name:'lei',age:18}];
 
var copy1 = JSON.parse(JSON.stringify(test));  //特殊方式
 
console.log(copy1);
 
copy1[2].name = 'zhang'
console.log(test);   //[1,'a',{name:'lei',age:18}]  未受到影响
```
::: warning
注意：这种方式不能深拷贝有属性值为函数的对象，可自行尝试
:::
　　

## 实现深拷贝

已经实现了浅拷贝，思考下应该是对 对象类型属性值赋值时，导致的没有完全分离，所以要修改下 拷贝对象类型属性值的方式，对它再调用一次深拷贝，这样就实现了深拷贝，如下：

```js
//实现深拷贝
function deepCopy( target ){
  if(typeof target !== 'object') return ;
  //判断目标类型，来创建返回值
  var newObj = target instanceof Array ? [] : {};
 
  for(var item in target){
    //只复制元素自身的属性，不复制原型链上的
    if(target.hasOwnProperty(item)){
      newObj[item] = typeof target[item] == 'object' ? deepCopy(target[item]) : target[item]  //判断属性值类型
    }
  }
  return newObj
}
 
//测试
var test = [1,'a',{name:'lei',age:18}];
 
var copy2 = deepCopy(test);
copy2[2].name = 'zhang'
 
console.log(test);  ////[1,'a',{name:'lei',age:18}]  未受到影响

```
 
一定要理解造成浅拷贝的原因：==对象类型数据复制时，复制了引用地址，用的还是同一个数据对象；所以实现深拷贝的方式就是要对 对象类型属性值递归进行深拷贝，避免直接赋值。==