import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import JsonWindow from './JsonWindow.jsx'

const buttonStyle = {
	margin: '0 3px'
}

const mapStateToProps = state => ({
	chartData: state.chartData,
	showJsonWindow: state.config.showJsonWindow
})

const mapDispatchToProps = dispatch => ({
	toggleJsonWindow: () => dispatch({
		type: 'TOGGLE_JSON_WINDOW'
	})
})

const DataConfigBar = ({chartData, toggleJsonWindow, showJsonWindow}) => {
	return (
		<div className="data-config-bar">
			<RaisedButton label={showJsonWindow ? 'Hide JSON' : 'Show JSON'} primary={true} onClick={toggleJsonWindow} style={buttonStyle} />
			<RaisedButton label="Download CSV" primary={true} style={buttonStyle} />
			{showJsonWindow ? <JsonWindow chartData={chartData} keysToShow={['x', 'y']} /> : null}
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataConfigBar)
