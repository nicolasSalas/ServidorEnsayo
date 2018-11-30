const Joi = require('joi');

const InsertEnterprise_evaluation = {
    Sector_ID: Joi.number().integer().required(),
    Size_ID: Joi.number().integer().required(),
    Contact_Name: Joi.string().required(),
    Enterprise_Name: Joi.string().required(),
    Position: Joi.string().required(),
    Expert: Joi.number().integer().required(),
    Mail: Joi.string().email().required(),
    Address: Joi.string().required(),
    City: Joi.string().required(),
    Commune: Joi.string().required(),
}

const InsertEnterprise_selected = {
    Name: Joi.string().required(),
    Enterprise_Stored_ID: Joi.number().integer().required(),

}
const InsertEnterprise_stored = {
    Name: Joi.string().required(),
    Alias: Joi.string().required(),
    Web: Joi.string().required(),
    SubSector_ID: Joi.number().integer().required(),
    Contact_ID: Joi.number().integer().required()
}


const InsertLink = {
    Enterprise_Evaluation_ID: Joi.number().integer().required(),
    Token: Joi.string().required(),
    Rand: Joi.string().required(),
    Url: Joi.string().required(),
}





module.exports = {
    InsertLink,
    InsertEnterprise_stored,
    InsertEnterprise_selected,
    InsertEnterprise_evaluation,
};