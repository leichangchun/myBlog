# 实现对象合并功能

jQuery 中的 `$.extend()` 是经常使用到工具函数，多用于合并参数（对象），具体用法在这里不过多赘述，可通过传参控制合并过程中是否使用深度拷贝；而ES2015中新增的 `Object.assign()`方法，也可以实现对象的合并，不过合并过程中使用的是浅拷贝；本文参考了jQuery的extend方法的源码，将自己实现对象合并，即将多个对象的属性复制到目标对象上，若有相同的属性，后面的对象覆盖前面的。

## 浅拷贝的方式实现对象合并

　　 [对象和数组的深浅拷贝](/jsnotes/js-deepcopy.md)。先看实现再解释

```js
    function extend() {  //extend 浅拷贝实现
      var name,options,copy,
          length = arguments.length,
          i = 1,
          target = arguments[0] || {};  //取目标对象
      
    if(['object','function'].indexOf(typeof target) < 0){
        target = {};
      }
    

      for(;i<length;i++){

        options = arguments[i]

        if(options != null){  //排除空参数的情况 extend({},,)

          for(name in options){   //遍历对象 赋值

            copy = options[name];

            if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
      }

      return target  
    }

   //测试数据 
    var test1 = {
      a : 1,
      b : {
        c : 2,
        d : 3
      },
      e : [1,'a']
    },
    test2 = {
      b : {
        c : 4,
        d : 5,
        f : 6
      },
      e : [1,'a'],
      g : 7
    }

    var test = extend({},test1,test2);
    console.log(test.b.d);   //5

    test2.b.d = 'x';  //修改test2
    console.log(test.b.d);  // 'x'   test随之修改
```

思路如下：
1. 默认取第一个参数为目标对象，若第一个参数非对象数据类型，则赋值为空对象
2. 遍历剩下的参数（源对象），将源对象的属性复制到目标对象上 。
3. 返回目标对象为合并的结果

在第二步中没有对源对象的属性值进行判断，所有的全部使用 `=`赋值，所以当源对象的属性值为对象属性时，复制的只是引用值，即为浅拷贝的方式，在测试结果中可以看出 test 和 test2 的 b 属性的属性值，使用的是同一个对象，会互相影响。知道了这些之后，如何实现合并时的深拷贝也应该有思路了。

## 深度拷贝的方式实现对象合并

需要在复制源对象属性值时，判断值的类型，如果是对象数据类型，则递归调用extend函数。则可以实习深拷贝方式的对象合并，实现如下：

```js
    function extend() {  //extend 深拷贝实现
      var name,options,src,copy,
          deep = false,  //是否深拷贝 默认为false
          length = arguments.length,
          i = 1,
          target = arguments[0] || {};

      //如果第一个参数为boolean类型,赋值给deep
      if(typeof target  == 'boolean'){
        deep = arguments[0];
        target = arguments[i] || {}; //目标对象顺延
        i++;
      }

      //如果target不是对象数据类型的话  target赋值为 {}
      if(['object','function'].indexOf(typeof target) < 0){
        target = {};
      }

      for(;i<length;i++){

        options = arguments[i];

        if(options != null){

          for(name in options){

            copy = options[name];
            src = target[name];

            if(target === copy){  //避免重复循环
              continue;
            }

            if(deep && copy && (typeof copy == 'object')){ // 类型判断

              src = Object.prototype.toString.call(copy) == '[object Array]' ? [] : {};  //区分数组和‘对象’
              target[name] = extend(deep,src,copy);
            }else {

              if (copy !== undefined) {

                target[name] = copy;
              }
            }
          }
        }
      }

      return target
    }
```
思路如下：
1. 参数判断，若第一个参数为布尔类型，则取为控制是否深度拷贝的参数deep , deep 默认为false；同时 目标元素会是第二个参数

2. 复制属性值时，要判断deep参数和 属性值的类型 ； 若 deep为true 且 属性值为对象类型 则递归调用 extend函数 ， 否则直接赋值

3. 需要区分 数组 和 ‘对象’ ，来给 目标对象的属性赋值不同的初始值。如果都是 {} 的话，数组类型的属性值复制到目标元素上会变为 {'0':xx , '1' : xx ...}