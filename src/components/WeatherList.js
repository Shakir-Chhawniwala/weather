import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import classes from "./Weather.module.css";
import { WeatherContext } from "../store/weather-context";
import { Paper } from "@mui/material";

const WeatherList = () => {
  const weatherContext = useContext(WeatherContext);

  const renderWeather = weatherContext.weather
    .filter((reading) => reading.dt_txt.includes("18:00:00"))
    .map(({ dt, dt_txt, main, weather }, id) => (
      <WeatherCard
        key={id}
        dt_txt={dt_txt}
        temp_max={main.temp_max}
        temp_min={main.temp_min}
        dt={dt}
        main={weather[0].main}
        temp={main.temp}
        pressure={main.pressure}
        humidity={main.humidity}
      />
    ));

  return (
    <Paper
      elevation={0}
      sx={{
        m: "0px auto",
        display: "flex",
        alignItems: "center",
        width: "95%",
        height: "15%",
      }}
    >
      <div className={classes["weather-showcase"]}>{renderWeather}</div>
    </Paper>
  );
};

export default WeatherList;
