const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const urlencodedParser = bodyParser.urlencoded({extended: false})

const Enterprise_stored = require('../../config/models/Enterprise_stored'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {ReadEnterprise_Stored} = require('../../config/functions/validator/Read'); // VALIDATOR
const KEY = require('../../config/functions/token'); //TOKEN VALIDATOR
const { SECRET_TOKEN_CLIENT } = require('../../config'); //TOKEN

router.post('/GetEnterprise_Stored', KEY.verifyToken,  urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    jwt.verify(req.token, SECRET_TOKEN_CLIENT, (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            let data = req.body;
            const {
                error
            } = Joi.validate(data, ReadEnterprise_Stored);

            if (error) {
                res
                    .status(401)
                    .json({
                        success: false,
                        error: error.details
                    });
            } else {
                CRUD.ReadWhere(Enterprise_stored, data, res);

            }
        }
    });
});

module.exports = router;