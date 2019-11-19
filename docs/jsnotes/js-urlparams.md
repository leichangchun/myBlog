# 获取url中的参数

总结获取url中查询参数的两种方式

## 通过正则表达式获取单个参数

url中的所有查询参数可以通过 `window.location.search` 字段获取，以字符串的形式返回。并有固定的格式 `?param1=value1&param2=value2···`，所以可以正则表达式匹配。

分析下需要匹配的格式：

+ `param=value`, 其中需要获取的是value部分，但是也需要**param=**参与匹配，这里有前后匹配的问题
+ `?param=value` 和 `&param=value` 都可能存在，参数名称紧跟在`?`或`&`之后；还要注意的是，要区分 emali和mail这种名称，`/mail/`既能匹配到email又能匹配mail

## 解析所有参数，以对象返回