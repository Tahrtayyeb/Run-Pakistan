// routes/raceRegistration.routes.js
import { Router } from 'express';
import { registerForRace, getUserRegistrations } from '../controllers/raceRegistration.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(verifyJWT); // Apply this middleware to all routes in this file

router.route("/register").post(registerForRace);
router.route("/user-registrations").get(getUserRegistrations);

export default router;