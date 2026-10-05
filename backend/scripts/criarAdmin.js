require("dotenv").config();

const bcrypt = require("bcryptjs");
const pool = require("../config/database");

async function criarAdmin() {
  try {
    const nome = "Administrador";
    const email = "admin@simtec.com";
    const senha = "123456";
    const perfil = "administrador";

    // Verifica se o usuário já existe
    const usuarioExistente = await pool.query(
      "SELECT id FROM usuarios WHERE email = $1",
      [email]
    );

    if (usuarioExistente.rows.length > 0) {
      console.log("Já existe um usuário com esse e-mail.");
      return;
    }

    // Criptografa a senha antes de salvar no banco
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    // Cadastra o administrador
    const resultado = await pool.query(
      `
        INSERT INTO usuarios (nome, email, senha, perfil)
        VALUES ($1, $2, $3, $4)
        RETURNING id, nome, email, perfil, ativo, criado_em
      `,
      [nome, email, senhaCriptografada, perfil]
    );

    console.log("Administrador criado com sucesso!");
    console.log(resultado.rows[0]);
  } catch (erro) {
    console.error("Erro ao criar administrador:");
    console.error(erro.message);
  } finally {
    await pool.end();
  }
}

criarAdmin();