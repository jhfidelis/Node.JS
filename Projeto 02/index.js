const express = require('express');
const app = express();
const handlebars = require('express-handlebars');// Constante que vai receber o módulo express-handlebars
const bodyParser = require('body-parser'); //Constante que vai receber o módulo body-parser
const Post = require('./models/Post');// Constnte que recebe o model Post para ser manipulado por esse arquivo
const { where } = require('sequelize');

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
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts) { // Retornará todos os registros da tabela Post
            res.render('home', { posts: posts.map(post => post.toJSON()) });
        });
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

    // Rota para deletar uma postagem
    app.get('/deletar/:id', function(req, res) {
        Post.destroy({where: {'id': req.params.id}}).then(function() {
            res.send("Postagem deletada com sucesso");
        }).catch(function(erro) {
            res.send("Esta postagem não existe!")
        });
    });

app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
});