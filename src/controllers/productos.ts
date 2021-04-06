import { Request, Response } from "express";
import Producto from '../models/producto'

export const listarProductos = async (req: Request, res: Response) => {
    const productos = await Producto.find();
    res.json ({
        productos
    })
}

export const listarProducto = async (req: Request, res: Response) => {

    const { id } = req.params;
    const producto = await Producto.findById(id)

    res.json ({
        producto
    })
}

export const agregarProducto = async (req: Request, res: Response) => {

    const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
    const nuevoProducto = new Producto({ nombre, descripcion, codigo, foto, precio, stock })
    await nuevoProducto.save()
    res.json ({
        nuevoProducto
    })
}


export const actualizarProducto = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { nombre, descripcion, codigo, foto, precio, stock } = req.body;

    await Producto.findByIdAndUpdate(id, {nombre, descripcion, codigo, foto, precio, stock})
    const producto = await Producto.findById(id)

    res.json ({
        producto
    })
}


export const borrarProducto = async (req: Request, res: Response) => {

    const { id } = req.params;
    const producto = await Producto.findByIdAndDelete(id)

    res.json ({
        producto
    })
} 


export const listarProductosConFiltros = async (req: Request, res: Response) => {

    const desde = req.body.desde || 0
    const hasta = req.body.hasta || 100000000
    const nombre = req.body.nombre
   
    //filtro por nombre
    //filtro por rango de precio, desde - hasta
    const producto = await Producto.find()  
        .where(
            { $and: [ { precio: { $lt: hasta }}, { precio: { $gt: desde }}, { nombre: { $in: nombre }} ] })
       
    if(producto.length === 0) {
        res.json({ mensaje: 'No hay productos para los filtros aplicados'})
    } else {
        res.json ({ producto }) 
    }
}