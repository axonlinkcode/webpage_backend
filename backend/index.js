import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import Clinician from './routes/Clinician.js';
import CRO from './routes/CRO.js';
import Patient from './routes/Patient.js';
import Waiting from './routes/Waiting.js';

dotenv.config();

const app = express();
app.use(express.json());
connectDB();

// ✅ Allowed origins for production
const allowedOrigins = [
  'https://www.axonlink.ai',
  'https://axonlink-webpage-prod.vercel.app',
];

// ✅ CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      // echo the origin back in the response
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // allow preflight
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Routes
app.use('/clinician', Clinician);
app.use('/cro', CRO);
app.use('/patient', Patient);
app.use('/waitinglist', Waiting);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
