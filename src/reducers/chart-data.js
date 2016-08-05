const getNewId = state => {
	if (state.length === 0) {
		return 0
	}
	return state[state.length - 1].id + 1
}

const chartData = (state = [], action) => {
	switch (action.type) {
	case 'CHART_POINT_CLICKED':
		return [...state, {
			x: action.x,
			y: action.y,
			id: getNewId(state)
		}]
	case 'DELETE_CHART_POINT':
		return state.filter(point => point.id !== action.id)
	default:
		return state
	}
}

export default chartData
