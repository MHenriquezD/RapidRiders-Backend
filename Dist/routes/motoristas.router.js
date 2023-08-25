"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const motoristas_controller_1 = require("../controllers/motoristas.controller");
const router = express_1.default.Router();
// (GET) http://localhost:3000/motoristas
router.get('/', motoristas_controller_1.cargarMotoristas);
router.post('/login', motoristas_controller_1.login);
router.post('/', motoristas_controller_1.addMotorista);
router.post('/:id/ordenes', motoristas_controller_1.addPedido);
router.get('/:id/ordenes', motoristas_controller_1.obtenerPedidos);
router.get('/:id/ordenesmotorista', motoristas_controller_1.obtenerOrdenesMotoristas);
exports.default = router;
