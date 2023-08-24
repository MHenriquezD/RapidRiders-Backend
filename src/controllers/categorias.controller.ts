import { Request, Response } from 'express';
import { Categorias } from '../models/categorias.schema';
//import { EmpresasSchema } from '../models/categorias.schema';
//import { Productos } from '../models/productos.schema';
import mongoose from 'mongoose';

export const cargarCategorias = async (req: Request, res: Response) => {
    const categorias = await Categorias.find();
    res.send(categorias);
    res.end();
}

export const addCategoria = async (req: Request, res: Response) => {
    const nuevaCategoria = new Categorias({
        nombreCategoria: req.body.nombreCategoria,
        icono: req.body.icono,
        productos: []
    });
    await nuevaCategoria.save();
    res.send({ status: true, message: 'Categoria agregada correctamente' });
    res.end();
}

export const cargarCategoria = async (req: Request, res: Response) => {
    const categoria = await Categorias.findById(req.params.id);
    res.send(categoria);
    res.end();
}

export const cargarEmpresasCategoria = async (req: Request, res: Response) => {
    const categoria = await Categorias.findById(req.params.id);
    if (categoria) {
        res.send({ status: true, empresas: categoria?.empresas });
    } else {
        res.send({ status: false, message: 'Categoria no existe' });
    }
    res.end();
}


export const cargarEmpresa = async (req: Request, res: Response) => {
    const categoria = await Categorias.findById(req.params.id);
    if (categoria) {
        const empresa = categoria.empresas?.find(empresa => empresa.id?.toString() == req.params.idEmpresa);
        if (empresa) {
            res.send({ status: true, empresa: empresa });
        } else {
            res.send({ status: false, message: 'Empresa no existe' });
        }
    } else {
        res.send({ status: false, message: 'Categoria no existe' });
    }
    res.end();
}

// export const cargarEmpresa = (req: Request, res: Response) => {
//     Categorias.find({ _id: req.params.id }).then(result => {
//         const empresa = result[0].empresas?.find(empresa => empresa.id == req.params.idEmpresa);

//         res.send({ empresa: empresa });
//     }).catch(err => {
//         res.send(err);
//     });
// }

export const cargarProductosEmpresa = (req: Request, res: Response) => {
    Categorias.find({ _id: req.params.id }).then(result => {
        const empresa = result[0].empresas?.find(empresa => empresa.id?.toString() == req.params.idEmpresa);

        res.send({
            empresa: empresa?.nombreEmpresa,
            logo: empresa?.logo,
            imagen: empresa?.imagen,
            productos: empresa?.productos
        });
    }).catch(err => {
        res.send(err);
    });
}


export const addEmpresa = async (req: Request, res: Response) => {
    const empresa = {
        _id: new mongoose.Types.ObjectId(req.body.id),
        nombreEmpresa: req.body.nombreEmpresa,
        logo: req.body.logo,
        imagen: req.body.imagen,
        descripcion: req.body.descripcion,
        ubicacion: req.body.ubicacion,
        calificacion: req.body.calificacion,
        productos: []
    }
    const categoria = await Categorias.findById(req.params.id);
    if (categoria) {
        categoria.empresas?.push(empresa);
        await categoria.save();
        res.send({ status: true, message: 'Empresa agregada correctamente', empresa: empresa });
    } else {
        res.send({ status: false, message: 'Categoria no existe' });
    }
    res.end();
}


export const addProducto = async (req: Request, res: Response) => {
    const producto = {
        nombreProducto: req.body.nombreProducto,
        descripcion: req.body.descripcion,
        imagenProducto: req.body.imagenProducto,
        precio: req.body.precio
    }
    const categoria = await Categorias.findById(req.params.id);
    if (categoria) {
        const empresa = categoria.empresas?.find(empresa => empresa.id?.toString() == req.params.idEmpresa);
        if (empresa) {
            empresa.productos?.push(producto);
            await categoria?.save();
            res.send({ status: true, message: 'Producto agregado correctamente', producto: producto });
        } else {
            res.send({ status: false, message: 'Empresa no existe' });
        }
    } else {
        res.send({ status: false, message: 'Categoria no existe' });
    }
    res.end();
}