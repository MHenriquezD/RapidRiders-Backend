import mongoose from "mongoose";
import { Motorista } from "./motoristas.model";

const schema = new mongoose.Schema<Motorista>({
    nombre: String,
    apellido: String,
    imagenPerfil:String,
    identificacion:String,
    fechaNacimiento: String,
    correo: String,
    password: String,
    celular: String,
    descripcionVehiculo: String,
    placaVehiculo: String,
    ordenes: Array<any>
});

export const Motoristas = mongoose.model<Motorista>("motoristas", schema);