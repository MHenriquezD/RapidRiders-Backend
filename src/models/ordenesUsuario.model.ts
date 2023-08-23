import mongoose from 'mongoose';

export interface ordenesUsuario{
    idOrden: mongoose.Types.ObjectId;
    nombreProducto: string;
    precio: number;
    entregado: boolean;
}