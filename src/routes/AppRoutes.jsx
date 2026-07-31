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

      </Routes>

    </BrowserRouter>
  );
}