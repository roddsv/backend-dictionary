"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./infrastructure/database/db");
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var port = 3001;
//DB connection
db_1.connection
    .authenticate()
    .then(function () {
    console.log("Conexão bem-sucedida com o banco de dados");
})
    .catch(function (error) {
    console.log(error);
});
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.get('/', function (req, res) {
});
app.set('view engine', 'ejs');
app.listen(port, function () {
    console.log('API is running!');
});
