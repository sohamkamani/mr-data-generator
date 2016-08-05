import React from 'react'
import TextField from 'material-ui/TextField'

const textBoxStyle = {
	width: '50px'
}

const xAxisConfig = () => {
	return (
		<div>
			x Axis :
			<TextField style={textBoxStyle} hintText="Start"/>
			<TextField style={textBoxStyle} hintText="End"/>
		</div>
	)
}

export default xAxisConfig
