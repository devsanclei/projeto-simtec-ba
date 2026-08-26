import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Toolbar from "../components/simulados/Toolbar";
import SimuladosTable from "../components/simulados/SimuladosTable";
import CreateSimulationModal from "../components/modals/CreateSimulationModal";

export default function Simulados() {

  const [modalAberto, setModalAberto] = useState(false);

  const [simulados, setSimulados] = useState([]);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const adicionarSimulado = (novoSimulado) => {

    setSimulados((simuladosAtuais) => [
      ...simuladosAtuais,
      {
        id: Date.now(),
        ...novoSimulado,
      },
    ]);

    fecharModal();
  };

  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-2">
        Simulados
      </h1>

      <p className="text-slate-500 mb-8">
        Gerencie os simulados cadastrados.
      </p>

      <Toolbar onNewSimulation={abrirModal} />

      <SimuladosTable simulados={simulados} />

      <CreateSimulationModal
        isOpen={modalAberto}
        onClose={fecharModal}
        onSave={adicionarSimulado}
      />

    </MainLayout>
  );
}