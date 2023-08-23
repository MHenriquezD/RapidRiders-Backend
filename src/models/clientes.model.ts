import mongoose from 'mongoose';
import { ordenesUsuario } from './ordenesUsuario.model';



export interface Usuario{
    _id?: mongoose.Types.ObjectId;
    id?: number;
    nombre: string;
    apellido: string;
    identificacion: string;
    fotoPerfil: string;
    telefono: string;
    correoElectronico: string;
    contrasena: string;
    numeroTarjeta: number;
    expira: string;
    cvv: string;
}

export interface UsuarioOrdenes extends Usuario{
    ordenes?: Array<ordenesUsuario>;
}