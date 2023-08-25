import express from 'express';
import { addMotorista, addPedido, cargarMotoristas, obtenerOrdenesMotoristas, obtenerPedidos, login } from '../controllers/motoristas.controller';

const router = express.Router();

// (GET) http://localhost:3000/motoristas
router.get('/', cargarMotoristas);
router.post('/login', login);
router.post('/', addMotorista);
router.post('/:id/ordenes', addPedido);
router.get('/:id/ordenes', obtenerPedidos);
router.get('/:id/ordenesmotorista', obtenerOrdenesMotoristas);


export default router;