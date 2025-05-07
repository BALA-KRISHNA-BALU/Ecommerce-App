import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Group A', value: 28},
  { name: 'Group B', value: 20 },
  { name: 'Group C', value: 31 },
  { name: 'Group D', value: 13 },
  { name: 'Group E', value: 9 },
];

const COLORS = ['#D633FF','#4285F4', '#34A853', '#EA4335', '#FBBC04'];

const OrdersChart = () => {
  return (
    <div style={{ width: '100%', height: 226,}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            labelStyle={{ fill: '#fff' }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersChart;
