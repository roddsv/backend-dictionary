import { Sequelize } from "sequelize"
import { connection } from "./db"

const User = connection.define('Users', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

User.sync({force: false}).then(() => {})

module.exports = User