import Room from "../../interfaces/Room";
import dbrooms from '../../db/room.json'
export default function getRooms(){
    const rooms = dbrooms
    return rooms
}