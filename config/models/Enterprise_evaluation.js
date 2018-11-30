
const sequelize = require('sequelize');
const connection = require('../conection');
const Sector = require('./Sector');
const Size = require('./Size');

const Enterprise_evaluation = connection.define('Enterprise_evaluation', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Contact_Name: {
        type: sequelize.STRING,
        field: 'Contact_Name'
    },
    Enterprise_Name: {
        type: sequelize.STRING,
        field: 'Enterprise_Name'
    },
    Position: {
        type: sequelize.STRING,
        field: 'Position'
    },
    Mail: {
        type: sequelize.STRING,
        field: 'Mail'
    },
    Address: {
        type: sequelize.STRING,
        field: 'Address'
    },
    City: {
        type: sequelize.STRING,
        field: 'City'
    },
    Expert: {
        type: sequelize.INTEGER,
        field: 'Expert',
    },
    Commune: {
        type: sequelize.STRING,
        field: 'Commune'
    },
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

Enterprise_evaluation.belongsTo(Size, { as: 'Size_ID_as', foreignKey: 'Size_ID' });
Enterprise_evaluation.belongsTo(Sector, { as: 'Sector_ID_as', foreignKey: 'Sector_ID' });

module.exports = Enterprise_evaluation;
