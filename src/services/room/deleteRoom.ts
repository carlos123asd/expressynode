import Room from "../../interfaces/Room";
import rooms from '../../db/room.json'
export default function deleteRoom(id:string){
    const room = rooms.filter((room) => {
        return room.id === id
    })
    return room
}