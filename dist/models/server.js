"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productos_1 = __importDefault(require("../routes/productos"));
const carritos_1 = __importDefault(require("../routes/carritos"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            productos: '/productos',
            carrito: '/carrito'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        //llamar middlewares
        this.middlewares();
        //definir rutas
        this.routes();
    }
    middlewares() {
        //cors
        this.app.use(cors_1.default());
        //lectura del body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.productos, productos_1.default);
        this.app.use(this.apiPaths.carrito, carritos_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Running on port ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map