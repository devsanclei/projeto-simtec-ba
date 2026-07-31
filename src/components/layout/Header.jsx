import SearchInput from "../ui/SearchInput";
import NotificationButton from "../ui/NotificationButton";
import UserMenu from "../ui/UserMenu";

export default function Header() {
  return (

    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between">

      <div>

        <h1 className="text-2xl font-bold text-slate-700">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Bem-vindo ao Sistema Inteligente de Simulados
        </p>

      </div>

      <div className="flex items-center gap-6">

        <SearchInput />

        <NotificationButton />

        <UserMenu />

      </div>

    </header>

  );
}