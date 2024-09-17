import {Schema} from 'mongoose'
import Booking from '../interfaces/Booking'


export const bookingSchema = new Schema<Booking>({
    id: {type: String, required: true},
    guest: {type: String, required: true},
    orderDate: {type: Date, default: Date.now, required: true},
    checkin: {type: String, required: true},
    timein: {type: String, required: true},
    checkout: {type: String, required: true},
    timeout: {type: String, required: true},
    ordertime: {type: String, required: true},
    specialRequest: {type: String, required: false},
    roomType: {type: String, required: true},
    status: {type: String, required: true},
    idRoom: {type:  Number, required: true}
})