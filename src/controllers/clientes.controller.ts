import { Request, Response } from 'express';
import { UserProfile } from '../models/clientes.schema';

import mongoose from 'mongoose';

export const login = async (req: Request, res: Response) => {
  const profile = await UserProfile.findOne({ correoElectronico: req.body.usuario, contrasena: req.body.contrasena });
  if (profile) {
      res.send({ exito: true, mensaje: 'Inicio de sesión exitoso', usuario: profile });
  } else {
      res.send({ status: false, message: 'Usuario o contraseña incorrectos' });
  }
  res.end();
}

export const cargarCLientes = async (req: Request, res: Response) => {
    const profiles = await UserProfile.find();
    res.send(profiles);
    res.end();
}

export const obtenerUsuario = async (req: Request, res: Response) => {
    const profile = await UserProfile.findById(req.params.id);
    if (profile) {
        res.send({status: true, profile});
      }else 
        res.send({status: false, message: 'Perfil no existe'});
      res.end();
}

export const agregarOrden = async (req: Request, res: Response) => {
    const resultado = await UserProfile.updateOne({_id: req.params.id}, {
        $push: {
          ordenes: {
            idOrden: req.body.idOrden,
            nombreProducto: req.body.nombreProducto,
            precio: req.body.precio,
            entregado: false
          }
        }
      })
      res.send(resultado);
      res.end();
}

export const agregarCliente = async (req: Request, res: Response) => {
    const profile = new UserProfile({
        _id: new mongoose.Types.ObjectId(),
        //id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        fotoPerfil: req.body.fotoPerfil,
        correoElectronico: req.body.correoElectronico,
        contrasena: req.body.contrasena,
        numeroTarjeta: req.body.numeroTarjeta,
        expira: req.body.expira,
        cvv: req.body.cvv,
        ordenes: []
    });
    const resultado = await profile.save();
    res.send(resultado);
    res.end();
}
