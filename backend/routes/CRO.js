import { createCR0,getCRO } from "../controllers/CROController.js";
import express from 'express';

const router = express.Router();

router.post('/', createCR0);
router.get('/', getCRO);

export default router;