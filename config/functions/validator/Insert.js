const Joi = require('joi');

const InsertCategoria = {
    Description: Joi.string().required(),
}

const InsertClientes = {
    Name: Joi.string().required(),
    Address: Joi.string().required(),
    Phone: Joi.string().required(),
}
const InsertFacturas = {
    Date: Joi.date().required(),
    Clientes_ID: Joi.number().integer().required()
}

const InsertProductos = {
    Description: Joi.string().required(),
    Price: Joi.string().required(),
    Categorias_ID: Joi.number().integer().required(),
    Proveedores_ID: Joi.number().integer().required()
}
const InsertProveedores = {
    Name: Joi.string().required(),
    Address: Joi.string().required(),
    Phone: Joi.string().required(),
}
const InsertVentas = {
    Quantity: Joi.string().required(),
    Facturas_ID: Joi.number().integer().required(),
    Productos_ID: Joi.number().integer().required()
}



module.exports = {
    InsertCategoria,
    InsertClientes,
    InsertFacturas,
    InsertProductos,
    InsertProveedores,
    InsertVentas

};