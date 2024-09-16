import { Request,Response } from "express"
import validateToken from '../middleware/validateToken'
import {Router} from 'express'

//Servicios
import sgetMessages from "../services/message/getMessages"
import sgetAMessage from "../services/message/getMessage"
import snewMessage from "../services/message/newMessage"
import sputMessage from "../services/message/putMessage"
import sdeleteMessage from "../services/message/deleteMessage"

const routerMessage = Router()
//Message
//Conseguir todos los datos de Message
const getAllmessage = (req:Request, res:Response) => {
    const message = sgetMessages()
    res.send({
        message
    })
}
//Conseguir un Message
const getMessage = (req:Request, res:Response) => {
    const {id} = req.params
    const message = sgetAMessage(id)
    res.send({
        message
    })
}
//Nuevo Message
const postMessage = (req:Request, res:Response) => {
    const {body} = req
    snewMessage(body)
    res.send({
        body
    })
}
//Edit/Update Message
const putMessage = (req:Request, res:Response) => {
    const {body} = req
    const {id} = req.params
    const updateMessage = sputMessage(id,body)
    res.send({
        updateMessage
    })
}
//Remove Message 
const deleteMessage = (req:Request, res:Response) => {
    const {id} = req.params
    const deleteMessage = sdeleteMessage(id)
    res.json({
        msg: 'Delete Booking',
        id,
        deleteMessage
    })
}

//Message
//Conseguir all datos de Message
routerMessage.get('/contact',validateToken,getAllmessage)
//Conseguir all datos de Message
routerMessage.get('/contact/:id',validateToken,getMessage)
//Nuevo Message
routerMessage.post('/contact/add',validateToken,postMessage)
//Edit/Update Message
routerMessage.put('/contact/edit/:id',validateToken,putMessage)
//Remove Message 
routerMessage.delete('/contact/delete/:id',validateToken,deleteMessage)

export default routerMessage