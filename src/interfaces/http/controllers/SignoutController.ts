import { NextFunction, Response } from "express";

export async function Signout(res: Response) {
    res.clearCookie('Token')
    res.redirect('/')
}