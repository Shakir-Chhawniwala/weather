import React, { useContext } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { WeatherContext } from "../store/weather-context";

const LineCharts = () => {
  const context = useContext(WeatherContext);

  const dailyTemp = context.weather
    .map(({ dt, dt_txt, main }) => ({
      dt: dt * 1000,
      date: dt_txt,
      temp: Math.round(main.temp),
    }))
  .filter((weather) => {
        const date1 = weather.date.split(" ");
        const date2 = context.selectedWeather.dt_txt.split(" ");

        return date1[0] === date2[0];
      });

  return (
    <ResponsiveContainer width="100%" height={125}>
      <LineChart
        data={dailyTemp}
        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
      >
        <CartesianGrid horizontal={false} />
        <XAxis dataKey="temp" axisLine={false} tickLine={false} unit="°" />
        <Tooltip />

        <Line
          type="basis"
          dataKey="temp"
          stroke="#41a0e0"
          dot={{ stroke: "#41a0e0", strokeWidth: 2, r: 5 }}
          activeDot={{ stroke: "white", strokeWidth: 2, r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
