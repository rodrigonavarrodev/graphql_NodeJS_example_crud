"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarCarrito = exports.actualizarCarrito = exports.agregarCarrito = exports.listarCarrito = exports.listarCarritos = void 0;
const listarCarritos = (req, res) => {
    res.json({
        msg: 'Listar Carritos',
    });
};
exports.listarCarritos = listarCarritos;
const listarCarrito = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Listar Carrito',
        id
    });
};
exports.listarCarrito = listarCarrito;
const agregarCarrito = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Agregar Carrito',
        body
    });
};
exports.agregarCarrito = agregarCarrito;
const actualizarCarrito = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Actualizar Carrito',
        body,
        id
    });
};
exports.actualizarCarrito = actualizarCarrito;
const borrarCarrito = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Borrar Carrito',
        id
    });
};
exports.borrarCarrito = borrarCarrito;
//# sourceMappingURL=carritos.js.map