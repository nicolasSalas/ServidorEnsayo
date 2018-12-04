const sequelize = require('sequelize');
const connection = require('../conection');
const Categoria = require('./Categoria');
const Proveedores = require('./Proveedores');

const Productos = connection.define('Productos', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Description: {
        type: sequelize.STRING,
        field: 'Description'
    },
    Price: {
        type: sequelize.STRING,
        field: 'Price'
    }
}, {
    freezeTableName: true,
    operatorsAliases: false
});

Productos.belongsTo(Categoria, {
    as: 'Categoria_as',
    foreignKey: 'Categorias_ID'
});
Productos.belongsTo(Proveedores, {
    as: 'Proveedores_as',
    foreignKey: 'Proveedores_ID'
});

module.exports = Productos;