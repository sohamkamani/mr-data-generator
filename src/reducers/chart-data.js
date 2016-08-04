const chartData = (state = [], action) => {
	switch (action.type) {
	case 'CHART_POINT_CLICKED':
		return [...state, {
			x: action.x,
			y: action.y
		}]
		break
	default:
		return state
	}
}

export default chartData
