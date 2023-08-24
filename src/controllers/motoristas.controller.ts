import { Request, Response } from 'express';
import { Motoristas } from '../models/motoristas.schema';

export const cargarMotoristas = async (req: Request, res: Response) => {
    const motoristas = await Motoristas.find();
    res.send(motoristas);
    res.end();
}

export const login = async (req: Request, res: Response) => {
    const motorista = await Motoristas.findOne({ correo: req.body.usuario, contrasena: req.body.contrasena });
    if (motorista) {
        res.send({ exito: true, mensaje: 'Inicio de sesión exitoso', motorista: motorista });
    } else {
        res.send({ status: false, message: 'Usuario o contraseña incorrectos' });
    }
    res.end();
}

export const addMotorista = async (req: Request, res: Response) => {
    const nuevoMotorista = new Motoristas({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        fotoPerfil: req.body.fotoPerfil,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        placa: req.body.placa,
        tipoVehiculo: req.body.tipoVehiculo,
        ordenes: []
    });
    await nuevoMotorista.save();
    res.send({ status: true, message: 'Motorista agregado correctamente', motorista: 
        {nombre: req.body.nombre, apellido: req.body.apellido, correo: req.body.correo, placa: req.body.placa, tipoVehiculo: req.body.tipoVehiculo }
    });
    res.end();
}