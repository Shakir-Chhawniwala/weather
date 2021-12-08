import React, { useState, createContext } from "react";

export const WeatherContext = createContext({
  isLoaded: false,
  fetchWeather: (cityTerm) => {},
  weather: [],
  time: [],
  selectedWeather: {},
  cityTermHandler: (city) => {},
  onWeatherSelect: (dt_txt, temp, main, humidity, pressure) => {},
});

export const WeatherContextProvider = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState([]);
  const [time, setTime] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState({
    dt_txt: "",
    temp: null,
    main: null,
    pressure: undefined,
    humidity: null,
  });

  const onWeatherSelect = (dt_txt, temp, main, pressure, humidity) => {
    setSelectedWeather({
      dt_txt: dt_txt,
      temp: temp,
      main: main,
      pressure: pressure,
      humidity: humidity,
    });
  };

  const fetchWeather = async (cityTerm) => {
    try {
      const data = await fetch(
        `/.netlify/functions/weatherHandler?cityTerm=${cityTerm}`
      ).then((res) => res.json());
      setIsLoaded(true);
      setWeather(data.list);
      setTime(data.city);
      setSelectedWeather({
        dt_txt: data.list[0].dt_txt,
        temp: data.list[0].main.temp,
        main: data.list[0].weather[0].main,
        pressure: data.list[0].main.pressure,
        humidity: data.list[0].main.humidity,
      });
    } catch (err) {
      setIsLoaded(true);
      console.log(err);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        fetchWeather: fetchWeather,
        isLoaded: isLoaded,
        selectedWeather: selectedWeather,
        weather: weather,
        time: time,
        onWeatherSelect: onWeatherSelect,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
