import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";
import WeatherDetail from "./WeatherDetail";
import "./App.css";
import { WeatherContext } from "../store/weather-context";
import { CircularProgress } from "@mui/material";

const App = () => {
  const weatherContext = useContext(WeatherContext);

  return (
    <div className="App">
      <SearchBar />
      <WeatherList />
      {!weatherContext.isLoaded ? <CircularProgress /> : <WeatherDetail />}
    </div>
  );
};

export default App;
