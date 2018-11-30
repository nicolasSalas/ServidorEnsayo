
const sequelize = require('sequelize');
const connection = require('../conection');
const Enterprise_stored = require('./Enterprise_stored');

const Enterprise_selected = connection.define('Enterprise_selected', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: sequelize.STRING,
        field: 'Name'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

Enterprise_selected.belongsTo(Enterprise_stored, { as: 'Enterprise_Stored_ID_as', foreignKey: 'Enterprise_Stored_ID' });

module.exports = Enterprise_selected;
