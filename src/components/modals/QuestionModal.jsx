import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function QuestionModal({
  isOpen,
  onClose,
  onSave,
  question = null,
}) {
  const [enunciado, setEnunciado] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [dificuldade, setDificuldade] = useState("Médio");
  const [tipo, setTipo] = useState("Múltipla escolha");

  const [alternativaA, setAlternativaA] = useState("");
  const [alternativaB, setAlternativaB] = useState("");
  const [alternativaC, setAlternativaC] = useState("");
  const [alternativaD, setAlternativaD] = useState("");

  const [respostaCorreta, setRespostaCorreta] = useState("A");
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setErro("");

    if (question) {
      setEnunciado(question.enunciado || "");
      setDisciplina(question.disciplina || "");
      setDificuldade(question.dificuldade || "Médio");
      setTipo(question.tipo || "Múltipla escolha");

      setAlternativaA(question.alternativaA || "");
      setAlternativaB(question.alternativaB || "");
      setAlternativaC(question.alternativaC || "");
      setAlternativaD(question.alternativaD || "");

      setRespostaCorreta(
        question.respostaCorreta ||
          (question.tipo === "Verdadeiro ou falso"
            ? "Verdadeiro"
            : "A")
      );
    } else {
      setEnunciado("");
      setDisciplina("");
      setDificuldade("Médio");
      setTipo("Múltipla escolha");

      setAlternativaA("");
      setAlternativaB("");
      setAlternativaC("");
      setAlternativaD("");

      setRespostaCorreta("A");
    }
  }, [isOpen, question]);

  if (!isOpen) {
    return null;
  }

  const modoEdicao = Boolean(question);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enunciadoLimpo = enunciado.trim();
    const disciplinaLimpa = disciplina.trim();

    if (!enunciadoLimpo) {
      setErro("Digite o enunciado da questão.");
      return;
    }

    if (!disciplinaLimpa) {
      setErro("Selecione uma disciplina.");
      return;
    }

    if (tipo === "Múltipla escolha") {
      if (!alternativaA.trim()) {
        setErro("Preencha a Alternativa A.");
        return;
      }

      if (!alternativaB.trim()) {
        setErro("Preencha a Alternativa B.");
        return;
      }

      if (!alternativaC.trim()) {
        setErro("Preencha a Alternativa C.");
        return;
      }

      if (!alternativaD.trim()) {
        setErro("Preencha a Alternativa D.");
        return;
      }

      if (!["A", "B", "C", "D"].includes(respostaCorreta)) {
        setErro("Selecione a resposta correta.");
        return;
      }
    }

    if (tipo === "Verdadeiro ou falso") {
      if (
        !["Verdadeiro", "Falso"].includes(
          respostaCorreta
        )
      ) {
        setErro("Selecione a resposta correta.");
        return;
      }
    }

    setErro("");

    onSave({
      ...(question ? { id: question.id } : {}),
      enunciado: enunciadoLimpo,
      disciplina: disciplinaLimpa,
      dificuldade,
      tipo,
      alternativaA:
        tipo === "Múltipla escolha"
          ? alternativaA.trim()
          : "",
      alternativaB:
        tipo === "Múltipla escolha"
          ? alternativaB.trim()
          : "",
      alternativaC:
        tipo === "Múltipla escolha"
          ? alternativaC.trim()
          : "",
      alternativaD:
        tipo === "Múltipla escolha"
          ? alternativaD.trim()
          : "",
      respostaCorreta,
    });
  };

  const limparErro = () => {
    if (erro) {
      setErro("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              {modoEdicao
                ? "Editar Questão"
                : "Nova Questão"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {modoEdicao
                ? "Altere os dados da questão selecionada."
                : "Cadastre uma nova questão para os simulados."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
            title="Fechar"
          >
            <X size={22} />
          </button>
        </div>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >
          {/* Mensagem de erro */}
          {erro && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {erro}
            </div>
          )}

          {/* Enunciado */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Enunciado
            </label>

            <textarea
              value={enunciado}
              onChange={(event) => {
                setEnunciado(event.target.value);
                limparErro();
              }}
              placeholder="Digite o enunciado da questão..."
              required
              rows={4}
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Disciplina */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Disciplina
            </label>

            <select
              value={disciplina}
              onChange={(event) => {
                setDisciplina(event.target.value);
                limparErro();
              }}
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
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

          {/* Dificuldade */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Dificuldade
            </label>

            <select
              value={dificuldade}
              onChange={(event) => {
                setDificuldade(event.target.value);
                limparErro();
              }}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
            >
              <option value="Fácil">Fácil</option>
              <option value="Médio">Médio</option>
              <option value="Difícil">Difícil</option>
            </select>
          </div>

          {/* Tipo */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Tipo de questão
            </label>

            <select
              value={tipo}
              onChange={(event) => {
                const novoTipo = event.target.value;

                setTipo(novoTipo);

                if (novoTipo === "Múltipla escolha") {
                  setRespostaCorreta("A");
                } else {
                  setRespostaCorreta("Verdadeiro");
                }

                limparErro();
              }}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
            >
              <option value="Múltipla escolha">
                Múltipla escolha
              </option>

              <option value="Verdadeiro ou falso">
                Verdadeiro ou falso
              </option>
            </select>
          </div>

          {/* Múltipla escolha */}
          {tipo === "Múltipla escolha" && (
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-700">
                Alternativas
              </h3>

              <input
                type="text"
                value={alternativaA}
                onChange={(event) => {
                  setAlternativaA(event.target.value);
                  limparErro();
                }}
                placeholder="Alternativa A"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <input
                type="text"
                value={alternativaB}
                onChange={(event) => {
                  setAlternativaB(event.target.value);
                  limparErro();
                }}
                placeholder="Alternativa B"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <input
                type="text"
                value={alternativaC}
                onChange={(event) => {
                  setAlternativaC(event.target.value);
                  limparErro();
                }}
                placeholder="Alternativa C"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <input
                type="text"
                value={alternativaD}
                onChange={(event) => {
                  setAlternativaD(event.target.value);
                  limparErro();
                }}
                placeholder="Alternativa D"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Resposta correta
                </label>

                <select
                  value={respostaCorreta}
                  onChange={(event) => {
                    setRespostaCorreta(event.target.value);
                    limparErro();
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
                >
                  <option value="A">
                    Alternativa A
                  </option>

                  <option value="B">
                    Alternativa B
                  </option>

                  <option value="C">
                    Alternativa C
                  </option>

                  <option value="D">
                    Alternativa D
                  </option>
                </select>
              </div>
            </div>
          )}

          {/* Verdadeiro ou falso */}
          {tipo === "Verdadeiro ou falso" && (
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Resposta correta
              </label>

              <select
                value={respostaCorreta}
                onChange={(event) => {
                  setRespostaCorreta(event.target.value);
                  limparErro();
                }}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
              >
                <option value="Verdadeiro">
                  Verdadeiro
                </option>

                <option value="Falso">
                  Falso
                </option>
              </select>
            </div>
          )}

          {/* Rodapé */}
          <div className="flex justify-end gap-3 border-t pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              {modoEdicao
                ? "Salvar Alterações"
                : "Salvar Questão"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}