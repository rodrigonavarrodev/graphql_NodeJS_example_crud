"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarProducto = exports.actualizarProducto = exports.agregarProducto = exports.listarProducto = exports.listarProductos = void 0;
let arrayProductos = [];
const listarProductos = (req, res) => {
    res.json({
        msg: 'getProductos',
        arrayProductos
    });
};
exports.listarProductos = listarProductos;
const listarProducto = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getProducto',
        id
    });
};
exports.listarProducto = listarProducto;
const agregarProducto = (req, res) => {
    const { body } = req;
    arrayProductos.push(body);
    res.json({
        msg: 'Agregar Producto',
        body
    });
};
exports.agregarProducto = agregarProducto;
const actualizarProducto = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Actualizar Producto',
        body,
        id
    });
};
exports.actualizarProducto = actualizarProducto;
const borrarProducto = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Borrar Producto',
        id
    });
};
exports.borrarProducto = borrarProducto;
//# sourceMappingURL=productos.js.map