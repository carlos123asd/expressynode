import User from "../../interfaces/Employee";
import dbusers from '../../db/employee.json'
export default function getUser(id:string){
    const user = dbusers.filter((user) => {
        return user.id === id
    })
    return user
}