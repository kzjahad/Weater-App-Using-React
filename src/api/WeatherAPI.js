import axios from 'axios';

const API_KEY = 'e963f2467a3f63ddf55c3a897fe2bdcb';
const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = async (location) => {
  const url = `${API_ENDPOINT}?q=${location}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};

export default getWeatherData; // Export as the default export
