import React from 'react'
import pick from 'lodash/pick'

const JsonWindow = ({chartData, keysToShow, pointScales}) => {

	return (
		<div className="json-window">
			{JSON.stringify(chartData.map(point => {
				return pick(point, keysToShow)
			}))}
		</div>
	)
}

export default JsonWindow
