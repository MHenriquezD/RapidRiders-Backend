import express from 'express';
import { agregarCliente, agregarOrden, cargarCLientes, obtenerUsuario, login, obtenerOrdenes } from '../controllers/clientes.controller';
const router = express.Router();

// (GET) http://localhost:3000/login
router.get('/', cargarCLientes);
router.post('/login', login);
router.get('/ordenes', obtenerOrdenes);
router.get('/:id', obtenerUsuario);
router.post('/:id/ordenes', agregarOrden);
router.post('/', agregarCliente);

export default router;