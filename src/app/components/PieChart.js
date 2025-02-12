'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

export default function Piechart({ score }) {
  const fullScore = 15;
  const remainingScore = fullScore - score;

  const data = [
    { name: 'User Score', value: score },
    { name: 'Unattained marks', value: remainingScore },
  ];

  const COLORS = ['green', 'red']; 

  return (
    <div className="w-full h-80 bg-white p-4 rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

