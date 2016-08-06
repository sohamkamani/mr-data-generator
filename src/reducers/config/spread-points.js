const spreadPoints = (state = false, action) => {
	switch (action.type) {
	case 'TOGGLE_SPREAD_POINTS':
		return !state
	default:
		return state
	}
}

export default spreadPoints
