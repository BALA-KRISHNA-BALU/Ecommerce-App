
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "JAN", investment: 2500, earning: 4500, expense: 7000 },
  { month: "FEB", investment: 3000, earning: 5200, expense: 7800 },
  { month: "MAR", investment: 3400, earning: 5200, expense: 7900 },
  { month: "APR", investment: 2800, earning: 4500, expense: 6500 },
  { month: "MAY", investment: 4000, earning: 6000, expense: 8500 },
  { month: "JUN", investment: 5500, earning: 7200, expense: 9200 },
  { month: "JUL", investment: 4000, earning: 7100, expense: 9100 },
  { month: "AGU", investment: 4300, earning: 6000, expense: 8500 },
  { month: "SEP", investment: 4800, earning: 6800, expense: 9000 },
  { month: "OCT", investment: 6200, earning: 7500, expense: 9500 },
  { month: "NOV", investment: 6100, earning: 7000, expense: 9100 },
  { month: "DEC", investment: 4100, earning: 6400, expense: 8600 },
];

const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3498db" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#3498db" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="colorEarning" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#2ecc71" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#e91ee9" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#e91ee9" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          interval={0}
          tick={{ fontSize: 11, fill: "#555" }} 
          axisLine={false} 
          tickLine={false} 
        />
        <YAxis hide={true} /> 
        <Tooltip />
        <Area
          type="stepAfter"
          dataKey="investment"
          stroke="#3498db"
          strokeWidth={2.5}
          fill="url(#colorInvestment)"
        />
        <Area
          type="stepAfter"
          dataKey="earning"
          stroke="#2ecc71"
          strokeWidth={2.5}
          fill="url(#colorEarning)"
        />
        <Area
          type="stepAfter"
          dataKey="expense"
          stroke="#e91ee9"
          strokeWidth={2.5}
          fill="url(#colorExpense)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;


