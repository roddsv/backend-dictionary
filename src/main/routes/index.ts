import { Request, Response } from 'express';

const User = require('../../infrastructure/database/models/User')

const Login = require('../../interfaces/http/controllers/LoginController')

const express = require('express')
const app = express() 

const router = express.Router()

router.get('/', (req: Request, res: Response) => { 
    res.render('login')
})

router.post('/login', (req: Request, res: Response) => {
    
    const email = req.body.email
    const senha = req.body.password

    User.findAll().then((user:  any) => {
        let userEmail = user[0].email.replace(/\n/g, '');
        let userSenha = user[0].senha
        console.log(user[0])
        console.log(email)
        console.log(senha)
        console.log(userEmail)
        console.log(userSenha)

        if (email == userEmail && senha == userSenha) {
            res.send(await LoginController(body))
        } else {
            res.send('sem login')
        }
    });



})


module.exports = router;
