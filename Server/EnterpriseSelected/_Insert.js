const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const Enterprise_selected = require('../../config/models/Enterprise_selected'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const { InsertEnterprise_selected } = require('../../config/functions/validator/Insert'); // VALIDATOR
const KEY = require('../../config/functions/token'); //TOKEN VALIDATOR
const { SECRET_TOKEN_CLIENT } = require('../../config'); //TOKEN

router.post('/InsertEnterprise_Selected', KEY.verifyToken,  urlencodedParser, (req, res) => {

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
            } = Joi.validate(data, InsertEnterprise_selected);

            if (error) {
                res
                    .status(401)
                    .json({
                        success: false,
                        error: error.details
                    });
            } else {
                CRUD.Insert(Enterprise_selected, data, res);
            }
        }
    });
});

module.exports = router;