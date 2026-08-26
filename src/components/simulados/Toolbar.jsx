import { Search, Plus, RotateCcw } from "lucide-react";

export default function Toolbar({
  pesquisa,
  setPesquisa,
  disciplina,
  setDisciplina,
  status,
  setStatus,
  limparFiltros,
  onNewSimulation,
}) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5 mb-6">

      <div className="flex flex-col xl:flex-row gap-4">

        {/* Pesquisa */}
        <div className="flex items-center bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 flex-1">

          <Search
            size={20}
            className="text-slate-400"
          />

          <input
            type="text"
            value={pesquisa}
            onChange={(event) =>
              setPesquisa(event.target.value)
            }
            placeholder="Pesquisar simulados..."
            className="ml-3 outline-none bg-transparent w-full text-slate-700"
          />

        </div>

        {/* Disciplina */}
        <select
          value={disciplina}
          onChange={(event) =>
            setDisciplina(event.target.value)
          }
          className="border border-slate-300 rounded-xl px-4 py-3 bg-white text-slate-700 outline-none focus:border-blue-500"
        >
          <option value="">
            Todas as disciplinas
          </option>

          <option value="Matemática">
            Matemática
          </option>

          <option value="Português">
            Português
          </option>

          <option value="Física">
            Física
          </option>

          <option value="Química">
            Química
          </option>

          <option value="História">
            História
          </option>

          <option value="Geografia">
            Geografia
          </option>
        </select>

        {/* Status */}
        <select
          value={status}
          onChange={(event) =>
            setStatus(event.target.value)
          }
          className="border border-slate-300 rounded-xl px-4 py-3 bg-white text-slate-700 outline-none focus:border-blue-500"
        >
          <option value="">
            Todos os status
          </option>

          <option value="Rascunho">
            Rascunho
          </option>

          <option value="Ativo">
            Ativo
          </option>

          <option value="Encerrado">
            Encerrado
          </option>
        </select>

        {/* Limpar */}
        <button
          type="button"
          onClick={limparFiltros}
          title="Limpar filtros"
          className="flex items-center justify-center gap-2 border border-slate-300 rounded-xl px-4 py-3 text-slate-600 hover:bg-slate-100 transition"
        >
          <RotateCcw size={18} />

          Limpar
        </button>

        {/* Novo */}
        <button
          type="button"
          onClick={onNewSimulation}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition whitespace-nowrap"
        >
          <Plus size={20} />

          Novo Simulado
        </button>

      </div>

    </div>
  );
}