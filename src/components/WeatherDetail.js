import React, { useContext } from "react";
import "./WeatherDetail.css";
import LineChart from "../charts/LineChart";
import { WeatherContext } from "../store/weather-context";
import Chart from "../charts/Chart";
import { Paper } from "@mui/material";

const WeatherDetail = () => {
  const weatherContext = useContext(WeatherContext);
  const sunriseTime = new Date(weatherContext.time.sunrise * 1000);
  const sunsetTime = new Date(weatherContext.time.sunset * 1000);

  return (
    <Paper
      elevation={3}
      sx={{
        m: "10px auto",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "95%",
        height: "77.5%",
        borderRadius: "10px",
      }}
    >
      <div className="weatherdetail-container">
        <div className="temp-container">
          <div className="temp">
            {Math.round(weatherContext.selectedWeather.temp)}°C
          </div>
          <div className="icon">
            <img
              alt={"weather-icon"}
              src={`${process.env.PUBLIC_URL}/assets/weather_icon_set/${weatherContext.selectedWeather.main}.png`}
            />
          </div>
        </div>
        <div className="chart-container">
          <LineChart />
        </div>
        <div className="humidity-container">
          <div className="pressure">
            <h5>Pressure</h5>
            <p>{weatherContext.selectedWeather.pressure} hpa</p>
          </div>
          <div className="humidity">
            <h5>Humidity</h5>
            <p>{weatherContext.selectedWeather.humidity} %</p>
          </div>
        </div>
        <div className="sunrise-sunset-container">
          <div className="sunrise">
            <h5>Sunrise</h5>
            <p>
              {sunriseTime.getHours()}:{sunriseTime.getMinutes()}am
            </p>
          </div>
          <div className="sunset">
            <h5>Sunset</h5>
            <p>
              {sunsetTime.getHours()}:{sunsetTime.getMinutes()}pm
            </p>
          </div>
        </div>
        <div className="chart-container">
          <Chart />
        </div>
      </div>
    </Paper>
  );
};

export default WeatherDetail;
