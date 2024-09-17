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
    if(message){
        return res.status(200).json(message)
    }else{
        return res.status(404).json(message)
    }
}
//Conseguir un Message
const getMessage = (req:Request, res:Response) => {
    const {id} = req.params
    const message = sgetAMessage(id)
    if(message){
        return res.status(200).json(message)
    }else{
        return res.status(404).json(message)
    }
}
//Nuevo Message
const postMessage = (req:Request, res:Response) => {
    const {body} = req
    const newMessage = snewMessage(body)
    res.status(201).json(newMessage)
}
//Edit/Update Message
const putMessage = (req:Request, res:Response) => {
    const {body} = req
    const {id} = req.params
    const updateMessage = sputMessage(id,body)
    res.status(200).json(updateMessage)
}
//Remove Message 
const deleteMessage = (req:Request, res:Response) => {
    const {id} = req.params
    const deleteMessage = sdeleteMessage(id)
    res.status(200).json(deleteMessage)
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