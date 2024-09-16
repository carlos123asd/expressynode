import Message from "../../interfaces/Message";
import messages from '../../db/comment.json'
export default function deleteMessage(id:string){
    const message = messages.filter((message) => {
        return message.id === id
    })
    return message
}