import {createPatient, getPatient} from '../controllers/PatientController.js';
import express from 'express';

const router = express.Router();

router.post('/', createPatient);
router.get('/', getPatient);    

export default router;