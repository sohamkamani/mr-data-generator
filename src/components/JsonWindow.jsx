import React from 'react'
import pick from 'lodash/pick'

const JsonWindow = ({chartData}) => {

	return (
		<div className="json-window">
			{JSON.stringify(chartData)}
		</div>
	)
}

export default JsonWindow
