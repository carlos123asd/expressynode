import dotenv from 'dotenv'
import {Application} from 'express'
import express from 'express'
import routerRoom from './controllers/Room'
import routerBooking from './controllers/Booking'
import routerMessage from './controllers/Message'
import routerUser from './controllers/User'
import routerAuth from './controllers/Auth'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger-output.json'
import mongoose from 'mongoose'

dotenv.config()

const app:Application = express()
const port = process.env.PORT || "8000"
const apiPaths = {
    rooms: 'api/rooms',
    bookings: 'api/bookings',
    messages: 'api/messages',
    users: 'api/users',
}
/*función de seguridad que permite a los navegadores web realizar solicitudes
a un dominio diferente al que sirve la página web . Sin CORS, los navegadores
restringen dichas solicitudes debido a cuestiones de seguridad.*/
app.use(cors())
app.use(express.json())


app.use(apiPaths.rooms,routerRoom)
app.use(apiPaths.bookings,routerBooking)
app.use(apiPaths.messages,routerMessage)
app.use(apiPaths.users,routerUser)
app.use('/auth',routerAuth)
//Documentacion Rutas SwagGer
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const startServer = async () => {
    try {
        await mongoose.connect(
            "mongodb://root:root@localhost:27017/mongoose?authSource=admin"
        )
        app.listen(port, () => console.log('Server listen on port 8000'))
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

startServer()
