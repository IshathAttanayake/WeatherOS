import Navbar from "../components/Navbar";
import HeroCard from "../components/HeroCard";

function Home() {
  return (
    <div className="min-h-screen bg-[#081220] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <HeroCard />
      </main>
    </div>
  );
}

export default Home;