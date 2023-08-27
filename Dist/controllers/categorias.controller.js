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
exports.eliminarCategoria = exports.addProducto = exports.addEmpresa = exports.cargarProductosEmpresa = exports.cargarEmpresa = exports.cargarEmpresasCategoria = exports.cargarCategoria = exports.addCategoria = exports.cargarCategorias = void 0;
const categorias_schema_1 = require("../models/categorias.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const cargarCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categorias = yield categorias_schema_1.Categorias.find();
    res.send(categorias);
    res.end();
});
exports.cargarCategorias = cargarCategorias;
const addCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevaCategoria = new categorias_schema_1.Categorias({
        nombreCategoria: req.body.nombreCategoria,
        icono: req.body.icono,
        productos: []
    });
    yield nuevaCategoria.save();
    res.send({ status: true, message: 'Categoria agregada correctamente' });
    res.end();
});
exports.addCategoria = addCategoria;
const cargarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield categorias_schema_1.Categorias.findById(req.params.id);
    res.send(categoria);
    res.end();
});
exports.cargarCategoria = cargarCategoria;
const cargarEmpresasCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield categorias_schema_1.Categorias.findById(req.params.id);
    if (categoria) {
        res.send({ status: true, empresas: categoria === null || categoria === void 0 ? void 0 : categoria.empresas });
    }
    else {
        res.send({ status: false, message: 'Categoria no existe' });
    }
    res.end();
});
exports.cargarEmpresasCategoria = cargarEmpresasCategoria;
const cargarEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const categoria = yield categorias_schema_1.Categorias.findById(req.params.id);
    if (categoria) {
        const empresa = (_a = categoria.empresas) === null || _a === void 0 ? void 0 : _a.find(empresa => { var _a; return ((_a = empresa.id) === null || _a === void 0 ? void 0 : _a.toString()) == req.params.idEmpresa; });
        if (empresa) {
            res.send({ status: true, empresa: empresa });
        }
        else {
            res.send({ status: false, message: 'Empresa no existe' });
        }
    }
    else {
        res.send({ status: false, message: 'Categoria no existe' });
    }
    res.end();
});
exports.cargarEmpresa = cargarEmpresa;
// export const cargarEmpresa = (req: Request, res: Response) => {
//     Categorias.find({ _id: req.params.id }).then(result => {
//         const empresa = result[0].empresas?.find(empresa => empresa.id == req.params.idEmpresa);
//         res.send({ empresa: empresa });
//     }).catch(err => {
//         res.send(err);
//     });
// }
const cargarProductosEmpresa = (req, res) => {
    categorias_schema_1.Categorias.find({ _id: req.params.id }).then(result => {
        var _a;
        const empresa = (_a = result[0].empresas) === null || _a === void 0 ? void 0 : _a.find(empresa => { var _a; return ((_a = empresa.id) === null || _a === void 0 ? void 0 : _a.toString()) == req.params.idEmpresa; });
        res.send({
            empresa: empresa === null || empresa === void 0 ? void 0 : empresa.nombreEmpresa,
            logo: empresa === null || empresa === void 0 ? void 0 : empresa.logo,
            imagen: empresa === null || empresa === void 0 ? void 0 : empresa.imagen,
            productos: empresa === null || empresa === void 0 ? void 0 : empresa.productos
        });
    }).catch(err => {
        res.send(err);
    });
};
exports.cargarProductosEmpresa = cargarProductosEmpresa;
const addEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const empresa = {
        _id: new mongoose_1.default.Types.ObjectId(req.body.id),
        nombreEmpresa: req.body.nombreEmpresa,
        logo: req.body.logo,
        imagen: req.body.imagen,
        descripcion: req.body.descripcion,
        ubicacion: req.body.ubicacion,
        calificacion: req.body.calificacion,
        productos: []
    };
    const categoria = yield categorias_schema_1.Categorias.findById(req.params.id);
    if (categoria) {
        (_b = categoria.empresas) === null || _b === void 0 ? void 0 : _b.push(empresa);
        yield categoria.save();
        res.send({ status: true, message: 'Empresa agregada correctamente', empresa: empresa });
    }
    else {
        res.send({ status: false, message: 'Categoria no existe' });
    }
    res.end();
});
exports.addEmpresa = addEmpresa;
const addProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const producto = {
        nombreProducto: req.body.nombreProducto,
        descripcion: req.body.descripcion,
        imagenProducto: req.body.imagenProducto,
        precio: req.body.precio
    };
    const categoria = yield categorias_schema_1.Categorias.findById(req.params.id);
    if (categoria) {
        const empresa = (_c = categoria.empresas) === null || _c === void 0 ? void 0 : _c.find(empresa => { var _a; return ((_a = empresa.id) === null || _a === void 0 ? void 0 : _a.toString()) == req.params.idEmpresa; });
        if (empresa) {
            (_d = empresa.productos) === null || _d === void 0 ? void 0 : _d.push(producto);
            yield (categoria === null || categoria === void 0 ? void 0 : categoria.save());
            res.send({ status: true, message: 'Producto agregado correctamente', producto: producto });
        }
        else {
            res.send({ status: false, message: 'Empresa no existe' });
        }
    }
    else {
        res.send({ status: false, message: 'Categoria no existe' });
    }
    res.end();
});
exports.addProducto = addProducto;
const eliminarCategoria = (req, res) => {
    categorias_schema_1.Categorias.deleteOne({ _id: req.params.id })
        .then((removeResult) => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    });
};
exports.eliminarCategoria = eliminarCategoria;
