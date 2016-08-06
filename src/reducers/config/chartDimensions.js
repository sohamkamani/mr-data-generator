const defaultState = {
	xLower: 0,
	xUpper: 100,
	yLower: 0,
	yUpper: 100
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
