const Sequelize = require("sequelize")
import { DataTypes } from "sequelize"
import { connection } from "../db"

export const User = connection.define('users', {
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull: false
    }
})


User.sync({force: false}).then(() => {})

module.exports = User
