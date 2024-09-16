import Message from "../../interfaces/Message";
import messages from '../../db/comment.json'

export default function putMessage(id:string,dateUpdate:Object){
    const message = messages.filter((message) => {
        return message.id === id
    })
    return {
        message,
        ...dateUpdate
    }
}