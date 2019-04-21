# redux源码学习笔记 - combineReducers

上一篇有了解到，reducer函数的两个为：当前state和此次dispatch的action。

state的结构是`JavaScript对象`，每个key都可以代表着不同意义的数据。比如说

```js
    {
        lists:object,
        type:string
    }
```

lists管理列表数据，type管理选中的类型。此时就需要考虑将state分为不同的子树，每次子树数据对应一个reducer子函数，单独管理对应的state。但是`createStore(reducer,preloadedState)`函数接收的reducer必须为单一个函数。这个时候就需要用到`combinReducers函数`，它的作用是把**多个reducer函数合并成一个最终的reducer函数**。

## combineReducers(reducers)

看一下`combineReducers函数`实现的核心代码，以下代码删掉了异常提示和处理部分，只保留了关键部分。

```js
export default function combineReducers(reducers) {
  //过滤掉参数中，value不是function的
  const reducerKeys = Object.keys(reducers)
  const finalReducers = {}
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i]

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }
  }
  // 处理后的reducers对象的所有key值
  const finalReducerKeys = Object.keys(finalReducers)

  // 返回合并后的reducer函数，她接收的参数和普通的reducer函数一致。
  // 这里的state是完整的数据结构，而单一的reducer函数接收的只是它管理的那个子树
  return function combination(state = {}, action) {

    let hasChanged = false
    const nextState = {}
    // 有action分派时，对所有的子reducer都触发
    // 因为action有type字段，所以还是会触发到对应的之reducer函数
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i]
      const reducer = finalReducers[key]
      // 对应的子树数据
      const previousStateForKey = state[key]
      // 调用对应的reduer函数，返回子树数据的更新结果
      const nextStateForKey = reducer(previousStateForKey, action)
      
      // 子树数据同步到state中
      nextState[key] = nextStateForKey
      // 标记数据是否发生变化，只要有一个子树改变了就算数据已改变
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    // 返回state数据
    return hasChanged ? nextState : state
  }
}
```

`combineReducers`接收的reducers是**value为子reducer函数的对象**。对象的**key值可以和函数名一致，也可以不同**。返回的state的key值和reducers对象的key值是保持一致的。

所以当createStore(reducer,preloadedState)中的reducer函数是combineReducers合并成的，**传入初始状态时，要注意state的keys要和reducers一致**。

可见`combineReducers`主要的功能，就是**把action传入到所有的子reducer函数遍历一次，同时处理state的切片和合并**。

当然这里少了很多异常校验部分的代码，有兴趣可以查阅详细源码。

## 实例

```js
/* reducer */
import {combineReducers} from 'redux';
import testAsync from './testasync';
import todoList from './todolist';

const reducer = combineReducers({
    testAsync,
    todoList
});

export default reducer;

/* store */
import {createStore} from 'redux';
import reducer from './reducer/index';

let store = createStore(reducer)
```
`{testAsync,todoList}`即是reducer函数对象，key和函数名一样。`{a:testAsync,b:todoList}`写成这样也可以。

state的获取，更新和单一的reducer函数一样，上篇已做过介绍。
