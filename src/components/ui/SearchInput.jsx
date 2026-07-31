import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-4 py-3 w-96">

      <Search size={18} className="text-slate-400"/>

      <input
        type="text"
        placeholder="Pesquisar..."
        className="bg-transparent outline-none w-full"
      />

    </div>
  );
}