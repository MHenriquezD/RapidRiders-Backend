"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const clientes_schema_1 = require("../models/clientes.schema");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield clientes_schema_1.UserProfile.findOne({ correoElectronico: req.body.usuario, contrasena: req.body.contrasena });
    if (profile) {
        res.send({ exito: true, mensaje: 'Inicio de sesión exitoso', usuario: profile });
    }
    else {
        res.send({ status: false, message: 'Usuario o contraseña incorrectos' });
    }
    res.end();
});
exports.login = login;
