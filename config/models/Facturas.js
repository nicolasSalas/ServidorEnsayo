const sequelize = require('sequelize');
const connection = require('../conection');
const Clientes = require('./Clientes');

const Facturas = connection.define('Facturas', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Date: {
        type: sequelize.DATE,
        field: 'Date'
    }
}, {
    freezeTableName: true,
    operatorsAliases: false
});

Facturas.belongsTo(Clientes, {
    as: 'Clientes_as',
    foreignKey: 'Clientes_ID'
})

module.exports = Facturas;