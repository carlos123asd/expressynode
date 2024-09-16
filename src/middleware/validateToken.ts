import {Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export default function validateToken(req:Request,res:Response,next:NextFunction){
    const accessToken = req.headers['authorization'] || ""
    if(!accessToken){
        res.status(401).json({message: "Token not provied, Unauthorized Access"})
    }

    jwt.verify(accessToken, process.env.TOKEN_SECRET as string, (err, user) => {
        if(err){
            res.send('Access denied, token expired or incorrect')
        }else{
            next()
        }
    })
}