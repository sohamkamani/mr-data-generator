import React from 'react'

const ChartPoint = ({x, y, pointDeleted, mouseOver, mouseOut}) => {
	return (
		<circle cx={x} cy={y} stroke="black" strokeWidth="1" r="5" fill="tomato" onContextMenu={pointDeleted} onMouseOver={mouseOver({
			cx: x,
			cy: y
		})} onMouseOut={mouseOut}></circle>
	)
}

export default ChartPoint
