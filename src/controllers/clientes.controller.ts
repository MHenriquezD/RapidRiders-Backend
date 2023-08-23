import { Request, Response } from 'express';
import { UserProfile } from '../models/clientes.schema';

import mongoose from 'mongoose';

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
