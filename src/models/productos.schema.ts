import mongoose from "mongoose";
import { Producto } from "./productos.model";

const schema = new mongoose.Schema<Producto>({
    nombreProducto: String,
    descripcion: String,
    imagenProducto: String,
    precio: Number
});

export const Productos = mongoose.model('productos',schema);
