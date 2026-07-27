import Navbar from "../components/Navbar";
import HeroCard from "../components/HeroCard";
import AirQualityCard from "../components/AirQualityCard";
import TemperatureChart from "../components/TemperatureChart";
import FavoriteCities from "../components/FavoriteCities";
import ForecastCard from "../components/ForecastCard";
import TodaysHighlights from "../components/TodaysHighlights";
import WeatherRadar from "../components/WeatherRadar";
import { getCurrentWeather } from "../services/weatherService";
import { useEffect, useState } from "react";


function Home() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function loadWeather() {
      try {
        const data = await getCurrentWeather("Colombo");

        setWeather(data);
        console.log(data);

      } catch (error) {
        console.error(error);
      }
    }

    loadWeather();
  }, []);


  return (
    <div className="min-h-screen bg-[#081220] text-white">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-8">
            <HeroCard weather={weather} />
          </div>

          <div className="col-span-4">
            <AirQualityCard />
          </div>

          <div className="col-span-7">
            <TemperatureChart />
          </div>

          <div className="col-span-5">
            <FavoriteCities />
          </div>

          <div className="col-span-12">
            <ForecastCard />
          </div>

          <div className="col-span-6">
            <TodaysHighlights />
          </div>

          <div className="col-span-6">
            <WeatherRadar />
          </div>

        </div>

      </main>

    </div>
  );
}

export default Home;