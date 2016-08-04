import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import chartData from './reducers/chart-data'

const mainReducer = combineReducers({
	chartData
})
const mainStore = createStore(mainReducer, {}, window.devToolsExtension ? window.devToolsExtension() : undefined)

const render = () => ReactDOM.render(
	<Provider store={mainStore}>
  <App />
	</Provider>,
	document.getElementById('root')
)

mainStore.subscribe(render)
render()
