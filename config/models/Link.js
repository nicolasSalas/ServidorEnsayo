
const sequelize = require('sequelize');
const connection = require('../conection');
const Enterprise = require('./Enterprise_evaluation');

const Link = connection.define('Link', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Token: {
        type: sequelize.STRING,
        field: 'Token'
    },
    Rand: {
        type: sequelize.STRING,
        field: 'Rand'
    },
    Url: {
        type: sequelize.STRING,
        field: 'Url'
    },

},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

Link.belongsTo(Enterprise, { foreignKey: 'Enterprise_Evaluation_ID', targetKey: 'ID' });
module.exports = Link;
