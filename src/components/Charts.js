import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class Charts extends Component {

  render() {
    return(
      <div className="chart-container">
        <h1 className="chartTitle">Temperature Charts</h1>
        <Line data={this.props.data.temperatureChart} />
        <h1 className="chartTitle">Direction Charts</h1>
        <Line data={this.props.data.windDirectionChart} />
        <Line data={this.props.data.waveDirectionChart} />
        <h1 className="chartTitle">Speed Charts</h1>
        <Line data={this.props.data.waterSpeedChart} />
        <Line data={this.props.data.windSpeedChart} />
        <h1 className="chartTitle">Height Chart</h1>
        <Line data={this.props.data.heightChart} />
      </div>
    );
  }
}
export default Charts