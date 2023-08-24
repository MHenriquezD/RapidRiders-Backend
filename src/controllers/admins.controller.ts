import { Response, Request } from "express";
import { Administrador } from "../models/admins.schema";

import mongoose, { RootQuerySelector } from 'mongoose';

export const obtenerAdministradores =async (req: Request, res: Response) => {
    const administradores = await Administrador.find();
    res.send(administradores);
    res.end();
}

export const obtenerAdministrador =async (req: Request, res: Response) => {
    const administrador = await Administrador.findById(req.params.id);
    if (administrador)
        res.send({status: true, admin: administrador});
    else 
        res.send({status: false, message: "Administrador no existe"});
    res.end();    
}

export const login = async (req: Request, res: Response) => {
    const administrador = await Administrador.findOne({ correo: req.body.usuario, password: req.body.contrasena }, {password: false});
    if (administrador)
        res.send({status: true, usuario: administrador})
}