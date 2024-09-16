import Message from "../../interfaces/Message";
import dbmessages from '../../db/comment.json'
export default function getMessages(){
    const messages = dbmessages as Message[]
    return messages
}