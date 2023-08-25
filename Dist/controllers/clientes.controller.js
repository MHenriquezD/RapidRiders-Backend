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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerOrdenes = exports.agregarCliente = exports.agregarOrden = exports.obtenerUsuario = exports.cargarCLientes = exports.login = void 0;
const clientes_schema_1 = require("../models/clientes.schema");
const mongoose_1 = __importDefault(require("mongoose"));
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
const cargarCLientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profiles = yield clientes_schema_1.UserProfile.find();
    res.send(profiles);
    res.end();
});
exports.cargarCLientes = cargarCLientes;
const obtenerUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield clientes_schema_1.UserProfile.findById(req.params.id);
    if (profile) {
        res.send({ status: true, profile });
    }
    else
        res.send({ status: false, message: 'Perfil no existe' });
    res.end();
});
exports.obtenerUsuario = obtenerUsuario;
const agregarOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resultado = yield clientes_schema_1.UserProfile.updateOne({ _id: req.params.id }, {
        $push: {
            ordenes: {
                idOrden: new mongoose_1.default.Types.ObjectId(req.body.idOrden),
                total: req.body.total,
                entregado: false
            }
        }
    });
    res.send(resultado);
    res.end();
});
exports.agregarOrden = agregarOrden;
const agregarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = new clientes_schema_1.UserProfile({
        //id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        fotoPerfil: req.body.fotoPerfil,
        telefono: req.body.telefono,
        correoElectronico: req.body.correoElectronico,
        contrasena: req.body.contrasena,
        numeroTarjeta: req.body.numeroTarjeta,
        expira: req.body.expira,
        cvv: req.body.cvv,
        ordenes: []
    });
    const resultado = yield profile.save();
    res.send(resultado);
    res.end();
});
exports.agregarCliente = agregarCliente;
const obtenerOrdenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield clientes_schema_1.UserProfile.aggregate([
        {
            $lookup: {
                from: 'pedidos',
                localField: 'ordenes.idOrden',
                foreignField: '_id',
                as: 'ordenesClientes',
            },
        },
    ]);
    res.send(profile);
    res.end();
});
exports.obtenerOrdenes = obtenerOrdenes;
