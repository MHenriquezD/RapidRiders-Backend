import { Request, Response } from 'express';
import { Pedidos } from '../models/pedido.schema';
import mongoose from 'mongoose';


export const cargarPedidos = async (req: Request, res: Response) => {
    const pedidos = await Pedidos.find();
    res.send(pedidos);
    res.end();
}

export const obtenerPedido = async (req: Request, res: Response) => {
    const pedido = await Pedidos.findById(req.params.id);
    if (pedido) {
        res.send({ status: true, pedido: pedido })
    } else {
        res.send({ status: false, message: 'Pedido no encontrado' })
    }
    res.end();
}
export const cargarProductosPedidos = async (req: Request, res: Response) => {
    const pedidos = await Pedidos.findById(req.params.id);
    if (pedidos)
        res.send({ status: true, pedidos: pedidos.productos });
    else
        res.send({ status: false, message: 'No se encontró el pedido' });
    res.end();
}

export const crearPedido = async (req: Request, res: Response) => {
    const pedido = new Pedidos({
        _id: new mongoose.Types.ObjectId(req.body._id),
        _idCliente: new mongoose.Types.ObjectId(req.body._idCliente),
        nombreCliente: req.body.nombreCliente,
        celularCliente: req.body.celularCliente,
        ubicacion: req.body.ubicacion,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        productos: req.body.productos,
        comisionGestion: req.body.comisionGestion,
        comisionServicio: req.body.comisionServicio,
        totalPrice: req.body.totalPrice,
        estado: req.body.estado,
        fechaSolicitud: req.body.fechaSolicitud,
        fechaEntrega: req.body.fechaEntrega,
        horaEntrega: req.body.horaEntrega
    });
    const resultado = await pedido.save();
    res.send(resultado);
    res.end();
}

export const modificarEstadoPedido = async (req: Request, res: Response) => {

    await Pedidos.updateOne({ _id: req.params.id },
        {
            $set:
            {
                estado: req.body.estado
            }
        }
    ).then((updateResponse: any) => {
        res.send({ message: 'Registro actualizado', updateResponse });
        res.end();
    }).catch((error: any) => {
        res.send({ message: 'Hubo un error al actualizar', error });
        res.end();
    });
}