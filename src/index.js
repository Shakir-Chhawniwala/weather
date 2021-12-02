import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { WeatherContextProvider } from './store/weather-context';


ReactDOM.render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>,
  document.getElementById('root')
);

