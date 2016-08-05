
const showJsonWindow = (state = false, action) => {
	switch (action.type) {
	case 'TOGGLE_JSON_WINDOW':
		return !state
	default:
		return state
	}
}

export default showJsonWindow
