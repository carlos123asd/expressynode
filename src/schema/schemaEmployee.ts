import {Schema} from 'mongoose'
import Employee from '../interfaces/Employee'


export const employeeSchema = new Schema<Employee>({
    id: {type: String, required: true},
    photo: {type: [String], required: false},
    name: {type: String, required: true},
    email: {type: String, required: true},
    startdate: {type: String, required: true},
    description: {type: String, required: true},
    phone: {type: String, required: false},
    status: {type: String, required: true}
})