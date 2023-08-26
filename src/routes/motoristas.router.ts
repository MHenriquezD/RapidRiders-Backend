import express from 'express';
import { addMotorista, addPedido, cargarMotorista, cargarMotoristas, obtenerOrdenesMotoristas, obtenerPedidos, login, updateMotorista, deleteMotorista } from '../controllers/motoristas.controller';

const router = express.Router();

// (GET) http://localhost:3000/motoristas
router.get('/', cargarMotoristas);
router.get('/:id', cargarMotorista);
router.post('/login', login);
router.post('/', addMotorista);
router.post('/:id/ordenes', addPedido);
router.get('/:id/ordenes', obtenerPedidos);
router.get('/:id/ordenesmotorista', obtenerOrdenesMotoristas);
router.post('/:id', updateMotorista);
router.delete('/:id', deleteMotorista);

export default router;