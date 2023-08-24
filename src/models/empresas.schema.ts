import mongoose from "mongoose";
import { Producto } from "./productos.model";
import { EmpresaModel } from "./empresas.model";

const schema = new mongoose.Schema<EmpresaModel>({
    nombreEmpresa: String,
    logo: String,
    imagen: String,
    descripcion: String,
    ubicacion: String,
    calificacion: Number,
    productos: Array<Producto>
});

export const EmpresasSchema = mongoose.model('empresas',schema);