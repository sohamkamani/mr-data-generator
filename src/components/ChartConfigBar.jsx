import React from 'react'
import { connect } from 'react-redux'
import isNumber from 'is-number'
import XAxisConfig from './chart-config-bar/xAxisConfig.jsx'
import YAxisConfig from './chart-config-bar/yAxisConfig.jsx'
import LabelConfig from './chart-config-bar/LabelConfig.jsx'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'

const mapDispatchToProps = dispatch => ({
	axisChange: axisName => e => {
		const axisInfo = {}
		const {value} = e.target
		if (!isNumber(value)) {
			return
		}
		axisInfo[axisName] = Number(value)
		dispatch({
			type: 'AXIS_DIMENSION_CHANGE',
			axisInfo
		})
	},
	labelChange: labelName => e => {
		const labelInfo = {}
		const {value} = e.target
		labelInfo[labelName] = value
		dispatch({
			type: 'LABEL_CHANGE',
			labelInfo
		})
	},
	toggleSpreadPoints: () => dispatch({
		type: 'TOGGLE_SPREAD_POINTS'
	}),
	clearPoints: () => dispatch({
		type: 'CLEAR_ALL_POINTS'
	})
})

const mapStateToProps = state => ({
	spreadPoints: state.config.spreadPoints
})

const clearButtonStyle = {
	marginTop: '20px'
}

const ChartConfigBar = ({axisChange, labelChange, spreadPoints, toggleSpreadPoints, clearPoints}) => {
	return (
		<div className="chart-config-bar">
			<XAxisConfig axisChange={axisChange}/>
			<YAxisConfig axisChange={axisChange}/>
			<LabelConfig labelChange={labelChange}/>
			<Checkbox label="Spray points" checked={spreadPoints} onCheck={toggleSpreadPoints} />
			<FlatButton label="Clear all points" primary={true} style={clearButtonStyle} onClick={clearPoints}/>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartConfigBar)
