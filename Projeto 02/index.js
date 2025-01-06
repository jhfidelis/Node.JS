const express = require('express');
const app = express();
const handlebars = require('express-handlebars');// Constante que vai receber o módulo express-handlebars
const bodyParser = require('body-parser'); //Constante que vai receber o módulo body-parser
const Post = require('./models/Post')// Constnte que recebe o model Post para ser manipulado por esse arquivo

// Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

// Rotas

    // Rota principal do sistema que retornará para a 'home'
    app.get('/', function(req, res) {
        res.render('home');
    })

    // Criando formulário de cadastro de posts
    app.get('/cadastro', function(req, res) {
        res.render('formulario'); // Método que vai "chamar" o arquivo que será exibido
    });

    // Criando rota para enviar os dados do formulário
    app.post('/enviarForm', function(req, res) {
        //Criando uma instância de Post
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function() { // Verifica se a instância foi criada
            res.redirect('/');
        }).catch(function(erro) { // função que retorna o erro no proceso de criação
            res.send("Houve um erro: " + erro);
        });
    });

app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
});