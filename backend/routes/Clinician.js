import express from 'express';
import { createClinician,getClinician } from '../controllers/ClinicianController.js';

const router = express.Router()

router.post('/', createClinician);
router.get('/', getClinician);

export default router;