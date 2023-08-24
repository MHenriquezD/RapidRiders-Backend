import mongoose from "mongoose";


export interface Producto {
    nombreProducto: string;
    descripcion: string;
    imagenProducto: string;
    precio: number;
}


export interface Empresa {
    _id?: mongoose.Types.ObjectId;
    nombreEmpresa: string;
    logo: string;
    imagen: string;
    descripcion: string;
    ubicacion: string;
    calificacion: number;
    productos?: Array<Producto>;
}

export interface categoria {
    _id: mongoose.Types.ObjectId;
    nombreCategoria: string;
    icono: string;
    empresas?: Array<Empresa>;
}
