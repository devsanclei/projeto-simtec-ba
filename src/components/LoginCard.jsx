import { UserCircle2, Mail, Lock, Eye } from "lucide-react";

export default function LoginCard() {
  return (
    <div className="w-3/5 flex items-center justify-center bg-white">

      <div className="w-full max-w-md">

        <div className="flex justify-center">
          <UserCircle2
            size={90}
            className="text-blue-700"
          />
        </div>

        <h2 className="text-center text-4xl font-bold mt-6">
          Bem-vindo!
        </h2>

        <p className="text-center text-gray-500 mt-3 mb-10">
          Entre para acessar o SIMTEC BA
        </p>

        <label className="font-semibold">
          E-mail
        </label>

        <div className="flex items-center border rounded-xl mt-2 mb-6 px-4 py-3">

          <Mail className="text-gray-400" />

          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="ml-3 w-full outline-none"
          />

        </div>

        <label className="font-semibold">
          Senha
        </label>

        <div className="flex items-center border rounded-xl mt-2 px-4 py-3">

          <Lock className="text-gray-400" />

          <input
            type="password"
            placeholder="Digite sua senha"
            className="ml-3 w-full outline-none"
          />

          <Eye className="text-gray-400 cursor-pointer" />

        </div>

        <div className="flex justify-between mt-6 mb-8">

          <label className="flex gap-2 items-center text-sm">
            <input type="checkbox" />
            Lembrar-me
          </label>

          <a href="#" className="text-blue-700 text-sm">
            Esqueci minha senha
          </a>

        </div>

        <button className="w-full bg-blue-700 hover:bg-blue-800 transition text-white rounded-xl py-3 font-semibold">
          Entrar
        </button>

      </div>

    </div>
  );
}