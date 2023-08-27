import mongoose from "mongoose";
import { Empresa, categoria } from "./categorias.model";

const schema = new mongoose.Schema<categoria>({
    nombreCategoria: String,
    icono: String,
    empresas: Array<Empresa>
});

export const Categorias = mongoose.model('categorias',schema);// enlace