import React from 'react'
import { connect } from 'react-redux'
import isNumber from 'is-number'
import XAxisConfig from './chart-config-bar/xAxisConfig.jsx'

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
	}
})

const ChartConfigBar = ({axisChange}) => {
	return (
		<div className="chart-config-bar">
		<XAxisConfig axisChange={axisChange} />
		</div>
	)
}

export default connect(null, mapDispatchToProps)(ChartConfigBar)
