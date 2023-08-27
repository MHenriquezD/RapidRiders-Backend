import mongoose from 'mongoose';
import { Producto } from './categorias.model';

export interface Pedido {
    _id: mongoose.Types.ObjectId;
    _idCliente: mongoose.Types.ObjectId;
    ubicacion: string;
    latitud: number;
    longitud: number;
    productos: Array<Producto>;
    comisionGestion: number;
    comisionServicio: number;
    totalPrice: number;
    estado: string;
    fechaSolicitud: string;
    fechaEntrega: string;
    horaEntrega: string,
    status: string;
}
