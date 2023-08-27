import mongoose from "mongoose";
import { UsuarioOrdenes } from "../models/clientes.model";

const schema = new mongoose.Schema<UsuarioOrdenes>({
    nombre: String,
    apellido: String,
    identificacion: String,
    fotoPerfil: String,
    telefono: String,
    correoElectronico: String,
    contrasena: String,
    numeroTarjeta: Number,
    expira: String,
    cvv: String,
    ordenes: Array<String>
});

export const UserProfile = mongoose.model('clientes',schema);// enlace