import mongoose from "mongoose";
import { Producto } from "./productos.model";

export interface EmpresaModel {
    id?: mongoose.Types.ObjectId;
    nombreEmpresa: string;
    logo: string;
    imagen: string;
    descripcion: string;
    ubicacion: string;
    calificacion: number;
    productos?: Array<Producto>;
}