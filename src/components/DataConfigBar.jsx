import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import JsonWindow from './JsonWindow.jsx'
import json2csv from 'json2csv'
import omit from 'lodash/omit'

const buttonStyle = {
	margin: '0 3px'
}

const mapStateToProps = state => ({
	chartData: state.chartData,
	showJsonWindow: state.config.showJsonWindow,
	transformLabels: data => data.map(point => {
		const newPoint = {}
		newPoint[state.config.labels.x] = point.x
		newPoint[state.config.labels.y] = point.y
		return newPoint
	})
})

const mapDispatchToProps = dispatch => ({
	toggleJsonWindow: () => dispatch({
		type: 'TOGGLE_JSON_WINDOW'
	})
})

const downloadCsv = (jsonData) => () => {
	const data = jsonData.map(d => omit(d, ['id']))
	const csvContent = `data:text/csv;charset=utf-8,${json2csv({
		data
	})}`
	const encodedUri = encodeURI(csvContent)
	const link = document.createElement('a')
	link.setAttribute('href', encodedUri)
	link.setAttribute('download', 'my_data.csv')
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

const DataConfigBar = ({chartData, toggleJsonWindow, showJsonWindow, transformLabels}) => {
	return (
		<div className="data-config-bar">
			<div>
			<RaisedButton label={showJsonWindow ? 'Hide JSON' : 'Show JSON'} primary={true} onClick={toggleJsonWindow} style={buttonStyle} />
			<RaisedButton label="Download CSV" primary={true} style={buttonStyle} onClick={downloadCsv(transformLabels(chartData))} />
			</div>
			{showJsonWindow ? <JsonWindow chartData={transformLabels(chartData)} keysToShow={['x', 'y']} /> : null}
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataConfigBar)
