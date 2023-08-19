import express from 'express';
import { obtenerTareas, obtenerUnaTarea } from '../controllers/tareas.controller';
const router = express.Router();

//ruta para obtener todas las tareas
// http://localhost:3000/content/tareas
router.get('/', obtenerTareas);

//ruta para obtener una tarea
// http://localhost:3000/content/tareas/1
router.get('/:id', obtenerUnaTarea);  

export default router;