import Booking from "../../interfaces/Booking";
import booking from '../../db/booking.json'

export default function getBookings(){
    const bookings = booking as Booking[]
    return bookings
}