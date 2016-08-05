import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import './App.css'
import MainChart from './components/MainChart.jsx'
import DataConfigBar from './components/DataConfigBar.jsx'
import ChartConfigBar from './components/ChartConfigBar.jsx'

class App extends Component {
	render() {
		return (
			<div className="App">
				<AppBar title="My Data Generator" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
				<div className="content">
					<ChartConfigBar/>
					<div className="main-chart-container">
						<MainChart/>
					</div>
					<DataConfigBar/>
				</div>
			</div>
		)
	}
}

export default App
