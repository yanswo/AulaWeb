const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function gerarSenha(senha) {
    return bcrypt.hash(senha, 8);
}

function compararSenha(senha, hash) {
    return bcrypt.compare(senha, hash);
}

function gerarToken(params = { 
        token : token,
        salt : 'pnaslkdhue'
    }) {
    return jwt.sign(params, process.env.SECRET, {
        expiresIn: 86400
    });
}
module.exports = {gerarSenha, compararSenha, gerarToken};

