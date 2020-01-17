# react相关记录

此页记录遇到过的react相关问题

## react-router
<!-- TODO: -->
### 如何在路由跳转中传递参数

### <Link\> 打开新的页面 

`Link`支持 a 标签的属性。You can also pass props you’d like to be on the \< a > such as a title, id, className, etc. 传入`target="_blank"`可以在新页面打开路由。

我使用的版本为 **5.1.2** ，可以实现预期。但是旧版本的react-router可能无法打开新页面。此时可以用`window.open(url)`来实现。

```js
    <Link to="/messageCenter" target="_blank">
```

## Ant Design

### 减少moment的语言包体积

只打包中文资源包

```js
    new webpack.ContextReplacementPlugin(
      /moment[/\\]locale$/,
      /zh-cn/,
    )
```

### inputNumber控件 限制只能输入整数

[InputNumber控件API](https://ant.design/components/input-number-cn/#API)

`formatter` 和 `parser` 配合使用，可以通过自定义函数的方式限制输入格式

```js
    // formatter parser 传入自定义函数
    <InputNumber  max={max}
                    min={min}
                    formatter={limitToInt}
                    parser={limitToInt}
                    onChange={value => this.paramChangeHandle('paramMaxValue',value)} 
                    value={paramMaxValue} style={{width:"70px"}}></InputNumber>


    // 限制输入值为整数
    function limitToInt (value) {
        // eslint-disable-next-line no-useless-escape
        const reg = /^(\-)?(\d*)\.*$/;

        if (value === '-') {
            return value
        }

        if (isNaN(+value)) {
            return '';
        }

        return ('' + value).replace(reg,'$1$2')
    }
```

### Form控件，getFieldDecorator中自定义校验规则

用`getFieldDecorator`包装的控件，除了提供的校验规则外，有两种添加自定义规则的方式

+ pattern 

传入一个正则表达式

```js
    {getFieldDecorator('password', {
        rules: [{ required: true, message: '请输入账号密码' },
                { pattern: /^[a-zA-Z]\w{5,17}$/ , message: '密码要求是以字母开头的6到18个字母或数字或下划线'}],
        initialValue: ''    
    })(<Input.Password placeholder="设置您的登录密码" />)}
```

+ validator

传入一个自定义校验函数

```js

    {getFieldDecorator('passwordComfirm', {
        rules: [{ required: true, message: '请确认账号密码' },
                { validator: this.compareToFirstPassword}],
        initialValue: ''
    })(<Input.Password placeholder="请再次输入登录密码" />)}

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        // 比对密码
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码输入必须一致');
        } else {
            callback();
        }
    }
```