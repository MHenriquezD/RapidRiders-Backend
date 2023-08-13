//crearemos las rutas de nuestra aplicación
//para ello crearemos un archivo index.router.js
//dentro de la carpeta routes
//y dentro de este archivo escribiremos el siguiente código:

const express = require('express');
const router = express.Router();

const Task = require('../models/task');

//ruta para obtener todas las tareas
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
}
);

//ruta para obtener una tarea
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
}
);

//ruta para crear una tarea
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json({ status: 'Tarea guardada' });
}
);