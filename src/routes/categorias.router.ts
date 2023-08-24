import express from 'express';
import { addCategoria, addEmpresa, addProducto, cargarCategoria, cargarCategorias, cargarEmpresa, cargarEmpresasCategoria, cargarProductosEmpresa } from '../controllers/categorias.controller';
const router = express.Router();

// (GET) http://localhost:3000/categorias
router.get('/', cargarCategorias);
router.post('/', addCategoria);
router.get('/:id', cargarCategoria);
router.post('/:id', addEmpresa);
router.get('/:id/empresas', cargarEmpresasCategoria);
router.get('/:id/empresas/:idEmpresa', cargarEmpresa);
router.get('/:id/empresas/:idEmpresa/productos', cargarProductosEmpresa);
router.post('/:id/empresas/:idEmpresa/productos', addProducto);


export default router;
