import express from "express";
import { cargarPedidos, cargarProductosPedidos, crearPedido } from "../controllers/pedidos.controller";
import { resourceLimits } from "worker_threads";

const router = express.Router();

router.get('/', cargarPedidos);
router.get('/:id', cargarProductosPedidos);
router.post('/', crearPedido);

export default router;