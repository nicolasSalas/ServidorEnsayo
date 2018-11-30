const Joi = require('joi');

//READ VALIDATOR SERVER

const ReadLink = {
    Rand: Joi.string().required(),
}

const ReadSectorID_From_Enterprise_Evaluation = {
    ID: Joi.number().integer().required(),
}

const ReadSubSector_And_ID = {
    Sector_ID: Joi.number().integer().required(),
}

const ReadEnterprise_Stored = {
    Subsector_ID: Joi.number().integer().required(),
}
const ReadMailSurveyed_And_ID = {
    Enterprise_Evaluation_ID: Joi.number().integer().required()
}

module.exports = {
    ReadLink,
    ReadSectorID_From_Enterprise_Evaluation,
    ReadSubSector_And_ID,
    ReadEnterprise_Stored,
    ReadMailSurveyed_And_ID
};