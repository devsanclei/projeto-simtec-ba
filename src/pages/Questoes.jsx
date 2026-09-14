import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";

import MainLayout from "../components/layout/MainLayout";
import QuestionModal from "../components/modals/QuestionModal";
import QuestionsTable from "../components/questions/QuestionsTable";

export default function Questoes() {
  const [questoes, setQuestoes] = useState([]);

  const [modalAberto, setModalAberto] = useState(false);
  const [questaoSelecionada, setQuestaoSelecionada] =
    useState(null);

  const [pesquisa, setPesquisa] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [dificuldade, setDificuldade] = useState("");

  const questoesFiltradas = useMemo(() => {
    return questoes.filter((questao) => {
      const correspondePesquisa =
        questao.enunciado
          .toLowerCase()
          .includes(pesquisa.toLowerCase());

      const correspondeDisciplina =
        disciplina === "" ||
        questao.disciplina === disciplina;

      const correspondeDificuldade =
        dificuldade === "" ||
        questao.dificuldade === dificuldade;

      return (
        correspondePesquisa &&
        correspondeDisciplina &&
        correspondeDificuldade
      );
    });
  }, [
    questoes,
    pesquisa,
    disciplina,
    dificuldade,
  ]);

  const abrirModal = () => {
    setQuestaoSelecionada(null);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setQuestaoSelecionada(null);
  };

  const salvarQuestao = (novaQuestao) => {
    if (questaoSelecionada) {
      setQuestoes((questoesAtuais) =>
        questoesAtuais.map((questao) =>
          questao.id === questaoSelecionada.id
            ? {
                ...questao,
                ...novaQuestao,
              }
            : questao
        )
      );
    } else {
      setQuestoes((questoesAtuais) => [
        ...questoesAtuais,
        {
          id: Date.now(),
          ...novaQuestao,
        },
      ]);
    }

    fecharModal();
  };

  const editarQuestao = (questao) => {
    setQuestaoSelecionada(questao);
    setModalAberto(true);
  };

  const excluirQuestao = (id) => {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir esta questão?"
    );

    if (!confirmar) {
      return;
    }

    setQuestoes((questoesAtuais) =>
      questoesAtuais.filter(
        (questao) => questao.id !== id
      )
    );
  };

  const limparFiltros = () => {
    setPesquisa("");
    setDisciplina("");
    setDificuldade("");
  };

  return (
    <MainLayout>
      {/* Cabeçalho */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Questões
        </h1>

        <p className="mt-2 text-slate-500">
          Gerencie as questões utilizadas nos simulados.
        </p>
      </div>

      {/* Barra de ferramentas */}
      <div className="mb-6 rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row">
          {/* Pesquisa */}
          <div className="flex flex-1 items-center rounded-xl border border-slate-300 bg-slate-50 px-4 py-3">
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
              placeholder="Pesquisar questão..."
              className="ml-3 w-full bg-transparent outline-none"
            />
          </div>

          {/* Disciplina */}
          <select
            value={disciplina}
            onChange={(event) =>
              setDisciplina(event.target.value)
            }
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
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

          {/* Dificuldade */}
          <select
            value={dificuldade}
            onChange={(event) =>
              setDificuldade(event.target.value)
            }
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
          >
            <option value="">
              Todas as dificuldades
            </option>

            <option value="Fácil">
              Fácil
            </option>

            <option value="Médio">
              Médio
            </option>

            <option value="Difícil">
              Difícil
            </option>
          </select>

          {/* Nova questão */}
          <button
            type="button"
            onClick={abrirModal}
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            <Plus size={20} />

            Nova Questão
          </button>
        </div>
      </div>

      {/* Contador */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Mostrando{" "}
          <strong className="text-slate-700">
            {questoesFiltradas.length}
          </strong>{" "}
          de{" "}
          <strong className="text-slate-700">
            {questoes.length}
          </strong>{" "}
          questões
        </p>

        {(pesquisa ||
          disciplina ||
          dificuldade) && (
          <button
            type="button"
            onClick={limparFiltros}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* Tabela */}
      <QuestionsTable
        questoes={questoesFiltradas}
        onEdit={editarQuestao}
        onDelete={excluirQuestao}
      />

      {/* Modal */}
      <QuestionModal
        isOpen={modalAberto}
        onClose={fecharModal}
        onSave={salvarQuestao}
        question={questaoSelecionada}
      />
    </MainLayout>
  );
}