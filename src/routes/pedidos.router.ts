import express from "express";
import { cargarPedidos, cargarProductosPedidos, crearPedido, obtenerPedido,modificarEstadoPedido } from "../controllers/pedidos.controller";
import { resourceLimits } from "worker_threads";

const router = express.Router();

router.get('/', cargarPedidos);
router.get('/:id/pedido', obtenerPedido);
router.get('/:id', cargarProductosPedidos);
router.post('/', crearPedido);
router.put('/:id/estado', modificarEstadoPedido);

export default router;