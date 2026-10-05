import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [autenticado, setAutenticado] = useState(null);

  useEffect(() => {
    async function verificarAutenticacao() {
      const token = localStorage.getItem("token");

      // Se não existe token, não está autenticado
      if (!token) {
        setAutenticado(false);
        return;
      }

      try {
        const resposta = await fetch(
          `${import.meta.env.VITE_API_URL}/api/auth/perfil`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Token inválido ou expirado
        if (!resposta.ok) {
          localStorage.removeItem("token");
          localStorage.removeItem("usuario");

          setAutenticado(false);
          return;
        }

        // Token válido
        setAutenticado(true);
      } catch (erro) {
        console.error(
          "Erro ao verificar autenticação:",
          erro
        );

        setAutenticado(false);
      }
    }

    verificarAutenticacao();
  }, []);

  // Enquanto o backend verifica o token
  if (autenticado === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">
          Verificando autenticação...
        </p>
      </div>
    );
  }

  // Token inexistente, inválido ou expirado
  if (!autenticado) {
    return <Navigate to="/" replace />;
  }

  // Token válido
  return children;
}