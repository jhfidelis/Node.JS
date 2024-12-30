//Chamando a biblioteca sequelize
const Sequelize = require('sequelize');
//Comando para fazer a conexão com o banco de dados
const sequelize = new Sequelize(/*Nome do banco*/'bdTeste', /*Usuário*/'root', /*Senha*/'root', /*Objeto JSON*/{
    /*Servidor que está rodando o MySQL*/host: "localhost",
    /*Qual tipo de BD será a conexão*/ dialect: 'mysql'
});

// Testar o funcionamento da conexão
sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!");
}).catch(function(erro) {
    console.log("Falha ao se conectar: " + erro);
});