import Room from "../../interfaces/Room";
import dbrooms from '../../db/room.json'
export default function getRoom(id:string){
    const room = dbrooms.filter((room) => {
        return room.id === id
    })
    return room
}