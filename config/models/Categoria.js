const sequelize = require('sequelize');
const connection = require('../conection');

const Categoria = connection.define('Categoria', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Description: {
        type: sequelize.STRING,
        field: 'Description'
    }
}, {
    freezeTableName: true,
    operatorsAliases: false
});


module.exports = Categoria;