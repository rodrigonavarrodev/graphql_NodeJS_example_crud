import dotenv from 'dotenv';
import Server from './server';
import database from './database';

//configurar dotenv
dotenv.config();

database()
const server = new Server();

server.listen(); 