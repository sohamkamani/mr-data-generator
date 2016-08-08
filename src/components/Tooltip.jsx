import React from 'react'
import { connect } from 'react-redux'
import getConvertedScales from '../utils/get-converted-scale'
import humanFormat from 'human-format'

const mapStateToProps = state => ({
	config: state.config.showTooltip,
	chartDimensions: state.config.chartDimensions
})

const Tooltip = ({config, chartDimensions}) => {
	const {show, x, y, cx, cy} = config
	const pointScales = getConvertedScales(chartDimensions)

	return (
		<div className="tooltip" style={{
			position: 'absolute',
			top: (y - 20) + 'px',
			left: (x + 10) + 'px',
			opacity: show ? '1' : '0',
		}}>x : {humanFormat(pointScales.x.invert(cx))}<br></br>y : {humanFormat(pointScales.y.invert(cy))}</div>
	)
}

export default connect(mapStateToProps)(Tooltip)
