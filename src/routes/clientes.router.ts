import express from 'express';
import { agregarOrden, cargarCLientes, obtenerUsuario } from '../controllers/clientes.controller';
const router = express.Router();

// (GET) http://localhost:3000/login
router.get('/', cargarCLientes);

router.get('/:id', obtenerUsuario);
router.get('/:id/ordenes', agregarOrden);

export default router;