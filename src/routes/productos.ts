import { Router } from 'express'
import { actualizarProducto, agregarProducto, borrarProducto, listarProducto, listarProductosConFiltros, listarProductos } from '../controllers/productos';

const router = Router();


router.get('/', listarProductos);
router.get('/:id', listarProducto);
router.post('/', agregarProducto);
router.put('/:id', actualizarProducto);
router.delete('/:id', borrarProducto);
router.post('/filtro', listarProductosConFiltros);


export default router;