import mongoose from "mongoose";
import { Pedido } from "./pedido.model";
import { Producto } from "./categorias.model";

const schema = new mongoose.Schema<Pedido>({
    numeroOrden: String,
    ubicacion: String,
    productos: Array<Producto>,
    comisionGestion: Number,
    comisionServicio: Number,
    totalPrice: Number,
    estado: String,
    fechaSolicitud: String,
    fechaEntrega: String,
    horaEntrega: String
});

export const Pedidos = mongoose.model('pedidos', schema);