import Card from "./ui/Card";

function WeatherRadar() {
  return (
    <Card>

      <h2 className="text-lg font-semibold mb-6">
        🗺 Weather Radar
      </h2>

      <div className="bg-[#162A44] rounded-2xl h-72 flex items-center justify-center">

        <p className="text-slate-400">
          Map Coming Soon...
        </p>

      </div>

    </Card>
  );
}

export default WeatherRadar;