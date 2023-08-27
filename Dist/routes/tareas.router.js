"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tareas_controller_1 = require("../controllers/tareas.controller");
const router = express_1.default.Router();
//ruta para obtener todas las tareas
// http://localhost:3000/content/tareas
router.get('/', tareas_controller_1.obtenerTareas);
//ruta para obtener una tarea
// http://localhost:3000/content/tareas/1
router.get('/:id', tareas_controller_1.obtenerUnaTarea);
exports.default = router;
