import { Request, Response } from 'express';
import { Motoristas } from '../models/motoristas.schema';
import { Pedidos } from '../models/pedido.schema';

import mongoose from 'mongoose';
import { ordenesMotoristas } from '../models/motoristas.model';

export const cargarMotoristas = async (req: Request, res: Response) => {
    const motoristas = await Motoristas.find();
    res.send(motoristas);
    res.end();
}

export const login = async (req: Request, res: Response) => {
    const motorista = await Motoristas.findOne({ correo: req.body.usuario, password: req.body.contrasena });
    if (motorista) {
        res.send({ exito: true, mensaje: 'Inicio de sesión exitoso', usuario: motorista });
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
    res.send({
        status: true, message: 'Motorista agregado correctamente', motorista:
            { nombre: req.body.nombre, apellido: req.body.apellido, correo: req.body.correo, placa: req.body.placa, tipoVehiculo: req.body.tipoVehiculo }
    });
    res.end();
}
export const obtenerPedidos = async (req: Request, res: Response) => {
    const motorista = await Motoristas.findById(req.params.id);
    if (motorista) {
        res.send({ status: true, ordenes: motorista.ordenes })
    } else {
        res.send({ status: false, message: 'Motorista no encontrado' })
    }
    res.end();
}


export const addPedido = async (req: Request, res: Response) => {
    const resultado = await Motoristas.updateOne({ _id: req.params.id }, {
        $push: {
            ordenes: {
                _id: new mongoose.Types.ObjectId(req.body.idOrden)
            }
        }
    })
    res.send(resultado);
    res.end();
}

export const obtenerOrdenesMotoristas = async (req: Request, res: Response) => {
    const motorista: ordenesMotoristas[] = await Motoristas.aggregate(
        [
            {
                $lookup: {
                    from: 'pedidos',
                    localField: 'ordenes._id',
                    foreignField: '_id',
                    as: 'ordenesMotoristas',
                },
            },
        ]
    );

    res.send(motorista);
    res.end();
}