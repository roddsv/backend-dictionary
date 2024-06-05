"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db_1 = require("./db");
var User = db_1.connection.define('Users', {
    titulo: {
        type: sequelize_1.Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize_1.Sequelize.TEXT,
        allowNull: false
    }
});
User.sync({ force: false }).then(function () { });
module.exports = User;
