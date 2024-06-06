import { NextFunction, Request, Response, response } from "express";
import { Signout } from "../../interfaces/http/controllers/SignoutController";
import axios from "axios";
import path from 'path'

const User = require("../../infrastructure/database/models/User");
const Word = require("../../infrastructure/database/models/Word");

const express = require("express");
const app = express();

const jsonwebtoken = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Fullstack Challenge 🏅 - Dictionary",
  });
});

router.get("/login", (req: Request, res: Response) => {
  res.render("login");
});

router.get("/register", (req: Request, res: Response) => {
  res.render("signup");
});

router.get("/wordsearch", (req: Request, res: Response) => {
  res.render("wordsearch");
});

router.get("/entries/en/:word", (req: Request, res: Response) => {
    const getWords = async function (word: string) {
        const API_URL: string = `https://api.dictionaryapi.dev/api/v2/entries/en`
        await axios
        .get(`${API_URL}/${word}`)
        .then(function (response) {
            res.render('loggedarea', 
                {
                    data: response.data,
                    user: req.cookies.User,
                }
            );
        })
    };

    const saveWords = async function(word: string) {
        Word.create({
            id: uuidv4(),
            name: word,
            user_id: req.cookies.User_Id,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          }).then(() => {
            console.log(
                'Palavra salva no banco com sucesso'
            );
          });
    }

    const word = req.query.word as string;
    getWords(word)
    saveWords(word)

});

router.post("/auth/signup", (req: Request, res: Response) => {
  const email = req.body.email;
  const name = req.body.name;
  const senha = req.body.password;

  User.create({
    id: uuidv4(),
    name: name,
    email: email,
    senha: senha,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }).then((user: any) => {
    res.send({
      id: user.id,
      name: user.name,
    });
  });
});

router.post("/auth/signin", (req: Request, res: Response) => {
  const email = req.body.email;
  const senha = req.body.password;

  User.findAll().then((user: any) => {
    let userEmail = user[0].email.replace(/\n/g, "")
    let userSenha = user[0].senha
    let userId = user[0].id

    async function Signin(body: {
      id: string;
      email: string;
      password: string;
    }) {
      const email = body.email;
      const password = body.password;
      const token = await jsonwebtoken.sign(
        {
          id: userId,
          email: email,
          password: password,
        },
        "jwtGeradoComSucesso"
      );

      res.cookie("Token", token)
      res.cookie("User_Id", userId)
      res.cookie("User", user[0])
    
      
      const words = Word.findAll({
        where: {
            user_id: userId
        }}).then();
    
        let arrayWord = []
        let wordName;
        for (var i = 0; i < words.length; i++) {
            wordName = JSON.parse(JSON.stringify(words[i])).name
            arrayWord.push(wordName)
        }

        console.log(arrayWord)

      res.render('loggedarea', {
        user: user[0],
        data: 'Nenhuma palavra pesquisada. Pesquise abaixo para carregar os dados aqui.',
        words: arrayWord
      })
    }
    if (email == userEmail && senha == userSenha) {
      Signin(req.body);
    } else {
      res.send("sem login");
    }
  });
});

router.get("/signout", async (req: Request, res: Response) => {
  res.send(await Signout(res));
});


router.post('/new-favorite', async (req: Request, res: Response) => {
    const newWord = req.body.newWord;

    const saveWords = async function(word: string) {
        Word.create({
            id: uuidv4(),
            name: word,
            user_id: req.cookies.User_Id,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          }).then(() => {
            console.log(
                'Palavra salva no banco com sucesso'
            );
          });
    }
    saveWords(newWord)
})

module.exports = router;
