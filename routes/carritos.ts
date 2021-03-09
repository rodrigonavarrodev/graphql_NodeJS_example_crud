import { Router } from 'express'
import { actualizarCarrito, agregarCarrito, borrarCarrito, listarCarrito, listarCarritos } from '../controllers/carritos';

const router = Router();


router.get('/', listarCarritos);
router.get('/:id', listarCarrito);
router.post('/', agregarCarrito);
router.put('/:id', actualizarCarrito);
router.delete('/:id', borrarCarrito);


export default router;