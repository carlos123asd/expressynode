import User from "../../interfaces/Employee";
import dbusers from '../../db/employee.json'
export default function getUsers(){
    const users = dbusers
    return users
}