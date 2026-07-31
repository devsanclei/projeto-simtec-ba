import { NavLink } from "react-router-dom";

export default function MenuItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
          isActive
            ? "bg-blue-700 text-white"
            : "text-slate-300 hover:bg-blue-800 hover:text-white"
        }`
      }
    >
      <Icon size={20} />
      <span>{label}</span>
    </NavLink>
  );
}