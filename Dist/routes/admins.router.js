"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admins_controller_1 = require("../controllers/admins.controller");
const router = express_1.default.Router();
router.get('/', admins_controller_1.obtenerAdministradores);
router.get('/:id', admins_controller_1.obtenerAdministrador);
router.post('/login', admins_controller_1.login);
exports.default = router;
