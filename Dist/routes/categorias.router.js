"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categorias_controller_1 = require("../controllers/categorias.controller");
const router = express_1.default.Router();
// (GET) http://localhost:3000/categorias
router.get('/', categorias_controller_1.cargarCategorias);
router.post('/', categorias_controller_1.addCategoria);
router.get('/:id', categorias_controller_1.cargarCategoria);
router.post('/:id', categorias_controller_1.addEmpresa);
router.get('/:id/empresas', categorias_controller_1.cargarEmpresasCategoria);
router.get('/:id/empresas/:idEmpresa', categorias_controller_1.cargarEmpresa);
router.get('/:id/empresas/:idEmpresa/productos', categorias_controller_1.cargarProductosEmpresa);
router.post('/:id/empresas/:idEmpresa/productos', categorias_controller_1.addProducto);
exports.default = router;
