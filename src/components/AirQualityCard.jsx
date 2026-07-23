function AirQualityCard() {
  return (
    <div className="bg-[#102038] rounded-3xl border border-slate-700 p-6 h-full">

      <h2 className="text-lg font-semibold mb-6">
        🌫️ Air Quality
      </h2>

      <div className="flex flex-col items-center">

        <div className="w-32 h-32 rounded-full border-[12px] border-green-500 flex items-center justify-center">

          <div className="text-center">
            <h1 className="text-4xl font-bold">
              42
            </h1>

            <p className="text-green-400">
              Good
            </p>
          </div>

        </div>

      </div>

      <div className="mt-8 space-y-4">

        <Progress title="PM2.5" value={25} />
        <Progress title="PM10" value={35} />
        <Progress title="O₃" value={42} />
        <Progress title="NO₂" value={20} />

      </div>

    </div>
  );
}

function Progress({ title, value }) {
  return (
    <div>

      <div className="flex justify-between text-sm mb-1">
        <span>{title}</span>
        <span>{value}</span>
      </div>

      <div className="bg-[#1c3556] rounded-full h-2">

        <div
          className="bg-green-400 h-2 rounded-full"
          style={{ width: `${value}%` }}
        />

      </div>

    </div>
  );
}

export default AirQualityCard;