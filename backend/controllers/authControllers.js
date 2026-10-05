const bcrypt = require("bcryptjs");

const pool = require("../config/database");

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verifica se os campos foram preenchidos
    if (!email || !senha) {
      return res.status(400).json({
        mensagem: "E-mail e senha são obrigatórios.",
      });
    }

    // Procura o usuário pelo e-mail
    const resultado = await pool.query(
      `
        SELECT id, nome, email, senha, perfil, ativo
        FROM usuarios
        WHERE email = $1
      `,
      [email]
    );

    // Verifica se o usuário existe
    if (resultado.rows.length === 0) {
      return res.status(401).json({
        mensagem: "E-mail ou senha inválidos.",
      });
    }

    const usuario = resultado.rows[0];

    // Verifica se o usuário está ativo
    if (!usuario.ativo) {
      return res.status(403).json({
        mensagem: "Usuário desativado.",
      });
    }

    // Compara a senha enviada com o hash salvo no banco
    const senhaCorreta = await bcrypt.compare(
      senha,
      usuario.senha
    );

    if (!senhaCorreta) {
      return res.status(401).json({
        mensagem: "E-mail ou senha inválidos.",
      });
    }

    // Login realizado com sucesso
    return res.status(200).json({
      mensagem: "Login realizado com sucesso.",
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        perfil: usuario.perfil,
      },
    });
  } catch (erro) {
    console.error("Erro ao realizar login:", erro);

    return res.status(500).json({
      mensagem: "Erro interno do servidor.",
    });
  }
};

module.exports = {
  login,
};