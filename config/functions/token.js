'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../');

module.exports = {

    createToken: (data) => {
        const payload = {
            sub: data.token,
            iat: moment().unix(),
            exp: moment().add(5,'minutes').unix(),
        }
        return jwt.encode(payload, config.SECRET_TOKEN_SERVER)
    },
    decodeToken: (token) => {
        try {
            let auth = jwt.decode(token, config.SECRET_TOKEN_CLIENT)

            if (auth.sub === 'VALIDO') {
                return false;
            }

        } catch (e) {
            switch (e.toString()) {
                case 'Error: Token expired':
                    return e.toString();
                    break;
                case 'Error: Not enough or too many segments':
                    return e.toString();
                    break;
                case 'Error: Signature verification failed':
                    return e.toString();
                    break;
                default:
                    return e.toString();
                    break;
            }
        }
    },
    verifyToken: (req, res, next) => {
        const bearerHeader = req.headers['authorization'];
        // Check if bearer is undefined
        console.log(bearerHeader);
        if (typeof bearerHeader !== 'undefined') {
            // Split at the space
            const bearer = bearerHeader.split(' ');
            if (bearer[0] === 'JERA') {
                // Get token from array
                const bearerToken = bearer[1];
                // Set the token
                req.token = bearerToken;
                // Next middleware
                next();
            } else {
                res.sendStatus(403);
            }
        } else {
            // Forbidden
            res.sendStatus(403);
        }

    }
}