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
const Categoria = require("../../config/models/Categoria"); //MODEL
const CRUD = require("../../config/functions/API"); // API

router.get(
  "/GetDescription",
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
        let data = ["ID", "Description"];
        CRUD.Read(Categoria, data, res);
      }
    });
  }
);

module.exports = router;