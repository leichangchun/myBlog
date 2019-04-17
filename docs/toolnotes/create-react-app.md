# Create-react-app创建项目

### 全局安装 create-react-app

```js
    npm install -g create-react-app
```

### 创建项目

```js
    // 创建项目
    create-react-app APP-NAME

    // 安装完成后运行项目
    npm run start

    // 打包项目
    npm run build
```

### 导出webpack配置

```js
    npm run eject
```

希望看到webpack配置可运行此命令。

需要注意的是，此过程是不可逆的，且只能导出一次。

### eslint

`package.json`文件中已经有了针对react的校验规则配置

```json
  "eslintConfig": {
    "extends": "react-app"
  },
```

### vscode调试

vscode编辑器调试可以添加以下配置:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
        "name": "Chrome",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:3000",
        "webRoot": "${workspaceFolder}/src",
        "sourceMapPathOverrides": {
            "webpack:///src/*": "${webRoot}/*"
        },
        //可指定浏览器路径
        "runtimeExecutable": "C:\\Users\\80021640\\AppData\\Local\\Google\\Chrome\\Application\\chrome_.exe"
        }
    ]
}
```