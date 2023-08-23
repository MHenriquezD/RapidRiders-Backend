"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
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
    ordenes: (Array)
});
exports.UserProfile = mongoose_1.default.model('clientes', schema); // enlace
