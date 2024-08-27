import { Router } from 'express';
import { registerForRace, getUserRegistrations } from '../controllers/raceRegistration.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

// Apply verifyJWT middleware to all routes in this file
router.use(verifyJWT);

// Define routes
router.post("/register", registerForRace);
router.get("/user-registrations", getUserRegistrations);

export default router;