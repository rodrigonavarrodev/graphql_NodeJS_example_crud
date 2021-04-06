import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/ecommerce_coderhouse', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database Connected');
        
    } catch (err) {
        console.log(err);
        
    }
}

export default connect;