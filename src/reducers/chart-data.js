import times from 'lodash/times'

const getNewId = state => {
	if (state.length === 0) {
		return 0
	}
	return state[state.length - 1].id + 1
}

const getRandom = (q, dq) => () => (q + (Math.random() - 0.5) * dq * 40)

const getSpreadPoints = ({x, y, dx, dy} , startId) => {
	const randomX = getRandom(x, dx)
	const randomY = getRandom(y, dy)
	return times(5, i => ({
		x: randomX(),
		y: randomY(),
		id: startId + i
	}))
}

const chartData = (state = [], action) => {
	switch (action.type) {
	case 'CHART_POINT_CLICKED':
		return [...state, {
			x: action.x,
			y: action.y,
			id: getNewId(state)
		}]
	case 'CHART_POINT_CLICKED_SPREAD':
		return [...state, ...getSpreadPoints(action, getNewId(state))]
	case 'DELETE_CHART_POINT':
		return state.filter(point => point.id !== action.id)
	case 'CLEAR_ALL_POINTS':
		return []
	default:
		return state
	}
}

export default chartData
