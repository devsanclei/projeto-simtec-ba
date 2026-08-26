import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function CreateSimulationModal({
  isOpen,
  onClose,
  onSave,
  simulation,
}) {
  const [nome, setNome] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [data, setData] = useState("");
  const [status, setStatus] = useState("Rascunho");

  const editando = Boolean(simulation);

  useEffect(() => {
    if (simulation) {
      setNome(simulation.nome);
      setDisciplina(simulation.disciplina);
      setData(simulation.data);
      setStatus(simulation.status);
    } else {
      setNome("");
      setDisciplina("");
      setData("");
      setStatus("Rascunho");
    }
  }, [simulation, isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSave({
      id: simulation?.id,
      nome,
      disciplina,
      data,
      status,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b px-6 py-5">

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              {editando ? "Editar Simulado" : "Novo Simulado"}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              {editando
                ? "Atualize os dados do simulado."
                : "Cadastre um novo simulado no sistema."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Nome do simulado
            </label>

            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Ex.: Matemática - 2º Ano"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Disciplina
            </label>

            <select
              value={disciplina}
              onChange={(event) => setDisciplina(event.target.value)}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">
                Selecione uma disciplina
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
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Data
            </label>

            <input
              type="date"
              value={data}
              onChange={(event) => setData(event.target.value)}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Status
            </label>

            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            >
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
          </div>

          <div className="flex justify-end gap-3 pt-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-100"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
            >
              {editando
                ? "Salvar Alterações"
                : "Salvar Simulado"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}