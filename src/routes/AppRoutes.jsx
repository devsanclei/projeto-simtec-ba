import { BrowserRouter, Routes, Route } from "react-router-dom";

import DevNavigation from "../components/DevNavigation";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <DevNavigation />

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

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