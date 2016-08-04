import React, { PropTypes } from 'react'
import ReactDom from 'react-dom'
import { scaleLinear } from 'd3-scale'
import { axisLeft, axisBottom } from 'd3-axis'
import { connect } from 'react-redux'
const d3 = require('d3-selection')
const offset = require('offset')

import ChartPoint from './ChartPoint.jsx'

const mapDispatchToProps = dispatch => ({
	pointClicked: function (e) {
		let el = e.target
		if (el.tagName === 'circle') {
			el = el.parentNode
		}
		const {top, left} = offset(el)
		const {clientX, clientY} = e
		dispatch({
			type: 'CHART_POINT_CLICKED',
			x: clientX - left,
			y: clientY - top
		})
	}
})

const mapStateToProps = ({chartData}) => ({
	chartData
})

const MainChart = React.createClass({
	componentDidMount: function () {
		const el = ReactDom.findDOMNode(this)
		const height = el.clientHeight
		const width = el.clientWidth

		const chartHeight = height * 0.9
		const chartWidth = width * 0.8
		const margin = {
			y: height - chartHeight,
			x: width - chartWidth
		}

		const scaleY = scaleLinear()
			.domain([10, 130])
			.range([0, chartHeight])
		const axisY = axisLeft(scaleY)

		const scaleX = scaleLinear()
			.domain([10, 130])
			.range([0, chartWidth])
		const axisX = axisBottom(scaleX)

		axisX.ticks(10)
		axisY.ticks(10)

		const axisElement = d3.select(el)
			.append('g')

		axisElement.append('g')
			.attr('transform', `translate(${margin.x / 2}, ${margin.y / 2})`)
			.call(axisY)

		axisElement
			.append('g')
			.attr('transform', `translate(${margin.x / 2}, ${margin.y / 2 + chartHeight})`)
			.call(axisX)
	},

	render: function () {
		return (
			<svg id="main-chart" className="main-chart" height="400px" width="400px" onClick={this.props.pointClicked}>
				{
			this.props.chartData.map((pointData, i) => (<ChartPoint key={i} {...pointData}/>))
			}
			</svg>
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(MainChart)
