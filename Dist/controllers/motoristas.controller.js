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
exports.addMotorista = exports.login = exports.cargarMotoristas = void 0;
const motoristas_schema_1 = require("../models/motoristas.schema");
const cargarMotoristas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const motoristas = yield motoristas_schema_1.Motoristas.find();
    res.send(motoristas);
    res.end();
});
exports.cargarMotoristas = cargarMotoristas;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const motorista = yield motoristas_schema_1.Motoristas.findOne({ correo: req.body.usuario, contrasena: req.body.contrasena });
    if (motorista) {
        res.send({ exito: true, mensaje: 'Inicio de sesión exitoso', motorista: motorista });
    }
    else {
        res.send({ status: false, message: 'Usuario o contraseña incorrectos' });
    }
    res.end();
});
exports.login = login;
const addMotorista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoMotorista = new motoristas_schema_1.Motoristas({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        fotoPerfil: req.body.fotoPerfil,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        placa: req.body.placa,
        tipoVehiculo: req.body.tipoVehiculo,
        ordenes: []
    });
    yield nuevoMotorista.save();
    res.send({ status: true, message: 'Motorista agregado correctamente', motorista: { nombre: req.body.nombre, apellido: req.body.apellido, correo: req.body.correo, placa: req.body.placa, tipoVehiculo: req.body.tipoVehiculo }
    });
    res.end();
});
exports.addMotorista = addMotorista;
