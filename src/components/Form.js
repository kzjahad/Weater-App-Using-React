import React, { useState } from 'react';
import getWeatherData from '../api/WeatherAPI';

const Form = ({ setWeatherData, setError }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const weatherData = await getWeatherData(location);
      setWeatherData(weatherData);
      setError(null); // Clear any existing errors
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null); // Clear any existing weather data
      setError('Failed to fetch weather data. Please try again.'); // Set the error message
    }
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col-6">
              <input
                type="text"
                className="form-control location-input"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div class="col-6">
             <button type="submit" className="btn btn-primary">Get Weather</button>
            </div>
          </div>
        </div> 
   </form>
   
  );
};

export default Form;
