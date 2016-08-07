import React from 'react'

const JsonWindow = ({chartData}) => {

	return (
		<div className="json-window-container">
			<div className="json-window">
				{JSON.stringify(chartData)}
			</div>
		</div>
	)
}

export default JsonWindow
