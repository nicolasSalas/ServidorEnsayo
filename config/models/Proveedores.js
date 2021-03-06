const sequelize = require('sequelize');
const connection = require('../conection');

const Proveedores = connection.define('Proveedores', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: sequelize.STRING,
        field: 'Name'
    },
    Address: {
        type: sequelize.STRING,
        field: 'Address'
    },
    Phone: {
        type: sequelize.STRING,
        field: 'Phone'
    },
}, {
    freezeTableName: true,
    operatorsAliases: false
});


module.exports = Proveedores;