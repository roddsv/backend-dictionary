import { NextFunction, Request, Response, response } from "express";
import { Signout } from "../../interfaces/http/controllers/SignoutController";
import axios from "axios";

const User = require("../../infrastructure/database/models/User");

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

router.get("/entries/en", (req: Request, res: Response) => {
    const getWords = async function (word: string) {
        const API_URL: string = `https://api.dictionaryapi.dev/api/v2/entries/en`
        await axios
        .get(`${API_URL}/${word}`)
        .then(function (response) {
            res.send(response.data);
        })
    };

    const word = req.query.word as string;
    getWords(word);
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
    let userEmail = user[0].email.replace(/\n/g, "");
    let userSenha = user[0].senha;

    async function Signin(body: {
      id: Number;
      email: string;
      password: string;
    }) {
      const email = body.email;
      const password = body.password;
      const id = body.id;

      const token = await jsonwebtoken.sign(
        {
          id: id,
          email: email,
          password: password,
        },
        "jwtGeradoComSucesso"
      );

      res.cookie("Token", token);
      res.send({
        id: id,
        name: "User 1",
        token: `Bearer ${token}`,
      });
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

module.exports = router;
