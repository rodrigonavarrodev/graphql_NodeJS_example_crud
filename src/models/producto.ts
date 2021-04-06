import { Schema, model } from 'mongoose';

const ProductoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    }, 
    codigo: {
        type: String,
        required: true,
    }, 
    foto: {
        type: String,
        required: true,  
    }, 
    precio: {
        type: Number,
        required: true,
    }, 
    stock: {
        type: Number,
        required: true,
    }
}, { timestamps: true });

export default model('Producto', ProductoSchema)
