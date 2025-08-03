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
app.use(express.json());
connectDB()


app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://www.axonlink.ai',
      'http://localhost:5173'
    ];

    // Allow if no origin (e.g., Postman) OR in the whitelist
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // Allow all other origins universally
      callback(null, true); // 👈 This line allows everything else
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));



//Routes
app.use('/clinician',Clinician)
app.use('/cro', CRO )
app.use('/patient', Patient)
app.use('/waitinglist', Waiting)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})