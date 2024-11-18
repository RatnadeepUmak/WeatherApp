import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

const SearchBox = ({updateInfo}) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "a559082ca141d835bb9652b6e95b821d";

  let getWeatherInfo = async () => {
    try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonresponse = await response.json();
    let result = {
      city: city,
      temp: jsonresponse.main.temp,
      tempMin: jsonresponse.main.temp_min,
      tempMax: jsonresponse.main.temp_max,
      humidity: jsonresponse.main.humidity,
      feelsLike: jsonresponse.main.feels_like,
      weather: jsonresponse.weather[0].description
    };
    console.log(result);
    return result;
  }catch(err){
    throw err;
  }
  }

  

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try{
    event.preventDefault();
    console.log(city);
    setCity("");
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
    }catch(err){
      setError(true);
    }
  }
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exists</p>}
      </form>
    </div>
  );
};

export default SearchBox;
