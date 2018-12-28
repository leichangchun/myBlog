(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{182:function(t,s,a){t.exports=a.p+"assets/img/type-change-01.41dfd571.png"},187:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"那些不经意间发生的数据类型自动转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#那些不经意间发生的数据类型自动转换","aria-hidden":"true"}},[t._v("#")]),t._v(" 那些不经意间发生的数据类型自动转换")]),t._v(" "),n("p",[t._v("JavaScript可以自由的进行"),n("strong",[t._v("数据类型转换")]),t._v("，也提供了多种显式转换的方式。但是更多的情况下，是由JavaScript自动转换的，当然这些转换遵循着一定的规则，了解数据类型自由转换的规则是非常必要的。再次翻阅犀牛书后有了一些总结，记录一下。")]),t._v(" "),n("h2",{attrs:{id:"数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),n("p",[t._v("聊到数据类型转换，就不得不提到JavaScript的数据类型：原始类型（"),n("code",[t._v("Number")]),t._v(" , "),n("code",[t._v("String")]),t._v(" , "),n("code",[t._v("Boolean")]),t._v(" , "),n("code",[t._v("undefined")]),t._v(" ,  "),n("code",[t._v("null")]),t._v(" ,  "),n("code",[t._v("Symbol")]),t._v("），对象类型 （Object）。当然Object有可以细分出 Array , Date , RegExp等对象。")]),t._v(" "),n("p",[t._v("既然分为这么多种数据类型，每种数据类型肯定会有特定的用途，那么当提供的值的数据类型与预期不符时要怎么办呢，比如我需要在控制语句中使用到 boolean 值，提供的值却是 string 。当然我们可以显式转换 Boolean( a : string) ，但是根据日常经验，我们知道其实不需要这么复杂，可以在控制语句中直接用这个string类型的变量 ，也可以达到预期的效果。如下：")]),t._v(" "),n("div",{staticClass:"img-center"},[n("img",{attrs:{src:a(182)}})]),t._v(" "),n("p",[t._v("可见自动转换方便很多，但是在这个过程中到底是按照什么规则处理的呢？")]),t._v(" "),n("h2",{attrs:{id:"自动转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动转换","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动转换")]),t._v(" "),n("h3",{attrs:{id:"什么时候会发生自动转换呢-？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么时候会发生自动转换呢-？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么时候会发生自动转换呢 ？")]),t._v(" "),n("p",[t._v("犀牛书上是这样描述的：")]),t._v(" "),n("blockquote",[n("p",[t._v("当JavaScript期望使用一个布尔值的时候，你可以提供任意类型值，JavaScript将根据需要自行转换类型。一些值（真值）转换为true ， 一些值（假值）转换为false 。这在其他类型中同样适用：如果JavaScript期望使用一个字符串，它把给定的值转换为字符串。如果JavaScript期望一个数字，它把给定的值转换为数字（如果转换结果毫无意义的话，将会返回NaN）。")])]),t._v(" "),n("p",[t._v("简而言之就是："),n("mark",[t._v("JavaScript有一些语句/运算符对数据类型有要求，但我们提供的与预期不符时，就会发生自动类型转换")]),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"对数据类型有期待的语句和表达式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对数据类型有期待的语句和表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" 对数据类型有期待的语句和表达式")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("期待"),n("code",[t._v("boolean")]),t._v("类型的 ： if 语句 、 do while 语句 、 while do 语句 、 &&  ||   ！ （与或非逻辑表达式）  、 ? : （ 三目运算符）")])]),t._v(" "),n("li",[n("p",[t._v("期待"),n("code",[t._v("number")]),t._v("类型的 ：  + - * / % （算数运算符） 、  ++  --  （增量/减量运算符） 、 > 、  >= 、 <  、 <= 数字比较")])]),t._v(" "),n("li",[n("p",[t._v("期待"),n("code",[t._v("string")]),t._v("的： + （字符串连接） 、 > 、  >= 、 <  、 <=  字母排序比较")])]),t._v(" "),n("li",[n("p",[t._v("特殊的 : ==  、 !=  (不)相等运算符，在检测两个操作数是否相等时，会进行类型转换；（注意 ：  === 、!==  是（不）严格相等运算符，是不会进行类型转换的）")])])]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("1中当然可以传入表达式，但是表达式返回的结果也肯定会返回boolean类型的值，或者返回值被转换为boolean；2和3有一些重复的运算符 ： + 、 > 、  >= 、 <  、 <= ，这些运算符在不同场景下发生自动转换的时候，会有不同的优先级。")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// + 的场景   +有两种作用：算数运算和字符串连接。所以期待的是数字和字符串！")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、两个操作数同为数字，或者同为字符串，不需要进行转换")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2  ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '11'  ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、有一个操作数是字符串，则另外一个也会转换为字符串")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "11"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "1null"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "1[object Object]"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "1Wed Jun 20 2018 11:49:55 GMT+0800 (中国标准时间)"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3、如果有一个操作数是对象的话，会转化为原始值（除了Date对象是调用toString()方式转换 ， 其他对象都会调用 valueOf() 进行转换 ， 但是由于多数对象只是简单的继承了valueOf() , 只会返回对象，而不是一个原始值，所以会再调用toString进行转换） ， 所以这里可以简单的理解为：都会转换为字符串 。 另一个操作数也会转换为字符串")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "1[object Object]"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "1Wed Jun 20 2018 11:56:56 GMT+0800 (中国标准时间)"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "1"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4、 其他情况都会转换为数字")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" undefined   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n")])])]),n("p",[n("strong",[t._v("从例子中可以看到，"),n("mark",[t._v("+ 的转换其实是优先转换为字符串的")]),t._v("，如果操作数中又字符串或者对象（对象在这里会转换为字符串），则会按照 字符串连接进行操作的。从例子的第3个可以看到，第一个操作数都是数字，但是会转化为字符串。例子中的第4个，没有对象和字符串，null 和 undefined 都转换为 数字进行算数运算，其中undefined -> number 会返回 NaN , 所以计算结果为NaN。")])]),t._v(" "),n("p",[t._v("“+”还有特殊的用法，就是转换为数字，如下。会将+后的操作数转换为数字，具体的转换规则后续会说明。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" undefined  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  NaN")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  NaN")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  1529467646682")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  5")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  4")]),t._v("\n")])])]),n("p",[n("mark",[t._v("> 、  >= 、 <  、 <=  这些比较运算符的规则和 + 类似，不过是会优先转换为数字进行比较")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作用 ： 比较数值大小或者再字母表中的位置。也是期待数字和字符串！")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、两个操作数中只要有一个不是字符串，则两个值都转为数字")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11"')]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  true   字符串比较")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11"')]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false   11 转换为数字")]),t._v("\n　"),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true true 和 ‘0’ 都转换为数字 ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2、对象同样会转换为原始值（不过这里的Date对象也是优先调用valueOf ,返回的是毫秒数，其他的和上述 + 的一样），如果转换后有一个字不是字符串，则两个值也都需要转换为数字")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000000000000000000000")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  true   date对象转换为数字")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100000000000000000000000"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  true  左值也随着 date对象一起转换为数字")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'11'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  false  数组转为字符串，所以这里是字符串比较")]),t._v("\n")])])]),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("这里需要注意的是，只要在转换为数字的过程中，有一个值是NaN，那么比较的结果肯定是false。")])]),t._v(" "),n("p",[n("mark",[t._v("== 、 !=  （不）相等运算符是不严格的比较，所以，如果两个操作数不是同一类型，那么会尝试进行一些类型转换，然后进行比较")]),t._v("。有以下规则和类型转换：")]),t._v(" "),n("ol",[n("li",[t._v("一个值是undefined，一个值是null，则相等")]),t._v(" "),n("li",[t._v("一个值是数字，一个值是字符串，则字符串转换为数字进行比较")]),t._v(" "),n("li",[t._v("true 和 false 会分别转换为 1 和 0")]),t._v(" "),n("li",[t._v("一个值是字符串或者数字，另一个是对象，对象转换为原始值（Date类只调用toString，其他的和之前的一致），然后进行比较。")]),t._v(" "),n("li",[t._v("其他的比较，全是false。")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" undefined  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true  1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  false  5")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  true   2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  true  3 ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  false  3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true  4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true  4   数组转为字符串")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  true  4  数组转为字符串再转为数字")]),t._v("\n")])])]),n("p",[t._v("还有一种自动转换也很容易被忽略，但是经常见到。那就是对象包装")]),t._v(" "),n("p",[n("strong",[t._v("思考一个问题，为什么数字是原始类型，却可以使用toString方法？ 只有对象才会有方法的，为什么数字却可以使用。")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//   "1"')]),t._v("\n")])])]),n("p",[t._v("因为在x需要使用方法的时候，JavaScript会通过调用 "),n("code",[t._v("new Number(x)")]),t._v(" 的方式将它暂时转换为对象，它继承了Number对象的方法，所以就可以调用toString了。同样的还有字符串、布尔值，也是通过各种的构造函数进行转换。这也是为什么undefined和null，不可以使用toString的原因，因为它们没有构造函数。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\nx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//VM289:1 Uncaught TypeError: Cannot read property 'toString' of //null")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   at <anonymous>:1:3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//(anonymous) @ VM289:1")]),t._v("\n\n\nx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" undefined\nx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//VM305:1 Uncaught TypeError: Cannot read property 'toString' of //undefined")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//    at <anonymous>:1:3")]),t._v("\n")])])]),n("p",[t._v("目前我所了解的自动转换就只有这么多，后续再继续补充。那么自动转换的过程中，又有哪些规则呢？")]),t._v(" "),n("h2",{attrs:{id:"any-boolean"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#any-boolean","aria-hidden":"true"}},[t._v("#")]),t._v(" any -> boolean")]),t._v(" "),n("p",[t._v('在其他类型的值转换为boolean是，只有这几个会转换为false，其他都是true ： undefined 、 null 、 "" 、 0 、-0 、NaN。')]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("undefined"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 空对象 空数组 空函数 都会true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时是一个boolean对象，而不是原始值，所以是true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("h2",{attrs:{id:"any-number"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#any-number","aria-hidden":"true"}},[t._v("#")]),t._v(" any -> number")]),t._v(" "),n("p",[t._v("在其他类型的值转换为number是，就复杂一些：")]),t._v(" "),n("ol",[n("li",[t._v("boolean -> number")])]),t._v(" "),n("p",[t._v("true ->  1")]),t._v(" "),n("p",[t._v("false -> 0")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("string -> number")])]),t._v(" "),n("p",[t._v("由数字组成的字符串，可以直接转换为数字，开始和结尾的空格都可以忽略。不符合的字符串会返回NaN。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  0  空字符串")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  100")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'   100  '")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  100 忽略前后空格")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'   100aa'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  NaN   有其他非数字")]),t._v("\n")])])]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("备注：这里的规则是自动转换的规则，如果是显示转换的话，构造函数"),n("code",[t._v("Number()")]),t._v(" 和此规则一致，而"),n("code",[t._v("window.parseInt()")]),t._v(" "),n("code",[t._v("window.parseFloat")]),t._v("的解析规则则不一样。如下")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'  100a  '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  100")]),t._v("\nwindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' 100.11a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 100.11")]),t._v("\n")])])])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("对象 -> number")])]),t._v(" "),n("p",[n("strong",[t._v("对象会先尝试调用 valueOf 返回原始值，如果没有则调用toString返回原始值，再进行转换返回")]),t._v("。看几个例子")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  1529483712712  date对象的valueOf返回毫米数，即为数字")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  0   数组valueOf为它自己，再调用toString 返回 “” ，空字符串转换为数字为0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  1  同样toString  返回 “1” ， 转换为数字为 1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN  toString 返回 “1，2”  转换为数字 NaN")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  NaN   toString [Object,Object] , 转换为数字 NaN")]),t._v("\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("undefined  null")])]),t._v(" "),n("p",[t._v("null -> 0")]),t._v(" "),n("p",[t._v("undefined -> NaN")]),t._v(" "),n("h2",{attrs:{id:"any-string"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#any-string","aria-hidden":"true"}},[t._v("#")]),t._v(" any -> string")]),t._v(" "),n("ol",[n("li",[t._v("null undefined boolean  number")])]),t._v(" "),n("p",[t._v("这几个原始类型的转换非常简单，就是将自身用引号包裹而已。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "1"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "true"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" undefined  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "undefined"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//   "null"')]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("对象 -> string")])]),t._v(" "),n("p",[t._v("和对象转化为数字类似，不过是先调用toString，在调用valueOf。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//   "[object Object]"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  ""')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "1,2,3"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "function () {}"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  "Wed Jun 20 2018 16:50:56 GMT+0800 (中国标准时间)"')]),t._v("\n")])])]),n("p",[t._v("可以看出不同的对象差别挺大的，"),n("strong",[t._v("数组会将每个元素用逗号分开，生成字符串，date对象toString返回的是中国标准时间，从这里就可以看过和转化成数字的不同逻辑了，先尝试toString  不行才再valueOf。")])]),t._v(" "),n("p",[t._v('自动类型转换真的非常常见，常用的一些便捷的转类型的方式，都是依靠自动转换产生的。比如 转数字 ： + x    、  x - 0  ，   转字符串 ：   "" + x  等等。现在总算知道为什么可以这样便捷转换。')])])}],e=a(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);r.options.__file="js-type-autochange.md";s.default=r.exports}}]);