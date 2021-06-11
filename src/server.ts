import express, { Application } from 'express'
import productosRoutes from './routes/productos'
import carritosRoutes from './routes/carritos'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { Schema } from 'mongoose'


import { actualizarProducto, agregarProducto, borrarProducto, listarProducto, listarProductosConFiltros, listarProductos } from './controllers/productos';

//schema graphql
const schema = buildSchema(`
type Query {
    productos: [ Producto ]
    producto(id:ID): Producto 
},
type Mutation {
    crearProducto(Producto: ProductoInput): Producto
    deleteProducto(id:ID): Producto
    updateProducto(id: ID, producto: ProductoInput): Producto
}
type Producto {
    _id: ID,
    nombre: String
    descripcion: String,
    codigo: String,
    foto: String,
    precio: Int,
    stock: Int
},
input ProductoInput {
    nombre: String
    descripcion: String,
    codigo: String,
    foto: String,
    precio: Int,
    stock: Int
}
`)

const root = {
    productos: listarProductos,
    producto: listarProducto,
    crearProducto: agregarProducto,
    deleteProducto: borrarProducto,
    updateProducto: actualizarProducto
}

const obj = {
    schema: schema,
    rootValue: root,
    graphiql: true
}

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        productos : '/productos',
        carrito: '/carrito',
        graphql: '/graphql'
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
        this.app.use(this.apiPaths.graphql, graphqlHTTP(obj))
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Running on port ' + this.port);
            
        } )
    }

}

export default Server;