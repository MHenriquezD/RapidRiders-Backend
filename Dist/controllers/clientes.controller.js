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
exports.agregarOrden = exports.obtenerUsuario = exports.cargarCLientes = void 0;
const clientes_schema_1 = require("../models/clientes.schema");
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
                idOrden: req.body.idOrden,
                nombreProducto: req.body.nombreProducto,
                precio: req.body.precio,
                entregado: false
            }
        }
    });
    res.send(resultado);
    res.end();
});
exports.agregarOrden = agregarOrden;
