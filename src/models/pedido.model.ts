import mongoose from 'mongoose';
import { Producto } from './categorias.model';

export interface Pedido {
    numeroOrden: string;
    _idCliente: mongoose.Types.ObjectId;
    nombreCliente: mongoose.Types.ObjectId;
    celularCliente: string;
    ubicacion: string;
    productos: Array<Producto>;
    comisionGestion: number;
    comisionServicio: number;
    totalPrice: number;
    estado: string;
    fechaSolicitud: string;
    fechaEntrega: string;
    horaEntrega: string
}


