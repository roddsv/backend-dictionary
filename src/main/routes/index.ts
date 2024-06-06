import { NextFunction, Request, Response } from 'express';
import { Signout } from '../../interfaces/http/controllers/SignoutController';

const User = require('../../infrastructure/database/models/User')

const jsonwebtoken = require('jsonwebtoken')
const express = require('express')
const app = express() 

const router = express.Router()

router.get('/', (req: Request, res: Response) => { 
    res.render('login')
})

router.post('/signin', (req: Request, res: Response) => {
    
    const email = req.body.email
    const senha = req.body.password

    User.findAll().then((user:  any) => {
        let userEmail = user[0].email.replace(/\n/g, '');
        let userSenha = user[0].senha

        async function Signin(body: { id: Number, email: string; password: string; }) {
            const email = body.email;
            const password = body.password;
            const id = body.id
        
            const token = await jsonwebtoken.sign({
                id: id,
                email: email,
                password: password
            }, 'jwtGeradoComSucesso')

            res.cookie('Token', token)
            res.sendStatus(200)
        }
        if (email == userEmail && senha == userSenha) { 
            Signin(req.body)
        } else {
            res.send('sem login')
        }
    });

    res.render('logged')

})

router.get('/signout', async (req: Request, res: Response) => {
    res.send(await Signout(res))   

})

module.exports = router;
