var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "src")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    //"Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/", function (request, resp, next) {
  resp.render("index");
});

var Insert_EnterpriseEvaluation = require("./Server/EnterpriseEvaluation/_Insert");
var Insert_EnterpriseSelected = require("./Server/EnterpriseSelected/_Insert");
var Insert_EnterpriseStored = require("./Server/EnterpriseStored/_Insert");
var Insert_Link = require("./Server/Link/_Insert");


//

var Read_Link = require("./Server/Link/_Read");
var Read_View = require("./Server/GetDataView/_Read");
var Read_GetEnterpriseEvaluation = require("./Server/EnterpriseEvaluation/_Read");
var GetEnterprise_Stored = require("./Server/EnterpriseStored/_ReadWhere");
app.use(
  "/webservices",
  Insert_EnterpriseEvaluation,
  Insert_EnterpriseSelected,
  Insert_EnterpriseStored,
  Insert_Link,
  GetEnterprise_Stored,
  Read_Link,
  Read_GetEnterpriseEvaluation,
  Read_View
);

app.listen(8081, function () {
  console.log("El servidor Esta En llamas!");
});

// var connection = mysql.createConnection({   host: process.env.RDS_HOSTNAME,
// user: process.env.RDS_USERNAME,   password: process.env.RDS_PASSWORD,
// database: process.env.RDS_DATABASE,   port: process.env.RDS_PORT });
// connection.connect(function (err) {   if (err) {     console.error('Database
// connection failed: ' + err.stack);     return;   }   console.log('Connected
// to database.'); }); connection.end();