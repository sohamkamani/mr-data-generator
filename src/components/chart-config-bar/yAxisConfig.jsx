import React from 'react'
import TextField from 'material-ui/TextField'

const textBoxStyle = {
	width: '50px'
}

const yAxisConfig = ({axisChange}) => {
	return (
		<div>
			y Axis :
			<TextField style={textBoxStyle} hintText="Start" onChange={axisChange('yLower')}/>
			<TextField style={textBoxStyle} hintText="End" onChange={axisChange('yUpper')}/>
		</div>
	)
}

export default yAxisConfig
