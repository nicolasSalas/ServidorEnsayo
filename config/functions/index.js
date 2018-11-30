'use strict'
const services = require('./token');

module.exports = {

    InsertPrivateUser: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertVariables: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertVariablesSelected: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertSurveyed: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertSize: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertRelationship: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertMailSurveyed: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertFactor: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertEnterpriseStored: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertEnterpriseSelected: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertContact: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertQuestions: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });

    },
    InsertLink: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertPublicUser: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertAnswersToQuestion: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertSector: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertSubSector: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertEnterpriseSubSector: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertPerson: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertEnterprise: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertQuestionsAlternative: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertQuestionnaire: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    update: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.update({
                    username: data.username
                }, {
                        where: {
                            id: data.id
                        }
                    })
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true
                })
            })
            .catch(error => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            })
    },
    delete: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.destroy({
                    where: {
                        id: data.id
                    }
                })
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true
                })
            })
            .catch(error => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            })
    },
    ReadLink: (propiety, data, res) => {
        propiety
            .sync()
            .then(() => propiety.findAll({
                where: {
                    rand: data.rand
                }
            }))
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    data: result
                })
            })
            .catch(error => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            })
    },

}
