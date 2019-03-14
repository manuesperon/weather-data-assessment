import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from '../components/Charts';
import { fetchWeather } from '../actions/index';

class WeatherList extends Component {

  constructor(props) {
    super(props);
    this.calculateData = this.calculateData.bind(this);
  }

  componentDidMount() {
    this.props.fetchWeather();
  }

  calculateData(data) {
    // Set labels 
    let labels = [];
    let dayCont = 0;
    for (let key in data) {
      if (dayCont % 8 === 0) {
        labels.push(key.substring(0,10))
      } else {
        labels.push('');
      }
      dayCont++
    }
    let formattedData = {
      temperatureChart: {
        labels,
        datasets: [
          {
            label: 'Air temperature at 2m above ground level (k)',
            borderColor: '#FFCE56',
            fill: false,
            data: []
          }
        ]
      },
      heightChart: {
        labels,
        datasets: [
          {
            label: 'Sea surface wave significant height (m)',
            borderColor: '#FFCE56',
            fill: false,
            data: []
          }, {
            label: 'Sea surface wave maximum height (m)',
            borderColor: '#FF6384',
            fill: false,
            data: []
          }
        ]
      },
      windDirectionChart: {
        labels,
        datasets: [
          {
            label: 'Wind from direction at 10m above ground level (degrees)',
            borderColor: '#FFCE56',
            fill: false,
            data: []
          }
        ]
      },
      waveDirectionChart: {
        labels,
        datasets: [
          {
            label: 'Sea surface wave from direction at variance spectral density maximum (degrees)',
            borderColor: '#FFCE56',
            fill: false,
            data: []
          }
        ]
      },
      waterSpeedChart: {
        labels,
        datasets: [
          {
            label: 'Surface sea water speed (m/s)',
            borderColor: '#FF6384',
            fill: false,
            data: []
          }
        ]
      },
      windSpeedChart: {
        labels,
        datasets: [
          {
            label: 'Wind speed at 10m above ground level (m/s)',
            borderColor: '#FFCE56',
            fill: false,
            data: []
          }
        ]
      }
    };
    // Set rest of data
    for (let key in data) {
      for (let subKey in data[key]) {
        switch(subKey) {
          case 'air_temperature_at_2m_above_ground_level':
            formattedData.temperatureChart.datasets[0].data.push(data[key][subKey]);
            break;
          case 'sea_surface_wave_significant_height':
            formattedData.heightChart.datasets[0].data.push(data[key][subKey]);
            break;
          case 'wind_from_direction_at_10m_above_ground_level':
            formattedData.windDirectionChart.datasets[0].data.push(data[key][subKey]);
            break;
          case 'wind_speed_at_10m_above_ground_level':
            formattedData.windSpeedChart.datasets[0].data.push(data[key][subKey]);
            break;
          case 'sea_surface_wave_from_direction_at_variance_spectral_density_maximum':
            formattedData.waveDirectionChart.datasets[0].data.push(data[key][subKey]);
            break;
          case 'surface_sea_water_speed':
            formattedData.waterSpeedChart.datasets[0].data.push(data[key][subKey]);
            break;
          case 'sea_surface_wave_maximum_height':
            formattedData.heightChart.datasets[1].data.push(data[key][subKey]);
            break;
          default:
            break;
        }
      }
    }
    return formattedData
  }

  render() {
    this.calculateData(this.props.weather);
    return (
        <Charts data={this.calculateData(this.props.weather)}/>
    );
  }
}

const mapStateToProps = ({weather}) => { 
  console.log(weather);
  return { weather };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWeather: () => {
      dispatch(fetchWeather())
    }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);