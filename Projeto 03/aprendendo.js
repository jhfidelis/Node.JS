const mongoose = require('mongoose'); // Constante para armazenar o mongoose

// Configurando o mongoose (Conectando a um banco do MongoDB)
    mongoose.Promise = global.Promise; // evitar erros durante o processo de desenvolvimento de uma app
    mongoose.connect("mongodb://localhost/aprendendo", {
        useNewUrlParser: true // configuração adicional para evitar erros com o MongoDB
    }).then(() => {
        console.log("MongoDB conectado com sucesso!");
    }).catch((erro) => {
        console.log("Houve um erro ao se conectar com o MongoDB: " + erro);
    });

// Definindo o model para Usuários
    const UsuarioSchema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }
    });

// Criando a collection
    mongoose.model(/*nome da collection*/'usuarios', /*model que referencia essa coleection*/UsuarioSchema);

// Criando um registro na collection usuário
const Usuario = mongoose.model('usuarios'); // Armazenando uma referência  do schema na constante

new Usuario({
    nome: "Henrique",
    sobrenome: "Fidelis",
    email: "henrique@email.com",
    idade: 20,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuário criado com sucesso!")
}).catch((err) => {
    console.log("Houve um erro na tentativa de criar um registro: " + err);
});