import React, { useState, useEffect, createContext } from "react";



export const WeatherContext = createContext({
  isLoaded: false,
  weather: [],
  time: [],
  selectedWeather: {},
  cityTermHandler(city) {},
  onWeatherSelect(dt_txt, temp, main, humidity, pressure) {},
});

export const WeatherContextProvider = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState([]);
  const [cityTerm, setCityTerm] = useState("");
  const [time, setTime] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState({
    dt_txt: "",
    temp: null,
    main: null,
    pressure: undefined,
    humidity: null,
  });

  const cityTermHandler = (city) => {
    setCityTerm(city);
  };

  const onWeatherSelect = (dt_txt, temp, main, pressure, humidity) => {
    setSelectedWeather({
      dt_txt: dt_txt,
      temp: temp,
      main: main,
      pressure: pressure,
      humidity: humidity,
    });
  };

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityTerm}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod >= 400) {
          return;
        }
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

        setCityTerm("");
      })
      .catch((error) => {
        setIsLoaded(false);
        console.log(error);
      });
  }, [cityTerm]);

  return (
    <WeatherContext.Provider
      value={{
        isLoaded: isLoaded,
        selectedWeather: selectedWeather,
        weather: weather,
        time: time,
        cityTermHandler: cityTermHandler,
        onWeatherSelect: onWeatherSelect,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
