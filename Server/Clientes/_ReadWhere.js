const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const urlencodedParser = bodyParser.urlencoded({
    extended: false
})

const Categoria = require('../../config/models/Categoria'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {
    ReadClientes_And_ID
} = require('../../config/functions/validator/Read'); // VALIDATOR
const {
    SECRET_TOKEN_CLIENT
} = require('../../config'); //TOKEN
const KEY = require('../../config/functions/token'); //TOKEN VALIDATOR

router.post('/GetCliente_ID', KEY.verifyToken, urlencodedParser, (req, res) => {

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
            } = Joi.validate(data, ReadClientes_And_ID);

            if (error) {
                res
                    .status(401)
                    .json({
                        success: false,
                        error: error.details
                    });
            } else {
                CRUD.ReadWhere(Categoria, data, res);

            }
        }
    });


});

module.exports = router;