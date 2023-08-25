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
exports.crearPedido = exports.cargarProductosPedidos = exports.cargarPedidos = void 0;
const pedido_schema_1 = require("../models/pedido.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const cargarPedidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pedidos = yield pedido_schema_1.Pedidos.find();
    res.send(pedidos);
    res.end();
});
exports.cargarPedidos = cargarPedidos;
const cargarProductosPedidos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pedidos = yield pedido_schema_1.Pedidos.findById(req.params.id);
    if (pedidos)
        res.send({ status: true, pedidos: pedidos.productos });
    else
        res.send({ status: false, message: 'No se encontró el pedido' });
    res.end();
});
exports.cargarProductosPedidos = cargarProductosPedidos;
const crearPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pedido = new pedido_schema_1.Pedidos({
        _id: new mongoose_1.default.Types.ObjectId(req.body._id),
        _idCliente: new mongoose_1.default.Types.ObjectId(req.body._idCliente),
        nombreCliente: req.body.nombreCliente,
        celularCliente: req.body.celularCliente,
        ubicacion: req.body.ubicacion,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        productos: req.body.productos,
        comisionGestion: req.body.comisionGestion,
        comisionServicio: req.body.comisionServicio,
        totalPrice: req.body.totalPrice,
        estado: req.body.estado,
        fechaSolicitud: req.body.fechaSolicitud,
        fechaEntrega: req.body.fechaEntrega,
        horaEntrega: req.body.horaEntrega
    });
    const resultado = yield pedido.save();
    res.send(resultado);
    res.end();
});
exports.crearPedido = crearPedido;
