import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Ratnagiri",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

  return (
    <div>
        <h2 style={{textAlign:"center"}}>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox weatherInfo={weatherInfo}/>
    </div>
  )
}

export default WeatherApp