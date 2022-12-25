import { combineReducers, createStore } from 'redux'
import { todoReducer } from './reducers/todoReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { loadState, saveState } from './localStorage'
import { throttle } from 'lodash'

const rootReducer = combineReducers({
  todo: todoReducer,
})

export const configureStore = () => {
  const persisted = loadState()

  const store = createStore(rootReducer, persisted, devToolsEnhancer())

  store.subscribe(
    throttle(() => {
      saveState(store.getState(persisted))
    }, 1000),
  )

  return store
}
