// Chamando biblioteca HTTP do node
var http = require('http');

// Abrindo um servidor http
http.createServer(/*Funçao de callback*/function(req, res) {
    //res: Serve para mandar uma resposta ao usuário que está realizando uma requisição
    res.end("Olá");
}) 
.listen(8081); //listen: utilizado para definir a porta de rede que será utilizada pelo servidor

console.log("Servidor rodando!");