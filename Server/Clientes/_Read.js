const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const urlencodedParser = bodyParser.urlencoded({
  extended: false
});

const KEY = require("../../config/functions/token");
const {
  SECRET_TOKEN_CLIENT
} = require("../../config");
const Clientes = require("../../config/models/Clientes"); //MODEL
const CRUD = require("../../config/functions/API"); // API

router.get(
  "/GetClientes",
  KEY.verifyToken,
  urlencodedParser,
  (req, res) => {
    if (!req.body || req.body.length === 0) {
      console.log("request body not found");
      return res.sendStatus(400);
    }

    jwt.verify(req.token, SECRET_TOKEN_CLIENT, (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let data = ["ID", "Name", "Address", "Phone"];
        CRUD.Read(Clientes, data, res);
      }
    });
  }
);

module.exports = router;