import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import theme from './theme'

import chartData from './reducers/chart-data'
import config from './reducers/config'

const mainReducer = combineReducers({
	chartData,
	config
})
const mainStore = createStore(mainReducer, {}, window.devToolsExtension
	? window.devToolsExtension()
	: undefined)

const render = () => ReactDOM.render(
	<Provider store={mainStore}>
	<MuiThemeProvider muiTheme={theme}>
		<App/>
	</MuiThemeProvider>
</Provider>, document.getElementById('root'))

mainStore.subscribe(render)
render()
