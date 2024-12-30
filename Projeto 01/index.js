// Chamando a biblioteca express
const express = require("express"); // O módulo express retorna uma função para a variável
const app = express();              /* A variável irá receber uma instância inteira do framework
                                     - Todo o uso do express será feito através dessa variável */

// Criando rota principal da aplicação, enviando um arquivo HTML
// Parâmetros(nome da rota, função de callback)
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/html/index.html"); // O "__dirname" é utilizado para chamar o diretório raiz da aplicação
});

// Criando rota para a página 'sobre', enviando um arquivo HTML
app.get("/sobre", function(req, res) {
    res.sendFile(__dirname + "/html/sobre.html");
});

// Criando rota para a página 'blog'
app.get("/blog", function(req, res) {
    res.send("Bem-vindo ao meu blog!");
});

// Criando rota para a página 'ola' com parâmetro
app.get("/ola/:nome/:cargo", function(req, res) {
    res.send("Ola, "+ req.params.nome);
});

// Abrir um servidor com express
// Parâmetros(nº da porta, função de callback)
app.listen(8081, function() {
    console.log("Servidor rodando na URL http://localhost:8081");
}); // Essa função deve SEMPRE ser a última do código
