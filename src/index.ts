import { connection } from "./infrastructure/database/db";

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express();
const port: Number = 3001

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
app.use(cookieParser())

app.get('/', (req: Request, res: Response) =>
  console.log('Test')
)

app.listen(port, () => {
  console.log('API is running!')
})