const express = require('express');
const app = express();
const handlebars = require('express-handlebars');// Constante que vai receber o módulo express-handlebars
const bodyParser = require('body-parser'); //Constante que vai receber o módulo body-parser

// Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

// Rotas
    // Criando formulário de cadastro de posts
    app.get('/cadastro', function(req, res) {
        res.render('formulario'); // Método que vai "chamar" o arquivo que será exibido
    });

    // Criando rota para enviar os dados do formulário
    app.post('/enviarForm', function(req, res) {
        var texto1 = req.body.titulo;
        var texto2 = req.body.conteudo;
        res.send("Titulo: " + texto1 + " Conteudo: " + texto2);
    });

app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
});