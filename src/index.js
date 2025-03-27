//cria o objeto moment que importa do componente moment
//const moment = require('moment');
const express = require('express');
const path = require('path');
const rotas = require('./rota/rotas');
const bodyParser = require('body-parser');

//express é um framework
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'views/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(rotas);

//const porta = 3000;
app.listen(process.env.PORTA, () => {
    console.log('Servidor rodando na porta ' + process.env.PORTA);
});

/*
const dados = "<h1>Hello World!</h1><p style= 'color: #ff0000;'>Exemplo de utilização do Node.js com Express</p>";
const data = moment().format('DD/MM/YYYY HH:mm:ss');

//rota do hello world!!!
app.get('/helloworld', (req, res) => {
    res.send(dados+ " " + "<h3>"+data+"</h3>");
});
*/
