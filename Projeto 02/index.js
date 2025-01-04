const express = require('express');
const app = express();
const handlebars = require('express-handlebars');// Constante que vai receber o módulo express-handlebars
const Sequelize = require('sequelize');

// Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Conexão com o banco de dados MySWL
    const sequelize = new Sequelize('bdTeste', 'root', 'root', {
        host: "localhost",
        dialect: 'mysql'
    });

// Rotas
    // Criando formulário de cadastro de posts
    app.get('/cadastro', function(req, res) {
        res.render('formulario'); // Método que vai "chamar" o arquivo que será exibido
    });

    // Criando rota para enviar os dados do formulário
    app.post('/enviarForm', function(req, res) {
        res.send('Formulário recebido');
    });

app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
});