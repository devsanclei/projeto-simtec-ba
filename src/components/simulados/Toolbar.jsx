import { Search, Plus } from "lucide-react";

export default function Toolbar({ onNewSimulation }) {

  return (
    <div className="flex justify-between items-center mb-6">

      <div className="flex items-center bg-white border border-slate-300 rounded-xl px-4 py-2 w-80">

        <Search
          size={18}
          className="text-slate-400"
        />

        <input
          type="text"
          placeholder="Pesquisar..."
          className="ml-3 outline-none w-full"
        />

      </div>

      <button
        type="button"
        onClick={onNewSimulation}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
      >

        <Plus size={20} />

        Novo Simulado

      </button>

    </div>
  );
}