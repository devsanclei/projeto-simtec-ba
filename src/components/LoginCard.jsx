import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserCircle2,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

export default function LoginCard() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function realizarLogin(event) {
    event.preventDefault();

    setErro("");

    // Validação simples antes de enviar para o backend
    if (!email || !senha) {
      setErro("Preencha o e-mail e a senha.");
      return;
    }

    try {
      setCarregando(true);

      const resposta = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            senha,
          }),
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(
          dados.mensagem || "Não foi possível realizar o login."
        );
        return;
      }

      // Guarda o token recebido do backend
      localStorage.setItem("token", dados.token);

      // Guarda informações básicas do usuário
      localStorage.setItem(
        "usuario",
        JSON.stringify(dados.usuario)
      );

      // Envia o usuário para o Dashboard
      navigate("/dashboard");
    } catch (erro) {
      console.error("Erro ao realizar login:", erro);

      setErro(
        "Não foi possível conectar ao servidor."
      );
    } finally {
      setCarregando(false);
    }
  }

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

        <form onSubmit={realizarLogin}>
          <label className="font-semibold">
            E-mail
          </label>

          <div className="flex items-center border rounded-xl mt-2 mb-6 px-4 py-3">
            <Mail className="text-gray-400" />

            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              className="ml-3 w-full outline-none"
            />
          </div>

          <label className="font-semibold">
            Senha
          </label>

          <div className="flex items-center border rounded-xl mt-2 px-4 py-3">
            <Lock className="text-gray-400" />

            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) =>
                setSenha(event.target.value)
              }
              className="ml-3 w-full outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setMostrarSenha(!mostrarSenha)
              }
              className="text-gray-400 cursor-pointer"
            >
              {mostrarSenha ? (
                <EyeOff />
              ) : (
                <Eye />
              )}
            </button>
          </div>

          {erro && (
            <p className="mt-3 text-sm text-red-600">
              {erro}
            </p>
          )}

          <div className="flex justify-between mt-6 mb-8">
            <label className="flex gap-2 items-center text-sm">
              <input type="checkbox" />
              Lembrar-me
            </label>

            <a
              href="#"
              className="text-blue-700 text-sm"
            >
              Esqueci minha senha
            </a>
          </div>

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 transition text-white rounded-xl py-3 font-semibold"
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>

      </div>
    </div>
  );
}