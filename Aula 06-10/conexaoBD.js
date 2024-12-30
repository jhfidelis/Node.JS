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

// Criando a tabela de postagens
const Postagem = sequelize.define(/*nome da tabela*/'postagens', /*campos da tabela*/ {
    titulo: { // Nome do atributo
        type: Sequelize.STRING // Tipo do atributo
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// Gerar um model diretamente no MySQL
Postagem.sync(/*Obj para garantir a geração da tabela*/{force: true}); // Função que sincroniza o model com o MySQL
/* Sempre comentar ou apagar o comando para que ele seja executado apenas 1 vez */

// Criando um registro na tabela de postagem
Postagem.create({
    titulo: "Título da postagem",
    conteudo: "Conteúdo da postagem que está sendo criada"
}); // Sempre comentar ou apagar o comando para que ele seja executado apenas 1 vez

// Criando model para usuários
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// Sincronizando o model com o BD
Usuario.sync({force: true});

// Criando um registro na tabela de usuários
Usuario.create({
    nome: "Henrique",
    sobrenome: "Fidelis",
    idade: 20,
    email: "fidelis.henrique@gmail.com"
});