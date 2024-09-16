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
    res.send({
        users
    })
}
//Conseguir un Message
const getUser = (req:Request, res:Response) => {
    const {id} = req.params
    const user = sgetAUser(id)
    res.send({
        user
    })
}
//Nuevo Message
const postUser = (req:Request, res:Response) => {
    const {body} = req
    const newRoom = snewUser(body)
    res.send({
        newRoom
    })
}
//Edit/Update Message
const putUser = (req:Request, res:Response) => {
    const {body} = req
    const {id} = req.params
    const updateUser = sputUser(id,body)
    res.send({
        updateUser
    })
}
//Remove Message 
const deleteUser = (req:Request, res:Response) => {
    const {id} = req.params
    const deleteRoom = sdeleteUser(id)
    res.json({
        msg: 'Delete Booking',
        id,
        deleteRoom
    })
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