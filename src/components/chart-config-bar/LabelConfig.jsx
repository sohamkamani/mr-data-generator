import React from 'react'
import TextField from 'material-ui/TextField'

const LabelConfig = ({labelChange}) => {
	return (
		<div>
			<TextField hintText="X Label (default:x)" onChange={labelChange('x')}/>
			<TextField hintText="Y Label (default:y)" onChange={labelChange('y')}/>
		</div>
	)
}

export default LabelConfig
