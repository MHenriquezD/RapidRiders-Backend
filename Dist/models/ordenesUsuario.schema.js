"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenesUsuario = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    total: Number,
    entregado: Boolean
});
exports.OrdenesUsuario = mongoose_1.default.model('ordenesUsuario', schema); // enlace
