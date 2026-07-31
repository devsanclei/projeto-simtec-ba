import { Pencil, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

const simulados = [
  {
    id: 1,
    nome: "Matemática 2º Ano",
    disciplina: "Matemática",
    data: "10/08/2026",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Português",
    disciplina: "Português",
    data: "12/08/2026",
    status: "Ativo",
  },
  {
    id: 3,
    nome: "Física",
    disciplina: "Física",
    data: "15/08/2026",
    status: "Rascunho",
  },
];

export default function SimuladosTable() {
  return (
    <div className="bg-white rounded-2xl shadow border overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="text-left p-4">Nome</th>
            <th className="text-left">Disciplina</th>
            <th className="text-left">Data</th>
            <th className="text-left">Status</th>
            <th className="text-center">Ações</th>

          </tr>

        </thead>

        <tbody>

          {simulados.map((simulado) => (

            <tr key={simulado.id} className="border-t">

              <td className="p-4">{simulado.nome}</td>

              <td>{simulado.disciplina}</td>

              <td>{simulado.data}</td>

              <td>

                <StatusBadge status={simulado.status} />

              </td>

              <td>

                <div className="flex justify-center gap-4">

                  <button>

                    <Pencil size={18} />

                  </button>

                  <button>

                    <Trash2
                      size={18}
                      className="text-red-500"
                    />

                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}