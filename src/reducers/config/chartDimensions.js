const detectMob = () => {
	if (navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
	) {
		return true
	} else {
		return false
	}
}

const defaultState = {
	xLower: 0,
	xUpper: 100,
	yLower: 0,
	yUpper: 100,
	height: detectMob() ? 300 : 400,
	width: detectMob() ? 300 : 400,
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
