"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritos_1 = require("../controllers/carritos");
const router = express_1.Router();
router.get('/', carritos_1.listarCarritos);
router.get('/:id', carritos_1.listarCarrito);
router.post('/', carritos_1.agregarCarrito);
router.put('/:id', carritos_1.actualizarCarrito);
router.delete('/:id', carritos_1.borrarCarrito);
exports.default = router;
//# sourceMappingURL=carritos.js.map