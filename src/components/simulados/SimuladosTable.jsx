import { Pencil, Trash2 } from "lucide-react";

import StatusBadge from "./StatusBadge";

export default function SimuladosTable({
  simulados,
  onDelete,
  onEdit,
}) {
  if (simulados.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow border p-10 text-center">

        <h3 className="text-lg font-semibold text-slate-700">
          Nenhum simulado cadastrado
        </h3>

        <p className="text-slate-500 mt-2">
          Clique em "Novo Simulado" para cadastrar o primeiro.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow border overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="text-left p-4">
                Nome
              </th>

              <th className="text-left">
                Disciplina
              </th>

              <th className="text-left">
                Data
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-center">
                Ações
              </th>

            </tr>

          </thead>

          <tbody>

            {simulados.map((simulado) => (

              <tr
                key={simulado.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {simulado.nome}
                </td>

                <td>
                  {simulado.disciplina}
                </td>

                <td>
                  {simulado.data}
                </td>

                <td>
                  <StatusBadge
                    status={simulado.status}
                  />
                </td>

                <td>

                  <div className="flex justify-center gap-4">

                    <button
                      type="button"
                      onClick={() => onEdit(simulado)}
                      title="Editar simulado"
                      className="text-slate-500 hover:text-blue-600 transition"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(simulado.id)}
                      title="Excluir simulado"
                      className="text-slate-500 hover:text-red-600 transition"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}