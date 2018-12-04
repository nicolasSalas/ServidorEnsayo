const sequelize = require('sequelize');
//Nombre BD , username, password LOCALHOST
const connection = new sequelize('bd_andes', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false, // disable aliases
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
})
/* const sequelize = require('sequelize');
//Nombre BD , username, password AWS
const connection = new sequelize('Icorp', 'dev', 'index_0011',
    {
        host: 'testing.cob64ast3qap.us-west-2.rds.amazonaws.com',
        dialect: 'mysql',
        operatorsAliases: false, // disable aliases
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    }) */

module.exports = connection;