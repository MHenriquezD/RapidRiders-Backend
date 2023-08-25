import mongoose from 'mongoose';
import { Producto } from './categorias.model';

export interface Pedido {
    numeroOrden: mongoose.Types.ObjectId;
    _idCliente: mongoose.Types.ObjectId;
    nombreCliente: string;
    celularCliente: string;
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
