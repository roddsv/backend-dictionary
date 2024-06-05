import { Response, response } from "express";
import { User } from "../../../infrastructure/database/User";
import { Sequelize } from "sequelize";
const jsonwebtoken = require('json-web-token')

export async function Login(body: { email: string; password: string; }) {
    const email = body.email;
    const password = body.password;
}