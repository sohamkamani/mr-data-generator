import React from 'react'
import ReactDom from 'react-dom'

const d3 = require('d3-selection')
import { scaleLinear } from 'd3-scale'
import { axisLeft, axisBottom } from 'd3-axis'

const ChartAxes = React.createClass({
	componentDidMount() {
		const el = ReactDom.findDOMNode(this)
		const height = 400
		const width = 400

		const chartHeight = height * 0.9
		const chartWidth = width * 0.8
		const margin = {
			y: height - chartHeight,
			x: width - chartWidth
		}
		const {xUpper=100, xLower=0, yUpper=100, yLower=0} = this.props.chartDimensions

		const scaleY = scaleLinear().domain([yUpper, yLower]).range([0, chartHeight])
		const axisY = axisLeft(scaleY)

		const scaleX = scaleLinear().domain([xLower, xUpper]).range([0, chartWidth])
		const axisX = axisBottom(scaleX)

		axisX.ticks(10)
		axisY.ticks(10)

		const axisElement = d3.select(el).append('g')

		axisElement.append('g').attr('transform', `translate(${margin.x / 2}, ${margin.y / 2})`).call(axisY)

		axisElement.append('g').attr('transform', `translate(${margin.x / 2}, ${margin.y / 2 + chartHeight})`).call(axisX)
	},
	render() {
		return (
			<g width="100%" height="100%"></g>
		)
	}
})

export default ChartAxes
