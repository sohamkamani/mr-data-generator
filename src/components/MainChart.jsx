import React, { PropTypes } from 'react'
import ReactDom from 'react-dom'
import { scaleLinear } from 'd3-scale'
import { axisLeft } from 'd3-axis'
const d3 = require('d3-selection')

const MainChart = React.createClass({
	componentDidMount: function () {
		const scale = scaleLinear()
			.domain([10, 130])
			.range([0, 960])
		const axis = axisLeft(scale)
		const el = ReactDom.findDOMNode(this)
		d3.select(el)
			.append('g')
			.call(axis)
	},

	render: function () {
		return (
			<svg height="400px" width="400px">
			</svg>
		)
	}
})

export default MainChart
