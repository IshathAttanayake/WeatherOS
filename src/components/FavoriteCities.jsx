const cities = [
  {
    city: "Colombo",
    temp: "30°",
    weather: "☀️ Sunny",
  },
  {
    city: "Kandy",
    temp: "26°",
    weather: "🌤 Cloudy",
  },
  {
    city: "Tokyo",
    temp: "18°",
    weather: "🌧 Rain",
  },
  {
    city: "London",
    temp: "15°",
    weather: "☁️ Cloudy",
  },

  {
  city: "Galle",
  temp: "29°",
  weather: "🌦 Showers",
},

];

function FavoriteCities() {
  return (
    <div className="bg-[#102038] rounded-3xl border border-slate-700 p-6 h-[320px] flex flex-col">

      <h2 className="text-lg font-semibold mb-6">
        ❤️ Favorite Cities
      </h2>

      <div className="space-y-4 overflow-y-auto pr-1 flex-1">

        {cities.map((city) => (
          <div
            key={city.city}
            className="bg-[#162A44] rounded-xl p-4 flex justify-between items-center hover:bg-[#1b3556] transition"
          >
            <div>
              <h3 className="font-semibold">
                {city.city}
              </h3>

              <p className="text-sm text-slate-400">
                {city.weather}
              </p>
            </div>

            <span className="text-xl font-bold">
              {city.temp}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default FavoriteCities;