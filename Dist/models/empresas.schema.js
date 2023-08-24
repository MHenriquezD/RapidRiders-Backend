"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresasSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nombreEmpresa: String,
    logo: String,
    imagen: String,
    descripcion: String,
    ubicacion: String,
    calificacion: Number,
    productos: (Array)
});
exports.EmpresasSchema = mongoose_1.default.model('empresas', schema);
