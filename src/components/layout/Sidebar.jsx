import {
  LayoutDashboard,
  FileText,
  BookOpen,
  GraduationCap,
  Users,
  ClipboardList,
  BarChart3,
  Settings,
} from "lucide-react";

import MenuItem from "./MenuItem";

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-3xl font-bold text-blue-400">
          SIMTEC BA
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Sistema Inteligente de Simulados
        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        <MenuItem
          to="/dashboard"
          icon={LayoutDashboard}
          label="Dashboard"
        />

        <MenuItem
          to="/simulados"
          icon={ClipboardList}
          label="Simulados"
        />

        <MenuItem
          to="/questoes"
          icon={FileText}
          label="Questões"
        />

        <MenuItem
          to="/disciplinas"
          icon={BookOpen}
          label="Disciplinas"
        />

        <MenuItem
          to="/professores"
          icon={GraduationCap}
          label="Professores"
        />

        <MenuItem
          to="/usuarios"
          icon={Users}
          label="Usuários"
        />

        <MenuItem
          to="/relatorios"
          icon={BarChart3}
          label="Relatórios"
        />

        <MenuItem
          to="/configuracoes"
          icon={Settings}
          label="Configurações"
        />

      </nav>

      <div className="border-t border-slate-700 p-5">

        <div className="font-semibold">
          Administrador
        </div>

        <div className="text-sm text-slate-400">
          admin@simtec.ba.gov.br
        </div>

      </div>

    </aside>
  );
}