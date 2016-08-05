import React from 'react'

const ChartPoint = ({x, y, pointDeleted}) => {
	return (
		<circle cx={x} cy={y} stroke="black" strokeWidth="1" r="5" fill="tomato" onContextMenu={pointDeleted}></circle>
	)
}

export default ChartPoint
