import express from 'express';
import { addMotorista, cargarMotoristas } from '../controllers/motoristas.controller';
import { login } from '../controllers/clientes.controller';

const router = express.Router();

// (GET) http://localhost:3000/motoristas
router.get('/', cargarMotoristas);
router.post('/login', login);
router.post('/', addMotorista);

export default router;