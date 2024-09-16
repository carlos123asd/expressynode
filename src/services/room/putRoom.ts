import Room from "../../interfaces/Room";
import rooms from '../../db/room.json'

export default function putRoom(id:string,dateUpdate:Room){
    const room = rooms.filter((room) => {
        return room.id === id
    })
    return {
        room,
        ...dateUpdate
    }
}