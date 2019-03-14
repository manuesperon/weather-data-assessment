import React, { Component } from 'react';

import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        <WeatherList/>
      </div>
    );
  }
}
