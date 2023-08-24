import mongoose from "mongoose";
import { administradores } from "./admins.model";

const schema = new mongoose.Schema<administradores>({
    id: Number,
    correo: String,
    password: String,
    direccion: String
});

export const Administrador = mongoose.model('administradores',schema);// enlace