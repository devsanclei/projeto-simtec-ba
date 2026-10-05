import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import DevNavigation from "../components/DevNavigation";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Simulados from "../pages/Simulados";
import Questoes from "../pages/Questoes";
import Disciplinas from "../pages/Disciplinas";
import Professores from "../pages/Professores";
import Usuarios from "../pages/Usuarios";
import Relatorios from "../pages/Relatorios";
import Configuracoes from "../pages/Configuracoes";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <DevNavigation />

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        <Route path="/simulados" element={<Simulados />} />

        <Route path="/questoes" element={<Questoes />} />

        <Route path="/disciplinas" element={<Disciplinas />} />
        
        <Route path="/professores" element={<Professores />} />
        
        <Route path="/usuarios" element={<Usuarios />} />

        <Route path="/relatorios" element={<Relatorios />} />
        
        <Route path="/configuracoes" element={<Configuracoes />} />

      </Routes>

    </BrowserRouter>
  );
}