import React from 'react';
import { TiWeatherSunny, TiWeatherCloudy, TiWeatherShower, TiWeatherSnow } from 'react-icons/ti';

const WeatherInfo = ({ weatherData, error }) => {
  if (error) {
    return <div className="weather-info error">{error}</div>;
  }

  if (!weatherData) {
    return null;
  }

  const { name, weather, main } = weatherData;

  return (
    <div className="weather-info">
      {weatherData ? (
        <>
          <h2>{name}</h2>
          {weather[0].main === 'Clear' && <TiWeatherSunny size={50} />}
          {weather[0].main === 'Clouds' && <TiWeatherCloudy size={50} />}
          {weather[0].main === 'Rain' && <TiWeatherShower size={50} />}
          {weather[0].main === 'Snow' && <TiWeatherSnow size={50} />}
          <div className="weather-details">
          <p className="temperature">Temperature: {Math.round(main.temp)}°C</p>
          <p className="description">Weather: {weather[0].description}</p>
          </div>
        </>
      ) : (
        <p>Enter a location to fetch weather data</p>
      )}
    </div>
  );
};

export default WeatherInfo;
