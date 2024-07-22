import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let API_URL = "http://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "3a6074e84a938468529d057d7394b19a";
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let handleCity = (event) => {
    return setCity(event.target.value);
  };
  const weatherAPI = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      // console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await weatherAPI();
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div>
      {/* <h2>Search For Weather</h2> */}
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Search City"
          variant="outlined"
          value={city}
          onChange={handleCity}
        />
        <br />
        <br />
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Search
        </Button>

        {error && <Alert severity="error">No Such Place Exists !</Alert>}
      </form>
    </div>
  );
}
