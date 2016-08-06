const defaultLabels = {
	x: 'x',
	y: 'y'
}

const labels = (state = defaultLabels, action) => {
	switch (action.type) {
	case 'LABEL_CHANGE':
		return Object.assign({}, state, action.labelInfo)
	default:
		return state
	}
}

export default labels
