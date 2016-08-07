import React from 'react'

const JsonWindow = ({chartData}) => {

	return (
		<div className="json-window">
			{JSON.stringify(chartData)}
		</div>
	)
}

export default JsonWindow
