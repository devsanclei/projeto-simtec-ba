import LogoPanel from "../components/LogoPanel";
import LoginCard from "../components/LoginCard";

export default function Login() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <section className="w-full max-w-7xl h-[90vh] flex rounded-3xl overflow-hidden shadow-2xl bg-white">

        <LogoPanel />

        <LoginCard />

      </section>
    </main>
  );
}