import mongoose from "mongoose";

export interface ordenesMotoristas {
    idOrden: mongoose.Types.ObjectId;
}
export interface Motorista {
    _id: mongoose.Types.ObjectId;
    nombre: string;
    apellido: string;
    imagenPerfil:string;
    identificacion:string;
    fechaNacimiento: string;
    correo: string;
    password: string;
    celular: string;
    descripcionVehiculo: string;
    placaVehiculo: string;
    ordenes: Array<ordenesMotoristas>;
}