'use strict'
const services = require('./token');

module.exports = {

    login: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.findOne({
                    where: {
                        username: data.username,
                        password: data.password
                    }
                })
            )
            .then(result => {
                if (!result) {
                    res.status(404);
                    res.json({
                        success: false,
                        data: 'El Usuario no existe'
                    })
                    
                } else {
                    res.status(200);
                    res.json({
                        success: true,
                        data: result,
                        token: services.createToken(data)
                    })
                }
            })
            .catch(error => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            })
    }
}