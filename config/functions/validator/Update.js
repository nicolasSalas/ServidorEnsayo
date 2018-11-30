const Joi = require('joi');

const UpdateMailSurveyedStatus = {
    Enterprise_Evaluation_ID: Joi.number().integer().required(),
    status: Joi.number().integer().required(),
}

module.exports = {
    UpdateMailSurveyedStatus
};