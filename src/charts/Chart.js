import React from "react";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

const data = [
  { time: "6am", hour: -1 },
  { time: "1pm", hour: 2 },
  { time: "8pm", hour: -1 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
      >
        <XAxis
          dataKey="time"
          tickLine={false}
          interval="preserveStartEnd"
          orientation="top"
        />
        <CartesianGrid horizontal={false} />
        <Tooltip />
        <Area dataKey="hour" type="monotone" stroke="#feecc6" fill="#feecc6" />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8584" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
