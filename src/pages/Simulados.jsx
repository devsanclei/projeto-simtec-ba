import { useMemo, useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Toolbar from "../components/simulados/Toolbar";
import SimuladosTable from "../components/simulados/SimuladosTable";
import CreateSimulationModal from "../components/modals/CreateSimulationModal";

export default function Simulados() {

  const [modalAberto, setModalAberto] = useState(false);

  const [simulados, setSimulados] = useState([]);

  const [simuladoSelecionado, setSimuladoSelecionado] =
    useState(null);

  // Filtros
  const [pesquisa, setPesquisa] = useState("");

  const [disciplina, setDisciplina] =
    useState("");

  const [status, setStatus] =
    useState("");

  // --------------------------------
  // MODAL
  // --------------------------------

  const abrirModal = () => {
    setSimuladoSelecionado(null);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setSimuladoSelecionado(null);
  };

  // --------------------------------
  // CRIAR / EDITAR
  // --------------------------------

  const adicionarSimulado = (novoSimulado) => {

    if (simuladoSelecionado) {

      setSimulados((simuladosAtuais) =>
        simuladosAtuais.map((simulado) =>
          simulado.id === simuladoSelecionado.id
            ? {
                ...simulado,
                ...novoSimulado,
              }
            : simulado
        )
      );

    } else {

      setSimulados((simuladosAtuais) => [
        ...simuladosAtuais,
        {
          id: Date.now(),
          ...novoSimulado,
        },
      ]);

    }

    fecharModal();
  };

  // --------------------------------
  // EDITAR
  // --------------------------------

  const editarSimulado = (simulado) => {
    setSimuladoSelecionado(simulado);
    setModalAberto(true);
  };

  // --------------------------------
  // EXCLUIR
  // --------------------------------

  const excluirSimulado = (id) => {

    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este simulado?"
    );

    if (!confirmar) {
      return;
    }

    setSimulados((simuladosAtuais) =>
      simuladosAtuais.filter(
        (simulado) => simulado.id !== id
      )
    );
  };

  // --------------------------------
  // FILTROS
  // --------------------------------

  const simuladosFiltrados = useMemo(() => {

    return simulados.filter((simulado) => {

      const correspondePesquisa =
        simulado.nome
          .toLowerCase()
          .includes(pesquisa.toLowerCase());

      const correspondeDisciplina =
        disciplina === "" ||
        simulado.disciplina === disciplina;

      const correspondeStatus =
        status === "" ||
        simulado.status === status;

      return (
        correspondePesquisa &&
        correspondeDisciplina &&
        correspondeStatus
      );
    });

  }, [simulados, pesquisa, disciplina, status]);

  // --------------------------------
  // LIMPAR FILTROS
  // --------------------------------

  const limparFiltros = () => {
    setPesquisa("");
    setDisciplina("");
    setStatus("");
  };

  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-2">
        Simulados
      </h1>

      <p className="text-slate-500 mb-8">
        Gerencie os simulados cadastrados.
      </p>

      <Toolbar
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        disciplina={disciplina}
        setDisciplina={setDisciplina}
        status={status}
        setStatus={setStatus}
        limparFiltros={limparFiltros}
        onNewSimulation={abrirModal}
      />

      {/* Contador */}
      <div className="flex justify-between items-center mb-4">

        <p className="text-sm text-slate-500">

          Mostrando{" "}
          <strong className="text-slate-700">
            {simuladosFiltrados.length}
          </strong>{" "}
          de{" "}
          <strong className="text-slate-700">
            {simulados.length}
          </strong>{" "}
          simulados

        </p>

      </div>

      <SimuladosTable
        simulados={simuladosFiltrados}
        onEdit={editarSimulado}
        onDelete={excluirSimulado}
      />

      <CreateSimulationModal
        isOpen={modalAberto}
        onClose={fecharModal}
        onSave={adicionarSimulado}
        simulation={simuladoSelecionado}
      />

    </MainLayout>
  );
}