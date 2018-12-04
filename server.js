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

// Aca Crearemos una variable para cada uno de los INSERT y le asignamos nuestro server
var InsertCategoria = require("./Server/Categoria/_Insert");
var InsertClientes = require("./Server/Clientes/_Insert");
var InsertFacturas = require("./Server/Facturas/_Insert");
var InsertProductos = require("./Server/Productos/_Insert");
var InsertProveedores = require("./Server/Proveedores/_Insert");
var InsertVentas = require("./Server/Ventas/_Insert");




// Aca crearemos una variable para cada uno de los READ
var Read_GetCategoria = require("./Server/Categoria/_Read");
var Read_GetClientes = require("./Server/Clientes/_Read");
var Read_GetFacturas = require("./Server/Facturas/_Read");
var Read_GetProductos = require("./Server/Productos/_Read");
var Read_GetProveedores = require("./Server/Proveedores/_Read");
var Read_GetVentas = require("./Server/Ventas/_Read");



// Aca crearemos una variable para cada uno de los READ_WHERE
var GetCategoria_ID = require("./Server/Categoria/_ReadWhere");
var GetClientes_ID = require("./Server/Clientes/_ReadWhere");
var GetFacturas_ID = require("./Server/Facturas/_ReadWhere");
var GetProductos_ID = require("./Server/Productos/_ReadWhere");
var GetVentas_ID = require("./Server/Ventas/_ReadWhere");

app.use(
  "/webservices",
  //READ
  Read_GetCategoria,
  Read_GetClientes,
  Read_GetFacturas,
  Read_GetProductos,
  Read_GetProveedores,
  Read_GetVentas,
  //READ_WHERE
  GetCategoria_ID,
  GetClientes_ID,
  GetFacturas_ID,
  GetProductos_ID,
  GetVentas_ID,
  //INSERT
  InsertCategoria,
  InsertClientes,
  InsertFacturas,
  InsertProductos,
  InsertProveedores,
  InsertVentas,

);

app.listen(8081, function () {
  console.log("Welcome to the Server...");
});

// var connection = mysql.createConnection({   host: process.env.RDS_HOSTNAME,
// user: process.env.RDS_USERNAME,   password: process.env.RDS_PASSWORD,
// database: process.env.RDS_DATABASE,   port: process.env.RDS_PORT });
// connection.connect(function (err) {   if (err) {     console.error('Database
// connection failed: ' + err.stack);     return;   }   console.log('Connected
// to database.'); }); connection.end();