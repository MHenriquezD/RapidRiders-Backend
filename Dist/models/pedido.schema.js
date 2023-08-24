"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedidos = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    numeroOrden: String,
    ubicacion: String,
    productos: (Array),
    comisionGestion: Number,
    comisionServicio: Number,
    totalPrice: Number,
    estado: String,
    fechaSolicitud: String,
    fechaEntrega: String,
    horaEntrega: String
});
exports.Pedidos = mongoose_1.default.model('pedidos', schema);
