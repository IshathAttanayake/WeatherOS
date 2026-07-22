import { FaCloudSun } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-[#0B1728] border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <FaCloudSun className="text-white text-xl" />
          </div>

          <h1 className="text-xl font-bold">
            WEATHEROS
          </h1>
        </div>

        <div className="flex gap-8">
          <button className="text-cyan-400">
            Home
          </button>

          <button className="text-slate-400 hover:text-white">
            Favorites
          </button>
        </div>

        <input
          placeholder="Search city..."
          className="bg-[#13263D] px-4 py-2 rounded-xl outline-none"
        />

      </div>
    </nav>
  );
}

export default Navbar;