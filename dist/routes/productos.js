"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
const router = express_1.Router();
router.get('/', productos_1.listarProductos);
router.get('/:id', productos_1.listarProducto);
router.post('/', productos_1.agregarProducto);
router.put('/:id', productos_1.actualizarProducto);
router.delete('/:id', productos_1.borrarProducto);
exports.default = router;
//# sourceMappingURL=productos.js.map