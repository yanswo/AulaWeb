const express = require("express");
const router = express.Router();
const usuariosController = require("../controller/usuariosController").default;

const dados = {
  nome: "Alexandre Braga",
  status: "Ativo",
};

console.log(dados.nome);
router.get("/layout", (req, res) => {
  res.render("layout", { dados: dados });
});

/*
router.get('/usuarios', usuariosController.listarUsuarios);
router.get('/usuario/:id', usuariosController.atualizarUsuario);
router.post('/usuario', usuariosController.criarUsuario);
router.delete('/usuario/:id', usuariosController.excluirUsuario);
 */

//rota do hello world!!!
router.get("/helloworld", (req, res) => {
  res.send("Hello World!");
});

//rota de animação
router.get("/animate", (req, res) => {
  res.render("animate");
});
module.exports = router;
