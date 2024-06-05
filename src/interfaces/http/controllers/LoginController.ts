const jsonwebtoken = require('jsonwebtoken')

export async function Login(body: { id: Number, email: string; password: string; }) {
    const email = body.email;
    const password = body.password;
    const id = body.id

    const token = await jsonwebtoken.sign({
        id: id,
        email: email,
        password: password
    }, 'jwtGeradoComSucesso')

    console.log(token)
}