import React from 'react'
import ReactDom from 'react-dom'

const d3 = require('d3-selection')

const humanFormat = require('human-format')
import { scaleLinear } from 'd3-scale'
import { axisLeft, axisBottom } from 'd3-axis'

const formatTicks = value => {
	if (value >= 0) {
		return humanFormat(value)
	}
	return '-' + humanFormat(Math.abs(value))
}

const ChartAxes = React.createClass({
	componentDidMount() {
		const el = ReactDom.findDOMNode(this)
		const {height, width, chartProportion, marginProportionLeft} = this.props.chartDimensions

		const chartHeight = height * chartProportion
		const chartWidth = width * chartProportion
		const margin = {
			y: height - chartHeight,
			x: width - chartWidth
		}
		const marginProportionRight = 1 - marginProportionLeft
		const {xUpper = 100, xLower = 0, yUpper = 100, yLower = 0} = this.props.chartDimensions

		const scaleY = scaleLinear().domain([yUpper, yLower]).range([0, chartHeight])
		const axisY = axisLeft(scaleY)

		const scaleX = scaleLinear().domain([xLower, xUpper]).range([0, chartWidth])
		const axisX = axisBottom(scaleX)

		axisX.ticks(10).tickFormat(formatTicks)
		axisY.ticks(10).tickFormat(formatTicks)

		const axisElement = d3.select(el).append('g')

		this.yAxis = axisElement.append('g').attr('transform', `translate(${margin.x * marginProportionLeft}, ${margin.y * marginProportionRight})`).call(axisY)

		this.xAxis = axisElement.append('g').attr('transform', `translate(${margin.x * marginProportionLeft}, ${margin.y * marginProportionRight + chartHeight})`).call(axisX)

		this.scaleY = scaleY
		this.scaleX = scaleX
	},
	componentDidUpdate() {
		const {xUpper = 100, xLower = 0, yUpper = 100, yLower = 0} = this.props.chartDimensions
		const {scaleX, scaleY, xAxis, yAxis} = this
		scaleX.domain([xLower, xUpper])
		scaleY.domain([yUpper, yLower])
		const axisY = axisLeft(scaleY).tickFormat(formatTicks)
		const axisX = axisBottom(scaleX).tickFormat(formatTicks)
		yAxis.call(axisY)
		xAxis.call(axisX)
	},
	render() {
		return (
			<g width="100%" height="100%"></g>
		)
	}
})

export default ChartAxes
