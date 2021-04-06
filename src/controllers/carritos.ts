import { Request, Response } from "express";

export const listarCarritos = (req: Request, res: Response) => {
  res.json({
    msg: "Listar Carritos",
  });
};

export const listarCarrito = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "Listar Carrito",
    id,
  });
};

export const agregarCarrito = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: "Agregar Carrito",
    body,
  });
};

export const actualizarCarrito = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: "Actualizar Carrito",
    body,
    id,
  });
};

export const borrarCarrito = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: "Borrar Carrito",
    id,
  });
};
