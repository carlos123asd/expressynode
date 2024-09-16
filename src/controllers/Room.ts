import { Request,Response } from "express"
import validateToken from '../middleware/validateToken'
import {Router} from 'express'
//Servicios
import sgetRooms from "../services/room/getRooms"
import sgetARoom from "../services/room/getRoom"
import snewRoom from "../services/room/newRoom"
import sputRoom from "../services/room/putRoom"
import sdeleteRoom from "../services/room/deleteRoom"

const routerRoom = Router()

//Room
//Conseguir todos los datos de room
const getAllrooms = (req:Request, res:Response) => {
    const rooms = sgetRooms()
    res.send({
        rooms
    })
}
//Conseguir un room
const getRoom = (req:Request, res:Response) => {
    const {id} = req.params
    const room = sgetARoom(id)
    res.send({
        room
    })
}
//Nuevo Room
const postRoom = (req:Request, res:Response) => {
    const {body} = req
    const newRoom = snewRoom(body)
    res.send({
        newRoom
    })
}
//Edit/Update Room
const putRoom = (req:Request, res:Response) => {
    const {body} = req
    const {id} = req.params
    const updateRoom = sputRoom(id,body)
    res.send({
        updateRoom
    })
}
//Remove Room 
const deleteRoom = (req:Request, res:Response) => {
    const {id} = req.params
    const deleteRoom = sdeleteRoom(id)
    res.json({
        msg: 'Delete Booking',
        id,
        deleteRoom
    })
}

//Room
//Conseguir all datos de room
routerRoom.get('/room',validateToken,getAllrooms)
//Conseguir all datos de room
routerRoom.get('/room/:id',validateToken,getRoom)
//Nuevo Room
routerRoom.post('/room/add',validateToken,postRoom)
//Edit/Update Room
routerRoom.put('/room/edit/:id',validateToken,putRoom)
//Remove Room 
routerRoom.delete('/room/delete/:id',validateToken,deleteRoom)

export default routerRoom