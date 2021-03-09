import express, { Application } from 'express'
import productosRoutes from '../routes/productos'
import carritosRoutes from '../routes/carritos'
import cors from 'cors'


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        productos : '/productos',
        carrito: '/carrito'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'

        //llamar middlewares
        this.middlewares()

        //definir rutas
        this.routes()
    }

    middlewares() {

        //cors
        this.app.use( cors() )

        //lectura del body
        this.app.use ( express.json() )

        //carpeta publica
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.apiPaths.productos, productosRoutes)
        this.app.use(this.apiPaths.carrito, carritosRoutes)
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Running on port ' + this.port);
            
        } )
    }

}

export default Server;