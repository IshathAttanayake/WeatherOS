import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", temp: 22 },
  { day: "Tue", temp: 25 },
  { day: "Wed", temp: 24 },
  { day: "Thu", temp: 28 },
  { day: "Fri", temp: 30 },
  { day: "Sat", temp: 29 },
  { day: "Sun", temp: 31 },
];

function TemperatureChart() {
  return (
    <div className="bg-[#102038] rounded-3xl border border-slate-700 p-6 h-[320px]">
      <h2 className="text-lg font-semibold mb-6">
        🌡 Temperature Trend
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#94A3B8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#38BDF8"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperatureChart;