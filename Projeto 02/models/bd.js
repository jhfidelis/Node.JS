const Sequelize = require('sequelize');

// Conexão com o banco de dados MySWL
const sequelize = new Sequelize('bdPostApp', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};