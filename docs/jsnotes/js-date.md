# Date 相关记录

处理时间是常见的需求，总结下Date类的相关知识

## 构建时间对象

> [Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象基于1970年1月1日（世界标准时间）起的毫秒数。

构建对象实例有多种方式:

1. 不传入参数，默认以系统当前时间返回一个时间对象.`new Date();`
```js
    new Date();
    // Wed Mar 13 2019 10:49:28 GMT+0800 (中国标准时间)
```

返回的是一个*对象实例*，控制台打印了时间字符串，是默认调用了`toString()`方法。

2. 传入 自1970年1月1日00:00:00 (世界标准时间) 起经过的*毫秒数*.`new Date(value);`

```js
    new Date(1323532800000);
    // Sun Dec 11 2011 00:00:00 GMT+0800 (中国标准时间)

    // 可以传入负数，代表1970年1月1日00:00:00之前的时间
    new Date(-10000);
    // Thu Jan 01 1970 07:59:50 GMT+0800 (中国标准时间)
```

3. 传入 表示日期的字符串.`new Date(dateString);`

```js
    new Date('2011-11-11')
    new Date('2011/11/11')
    new Date('11/11/2011')
    // Fri Nov 11 2011 00:00:00 GMT+0800 (中国标准时间)

    new Date('Sun Dec 11 2011 00:00:00')
    // Sun Dec 11 2011 00:00:00 GMT+0800 (中国标准时间)  注意这里是12月份了，11代表的12月

    new Date('2011-11-11 11:11:11')
    new Date('2011-11-11T11:11:11')
    // Fri Nov 11 2011 11:11:11 GMT+0800 (中国标准时间)

    new Date('aa')
    // Invalid Date
```

只要能被`[Date.parse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)`解析的字符串，都可以作为参数传入。



4. 传入 年月日等多个整数参数. `new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);`

```js
    new Date(2011,11,11,11,11,11,111)
    // Sun Dec 11 2011 11:11:11 GMT+0800 (中国标准时间)
    new Date(2011,11)
    // Thu Dec 01 2011 00:00:00 GMT+0800 (中国标准时间)
   
    new Date(2011)
    // Thu Jan 01 1970 08:00:02 GMT+0800 (中国标准时间)  只传入一个整数参数，会被当做毫秒数解析

    new Date('2011',11,11) 
    //Sun Dec 11 2011 00:00:00 GMT+0800 (中国标准时间)  传入的参数会进行转换
    new Date('2011.11',11,11)
    //Sun Dec 11 2011 00:00:00 GMT+0800 (中国标准时间)

    new Date('a',11,11)
    // Invalid Date  无法转换成数字的参数
```

这种方式**至少需要传入两个整数参数**标志年、月，只传入一个参数会当做毫秒数进行构建；传入的参数会自动转换成数字，所以例子中传入数字字符串也是可以创建成功的。


如果**把`Date()`直接当作函数调用**，不过有没有传入参数，都会返回当前时间的时间字符串

```js
Date()
// "Wed Mar 13 2019 20:22:42 GMT+0800 (中国标准时间)"
Date(2011,11)
// "Wed Mar 13 2019 20:22:47 GMT+0800 (中国标准时间)"
```

## 自动折算

时间的参数都是有范围的：
+ 年 使用四位数年份，比如2000。如果写成两位数或个位数，则加上1900，即10代表1910年。如果是负数，表示公元前
+ 月份的范围是0~11 (0是一月份，11是12月份)
+ 天数的范围是1~31 
+ 小时的范围是0~23
+ 分钟的范围是0~59
+ 秒数的范围是0~59
+ 毫秒的范围是0~999

如果创建时间对象的时候，传入的参数超出了实际范围会怎样呢？

```js
    new Date(2010,12,11)
    // Tue Jan 11 2011 00:00:00 GMT+0800 (中国标准时间)  月的参数12超出了范围，年份多了一年，然后月份变成了1月份（对应参数0）
    new Date(2010,11,0)
    // Tue Nov 30 2010 00:00:00 GMT+0800 (中国标准时间)  天的参数0不在范围内，所以月份变成了11（对应参数10），然后天变成了30
    new Date(2010,11,11,25)
    // Sun Dec 12 2010 01:00:00 GMT+0800 (中国标准时间)  小时的参数25超出了范围，天数变成了12，然后小时变成了1
```

当传入的参数超出了实际范围，**会自动折算成合理的范围** ， 相邻的数值也会进行调整。

利用这个特性可以做很多的事情，比如，你想**获取2012年2月有共有多少天**，可以这样处理。

```js
    new Date(2012,2,0).getDate()
    // 29  -- 三月(对应2)没有0天，所以折算到二月（对应1）的最后一天，这时取得getDate()即是该月的天数
```

## 类型转换

如果`+` 或者 `==` 运算符其中一个操作数是对象时，需要先把对象转化成原始值。其他的对象都会先调用`valueOf()` 方法，而时间对象类型会先调用`toString()`
```js
1 + new Date()
// "1Thu Mar 14 2019 13:51:46 GMT+0800 (中国标准时间)"

new Date(2011,11,11).getTime() == new Date(2011,11,11)
// false 后面的Date对象，调用了toString()
new Date(2011,11,11).getTime() == +new Date(2011,11,11)
// true 此时隐式转换期待转换为数字，调用了valueOf()
```

其他期待转换为数字的场景，也是正常先调用`valueOf()`的

## 时间戳

时间对象在传递过程中，一般会转换为时间戳，有多种实现方式

```js
new Date(2011,11,11).valueOf()
// 1323532800000
new Date(2011,11,11).getTime()
// 1323532800000
+new Date(2011,11,11)
// 1323532800000

Date.now()
// 1552543813256  当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数
```

注意以上都是毫秒，如果要转成UNIX时间戳（从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数），可以用以下方法

```js
Math.round(ms/1000)
```

## 原生方法

Date对象提供了多种方法来获取/设置时间数据

1. Date对象提供了一系列get*方法，用来获取实例对象某个方面的值。

+ getTime()：返回实例距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法。
+ getDate()：返回实例对象对应每个月的几号（从1开始）。
+ getDay()：返回星期几，星期日为0，星期一为1，以此类推。
+ getFullYear()：返回四位的年份。
+ getMonth()：返回月份（0表示1月，11表示12月）。
+ getHours()：返回小时（0-23）。
+ getMilliseconds()：返回毫秒（0-999）。
+ getMinutes()：返回分钟（0-59）。
+ getSeconds()：返回秒（0-59）。
+ getTimezoneOffset()：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。

还提供了这些方法对应的 UTC 版本，用来返回 UTC 时间。

+ getUTCDate()
+ getUTCFullYear()
+ getUTCMonth()
+ getUTCDay()
+ getUTCHours()
+ getUTCMinutes()
+ getUTCSeconds()
+ getUTCMilliseconds()

```js
new Date(2011,11,11,11,11,11,111).getHours()
// 11
new Date(2011,11,11,11,11,11,111).getUTCHours()
// 3 可见UTC时间比北京时间晚8个小时，也就是下面的时区差异 -480分钟
new Date(2011,11,11,11,11,11,111).getTimezoneOffset()
// -480
```

2. Date对象提供了一系列set*方法，用来设置实例对象的各个方面。

+ setDate(date)：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
+ setFullYear(year [, month, date])：设置四位年份。
+ setHours(hour [, min, sec, ms])：设置小时（0-23）。
+ setMilliseconds()：设置毫秒（0-999）。
+ setMinutes(min [, sec, ms])：设置分钟（0-59）。
+ setMonth(month [, date])：设置月份（0-11）。
+ setSeconds(sec [, ms])：设置秒（0-59）。
+ setTime(milliseconds)：设置毫秒时间戳。

这些方法基本是跟get*方法一一对应的，但是**没有setDay方法，因为星期几是计算出来的，而不是设置的**。
set*系列方法除了setTime()，都有对应的 UTC 版本，即设置 UTC 时区的时间。

+ setUTCDate()
+ setUTCFullYear()
+ setUTCHours()
+ setUTCMilliseconds()
+ setUTCMinutes()
+ setUTCMonth()
+ setUTCSeconds()

设置时间的方法，配合自动折算，可以很便捷的得到相对时间
```js
let now = new Date();

// 99天之后的时间
now.setDate(now.getDate() + 99)

// 10小时之前
now.setHours(now.getHours() - 10)

```

3. date对象提供一系列to* ，用来将时间对象转换为字符串

+ toString() 返回一个完整的日期字符串。
+ toDateString() 返回年月日的字符串
+ toTimeString() 返回时间字符串，不包含年月日

也有对应的 UTC 版本 和 local版本

+ toUTCString() 返回对应的 UTC 时间，也就是比北京时间晚8个小时。
+ toLocaleString() 返回完整的本地时间。

```js
let now = new Date()
undefined
now.toString()
// "Thu Mar 14 2019 14:32:18 GMT+0800 (中国标准时间)"
now.toUTCString()
// "Thu, 14 Mar 2019 06:32:18 GMT"    UTC时间比北京时间晚8个小时
now.toLocaleString()
// "2019/3/14 下午2:32:18"
```

