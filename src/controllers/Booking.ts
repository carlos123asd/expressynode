import { Request,Response } from "express"
import {Router} from 'express'
import validateToken from '../middleware/validateToken'
//Servicios
import sgetBookings from "../services/booking/getBookings"
import sgetAbooking from "../services/booking/getBooking"
import snewBooking from "../services/booking/newBooking"
import sputBooking from "../services/booking/putBooking"
import sdeleteBooking from "../services/booking/deleteBooking"


const routerBooking = Router()

//Booking
//Conseguir todos los datos de Booking
const getAllbookings = (req:Request, res:Response) => {
    const bookings = sgetBookings()
    if(bookings){
        return res.status(200).json(bookings)
    }else{
        return res.status(404).json(bookings)
    }
}
//Conseguir un Booking
const getBooking = (req:Request, res:Response) => {
    const {id} = req.params
    const booking = sgetAbooking(id)
    if(booking){
        return res.status(200).json(booking)
    }else{
        return res.status(404).json(booking)
    }
}
//Nuevo Booking
const postBooking = (req:Request, res:Response) => {
    const {body} = req
    const newBooking = snewBooking(body)
    res.status(201).json(newBooking)
}
//Edit/Update Booking
const putBooking = (req:Request, res:Response) => {
    const {body} = req
    const {id} = req.params
    const updateBooking = sputBooking(id,body)
    res.status(200).json(updateBooking)
}
//Remove Booking 
const deleteBooking = (req:Request, res:Response) => {
    const {id} = req.params
    const deleteBooking = sdeleteBooking(id)
    res.status(200).json(deleteBooking)
}

//Room
//Conseguir all datos de room
routerBooking.get('/bookings',validateToken,getAllbookings)
//Conseguir all datos de room
routerBooking.get('/bookings/:id',validateToken,getBooking)
//Nuevo Room
routerBooking.post('/bookings/add',validateToken,postBooking)
//Edit/Update Room
routerBooking.put('/bookings/edit/:id',validateToken,putBooking)
//Remove Room 
routerBooking.delete('/bookings/delete/:id',validateToken,deleteBooking)

export default routerBooking