const forecast = [
  {
    day: "Today",
    icon: "☀️",
    high: 29,
    low: 23,
    rain: 10,
  },
  {
    day: "Thu",
    icon: "🌤",
    high: 30,
    low: 24,
    rain: 20,
  },
  {
    day: "Fri",
    icon: "🌧",
    high: 26,
    low: 22,
    rain: 75,
  },
  {
    day: "Sat",
    icon: "☁️",
    high: 25,
    low: 21,
    rain: 30,
  },
  {
    day: "Sun",
    icon: "⛈",
    high: 24,
    low: 20,
    rain: 90,
  },
  {
    day: "Mon",
    icon: "☀️",
    high: 31,
    low: 25,
    rain: 5,
  },
  {
    day: "Tue",
    icon: "🌤",
    high: 29,
    low: 23,
    rain: 15,
  },
];

function ForecastCard() {
  return (
    <div className="bg-[#102038] border border-slate-700 rounded-3xl p-6">

      <h2 className="text-lg font-semibold mb-6">
        📅 7-Day Forecast
      </h2>

      <div className="grid grid-cols-7 gap-4">

        {forecast.map((item) => (

          <div
            key={item.day}
            className="bg-[#162A44] rounded-2xl py-5 flex flex-col items-center hover:bg-[#1C3556] transition duration-300"
          >

            <p className="text-sm text-slate-400">
              {item.day}
            </p>

            <div className="text-4xl my-4">
              {item.icon}
            </div>

            <p className="font-bold text-xl">
              {item.high}°
            </p>

            <p className="text-slate-400 text-sm">
              {item.low}°
            </p>

            <p className="text-cyan-400 mt-3 text-sm">
              💧 {item.rain}%
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ForecastCard;