/* @flow */
import React from 'react' // we import naturally react
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // we import the provider from react-dedux
/**
The Provider make the store available to the components hierarchy below
**/
import { createStore } from 'redux'
import { counters } from './reducers'
import App from './components/app'

let initialState = {counters: [
    { key: 'cafe',
      title: 'cafe',
      count: 1
    },
    { key: 'clope',
      title: 'clope',
      count: 2
    }
]}

let store = createStore(counters, initialState, window.devToolsExtension ? window.devToolsExtension() : f => f)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
