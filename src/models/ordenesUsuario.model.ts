import mongoose from 'mongoose';

export interface ordenesUsuario{
    idOrden: mongoose.Types.ObjectId;
    total: number;
    entregado: boolean;
}