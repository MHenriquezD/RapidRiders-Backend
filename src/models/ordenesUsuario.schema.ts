import mongoose from "mongoose";
import { ordenesUsuario } from "../models/ordenesUsuario.model";

const schema = new mongoose.Schema<ordenesUsuario>({
    total: Number,
    entregado: Boolean
});

export const OrdenesUsuario = mongoose.model('ordenesUsuario',schema);// enlace