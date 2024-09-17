export default interface Employee{
    id:string
    photo:string
    name:string
    email:string
    startdate:Date
    description:string
    phone:string
    status:'inactive'|'active'
}