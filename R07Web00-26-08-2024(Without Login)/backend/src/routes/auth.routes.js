import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

router.route("/register").post(asyncHandler(registerUser));
router.route("/login").post(asyncHandler(loginUser));

export default router;