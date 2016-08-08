import React from 'react'
import TextField from 'material-ui/TextField'

const textFieldStyle = {
	minWidth: '50px',
	width: '90%'
}

const LabelConfig = ({labelChange}) => {
	return (
		<div>
			<TextField hintText="X Label (default:x)" style={textFieldStyle}  onChange={labelChange('x')}/>
			<TextField hintText="Y Label (default:y)" style={textFieldStyle}  onChange={labelChange('y')}/>
		</div>
	)
}

export default LabelConfig
