const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const sequelize = require("sequelize");
const connection = require("../../config/conection");

const KEY = require("../../config/functions/token");
const { SECRET_TOKEN_CLIENT } = require("../../config"); //TOKEN

router.get("/GetView", KEY.verifyToken, urlencodedParser, (req, res) => {
  if (!req.body || req.body.length === 0) {
    console.log("request body not found");
    return res.sendStatus(400);
  }

  jwt.verify(req.token, SECRET_TOKEN_CLIENT, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      connection
        .query("SELECT * FROM `GetData_2`", {
          type: sequelize.QueryTypes.SELECT
        })
        .then(response => {
          res.status(200);
          res.json({
            success: true,
            token: "",
            data: response
          });
        });
    }
  });
});

module.exports = router;
