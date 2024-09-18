import {Request,Response } from 'express'
import generateAccessToken from '../middleware/generateToken';
import { Router } from 'express'

const routerAuth = Router()

function authenticate(req:Request, res:Response) {
  const {username,password} = req.body
  const user = {
    username: username,
    password: password
  }
  console.log(user)
  if(!username || !password){
      return res.status(400).json({message: 'Username and password are required'})
  }
  const accessToken = generateAccessToken(user)

  res.header('Authorization', accessToken).json({
      message: 'Usuario Autentificado',
      token: accessToken
  })
}

routerAuth.post('/login', authenticate)

export default routerAuth