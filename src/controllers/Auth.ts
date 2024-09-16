import { NextFunction } from 'express';
import {Request,Response } from 'express'
import generateAccessToken from '../middleware/generateToken';
import { Router } from 'express'

const routerAuth = Router()

function authenticate(req:Request, res:Response, next:NextFunction) {
  const {username,password} = req.body
  const user = {
    username: username,
    password: password
  }
  if(!username || !password){
      return res.status(400).json({message: 'Username and password are required'})
  }
  const accessToken = generateAccessToken(user)

  res.header('authorization', accessToken).json({
      message: 'Usuario Autentificado',
      token: accessToken
  })
}

routerAuth.post('/auth', authenticate)

export default routerAuth