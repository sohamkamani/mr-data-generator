import { combineReducers } from 'redux'

import showJsonWindow from './config/show-json-window'
import chartDimensions from './config/chartDimensions'

export default combineReducers({
	showJsonWindow,
	chartDimensions
})
