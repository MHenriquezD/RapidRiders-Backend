import express from 'express';
import { login } from '../controllers/login.controller';
const router = express.Router();

// (GET) http://localhost:3000/login
router.post('/login', login);

export default router;