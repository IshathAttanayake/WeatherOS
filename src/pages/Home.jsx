import Navbar from "../components/Navbar";
import HeroCard from "../components/HeroCard";
import AirQualityCard from "../components/AirQualityCard";
import TemperatureChart from "../components/TemperatureChart";
import FavoriteCities from "../components/FavoriteCities";
import ForecastCard from "../components/ForecastCard";

function Home() {
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

            <div className="col-span-12">
    <ForecastCard />
</div>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Home;