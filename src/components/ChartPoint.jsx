import React, { PropTypes } from 'react'

const ChartPoint = ({x, y}) => {
	return (
		<circle cx={x} cy={y} stroke="black" strokeWidth="1" r="5" fill="tomato"></circle>
	)
}

export default ChartPoint
