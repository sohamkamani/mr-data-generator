import React from 'react'
import TextField from 'material-ui/TextField'

const textBoxStyle = {
	width: '50px'
}

const xAxisConfig = ({axisChange}) => {
	return (
		<div>
			x Axis :
			<TextField style={textBoxStyle} hintText="Start" onChange={axisChange('xLower')}/>
			<TextField style={textBoxStyle} hintText="End" onChange={axisChange('xUpper')}/>
		</div>
	)
}

export default xAxisConfig
