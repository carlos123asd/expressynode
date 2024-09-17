import { Request,Response } from "express"
import {Router} from 'express'
import validateToken from '../middleware/validateToken'
const routerUser = Router()
//Servicios
import sgetUsers from "../services/user/getUsers"
import sgetAUser from "../services/user/getUser"
import snewUser from "../services/user/newUser"
import sputUser from "../services/user/putUser"
import sdeleteUser from "../services/user/deleteUser"

//Users
//Conseguir todos los datos de Users
const getAllusers = (req:Request, res:Response) => {
    const users = sgetUsers()
    if(users){
        return res.status(200).json(users)
    }else{
        return res.status(404).json(users)
    }
}
//Conseguir un User
const getUser = (req:Request, res:Response) => {
    const {id} = req.params
    const user = sgetAUser(id)
    if(user){
        return res.status(200).json(user)
    }else{
        return res.status(404).json(user)
    }
}
//Nuevo User
const postUser = (req:Request, res:Response) => {
    const {body} = req
    const newUser = snewUser(body)
    return res.status(201).json(newUser)
}
//Edit/Update User
const putUser = (req:Request, res:Response) => {
    const {body} = req
    const {id} = req.params
    const updateUser = sputUser(id,body)
    return res.status(200).json(updateUser)
}
//Remove User 
const deleteUser = (req:Request, res:Response) => {
    const {id} = req.params
    const deleteRoom = sdeleteUser(id)
    res.status(200).json({deleteRoom})
}

//Users
//Conseguir all datos de Users
routerUser.get('/users',validateToken,getAllusers)
//Conseguir un User
routerUser.get('/users/:id',validateToken,getUser)
//Nuevo User
routerUser.post('/users/add',validateToken,postUser)
//Edit/Update User
routerUser.put('/users/edit/:id',validateToken,putUser)
//Remove User 
routerUser.delete('users/delete/:id',validateToken,deleteUser)

export default routerUser