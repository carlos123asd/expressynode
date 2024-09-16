import Message from "../../interfaces/Message";
import dbmessages from '../../db/comment.json'
export default function getMessage(id:string){
    const message = dbmessages.filter((message) => {
        return message.id === id
    })
    return message
}