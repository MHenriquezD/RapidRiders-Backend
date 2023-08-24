"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const motoristas_controller_1 = require("../controllers/motoristas.controller");
const clientes_controller_1 = require("../controllers/clientes.controller");
const router = express_1.default.Router();
// (GET) http://localhost:3000/motoristas
router.get('/', motoristas_controller_1.cargarMotoristas);
router.post('/login', clientes_controller_1.login);
router.post('/', motoristas_controller_1.addMotorista);
exports.default = router;
