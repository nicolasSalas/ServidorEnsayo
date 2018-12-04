const Joi = require('joi');

//READ VALIDATOR SERVER


const ReadFacturas_And_ID = {
    Clientes_ID: Joi.number().integer().required(),
}
const ReadVentas_And_ID = {
    Facturas_ID: Joi.number().integer().required(),
}
const ReadProductos_And_ID = {
    Proveedores_ID: Joi.number().integer().required()
}

module.exports = {
    ReadFacturas_And_ID,
    ReadProductos_And_ID,
    ReadVentas_And_ID
};