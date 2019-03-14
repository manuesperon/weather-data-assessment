import CSVData from '../../public/data/data.csv';
import JSONData from '../../public/data/data.json';
import * as d3 from 'd3';

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

function receiveWeatherData(res) {
  return {
    type: RECEIVE_WEATHER,
    payload: res,
    receivedAt: Date.now()
  }
}

export function fetchWeather(city) {
  return (dispatch) => {
  let dataArray = [];
  d3.csv(CSVData, function(data) { dataArray.push(data); })
    .then(() => {
      for(let i = 0; i < dataArray.length; i++) {
        let {datetime, ...rest} = dataArray[i]
        JSONData[datetime] = { ...JSONData[datetime], ...rest } 
      }
      dispatch(receiveWeatherData(JSONData))
    });
  }
}