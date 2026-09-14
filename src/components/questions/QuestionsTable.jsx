import { Pencil, Trash2 } from "lucide-react";

import QuestionStatusBadge from "./QuestionStatusBadge";

export default function QuestionsTable({
  questoes,
  onEdit,
  onDelete,
}) {
  if (questoes.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-10 text-center shadow">
        <h3 className="text-lg font-semibold text-slate-700">
          Nenhuma questão encontrada
        </h3>

        <p className="mt-2 text-slate-500">
          Cadastre uma questão ou altere os filtros
          utilizados.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left text-sm font-semibold text-slate-700">
                Questão
              </th>

              <th className="p-4 text-left text-sm font-semibold text-slate-700">
                Disciplina
              </th>

              <th className="p-4 text-left text-sm font-semibold text-slate-700">
                Dificuldade
              </th>

              <th className="p-4 text-left text-sm font-semibold text-slate-700">
                Tipo
              </th>

              <th className="p-4 text-center text-sm font-semibold text-slate-700">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {questoes.map((questao) => (
              <tr
                key={questao.id}
                className="border-t transition hover:bg-slate-50"
              >
                {/* Questão */}
                <td className="max-w-md p-4">
                  <p
                    className="font-medium text-slate-700"
                    title={questao.enunciado}
                  >
                    {questao.enunciado}
                  </p>
                </td>

                {/* Disciplina */}
                <td className="p-4 text-sm text-slate-600">
                  {questao.disciplina}
                </td>

                {/* Dificuldade */}
                <td className="p-4">
                  <QuestionStatusBadge
                    dificuldade={questao.dificuldade}
                  />
                </td>

                {/* Tipo */}
                <td className="p-4 text-sm text-slate-600">
                  {questao.tipo}
                </td>

                {/* Ações */}
                <td className="p-4">
                  <div className="flex justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => onEdit(questao)}
                      title="Editar questão"
                      className="text-slate-500 transition hover:text-blue-600"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onDelete(questao.id)
                      }
                      title="Excluir questão"
                      className="text-slate-500 transition hover:text-red-600"
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