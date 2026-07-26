import Navbar from "../components/Navbar";
import HeroCard from "../components/HeroCard";
import AirQualityCard from "../components/AirQualityCard";
import TemperatureChart from "../components/TemperatureChart";
import FavoriteCities from "../components/FavoriteCities";
import ForecastCard from "../components/ForecastCard";
import TodaysHighlights from "../components/Today'sHighlights";
import WeatherRadar from "../components/WeatherRadar";
import { useEffect } from "react";
import { getCurrentWeather } from "../services/weatherService";
import { useEffect, useState } from "react";


function Home() {
  
  useEffect(() => {
  async function loadWeather() {
    try {
      const data = await getCurrentWeather("Colombo");

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
            <HeroCard />
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