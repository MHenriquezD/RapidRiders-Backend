import express from 'express';
import { addMotorista, addPedido, cargarMotoristas, obtenerMotorista, obtenerOrdenesMotoristas, login, updateMotorista, deleteMotorista } from '../controllers/motoristas.controller';

const router = express.Router();

// (GET) http://localhost:3000/motoristas
router.get('/', cargarMotoristas);
router.get('/:id/motorista', obtenerMotorista);
router.post('/login', login);
router.post('/agregar', addMotorista);
router.post('/:id/ordenes', addPedido);
router.get('/:id/ordenesMotorista', obtenerOrdenesMotoristas);
router.post('/:id', updateMotorista);
router.delete('/:id', deleteMotorista);

export default router;