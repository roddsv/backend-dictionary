import { DataTypes } from "sequelize"
import { connection } from "../db"

export const Word = connection.define('words', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id:{
        type: DataTypes.STRING,
        allowNull: false
    }
})


Word.sync({force: false}).then(() => {})

module.exports = Word
