import MainLayout from "../components/layout/MainLayout";
import Toolbar from "../components/simulados/Toolbar";
import SimuladosTable from "../components/simulados/SimuladosTable";

export default function Simulados() {
  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-2">
        Simulados
      </h1>

      <p className="text-slate-500 mb-8">
        Gerencie os simulados cadastrados.
      </p>

      <Toolbar />

      <SimuladosTable />

    </MainLayout>
  );
}