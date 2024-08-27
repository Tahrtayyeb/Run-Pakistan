import { Router } from 'express';
import { registerForRace } from '../controllers/raceRegistration.controller.js';

const router = Router();


router.post("/register", registerForRace);

export default router;