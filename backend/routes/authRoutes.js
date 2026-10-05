const express = require("express");

const { login } = require("../controllers/authControllers");
const verificarToken = require("../middlewares/authMiddlewares");

const router = express.Router();

// Login
router.post("/login", login);

// Rota protegida para testar autenticação
router.get("/perfil", verificarToken, (req, res) => {
  return res.status(200).json({
    mensagem: "Acesso autorizado.",
    usuario: req.usuario,
  });
});

module.exports = router;