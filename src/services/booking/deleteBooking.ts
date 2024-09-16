import Booking from "../../interfaces/Booking";
import bookings from '../../db/booking.json'
export default function deleteBooking(id:string){
    const booking = bookings.filter((booking) => {
        return booking.id === id
    })
    return booking
}