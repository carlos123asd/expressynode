import Booking from "../../interfaces/Booking";
import bookings from '../../db/booking.json'

export default function putBooking(id:string,dateUpdate:Object){
    const booking = bookings.filter((booking) => {
        return booking.id === id
    })
    return {
        booking,
        ...dateUpdate
    }
}