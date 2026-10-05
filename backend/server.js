require("dotenv").config();

const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes");
const pool = require("./config/database");

const app = express();

app.use(cors());
const PORT = 3000;

app.use(express.json());

app.use("/", healthRoutes);
app.use("/api/auth", authRoutes);

// Testa a conexão com o PostgreSQL ao iniciar a API
pool
  .query("SELECT NOW()")
  .then((resultado) => {
    console.log("Banco de dados conectado!");
    console.log(
      "Horário do PostgreSQL:",
      resultado.rows[0].now
    );
  })
  .catch((erro) => {
    console.error(
      "Erro ao conectar com o banco de dados:",
      erro.message
    );
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});