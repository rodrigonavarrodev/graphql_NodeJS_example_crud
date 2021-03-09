import { Request, Response } from "express";

let arrayProductos:any = [ ]

export const listarProductos = (req: Request, res: Response) => {

    res.json ({
        msg: 'getProductos',
        arrayProductos
    })
}

export const listarProducto = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json ({
        msg: 'getProducto',
        id
    })
}

export const agregarProducto = (req: Request, res: Response) => {

    const { body } = req;
    arrayProductos.push(body)
    res.json ({
        msg: 'Agregar Producto',
        body
    })
}


export const actualizarProducto = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json ({
        msg: 'Actualizar Producto',
        body,
        id
    })
}


export const borrarProducto = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json ({
        msg: 'Borrar Producto',
        id
    })
} 