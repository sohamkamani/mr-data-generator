import React from 'react'
import { connect } from 'react-redux'
import ChartAxes from './ChartAxes.jsx'
import getConvertedScales from '../utils/get-converted-scale'

const offset = require('offset')

import ChartPoint from './ChartPoint.jsx'

const mapDispatchToProps = dispatch => ({
	pointClicked: (pointScales, spreadPoints) => e => {
		let el = e.target
		if (el.tagName === 'circle') {
			el = el.parentNode
		}
		if (el.tagName !== 'svg') {
			return
		}
		const {top, left} = offset(el)
		const {clientX, clientY} = e
		const actionType = spreadPoints ? 'CHART_POINT_CLICKED_SPREAD' : 'CHART_POINT_CLICKED'
		dispatch({
			type: actionType,
			x: pointScales.x.invert(clientX - left),
			y: pointScales.y.invert(clientY - top),
			dx: Math.abs(pointScales.x.invert(1) - pointScales.x.invert(0)),
			dy: Math.abs(pointScales.y.invert(1) - pointScales.y.invert(0))
		})
	},
	pointDeleted: id => e => {
		e.preventDefault()
		dispatch({
			type: 'DELETE_CHART_POINT',
			id
		})
	},

	mouseOverPoint: ({cx, cy}) => e => {
		const {clientX, clientY} = e
		dispatch({
			type: 'MOUSE_OVER_POINT',
			x: clientX,
			y: clientY,
			cx,
			cy
		})
	},
	mouseOutPoint: e => {
		const {clientX, clientY} = e
		dispatch({
			type: 'MOUSE_OUT_POINT',
			x: clientX,
			y: clientY
		})
	}
})

const mapStateToProps = state => ({
	chartData: state.chartData,
	chartDimensions: state.config.chartDimensions,
	labels: state.config.labels,
	spreadPoints: state.config.spreadPoints
})

const MainChart = React.createClass({

	handleContextClick: e => e.preventDefault(),

	render: function() {
		const {height, width} = this.props.chartDimensions
		const {labels} = this.props
		const pointScales = getConvertedScales(this.props.chartDimensions)
		const spreadPoints = this.props.spreadPoints
		const transformPoints = (pointData, i) => {
			const transformedPointData = {
				x: pointScales.x(pointData.x),
				y: pointScales.y(pointData.y)
			}
			const transformedPoint = Object.assign({}, pointData, transformedPointData)
			return (<ChartPoint key={i} pointDeleted={this.props.pointDeleted(transformedPoint.id)} mouseOver={this.props.mouseOverPoint} mouseOut={this.props.mouseOutPoint} {...transformedPoint}/>)
		}
		return (
			<svg id="main-chart" className="main-chart" height={`${height}px`} width={`${width}px`} onClick={this.props.pointClicked(pointScales, spreadPoints)} onContextMenu={this.handleContextClick}>
				{this.props.chartData.map(transformPoints)}
				<text textAnchor="middle" transform={`translate(${width / 2}, ${height - 5})`}>{labels.x}</text>
				<text textAnchor="middle" transform={`translate(12, ${height / 2})rotate(-90)`}>{labels.y}</text>
				<ChartAxes chartDimensions={this.props.chartDimensions}/>
			</svg>
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(MainChart)
