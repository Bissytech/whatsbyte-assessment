'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Label } from 'recharts';

// Sample data
const data = [
    { score: 0, percentile: 5 },
    { score: 20, percentile: 15 },
    { score: 40, percentile: 40 },  // Your score here
    { score: 60, percentile: 55 },
    { score: 80, percentile: 68 },
    { score: 100, percentile: 90 }, // Highest score with the highest percentile
  ];
  

export default function Chart({percent = 30}) {
   let val = `Your Score (${percent}th %)`
  return (
    <div className="w-full h-80 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Comparison Graph</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="score" label={{ value: 'Score', position: 'insideBottomRight', offset: -5 }} />
        
          <Tooltip />
          <Legend />

          {/* Line Chart */}
          <Line type="monotone" dataKey="percentile" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 6 }} />

          {/* Reference Line for Your Score (40th Percentile) */}
          <ReferenceLine y={percent } stroke="red" strokeDasharray="3 3">
            <Label value={val} position="top" fill="red" />
          </ReferenceLine>

          {/* Reference Line for Average Score */}
          <ReferenceLine x={72} stroke="green" strokeDasharray="3 3">
            <Label value="Average (72%)" position="right" fill="green" />
          </ReferenceLine>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}


