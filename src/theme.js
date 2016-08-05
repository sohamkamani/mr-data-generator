import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { brown800, brown500, brown200, orange500, grey100, grey500 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: brown500,
		primary2Color: brown800,
		primary3Color: brown200,
		accent1Color: orange500,
		accent2Color: grey100,
		accent3Color: grey500,
	},
	appBar: {
		height: 50,
	},
})

export default muiTheme
