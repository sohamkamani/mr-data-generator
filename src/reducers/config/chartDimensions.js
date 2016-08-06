const defaultState = {
	xLower: 0,
	xUpper: 100,
	yLower: 0,
	yUpper: 100,
	height: 400,
	width: 400,
	chartProportion: 0.85,
	marginProportionLeft: 0.7
}

const chartDimensions = (state = defaultState, action) => {
	switch (action.type) {
	case 'AXIS_DIMENSION_CHANGE':
		return Object.assign({}, state, action.axisInfo)
	default:
		return state
	}
}

export default chartDimensions
