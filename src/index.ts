const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express();

const port: Number = 3001

app.use(cors());
app.use(bodyParser.json())
app.use(cookieParser())

app.get('/', (req: Request, res: Response) =>
  console.log('Test')
)

app.listen(port, () => {
  console.log('API is running!')
})