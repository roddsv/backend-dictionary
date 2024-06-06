"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var Sequelize = require("sequelize");
var dotenv = require("dotenv");
dotenv.config();
exports.connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});
