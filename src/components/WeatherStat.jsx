function WeatherStat({ title, value }) {
  return (
    <div className="bg-[#162A44] rounded-xl p-5">
      <p className="text-slate-400 text-sm">{title}</p>

      <h2 className="text-2xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}

export default WeatherStat;