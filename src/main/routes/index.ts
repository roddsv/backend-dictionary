import { Request, Response } from 'express';

const express = require('express')
const app = express() 

const router = express.Router()

router.get('/', (req: Request, res: Response) => { 
    res.render('login')
})

router.post('/login', (req: Request, res: Response) => {
    const LoginController = require('../../interfaces/http/controllers/LoginController')
    const body = req.body

    const loginAttempt = LoginController.Login(body)

    console.log(loginAttempt)

})


module.exports = router;
