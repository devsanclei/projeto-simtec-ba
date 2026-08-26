import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Toolbar from "../components/simulados/Toolbar";
import SimuladosTable from "../components/simulados/SimuladosTable";
import CreateSimulationModal from "../components/modals/CreateSimulationModal";

export default function Simulados() {

  const [modalAberto, setModalAberto] = useState(false);

  const [simulados, setSimulados] = useState([]);

  const [simuladoSelecionado, setSimuladoSelecionado] =
    useState(null);

  const abrirModal = () => {
    setSimuladoSelecionado(null);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setSimuladoSelecionado(null);
  };

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

  const editarSimulado = (simulado) => {
    setSimuladoSelecionado(simulado);
    setModalAberto(true);
  };

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

  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-2">
        Simulados
      </h1>

      <p className="text-slate-500 mb-8">
        Gerencie os simulados cadastrados.
      </p>

      <Toolbar
        onNewSimulation={abrirModal}
      />

      <SimuladosTable
        simulados={simulados}
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