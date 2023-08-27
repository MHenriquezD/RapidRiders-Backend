import mongoose from "mongoose";


export interface Producto {
    nombreProducto: string;
    descripcion: string;
    imagenProducto: string;
    precio: number;
}