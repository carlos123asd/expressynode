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
    res.send({
        bookings
    })
}
//Conseguir un Booking
const getBooking = (req:Request, res:Response) => {
    const {id} = req.params
    const booking = sgetAbooking(id)
    res.send({
        booking
    })
}
//Nuevo Booking
const postBooking = (req:Request, res:Response) => {
    const {body} = req
    const newBooking = snewBooking(body)
    res.send({
        newBooking
    })
}
//Edit/Update Booking
const putBooking = (req:Request, res:Response) => {
    const {body} = req
    const {id} = req.params
    const updateBooking = sputBooking(id,body)
    res.send({
        updateBooking
    })
}
//Remove Booking 
const deleteBooking = (req:Request, res:Response) => {
    const {id} = req.params
    const deleteBooking = sdeleteBooking(id)
    res.json({
        msg: 'Delete Booking',
        id,
        deleteBooking
    })
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