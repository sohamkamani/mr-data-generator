import React from 'react'
import { connect } from 'react-redux'
import ChartAxes from './ChartAxes.jsx'

const offset = require('offset')

import ChartPoint from './ChartPoint.jsx'

const mapDispatchToProps = dispatch => ({
	pointClicked: function(e) {
		let el = e.target
		if (el.tagName === 'circle') {
			el = el.parentNode
		}
		if (el.tagName !== 'svg') {
			return
		}
		const {top, left} = offset(el)
		const {clientX, clientY} = e
		dispatch({
			type: 'CHART_POINT_CLICKED',
			x: clientX - left,
			y: clientY - top
		})
	},
	pointDeleted: id => e => {
		e.preventDefault()
		dispatch({
			type: 'DELETE_CHART_POINT',
			id
		})
	}
})

const mapStateToProps = state => ({
	chartData: state.chartData,
	chartDimensions: state.config.chartDimensions
})

const MainChart = React.createClass({

	handleContextClick: e => e.preventDefault(),

	render: function() {
		return (
			<svg id="main-chart" className="main-chart" height="400px" width="400px" onClick={this.props.pointClicked} onContextMenu={this.handleContextClick}>
				{this.props.chartData.map((pointData, i) => (<ChartPoint key={i} pointDeleted={this.props.pointDeleted(pointData.id)} {...pointData}/>))
			}
			<ChartAxes chartDimensions={this.props.chartDimensions}/>
			</svg>
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(MainChart)
