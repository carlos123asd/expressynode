import User from "../../interfaces/Employee";
import dbusers from '../../db/employee.json'

export default function putUser(id:string,dateUpdate:User){
    const user = dbusers.filter((user) => {
        return user.id === id
    })
    return {
        user,
        ...dateUpdate
    }
}