import { WiDayCloudy } from "react-icons/wi";
import WeatherStat from "./WeatherStat";

function HeroCard({ weather }) {

  if (!weather) {
    return (
      <div className="text-white text-center py-10">
        Loading weather...
      </div>
    );
  }

  return (
    <div className="bg-[#102038] rounded-3xl p-8 border border-slate-700">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400">
            {weather.name}
          </p>

          <h1 className="text-7xl font-bold mt-4">
            {Math.round(weather.main.temp)}°
          </h1>

          <p className="text-xl mt-2 capitalize">
            {weather.weather[0].description}
          </p>

          <p className="text-slate-500 mt-2">
            Feels like {Math.round(weather.main.feels_like)}°
          </p>

        </div>

        <WiDayCloudy
          size={150}
          className="text-yellow-300"
        />

      </div>

      <div className="grid grid-cols-4 gap-5 mt-10">

        <WeatherStat
          title="Humidity"
          value={`${weather.main.humidity}%`}
        />

        <WeatherStat
          title="Wind"
          value={`${weather.wind.speed} m/s`}
        />

        <WeatherStat
          title="Visibility"
          value={`${weather.visibility / 1000} km`}
        />

        <WeatherStat
          title="Pressure"
          value={`${weather.main.pressure} hPa`}
        />

      </div>

    </div>
  );
}

export default HeroCard;