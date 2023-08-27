import mongoose from "mongoose";
import { Motorista, ordenesMotoristas } from "./motoristas.model";

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
    ordenes: Array<ordenesMotoristas>
});

export const Motoristas = mongoose.model<Motorista>("motoristas", schema);