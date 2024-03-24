import axios from "axios";

const getWeather = async (lat: string, lon: string, units: string) => {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&forecast_days=6&temperature_unit=${units}`
  );
  console.log("GetWeather ------", response.data);
  return response.data;
};

const getWeatherByCity = async (city: string, unit: string) => {
  const { lat, lon } = await getLocationCoords(city);
  const weather = await getWeather(lat, lon, unit);
  console.log("getWeatherByCity--------", weather);
  return weather;
};

const getWeatherHistoryByCity = async (
  city: string,
  startDate: string,
  endDate: string,
  unit: string
) => {
  const { lat, lon } = await getLocationCoords(city);

  const response = await axios.get(
    `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max&temperature_unit=${unit}`
  );
  console.log(response.data);
  return response.data;
};

const getLocationCoords = async (city: string) => {
  const response = await axios.get(`https://geocode.maps.co/search?q=${city}`);
  return response.data[0];
};

export { getWeatherHistoryByCity, getWeatherByCity, getWeather };
