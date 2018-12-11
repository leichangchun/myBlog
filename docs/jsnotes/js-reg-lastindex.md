# lastIndex对正则结果的影响

## 问题
今天遇到一个问题，用**正则表达式去检查同一个字符串时，交替返回true和false**。无奈之下，重新翻了翻权威指南，发现罪魁祸首原来是lastIndex。可在控制台尝试下

```js
let reg = /[\d]/g
//undefined
reg.test(1)
//true
reg.test(1)
//false
```
 

## lastIndex

lastIndex在权威指南中是如下解释：
> 它是一个可读/写的整数。如果匹配模式带有g修饰符，这个属性存储在整个字符串中下次索引的开始位置，这个属性会被exec()和test()用到。

还是上面的例子，观察下lastIndex属性

```js
let reg = /[\d]/g     //有修饰符g
//undefined
reg.lastIndex
//0
reg.test(1)           
//true
reg.lastIndex     //匹配一次后，lastIndex改变
//1
reg.test(1)        //从index 1 开始匹配
//false
reg.lastIndex
//0
reg.test(1)
//true
reg.lastIndex
//1
```
第一次使用test()匹配成功后，lastIndex被设为匹配到的结束位置，就是1；第二次再test()时，从index 1 开始匹配，匹配失败，lastIndex重置为0 。这样就造成了匹配结果与预期不符

## 解决

1. 不使用 g 修饰符

```js
reg = /[\d]/
///[\d]/
reg.test(1)
//true
reg.test(1)
//true
reg.lastIndex
//0
reg.test(1)
//true
reg.lastIndex
0
```
　　

2. test()之后手动设置lastIndex = 0