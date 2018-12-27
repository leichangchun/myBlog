# 从“繁”到“简”进行数组去重

随着JavaScript提供语法的增多，数组去重方式也越来越多。现在从最原始的方式到最简洁的方式，一步步进行剖析。

## 双重循环

数组去重，不就是比较数组元素，去掉重复出现的么。最原始的方式不正是双重循环进行比较处理嘛

```js
//测试数据
var test = [1,2,2,10,'1','a','a','b','@','@'];
 
console.log(unique1(test));  //[1,2,10,'1','a','b','@']
 
function unique1(target) {   //双层循环比较数组元素进行去重
  var res = [];      //存放数据
  for(var i = 0 ; i<target.length ; i++){
 
    for(var j = 0,resLen = res.length ; j < resLen ; j++){
      if(target[i] === res[j]){  //如果有相同的数据，则break
        break;
      }
    }
 
    if(j === resLen){   //res中没有相同的数据，则存放
      res.push(target[i])
    }
  }
  return res;
}
```
创建res数组存放返回结果；外层循环遍历target中的每一个数组元素,内层循环将target中的数组元素与res数组中的每一个值进行对比，如果都不相同，则存放到res中。循环完成，返回去重后的数组。这种原始的方式具有良好的兼容性

## indexof优化内层循环

在本栗中使用indexof优化内层循环。`indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1

```js
var unique4_1 = (target) => [...new Set(target)];
 
console.log(unique2(test));  //[1,2,10,'1','a','b','@']
 
function unique2(target) {   //indexof简化内层循环
  var res = [];      //存放数据
  for(var i = 0 ; i<target.length ; i++){
    if(res.indexOf(target[i]) < 0)  //如果res中不存在该元素，返回-1
    res.push(target[i])
  }
  return res;
}
```
使用了indexof方法，就不在需要内层循环，当然还有其他的方式可以优化内层循环了

## 对象键值对优化内层循环

**对象的键不会重复**，这个特性可以用来判断重复元素

```js
    //测试数据
    var test = [1,2,2,10,'1','a','a','b','@','@'];

    console.log(unique3(test));  //[1,2,10,'a','b','@']   因为对象键是字符串 所以此种方式会认为 1 和 '1' 是相同的

    function unique3(target) {  //对象键值的方式
      var obj = {};
      var res = target.filter(function(value,index){
        return obj.hasOwnProperty(value) ? false : (obj[value] = true);
      })
      return res;
    }
```
由于对象的键都是字符，所以，**无法区分 1 和  '1'** ，所以需要再进行修改一下，存放时加上类型判断。
```js
    function unique4(target) {  //对象键值的方式
      var obj = {};
      var res = target.filter(function(value,index){
        return obj.hasOwnProperty(typeof value + value ) ? false : (obj[typeof value + value] = true);
      })
      return res;
    }
```
加上了类型判断， 1 对应为 Number1 ， '1' 对应为 String1，即可正常区分开。

## filter优化外层循环
在本栗中使用filter优化外层循环。`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

```js
var test = [1,2,2,10,'1','a','a','b','@','@'];
 
console.log(unique5(test));  //[1,2,10,'1','a','b','@']
 
function unique5(target) {   //filter简化外层循环
  var res = target.filter(function(value,index,array){
    return target.indexOf(value) === index    //第一次出现则返回true
  })
  return res
}
```
在target上直接进行过滤，如果是该元素第一次出现，则返回true，否则返回false；这样filter新创建的数组中每个元素只会出现一次，达到了去重的目的。至此我们不再使用for循环，代码量也减少了很多。

## Set去重
ES6 提供了新的数据结构 `Set`。它类似于数组，但是成员的值都是唯一的，没有重复的值。这种特性用来数组去重，十分的方便。

```js
var test = [1,2,2,10,'1','a','a','b','@','@'];
 
console.log(unique6(test));  //[1,2,10,'1','a','b','@']
 
function unique6(target) {  //ES6 —— set
  return [...new Set(target)]
}
```
`...` 是ES6中的扩展运算符，此处的作用是将Set展开为用逗号隔开的参数序列 ， 非常简单的就实现了数组去重。如果再用上箭头函数，真的是一句话就搞定了，如下：

```js
    //测试数据
    var test = [1,2,2,10,'1','a','a','b','@','@'];

    var unique6_1 = (target) => [...new Set(target)];  //干脆利落

    console.log(unique6_1(test));  //[1,2,10,'1','a','b','@']
```

从双重循环的十几行代码到最后 set+箭头函数的一行搞定。从‘繁’到‘简’都已经实现了数组的去重，代码量减少的背后是对JavaScript方法的应用。其实核心思路没变，实现的手段变了而已