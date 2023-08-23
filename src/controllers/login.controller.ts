import { Request, Response } from 'express';
import { UserProfile } from '../models/clientes.schema';

import mongoose from 'mongoose';

export const login = async (req: Request, res: Response) => {
    const profile = await UserProfile.findOne({ nombre: req.body.usuario, contrasena: req.body.contrasena });
    if (profile) {
        res.send({ exito: true, mensaje: 'Inicio de sesión exitoso', usuario: profile });
    } else {
        res.send({ status: false, message: 'Usuario o contraseña incorrectos' });
    }
    res.end();
}