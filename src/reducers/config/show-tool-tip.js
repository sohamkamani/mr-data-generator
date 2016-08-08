const defaultState = {
	show: false,
	x: 0,
	y: 0,
	cx: 0,
	cy: 0
}

const showTooltip = (state = defaultState, action) => {
	switch (action.type) {
	case 'MOUSE_OVER_POINT':
		return {
			show: true,
			x: action.x,
			y: action.y,
			cx: action.cx,
			cy: action.cy
		}
	case 'MOUSE_OUT_POINT':
		return Object.assign({}, defaultState)
	default:
		return state
	}
}

export default showTooltip
