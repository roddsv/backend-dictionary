import { connection } from "./infrastructure/database/db";
import express, { Request, Response, Application } from 'express';
import path from 'path'

const router = express.Router();
const cors = require('cors')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app: Application = express();
const port: Number = 3001

const index = require('./main/routes/index')

const userModel = require('./infrastructure/database/models/User')
const wordModel = require('./infrastructure/database/models/Word')

//DB connection
connection
.authenticate()
.then(() => {
  console.log("Conexão bem-sucedida com o banco de dados")
})
.catch((error: Error) => {
  console.log(error)
})

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '../src/interfaces/views'))

app.use('/', index)

app.listen(port, () => {
  console.log('API is running!')
})

module.exports = router 