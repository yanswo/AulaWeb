const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const auth = require("../utils/auth");

//listar todos os usuários
const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      select: {
        login: true,
        senha: true,
        permissao: true,
      },
    });

    //res.json(usuarios);
    res.render("listarUsuarios", { dados: usuarios });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//criar novo usuário
const criarUsuario = async (req, res) => {
  try {
    const { login, senha, permissao } = req.body;
    const novaSenha = auth.gerarSenha(senha);

    const usuario = await prisma.usuario.create({
      data: {
        login,
        novaSenha,
        permissao: {
          create: {
            nome: "USER",
          },
        },
      },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//excluir usuário
const excluirUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await prisma.usuario.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//atualizar usuário
const atualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { login, senha, permissao } = req.body;
    const usuario = await prisma.usuario.update({
      where: {
        id: parseInt(id),
      },
      data: {
        login,
        senha,
        permissao,
      },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//autenticar usuário
const autenticarUsuario = async (req, res) => {
  try {
    const { login, senha } = req.body;
    const usuario = await prisma.usuario.findUnique({
      where: {
        login,
      },
    });
    if (!usuario) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }
    const senhaValida = await auth.compararSenha(senha, usuario.senha);
    if (!senhaValida) {
      return res
        .status(400)
        .json({ error: "Senha inválida, tente novamente " });
    }
    const objToken = usuario.id + usuario.login;
    const salt = process.env.SALT;

    const token = auth.gerarToken(objToken + salt);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  listarUsuarios,
  criarUsuario,
  excluirUsuario,
  atualizarUsuario,
};
