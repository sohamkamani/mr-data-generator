import React from 'react'
import pick from 'lodash/pick'

const JsonWindow = ({chartData, keysToShow}) => {

	return (
		<div className="json-window">
			{JSON.stringify(chartData.map(d => pick(d, keysToShow)))}
		</div>
	)
}

export default JsonWindow
