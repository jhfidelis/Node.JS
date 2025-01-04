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

// Criando formulário de cadastro de posts
    // Rotas
    app.get('/cadastro', function(req, res) {
        res.render('formulario'); // Método que vai "chamar" o arquivo que será exibido
    });

app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
});