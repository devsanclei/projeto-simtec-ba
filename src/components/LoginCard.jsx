import { UserCircle2, Mail, Lock, Eye } from "lucide-react";

export default function LoginCard() {
  return (
    <div className="w-3/5 bg-white flex items-center justify-center p-10">
      <div className="w-full max-w-md">

        {/* Ícone */}
        <div className="flex justify-center mb-6">
          <UserCircle2
            size={80}
            className="text-blue-700"
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-slate-800">
          Bem-vindo!
        </h1>

        <p className="text-center text-slate-500 mt-2 mb-8">
          Faça login para acessar o sistema.
        </p>

        {/* Email */}
        <div className="mb-5">

          <label className="font-semibold text-slate-700">
            E-mail
          </label>

          <div className="flex items-center border rounded-xl mt-2 px-4 py-3">

            <Mail className="text-gray-400" size={20} />

            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="ml-3 w-full outline-none"
            />

          </div>

        </div>

        {/* Senha */}

        <div className="mb-5">

          <label className="font-semibold text-slate-700">
            Senha
          </label>

          <div className="flex items-center border rounded-xl mt-2 px-4 py-3">

            <Lock className="text-gray-400" size={20} />

            <input
              type="password"
              placeholder="Digite sua senha"
              className="ml-3 w-full outline-none"
            />

            <Eye
              className="text-gray-400 cursor-pointer"
              size={20}
            />

          </div>

        </div>

        {/* Checkbox */}

        <div className="flex justify-between items-center mb-8">

          <label className="flex items-center gap-2 text-sm">

            <input type="checkbox" />

            Lembrar-me

          </label>

          <a
            href="#"
            className="text-blue-700 text-sm"
          >
            Esqueceu a senha?
          </a>

        </div>

        {/* Botão */}

        <button className="w-full bg-blue-700 hover:bg-blue-800 transition text-white py-3 rounded-xl font-semibold">

          Entrar

        </button>

      </div>
    </div>
  );
}