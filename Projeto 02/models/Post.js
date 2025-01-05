const bd = require('./bd'); // contante que recebe o arquivo bd.js

//criando tabela de postagens
const Post = bd.sequelize.define('postagens', {
    titulo: {
        type: bd.Sequelize.STRING
    },
    conteudo: {
        type: bd.Sequelize.TEXT
    }
});

// Post.sync({force: true});

module.exports = Post // Permitir o acesso do post através de outros arquivos