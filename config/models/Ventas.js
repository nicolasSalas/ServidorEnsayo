const sequelize = require('sequelize');
const connection = require('../conection');
const Facturas = require('./Facturas');
const Productos = require('./Productos');

const Ventas = connection.define('Ventas', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Quantity: {
        type: sequelize.INTEGER,
        field: 'Quantity'
    }
}, {
    freezeTableName: true,
    operatorsAliases: false
});

Ventas.belongsTo(Facturas, {
    as: 'Factura_as',
    foreignKey: 'Facturas_ID'
});
Ventas.belongsTo(Productos, {
    as: 'Productos_as',
    foreignKey: 'Productos_ID'
});

module.exports = Ventas;