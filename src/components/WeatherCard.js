import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import "./weatherCard.css";
import { WeatherContext } from "../store/weather-context";

const WeatherCard = ({
  dt_txt,
  temp,
  dt,
  temp_min,
  temp_max,
  main,
  pressure,
  humidity,
}) => {
  const weatherContext = useContext(WeatherContext)

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(dt*1000);
  
  return (
    <Paper
      elevation={0}
      className="card"
      sx={{width:"65px"}}
      onClick={() => {
        weatherContext.onWeatherSelect(dt_txt, temp, main, pressure, humidity);
      }}
    >
      <div className="day">
        <p>{days[date.getDay()]}</p>
      </div>
      <div
      className="max-min"
      >
        <div className="max">{Math.ceil(temp_max)}°</div>
        <div>{Math.floor(temp_min)}°</div>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/assets/weather_icon_set/${main}.png`}
        alt="weather-icon"
        className="weather-icon"
      />
      <div className="main">{main}</div>
    </Paper>
  );
};

export default WeatherCard;
