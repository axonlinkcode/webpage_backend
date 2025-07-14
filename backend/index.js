import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import Clinician from './routes/Clinician.js'
import CRO from './routes/CRO.js'
import Patient from './routes/Patient.js'
import Waiting from './routes/Waiting.js'   

dotenv.config()

const app = express()
connectDB()
app.use(cors({
  origin: 'https://www.axonlink.ai',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}))


//Routes
app.use('/clinician',Clinician)
app.use('/cro', CRO )
app.use('/patient', Patient)
app.use('/waitinglist', Waiting)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})