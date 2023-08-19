import { Request, Response } from 'express';

//ruta para obtener todas las tareas
export const obtenerTareas = ( req: Request, res: Response ) => {
    res.send('Obtener todas las tareas');
    res.end();
}

//ruta para obtener una tarea
export const obtenerUnaTarea = ( req: Request, res: Response ) => {
    res.send('Obtener una tarea con id ' + req.params.id);
    res.end();
}