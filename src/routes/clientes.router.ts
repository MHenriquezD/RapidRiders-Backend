import express from 'express';
import { agregarCliente, agregarOrden, cargarCLientes, obtenerUsuario, login } from '../controllers/clientes.controller';
const router = express.Router();

// (GET) http://localhost:3000/login
router.get('/', cargarCLientes);
router.post('/login', login);
router.get('/:id', obtenerUsuario);
router.get('/:id/ordenes', agregarOrden);
router.post('/', agregarCliente);

export default router;