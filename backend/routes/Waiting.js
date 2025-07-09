import { createWaiting,getWaiting } from "../controllers/WaitingController.js";
import express from 'express';  

const router = express.Router();

router.post('/', createWaiting);
router.get('/', getWaiting);    

export default router;