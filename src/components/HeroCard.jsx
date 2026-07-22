import { WiDayCloudy } from "react-icons/wi";
import WeatherStat from "./WeatherStat";

function HeroCard() {
  return (
    <div className="bg-[#102038] rounded-3xl p-8 border border-slate-700">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400">
            New York
          </p>

          <h1 className="text-7xl font-bold mt-4">
            74°
          </h1>

          <p className="text-xl mt-2">
            Partly Cloudy
          </p>

          <p className="text-slate-500 mt-2">
            Feels like 71°
          </p>

        </div>

        <WiDayCloudy
          size={150}
          className="text-yellow-300"
        />

      </div>

      <div className="grid grid-cols-4 gap-5 mt-10">

        <WeatherStat title="Humidity" value="62%" />
        <WeatherStat title="Wind" value="12 mph" />
        <WeatherStat title="Visibility" value="10 mi" />
        <WeatherStat title="Pressure" value="1013 hPa" />

      </div>

    </div>
  );
}

export default HeroCard;