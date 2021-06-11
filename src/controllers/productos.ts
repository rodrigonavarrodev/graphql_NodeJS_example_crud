import { Request, Response } from "express";
import Producto from '../models/producto'

export const listarProductos = async (req: Request, res: Response) => {
    const productos = await Producto.find();
    return productos
}

export const listarProducto = async (args: any) => {
    
    const id = args.id;
    const producto = await Producto.findById(id)

    return producto
}

export const agregarProducto = async (args: any) => {

    
    const { nombre, descripcion, codigo, foto, precio, stock } = args.Producto;
    const nuevoProducto = new Producto({ nombre, descripcion, codigo, foto, precio, stock })
    await nuevoProducto.save()
    return nuevoProducto
}


export const actualizarProducto = async (args: any) => {

    const id = args.id
    const { nombre, descripcion, codigo, foto, precio, stock } = args.producto;

    await Producto.findByIdAndUpdate(id, {nombre, descripcion, codigo, foto, precio, stock})
    const producto = await Producto.findById(id)

    return producto
}


export const borrarProducto = async (args: any) => {

    const id = args.id;
    const producto = await Producto.findByIdAndDelete(id)
    return producto
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