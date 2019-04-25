# redux-thunk 学习笔记

redux触发store更新，使用的dispatch(action),在关于createStore的源码解读中可以看到，store.dispatch限制了action必须是一个纯对象。是为了保持reducer的纯净性 
> 只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。

redux-thunk是redux推荐的一个异步处理middleware，它可以在触发`store.dispatch`之前完成reducer中不能搞定的副作用，比如异步操作。

## 源码实现

```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    // 如果ation是函数，这调用这个函数，并且传入dispatch和getState
    if (typeof action === 'function') {
      // 此处的dispatch是在applyMiddleware中改写过的
      return action(dispatch, getState, extraArgument);
    }

    // 如果是对象，这调用下一个middleware
    return next(action);
  };
}

const thunk = createThunkMiddleware(); // 返回一个middleware
// 提供原函数，可以传递额外的参数
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```
redux-thunk这个middleware可以**接受函数类型的action**，在action函数中进行各种自定义的操作（延时，接口请求等），然后再使用传入的`dispatch`触发实际的action动作（纯对象）。这样就不会影响reducer的纯洁性。

## 实例

异步的action

```js
export function logTime (time) {
    return {
        type: LOG_TIME,
        time
    }
}

export function delayLogTime () {
    let now = new Date().toString();
    return (dispatch) => { //可接受dispatch，getState
        // 进行副作用操作
        setTimeout( ()=> {
            // 实际触发ation
            dispatch(logTime(`${now} --- ${new Date().toString()}`))
        },1000)
    }
}
```

使用`redux-thunk`

```js
import thunk from 'redux-thunk'

let store = createStore(reducer,applyMiddleware(thunk))
```