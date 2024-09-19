export default interface Employee{
    id:string
    photo:string
    name:string
    email:string
    password:string
    startdate:Date
    description:string
    phone:string
    status:'inactive'|'active'
}