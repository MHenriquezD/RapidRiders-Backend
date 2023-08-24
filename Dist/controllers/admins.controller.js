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
exports.login = exports.obtenerAdministrador = exports.obtenerAdministradores = void 0;
const admins_schema_1 = require("../models/admins.schema");
const obtenerAdministradores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const administradores = yield admins_schema_1.Administrador.find();
    res.send(administradores);
    res.end();
});
exports.obtenerAdministradores = obtenerAdministradores;
const obtenerAdministrador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const administrador = yield admins_schema_1.Administrador.findById(req.params.id);
    if (administrador)
        res.send({ status: true, admin: administrador });
    else
        res.send({ status: false, message: "Administrador no existe" });
    res.end();
});
exports.obtenerAdministrador = obtenerAdministrador;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const administrador = yield admins_schema_1.Administrador.findOne({ correo: req.body.usuario, password: req.body.contrasena }, { password: false });
    if (administrador)
        res.send({ status: true, usuario: administrador });
});
exports.login = login;
