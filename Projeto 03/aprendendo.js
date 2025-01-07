const mongoose = require('mongoose'); // Constante para armazenar o mongoose

// Configurando o mongoose (Conectando a um banco do MongoDB)
mongoose.Promise = global.Promise; // evitar erros durante o processo de desenvolvimento de uma app
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true // configuração adicional para evitar erros com o MongoDB
}).then(() => {
    console.log("MongoDB conectado com sucesso!");
}).catch((erro) => {
    console.log("Houve um erro ao se conectar com o MongoDB: " + erro);
});