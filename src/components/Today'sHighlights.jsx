import Card from "./ui/Card";

const highlights = [
  {
    title: "UV Index",
    value: "6.8",
    color: "text-yellow-400",
  },
  {
    title: "Sunrise",
    value: "6:04 AM",
    color: "text-orange-400",
  },
  {
    title: "Sunset",
    value: "6:27 PM",
    color: "text-pink-400",
  },
  {
    title: "Feels Like",
    value: "31°",
    color: "text-cyan-400",
  },
];

function TodaysHighlights() {
  return (
    <Card>

      <h2 className="text-lg font-semibold mb-6">
        ✨ Today's Highlights
      </h2>

      <div className="grid grid-cols-2 gap-5">

        {highlights.map((item) => (

          <div
            key={item.title}
            className="bg-[#162A44] rounded-2xl p-5
            hover:bg-[#1C3556]
            hover:-translate-y-1
            transition-all
            duration-300"
          >

            <p className="text-slate-400 text-sm">
              {item.title}
            </p>

            <h1 className={`text-3xl font-bold mt-3 ${item.color}`}>
              {item.value}
            </h1>

          </div>

        ))}

      </div>

    </Card>
  );
}

export default TodaysHighlights;