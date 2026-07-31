import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <button className="relative p-3 rounded-xl hover:bg-slate-100 transition">

      <Bell size={22}/>

      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

    </button>
  );
}