import Card from "./ui/Card";
import { forecast } from "../data/forecastData";

function ForecastCard() {
  return (
    <Card>

      <h2 className="text-lg font-semibold mb-6">
        📅 7-Day Forecast
      </h2>

      <div className="grid grid-cols-7 gap-4">

        {forecast.map((item) => (

          <div
            key={item.day}
            className="bg-[#162A44] rounded-2xl py-5 flex flex-col items-center hover:bg-[#1C3556] hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
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

    </Card>
  );
}

export default ForecastCard;