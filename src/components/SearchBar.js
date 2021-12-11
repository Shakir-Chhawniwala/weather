import React, { useState, useContext} from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { WeatherContext } from "../store/weather-context";

const SearchBar = (props) => {
  const [searchCity, setSearchCity] = useState("");

  const weatherContext = useContext(WeatherContext)
  
  const searchInputHandler = (e) => {
    setSearchCity(e.target.value);
  };
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    weatherContext.fetchWeather(searchCity);
    setSearchCity("")
  }

  return (
    <Paper
      onSubmit={searchSubmitHandler}
      component="form"
      sx={{
        m: "10px auto",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "95%",
        height: "7%",
        borderRadius: "10px",
      }}
    >
      {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
        <LocationOnIcon />
      </IconButton> */}
      <InputBase
        onChange={searchInputHandler}
        value={searchCity}
        sx={{ ml: 1, flex: 1, m: "0px 0px 0px 10px" }}
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
