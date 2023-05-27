import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const handleWeatherData = (data) => {
    setWeatherData(data);
    setError(null);
  };

  return (
    <div className="App">
      <h1 className="app-title">Weather App</h1>
      <Form setWeatherData={setWeatherData} setError={setError}  />
      <WeatherInfo weatherData={weatherData} />
    </div>
  );
}

export default App;
