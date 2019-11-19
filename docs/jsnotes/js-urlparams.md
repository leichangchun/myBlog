# 获取url中的参数

总结获取url中查询参数的两种方式

## 通过正则表达式获取单个参数

url中的所有查询参数可以通过 `window.location.search` 字段获取，以字符串的形式返回。并有固定的格式 `?param1=value1&param2=value2···`，所以可以正则表达式匹配。

分析下需要匹配的格式：

+ `param=value`, 其中需要获取的是value部分，但是也需要 **param=** 参与匹配，但是不能参与返回结果，这里有`前后查找`的问题
+ `?param=value` 和 `&param=value` 都可能存在，参数名称紧跟在`?`或`&`之后；还要注意的是，要区分 **emali**和**mail** 这种名称，`/mail/`既能匹配到email又能匹配mail，所以要给参数名称加一个`边界`，名称的上一个字符要是一个非单词(\W)的字符，这样就可以解决这两个问题
+ `value`后可能是空，也可能是下一组参数(以&分割)，所以value的值要匹配到`[^&]`为止
+ 由于参数名称是变化的，所以需要用字符串的形式来生成正则表达式

前后查找和边界的介绍可以细看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)中的详细介绍。

搞定正则之后，使用string的`match`方法，就能直接获取到对应的参数值

```js
function getUrlParamsByName(name) {
    // \b 边界   
    // ?<= 向后匹配 
    // 字符串转成正则表达式，其中的'\b'类型的特殊字符要多加一个'\'
	let reg = new RegExp(`(?<=\\b${name}=)[^&]*`),
	str = location.search || '',
	target = str.match(reg);
	
	if(target) {
		return target[0]
	}

	return;
}
```

## 解析所有参数，以对象返回

上一个方法是获取单个的参数值，此方法是为了解析出所有的参数

利用string的一些工具函数取值，注意一些异常场景的判断

```js
function getUrlParams() {
	let obj = {};

	if (!window) {
		return; 
	}

  let str = window.location.search || '';
  
  if (str && str.slice(1)) {
     // 去掉 ？ ，然后以 & 分割
    let queryArray = str.slice(1).split('&');
    queryArray.map((query) => {
      // param=value 以 = 分割
      let temp = query.split('=');
      if(temp.length > 1) {
      // 收集参数
      obj[temp[0]] = temp[1];
      }
    })
  }

	return obj;
}
```

## 总结

正则表达式的方式更加灵活便捷啊，开始用的时候不习惯，后来觉得真香！