"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerUnaTarea = exports.obtenerTareas = void 0;
//ruta para obtener todas las tareas
const obtenerTareas = (req, res) => {
    res.send('Obtener todas las tareas');
    res.end();
};
exports.obtenerTareas = obtenerTareas;
//ruta para obtener una tarea
const obtenerUnaTarea = (req, res) => {
    res.send('Obtener una tarea con id ' + req.params.id);
    res.end();
};
exports.obtenerUnaTarea = obtenerUnaTarea;
