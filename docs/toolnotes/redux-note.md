# redux源码学习笔记

本篇是学习`redux`源码的一些记录，学习的`redux`版本是`^4.0.1`。

在页面开发时，需要管理很多状态（state），比如服务器响应，缓存数据，UI状态等等···当页面的庞大时，状态就会变的混乱。redux就派上用场了，它最大的特点就是**使状态变化变的可预测**。

redux提供一个管理state的仓库（store），并且规定了store只能通过reducer（函数）来更新，而reducer必须通过dispatch(action)来触发,action就是普通的JavaScript对象，它约定了执行的类型并且传递数据。使得state的变化是可以预测的，同样的步骤会得到同样的state。

从第一步创建仓库开始看起

## createStore(reducer, preloadedState, enhancer)

开始已经提到redux是管理一个store,那么第一步就是创建store,一般最简单的就是以下形式：

```js
let store = createStore(reducer,preloadedState,enhancer);
```
+ reducer是更新store的函数，必传参数，function类型
+ preloadedState为初始状态，为可选参数。如果reducer是使用 combineReducers 合并多个函数而成的，要注意preloadedState的数据格式要和 combineReducers 中的keys一致。
+ 在学习applyMiddleware时一起说明。

看一下createStore 源码中的关键部分：
```js
  //记录reducer函数、初始状态、监听函数
  let currentReducer = reducer
  let currentState = preloadedState
  let currentListeners = []

  // 创建store时，触发一个空的action,这样如果没有初始状态，就会返回reducer中的默认状态  
  dispatch({ type: ActionTypes.INIT })

  //返回一个提供了多种方法的对象
  return {
    dispatch, //触发action的方法
    subscribe, //增加监听方法
    getState, //获取当前状态的方法
    replaceReducer, //更换reducer方法
    [$$observable]: observable
  }
```
这里是用了闭包，在createStore的作用域中创建了currentState 变量来记录状态，currentReducer来记录reducer函数，currentListeners来记录所有的监听函数。然后返回一个对象，对象中的方法可以获取currentState、触发reducer来更新currentState，添加监听函数，替换reducer等。

这个对象就是 store , 而state,reducer保存在createStore的作用域中，只有通过store中的方法可以访问到。

### getState()

只有store.getState()能获取到仓库的state --> currentState变量

```js
  function getState() {
    if (isDispatching) { //··· }
    return currentState
  }
```

### dispatch()

只有store.dispatch(action)可以触发更新state。注意在redux中action必须是一个纯对象，而且必须有type字段指定动作类型，dispatch中有对与这些的校验。

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

而且也知道了reducer函数的参数情况:
+ 当前状态
+ action对象，且有type字段

如果想在state变化时做点什么，就需要用到subscribe方法添加监听函数

### subscribe(listener)
只看关键代码，其实就是维护了一个保存监听函数的数组。从上面dispatch的代码可以看出，这些函数会在dispatch(action)的时候触发。

而且每次新增listener的时候都会返回一个取消监听的方法unsubscribe，可以在适当的时候取消监听。

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
### replaceReducer(nextReducer)

可更改reducer函数，很简单，重新赋值。

```js
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') { //··· }
    // 更新reducer函数
    currentReducer = nextReducer
    dispatch({ type: ActionTypes.REPLACE })
  }
```

### 实例
上面对createStore的实现有了大致的了解，再看看栗子












