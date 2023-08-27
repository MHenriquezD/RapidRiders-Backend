"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientes_controller_1 = require("../controllers/clientes.controller");
const router = express_1.default.Router();
// (GET) http://localhost:3000/login
router.get('/', clientes_controller_1.cargarCLientes);
router.post('/login', clientes_controller_1.login);
router.get('/ordenes', clientes_controller_1.obtenerOrdenes);
router.get('/:id', clientes_controller_1.obtenerUsuario);
router.post('/:id/ordenes', clientes_controller_1.agregarOrden);
router.post('/', clientes_controller_1.agregarCliente);
exports.default = router;
