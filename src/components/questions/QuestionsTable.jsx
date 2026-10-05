import { CheckCircle2, Pencil, Trash2 } from "lucide-react";

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
        <table className="w-full min-w-[950px]">
          <thead className="bg-slate-100">
            <tr>
              <th className="w-16 p-4 text-center text-sm font-semibold text-slate-700">
                #
              </th>

              <th className="min-w-[320px] p-4 text-left text-sm font-semibold text-slate-700">
                Questão
              </th>

              <th className="min-w-[150px] p-4 text-left text-sm font-semibold text-slate-700">
                Disciplina
              </th>

              <th className="min-w-[120px] p-4 text-left text-sm font-semibold text-slate-700">
                Dificuldade
              </th>

              <th className="min-w-[170px] p-4 text-left text-sm font-semibold text-slate-700">
                Tipo
              </th>

              <th className="min-w-[150px] p-4 text-left text-sm font-semibold text-slate-700">
                Resposta
              </th>

              <th className="w-28 p-4 text-center text-sm font-semibold text-slate-700">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {questoes.map((questao, index) => (
              <tr
                key={questao.id}
                className="border-t transition hover:bg-slate-50"
              >
                {/* Número */}
                <td className="p-4 text-center text-sm font-semibold text-slate-500">
                  {index + 1}
                </td>

                {/* Questão */}
                <td className="p-4 align-top">
                  <p
                    className="line-clamp-2 max-w-lg font-medium leading-6 text-slate-700"
                    title={questao.enunciado}
                  >
                    {questao.enunciado}
                  </p>
                </td>

                {/* Disciplina */}
                <td className="p-4 align-top text-sm text-slate-600">
                  {questao.disciplina}
                </td>

                {/* Dificuldade */}
                <td className="p-4 align-top">
                  <QuestionStatusBadge
                    dificuldade={questao.dificuldade}
                  />
                </td>

                {/* Tipo */}
                <td className="p-4 align-top text-sm text-slate-600">
                  {questao.tipo}
                </td>

                {/* Resposta */}
                <td className="p-4 align-top">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                    <CheckCircle2
                      size={17}
                      className="shrink-0"
                    />

                    <span>
                      {questao.respostaCorreta}
                    </span>
                  </div>
                </td>

                {/* Ações */}
                <td className="p-4 align-top">
                  <div className="flex justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit(questao)}
                      title="Editar questão"
                      aria-label="Editar questão"
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onDelete(questao.id)
                      }
                      title="Excluir questão"
                      aria-label="Excluir questão"
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
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