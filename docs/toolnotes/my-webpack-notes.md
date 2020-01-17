# 《webpack实战：入门、进阶和调优》 笔记

webpack的核心功能时解决模块之间依赖，把各个模块按照特定的规则和顺序组织在一起，最终合并为一个或多个JS文件。我们可以把webpack理解为一个模块处理工厂，我们把源代码交给webpack，由它去进行加工、拼装处理，按照配置产出资源文件。

## 不同的模块标准

### commomJs

### ES6

### AMD

### UMD


## npm scripts 维护命令行脚本

## webpack.config.js文件 维护webpack配置

## entry



## webpack-dev-server

两大职能：

+ 令Webpack进行模块打包，并处理打包结果的资源请求。
+ 作为普通的 web server，处理静态资源文件的请求。

webpack-dev-server只是将打包结果放在内存中，并不会写入实际的文件，在每次webpack-dev-server接受请求时都只是将内存中打包结果返回给浏览器。

### live-reloading 自动刷新

### hot-module-replacement 模块热替换

