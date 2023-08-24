import mongoose from "mongoose";

export interface administradores {
    _id: mongoose.Types.ObjectId;
    id: number;
    correo: string;
    password: string;
    direccion: string;
}