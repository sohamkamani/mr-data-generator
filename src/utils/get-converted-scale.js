import { scaleLinear } from 'd3-scale'

const getConvertedScale = ({height, width, chartProportion, marginProportionLeft, xUpper, xLower, yUpper, yLower}) => {
	const chartHeight = height * chartProportion
	const chartWidth = width * chartProportion
	const margin = {
		y: height - chartHeight,
		x: width - chartWidth
	}
	const marginProportionRight = 1 - marginProportionLeft

	const leftMargin = margin.x * marginProportionLeft
	const topMargin = margin.y * marginProportionRight

	return {
		x: scaleLinear().domain([xLower, xUpper]).range([leftMargin, chartWidth + leftMargin]),
		y: scaleLinear().domain([yLower, yUpper]).range([chartHeight + topMargin, topMargin])
	}
}

export default getConvertedScale
