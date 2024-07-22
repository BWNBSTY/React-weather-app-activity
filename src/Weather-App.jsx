import SearchBox from "./search-box";
import InfoCard from "./info-card";
import { useState } from "react";

export default function WeatherApp() {
  let [weather, setWeather] = useState({
    city: "Delhi",
    temp: 24,
    tempMax: 26,
    tempMin: 22,
    humidity: 47,
    feelsLike: 25,
    weather: "mist",
  });
  let updateWeatherInfo = (newInfo) => {
    setWeather(newInfo);
  };
  return (
    <div>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateWeatherInfo} />
      <InfoCard info={weather} />
    </div>
  );
}
