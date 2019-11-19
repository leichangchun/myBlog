# 对axios的再次封装

[axios](http://www.axios-js.com/zh-cn/docs/)功能很全面，但是对于具体项目而言，完全可以再进行一层封装，更加符合项目自身的特点。

加入了以下功能：

- 创建实例，并传入 **默认配置** ，避免影响全局的`axios`
- 响应拦截器，统一 **处理特殊返回码** ，统一 **提示**
- 快捷配置不同的`Content-Type`，并自动处理传入数据的格式
- 统一`get`和`post`的调用方式

```js
import axios from 'axios'
import {cloneDeep} from 'lodash'
import {notification} from 'antd'
import Qs from 'qs';
import {objToFormdata} from '../util/util';
import store from '../store/index';
import {changeLoginModalStatu} from '../pages/user-center/store/ActionCreator';

const OK_CODE = 0;
const NOT_LOGIN = 123456;

// 提示框默认配置
notification.config({
    duration: 4
});

// 创建axios实例，并传入默认配置
const instance = axios.create({
    method:'get',
    timeout:30000,
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    transformRequest: function(data,headers){

        if (headers['Content-Type'].indexOf('application/x-www-form-urlencoded') > -1) {
            // 序列化数据
            return Qs.stringify(data)
        }

        return data;
    }
})

// 请求拦截器
instance.interceptors.request.use(function (config) {

    // 这里可以做些什么
     return config;
  }, function (error) {

    return Promise.reject(error);
});

// 响应拦截器 统一处理返回码
instance.interceptors.response.use(function (response) {
    let {data,status,statusText,config} = response;
    
    if(data) { // 有数据返回时，判断code值
        let {code,msg} = data;
        if(code !== OK_CODE) {
            if(code === NOT_LOGIN) { // 未登录的特定code
                // 打开登录引导框
                store.dispatch(changeLoginModalStatu(true))
            } else {
                notification.warning({
                    message: '请求异常',
                    description:msg
                })
            }

            // 其他非正常code，转为error
            return Promise.reject(data);
        }
        return data;
    }

    // 无数据返回的异常状态码提示
    notification.error({
        message: `返回状态码:${status}`,
        description:statusText
    })

    return Promise.reject({
        status,
        statusText
    });

  }, function (error) {

    let {response,config} = error,
        errorMsg = null;

    if (response && response.data) { // 响应中有错误信息
        let {code,msg} = response.data;
        if (code && msg) {
            errorMsg = `code : ${code} ; msg : ${msg}`
        }
    }

    notification.error({
        message: '请求失败',
        description:errorMsg || '请稍后重试！'
    })

    return Promise.reject(error);
});

/**
 * 发起请求
 * @param {object} configs 请求配置，除官网配置外，还有功能配置字段{needVersion:number,needFormData:boolean,needJson:boolean}
 */
function _axios(configs){
    let _configs = cloneDeep(configs),
        {method = 'get',needVersion,needFormData,needJson,loading,url, data} = _configs;

    // 为接口添加版本号
    if(needVersion){
        let dataName = (method === 'get') ? 'params' : 'data';
        _configs[dataName].version = needVersion;
    }
    delete _configs.needVersion;

    // get时，数据在params中，删除无用的data字段
    if(method === 'get'){
        delete _configs.data;
    }

    // 存在needFormData配置，转换数据格式，添加对应请求头
    if(method === 'post' && needFormData){
        let _data = objToFormdata(data);
        _configs = Object.assign(_configs,{
            data:_data,
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    delete _configs.needFormData;

    // 存在needJson配置，转换数据格式，添加对应请求头
    if(method === 'post' && needJson){
        let _data = JSON.stringify(data);
        _configs = Object.assign(_configs,{
            data:_data,
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }
    delete _configs.needJson;

    return instance(_configs)
}

/**
 * 发起get请求
 * @param {string} url 必要 | 请求链接
 * @param {Object} data 可选 | 参数
 * @param {Object} options 可选 | 功能配置项{needVersion:number}
 * @param {Object} configs 可选 | axios配置项，可配置内容同官网
 */
function get(url,data = {},options = {},configs = {}) {
    return _axios({
        url,
        params:data,
        ...options,
        ...configs
    })
}

/**
 * 发起post请求
 * @param {string} url 必要 | 请求链接
 * @param {Object} data 可选 | 参数
 * @param {Object} options 可选 | 功能配置项{needVersion:number,needFormData:boolean,needJson:boolean}
 * @param {Object} configs 可选 | axios配置项，可配置内容同官网
 */
function post(url,data = {},options = {},configs = {}){
    return _axios({
        url,
        method:'post',
        data,
        ...options,
        ...configs
    })
}

export {_axios,get,post,axios}
```