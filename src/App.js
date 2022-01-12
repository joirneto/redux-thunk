import {createStore,compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import Info from './Info'
import UserAgent from './UserAgent'

const store = createStore(
  reducer,
  compose(applyMiddleware(logger,thunk))
)

function App() {
  return (
    <Provider store={store}>
      <Info/> <br/>
      <UserAgent/>
    </Provider>
  )
}

export default App
