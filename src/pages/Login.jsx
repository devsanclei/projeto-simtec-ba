import LogoPanel from "../components/LogoPanel";
import LoginCard from "../components/LoginCard";

export default function Login() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 flex items-center justify-center p-6">

      <section className="w-full max-w-7xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex">

        <LogoPanel />

        <LoginCard />

      </section>

    </main>
  );
}