import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const InfoBox = ({weatherInfo}) => {
    const DUSTY_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://media.istockphoto.com/id/904784522/photo/dramatic-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=K46QfJs7MJhi3Q0JTINv_Y4xRWC4dHGEMuAUcr7-GQA=";
    const COLD_URL = "https://media.istockphoto.com/id/904784522/photo/dramatic-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=K46QfJs7MJhi3Q0JTINv_Y4xRWC4dHGEMuAUcr7-GQA=";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
  return (
    <div className="infobox">
      <div className="container">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={weatherInfo.humidity > 80 ? RAIN_URL : (weatherInfo.temp > 15) ? HOT_URL : COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weatherInfo.city} {
                weatherInfo.humidity > 80 ? <ThunderstormIcon/> : (weatherInfo.temp > 15) ? <WbSunnyIcon /> : <AcUnitIcon />
            }
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
           <p>Temprature = {weatherInfo.temp}&deg;C</p>
           <p>Humidity = {weatherInfo.humidity}</p>
           <p>Min Temp = {weatherInfo.tempMin}</p>
           <p>Max Temp = {weatherInfo.tempMax}</p>
           <p>The weather can be described as <i>{weatherInfo.weather}</i> and feels like {weatherInfo.feelslike}&deg;C</p>
           
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default InfoBox;
