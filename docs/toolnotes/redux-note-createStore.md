# redux源码学习笔记 - createStore

本篇是学习`redux`源码的一些记录，学习的`redux`版本是`^4.0.1`。

在页面开发时，需要管理很多状态（state），比如服务器响应，缓存数据，UI状态等等···当页面的庞大时，状态就会变的混乱。redux就派上用场了，它最大的特点就是**使状态变化变的可预测**。

redux提供一个管理state的仓库（`store`），并且规定了`store`只能通过`reducer`（函数）来更新，而`reducer`必须通过`dispatch(action)`来触发,`action`就是普通的JavaScript对象，它约定了执行的类型并且传递数据。使得state的变化是可以预测的，同样的步骤会得到同样的state。

从第一步**创建仓库**开始看起 `createStore(reducer, preloadedState, enhancer)`。

开始已经提到redux是管理一个store,那么第一步就是创建store,一般最简单的就是以下形式：

```js
let store = createStore(reducer,preloadedState,enhancer);
```
+ reducer是更新store的函数，必传参数，**function类型**
+ preloadedState为初始状态，为可选参数。如果reducer是使用 combineReducers 合并多个函数而成的，要注意preloadedState的数据格式要和 combineReducers 中的keys一致。
+ enhancer在学习applyMiddleware时一起说明。

看一下createStore 源码中的关键部分：
```js
  // 记录reducer函数、初始状态、监听函数
  let currentReducer = reducer
  let currentState = preloadedState
  let currentListeners = []

  // 创建store时，触发一个空的action,这样如果没有初始状态，就会返回reducer中的默认状态  
  dispatch({ type: ActionTypes.INIT })

  // 返回一个提供了多种方法的对象
  return {
    dispatch, //触发action的方法
    subscribe, //增加监听方法
    getState, //获取当前状态的方法
    replaceReducer, //更换reducer方法
    [$$observable]: observable
  }
```
这里是用了闭包，在**createStore的作用域中**创建了`currentState` 变量来记录状态，`currentReducer`来记录reducer函数，`currentListeners`来记录所有的监听函数。然后返回一个对象，对象中的**方法**可以获取currentState、触发reducer来更新currentState，添加监听函数，替换reducer等。

这个对象就是 store , 而state,reducer,listeners保存在createStore的作用域中，只有通过store中的方法可以访问到。

## getState()

只有`store.getState()`能获取到仓库的state --> currentState变量

```js
  function getState() {
    if (isDispatching) { //··· }
    return currentState
  }
```

## dispatch()

只有`store.dispatch(action)`可以触发更新state。注意在redux中action必须是一个纯对象，而且必须有type字段指定动作类型，dispatch中有对与这些的校验。

```js
  function dispatch(action) {
    /*-- action必须是对象 --*/
    if (!isPlainObject(action)) { //··· }
    /*-- action必须有type字段--*/
    if (typeof action.type === 'undefined') { //··· }

    if (isDispatching) { //··· }

    /*-- 触发reducer,更新state --*/
    try {
      isDispatching = true
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    /*-- 执行监听函数 --*/
    const listeners = (currentListeners = nextListeners)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }

    return action
  }
```
从这一段`currentState = currentReducer(currentState, action)`看出currentState是通过执行reducer函数更新的。

而且也知道了**reducer函数的参数**情况:
+ 当前状态
+ action对象，且有type字段

如果想在state变化时做点什么，就需要用到`subscribe`方法添加监听函数

## subscribe(listener)
只看关键代码，其实就是维护了一个保存监听函数的数组。从上面dispatch的代码`listener()`可以看出，这些函数会在`dispatch(action)`的时候触发。

而且每次新增listener的时候都会返回一个取消监听的方法`unsubscribe`，可以在适当的时候取消监听。

```js

  function subscribe(listener) {
    /*-- 增加监听 --*/
    nextListeners.push(listener)

    /*-- 返回一个取消监听的函数 --*/
    return function unsubscribe() {

      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1)
    }
  }
```
## replaceReducer(nextReducer)

可以更改reducer函数，很简单，重新赋值。

```js
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') { //··· }
    // 更新reducer函数
    currentReducer = nextReducer
    dispatch({ type: ActionTypes.REPLACE })
  }
```

## 实例
上面对createStore的实现有了大致的了解，再看看栗子

action中需要`type`字段来标记要执行的字段，会定义为**字符串常量**；一般会使用单独的模块来管理。

```js
    /*-- 动作类型 actionTypes.js --*/
    export const ADD_TODO = 'ADD_LIST';
    export const COMPLETE_TODO = 'COMPLETE_TODO';
```
action 必须是一个纯JavaScript对象。可以通过**创建action的函数**返回，这样就方便传递数据。

```js
  /*-- action对象 action.js --*/

    import { ADD_TODO, COMPLETE_TODO} from "./actionTypes";

    export function addList (text) {
        // 返回action对象
        return {
            type: ADD_TODO,
            text
        }
    }

    export function completeList (id,bl = true) {
        return {
            type: COMPLETE_TODO,
            id,
            bl
        }
    }
```
reducer 是一个纯函数，接受旧的state和action，返回新的state。只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。

```js
    /*-- reducer函数 todolist.js --*/
    import {ADD_TODO, COMPLETE_TODO} from '../actionTypes';

    let id = 0;

    export default function todoList(state = [],action) {
        // 根据type区分如何更新state
        switch (action.type) {
            case ADD_TODO :
                // 不要直接修改state,要返回一个新的state
                return [...state,{
                    id: id++,
                    text: action.text,
                    complete:false
                }]
            case COMPLETE_TODO :
                return state.map( item => {
                    if (item.id === action.id){
                        return Object.assign({},item,{complete:action.bl})
                    }
                    return item;
                })
            default:
                return state;
        }
    }
```
使用 createStore 创建 store

```js
    /*-- 创建store --*/
    import {createStore} from 'redux';
    import reducer from './reducer/todolist';

    let store = createStore(reducer);
```

更新 state

```js
    import {addList,completeList} from './store/actions';
    
    store.dispatch(addList('测试数据'));
```
`addList('测试数据')`返回的是 action `{type: ADD_TODO,text:'测试数据'}`。
在todoList函数中，执行完后返回新的state `[{id:0,text:'测试数据',complete:false}]`。

获取 state

```js
    console.log(store.getState()); // [{id:0,text:'测试数据',complete:false}]
```

添加/删除 监听函数

```js
    // 添加
    unsubscribe =  store.subscribe(function(){ // 每次更新state都会执行此函数
        console.log(store.getState());
    });

    // 取消
    unsubscribe()
```









